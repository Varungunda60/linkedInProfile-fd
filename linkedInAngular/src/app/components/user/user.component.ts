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
  Tuser: User = new User('', '', '', '', '', '', '');

  constructor(private userService: UserService) {
  }

  // tslint:disable-next-line:typedef
  post() {
    // console.log(this.user);
    this.Tuser.firstName = 'hgnsalksvbjh';
    this.Tuser.lastName = 'jhfka';
    this.Tuser.backgroundUrl = 'khfask';
    this.Tuser.name = 'kfphhjhjfjgh';
    this.Tuser.tagLine = 'khfsjkhg';
    this.Tuser.password = 'hfsagihga';
    this.Tuser.url = 'ghhhgjhksjk';
    console.log(this.Tuser);
    this.userService.create(this.Tuser).subscribe((data) => {
        console.log(data);
      },
      error => {
        console.log('in error');
        console.log(error);
      });
    this.userService.get().subscribe((data) => {
        console.log(data);
        this.users = data;
        // console.log(this.users);
      },
      error => {
        // console.log('in error');
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


