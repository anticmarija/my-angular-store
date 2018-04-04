import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import * as AuthActions from "../store/auth.actions"
import { Store } from '@ngrx/store';
import * as fromApp from "../../store/app.reducers";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;

  constructor(private authService: AuthService, private router: Router, private store: Store<fromApp.AppState>) { }

  ngOnInit() {
  }

  onLogin(form: NgForm) {
    let username = form.value.username;
    let password = form.value.password;

    this.store.dispatch(new AuthActions.TryLogin({username, password}));      
  }
}
