import {Component, OnInit} from '@angular/core';
import {User} from '../../componentClassses/user';
import {UserService} from '../../service/user.service';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user = new User('', '', '', '', '', '', '');

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.userService.setUrl('http://localhost:8080/user');
  }

  onSubmit( f: NgForm ): void{
    this.user.name = this.user.firstName + this.user.lastName;
    this.userService.create(this.user).subscribe();
    this.router.navigate(['/user']);
  }
  addUser(): void {
    this.user.name = this.user.firstName + this.user.lastName;
    this.userService.create(this.user).subscribe();
  }
}
