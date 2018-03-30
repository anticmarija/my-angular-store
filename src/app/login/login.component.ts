import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onLogin(form: NgForm) {
    let username = form.value.username;
    let password = form.value.password;

    this.authService.loginUser(username, password)
    .subscribe((data : any)=> {
      localStorage.setItem('token', data.data.token);
    })
      
  }
}
