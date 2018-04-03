import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onLogin(form: NgForm) {
    let username = form.value.username;
    let password = form.value.password;

    this.authService.loginUser(username, password)
    // .subscribe((data : any)=> {
    //   localStorage.setItem('token', data.data.token);
    //   this.router.navigate([""]);
    // })
      
  }
}
