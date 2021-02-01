import {Component, OnInit} from '@angular/core';
import {SkillsService} from '../../service/skills.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  id: number;
  data: any[];
  constructor(private skillsService: SkillsService, private activeRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params.id;
    this.skillsService.setUrl('http://localhost:8080/user/Skills/' + this.id);
    this.skillsService.get().subscribe(data => {
      this.data = data;
    });
  }

}
