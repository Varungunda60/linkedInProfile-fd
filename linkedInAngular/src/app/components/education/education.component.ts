import { Component, OnInit } from '@angular/core';
import {EducationService} from '../../service/education.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  id: number;
  data: any;
  constructor(private educationService: EducationService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params.id;
    this.educationService.setUrl('http://localhost:8080/user/education/' + this.id);
    this.educationService.get().subscribe(
      (data) => {
        this.data = data;
      });
  }

}
