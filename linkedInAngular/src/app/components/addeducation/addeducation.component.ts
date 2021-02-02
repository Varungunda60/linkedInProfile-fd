import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Education} from '../../componentClassses/education';
import {EducationService} from '../../service/education.service';

@Component({
  selector: 'app-addeducation',
  templateUrl: './addeducation.component.html',
  styleUrls: ['./addeducation.component.css']
})
export class AddeducationComponent implements OnInit {

  education = new Education(' ', '', '', '', '', 0);
  id: number;
  educationData = [];


  constructor(private educationService: EducationService, private activeRoute: ActivatedRoute, private router: Router) {
  }


  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(params => {
      const temp = params.get('id');
      this.id = +temp;
    });
    this.educationService.setUrl('http://localhost:8080/user/education/' + this.id);
    this.educationService.get().subscribe(data => this.educationData = data);
  }

  addMoreEducation(): void {
    this.educationService.create(this.education).subscribe();
    this.ngOnInit();
  }

  addEducation(): void {
    this.educationService.create(this.education).subscribe(
      (data) => console.log(data)
    );
    this.ngOnInit();
    this.router.navigate(['/user', this.id]);
  }

}
