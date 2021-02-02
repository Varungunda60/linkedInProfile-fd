import {Component, OnInit, ViewChild} from '@angular/core';
import {SkillsService} from '../../service/skills.service';
import {ActivatedRoute} from '@angular/router';
import {Skills} from '../../componentClassses/skills';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  @ViewChild('f', { static: false }) signupForm: NgForm | undefined ;
  id: number;
  skills: [];
  edit = true;
  add = false;
  skill: Skills = new Skills('');
  constructor(private skillsService: SkillsService, private activeRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params.id;
    this.skillsService.setUrl('http://localhost:8080/user/Skills/' + this.id);
    this.skillsService.get().subscribe(data => {
      this.skills = data;
    });
  }
  // tslint:disable-next-line:typedef
  addSkills(){
    this.skill = this.signupForm.value;
    this.skillsService.create(this.skill).subscribe(data => console.log(data));
  }
}
