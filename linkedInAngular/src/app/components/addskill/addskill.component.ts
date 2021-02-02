import {Component, OnInit} from '@angular/core';
import {ActivatedRoute,  Router} from '@angular/router';
import {Skills} from '../../componentClassses/skills';
import {SkillsService} from '../../service/skills.service';

@Component({
  selector: 'app-addskill',
  templateUrl: './addskill.component.html',
  styleUrls: ['./addskill.component.css']
})
export class AddskillComponent implements OnInit {

  skills = new Skills(' ');
  id: number;
  skillsData = [];

  constructor(private skillsService: SkillsService, private activeRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(params => {
      const temp = params.get('id');
      this.id = +temp;
    });
    this.skillsService.setUrl('http://localhost:8080/user/Skills/' + this.id);
    this.skillsService.get().subscribe(data => this.skillsData = data);
  }

  addMoreSkills(): void {
    this.skillsService.create(this.skills).subscribe();
    this.ngOnInit();
  }
  addSkills(): void{
    this.skillsService.create(this.skills).subscribe(
      (data) => console.log(data)
    );
    this.ngOnInit();
    this.router.navigate(['/user', this.id]);
  }

}
