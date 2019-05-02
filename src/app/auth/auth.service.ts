import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { Router } from "@angular/router";
import * as fromApp from "../store/app.reducers";
import * as AuthActions from "./store/auth.actions";
import { Store } from "@ngrx/store";

@Injectable()
export class AuthService {

    constructor(private httpClient: HttpClient, private router: Router, private store: Store<fromApp.AppState>) { }

    registerUser(authData: { username: string, email: string, password: string, confirmPassword: string }) {
        return this.httpClient.post('http://localhost:8000/store/users',
            { username: authData.username, email: authData.email, password: authData.password }) //da ne menjam na back-u!!!!!!!!!!!

    }

    loginUser(authData: { username: string, password: string }) {
        return this.httpClient.post('http://localhost:8000/store/auth/authenticateuser', { username: authData.username, password: authData.password });
    }

}