import { Effect } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { Actions } from "@ngrx/effects";
import * as AuthActions from "./auth.actions";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Injectable()
export class AuthEffects {
    @Effect()
    authRegister = this.actions$
        .ofType(AuthActions.TRY_REGISTER)
        .map((action: AuthActions.TryRegister) => {
            return action.payload;
        })
        .switchMap((authData: { username: string, email: string, password: string, confirmPassword: string }) => {
            return this.authService.registerUser(authData);
        })
        .switchMap((res: any) => {
            return [
                {
                    type: AuthActions.REGISTER,
                    payload: res.data.message
                }
            ]
        });

    @Effect()
    authLogin = this.actions$
        .ofType(AuthActions.TRY_LOGIN)
        .map((action: AuthActions.TryLogin) => {
            return action.payload;
        })
        .switchMap((authData: { username: string, password: string }) => {
            return this.authService.loginUser(authData);
        })
        .switchMap((res: any) => {
            this.router.navigate(['/']);
            return [
                {
                    type: AuthActions.LOGIN,
                },
                {
                    type: AuthActions.SET_TOKEN,
                    payload: res.data.token
                }
            ]
        });

    @Effect({ dispatch: false })
    authLogout = this.actions$
        .ofType(AuthActions.LOGOUT)
        .do(() => {
            this.router.navigate(['/']);
        })

    constructor(private actions$: Actions, private authService: AuthService, private router: Router) { }
}