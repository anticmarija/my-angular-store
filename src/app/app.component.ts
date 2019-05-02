import { Component, OnInit } from '@angular/core';
import * as AuthActions from "./auth/store/auth.actions";
import { Store } from '@ngrx/store';
import * as fromApp from "./store/app.reducers";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    const token = localStorage.getItem('token');

    if (token) {
      this.store.dispatch(new AuthActions.Login(token));
    }
  }
}
