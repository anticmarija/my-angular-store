import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService) { }

  userCreated: boolean;
  msg: string;

  username:string;
  email:string;
  address:string;
  password:string;
  confirmPassword:string;

  ngOnInit() {
  }

  onRegister(form: NgForm) {
    let username = form.value.username;
    let email = form.value.email;
    let address = form.value.address;
    let password = form.value.password;
    let confirmPassword = form.value.confirmPassword;

    if(password !== confirmPassword) {
      this.userCreated= true;
      this.msg = "Passwords don't match";
      return;
    }
    this.authService.registerUser(username, email, address, password, confirmPassword)
      .subscribe((data: any) => {
        console.log(data);
        if(data.data.message === 'User successfully created.') {
          this.userCreated = true;
          this.msg = data.data.message;
          form.reset();
        }
      });
  }
}
