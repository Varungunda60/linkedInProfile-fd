import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Experience} from '../../componentClassses/experience';
import {Company} from '../../componentClassses/company';
import {ExperienceService} from '../../service/experience.service';

@Component({
  selector: 'app-addexperience',
  templateUrl: './addexperience.component.html',
  styleUrls: ['./addexperience.component.css']
})
export class AddexperienceComponent implements OnInit {

  experience = new Experience(' ', '', '', '', '', new Company('', '', ''));
  company = new Company('', '', '');
  id: number;
  experienceData = [];


  constructor(private experienceService: ExperienceService, private activeRoute: ActivatedRoute, private router: Router) {
  }


  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(params => {
      const temp = params.get('id');
      this.id = +temp;
    });
    this.experienceService.setUrl('http://localhost:8080/user/Experience/' + this.id);
    this.experienceService.get().subscribe(data => this.experienceData = data);
  }

  addMoreExperience(): void {
    // this.experience.company.name = this.company.name;
    // this.experience.company.industryType = this.company.industryType;
    // this.experience.company.location = this.company.location;
    this.experience.company = this.company;
    console.log(this.experience);
    this.experienceService.create(this.experience).subscribe();
    this.ngOnInit();
  }

  addExperience(): void {
    this.experienceService.create(this.experience).subscribe(
      (data) => console.log(data)
    );
    this.ngOnInit();
    this.router.navigate(['/user', this.id]);
  }

}
