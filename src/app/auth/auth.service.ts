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

    registerUser(authData: {username: string, email: string, address: string, password: string, confirmPassword: string}) {
        this.httpClient.post('http://localhost:8000/store/user',
            { username: authData.username, email: authData.email, password: authData.password, status: authData.address }) //da ne menjam na back-u!!!!!!!!!!!
            // .subscribe((res: any) => {
            //     this.store.dispatch(new AuthActions.Register(res.data.message));
            // });
    }

    loginUser(username: string, password: string) {
        this.httpClient.post('http://localhost:8000/store/auth/authenticateuser', { username: username, password: password })
            .subscribe((res: any) => {
                console.log(res);
                if (res.data.message === 'Token is succesfully created.') {
                    this.store.dispatch(new AuthActions.Login());
                    this.store.dispatch(new AuthActions.SetToken(res.data.token))
                    this.router.navigate(['']);
                }
            });;
    }

    logout() {
        this.store.dispatch(new AuthActions.Logout());
        this.router.navigate(['']);
    }
}