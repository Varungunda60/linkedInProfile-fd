import {Component, OnInit} from '@angular/core';
import {UserService} from '../../service/user.service';
import {User} from '../../componentClassses/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: [];
  user: User = new User('', '', '','','','','');
  constructor(private userService: UserService) {
  }

  // tslint:disable-next-line:typedef
  post() {
    console.log(this.user);
    this.user.firstName = 'hfjsa';
    this.user.lastName = 'jhfka';
    this.user.backgroundUrl = 'khfask';
    this.user.name = 'kffkh';
    this.user.tagLine = 'khfsjkhg';
    this.user.password = 'hfsagihga';
    this.user.url = 'ghhhgjhksjk';
    console.log(this.user);
    this.userService.create(this.user).subscribe((data) => {
      console.log(data);
    },
    error => {
      console.log('in error');
      console.log(error);
    });
  }

  ngOnInit(): void {
    this.userService.setUrl('http://localhost:8080/user');
    this.userService.get().subscribe((data) => {
        console.log(data);
        this.users = data;
        console.log(this.users);
      },
      error => {
        console.log('in error');
        console.log(error);
      });
  }

}

