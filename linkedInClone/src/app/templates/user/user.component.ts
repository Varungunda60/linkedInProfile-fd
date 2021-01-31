import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @ViewChild('f', { static: false }) signupForm: NgForm | undefined ;
  constructor() { }
  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  onSubmit() {
    // @ts-ignore
    console.log(this.signupForm.value);
    // @ts-ignore
    this.signupForm.reset();
    }


}
