import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProfileService} from '../../service/profile.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  id: number;
  user: any;

  constructor(private profileService: ProfileService, private activeRoute: ActivatedRoute, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params.id;
    this.profileService.setUrl('http://localhost:8080/user/' + this.id);
    this.profileService.get().subscribe(data => {
      this.user = data;
    });
  }

}
