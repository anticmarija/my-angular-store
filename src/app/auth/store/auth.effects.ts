import { Effect } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { Actions } from "@ngrx/effects";
import * as AuthActions from "./auth.actions";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { AuthService } from "../auth.service";

@Injectable()
export class AuthEffects {
    @Effect()
    authRegister = this.actions$
        .ofType(AuthActions.TRY_REGISTER)
        .map((action: AuthActions.TryRegister) => {
            return action.payload;
        })
        .switchMap((authData: {username: string, email: string, address: string, password: string, confirmPassword: string}) => {
            return this.authService.registerUser(authData);
        })
        .mergeMap((res:any) => {
            return {
                type:   
            };
        })

    constructor(private actions$: Actions, private authService: AuthService) { }
}