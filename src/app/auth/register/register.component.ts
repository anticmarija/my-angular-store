import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import * as fromApp from "../../store/app.reducers"
import * as fromAuth from "../store/auth.reducers"
import * as AuthActions from "../store/auth.actions"
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private store: Store<fromApp.AppState>) { }

  authState: Observable<fromAuth.State>;


  ngOnInit() {
    this.authState = this.store.select('auth');
  }

  onRegister(form: NgForm) {
    let username = form.value.username;
    let email = form.value.email;
    let address = form.value.addr;
    let password = form.value.password;
    let confirmPassword = form.value.confirmPassword;

    this.store.dispatch(new AuthActions.TryRegister( { username: username, email: email, status: address, password: password, confirmPassword: password }))
  }
}
