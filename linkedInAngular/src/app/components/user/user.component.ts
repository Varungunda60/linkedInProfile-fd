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


  ngOnInit(): void {
    this.userService.setUrl('http://localhost:8080/user');
    this.userService.get().subscribe((data) => {
        // console.log(data);
        this.users = data;
        console.log(this.users);
      },
      error => {
        // console.log('in error');
        console.log(error);
      });
  }

}


