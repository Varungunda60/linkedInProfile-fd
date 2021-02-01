import {Component, OnInit} from '@angular/core';
import {ExperienceService} from '../../service/experience.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  id: number;
  data: any;

  constructor(private experienceService: ExperienceService, private activeRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params.id;
    this.experienceService.setUrl('http://localhost:8080/user/Experience/' + this.id);
    this.experienceService.get().subscribe(
      (data) => {
        this.data = data;
      });
  }
}
