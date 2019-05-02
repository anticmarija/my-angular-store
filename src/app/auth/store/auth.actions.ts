import { Action } from "@ngrx/store";

export const TRY_REGISTER = "TRY_REGISTER";
export const TRY_LOGIN = "TRY_LOGIN";
export const REGISTER = 'REGISTER';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SET_TOKEN = 'SET_TOKEN';


export class TryRegister implements Action {
    readonly type = TRY_REGISTER;

    constructor(public payload: { username: string, email: string, password: string, confirmPassword: string }) { }
}

export class TryLogin implements Action {
    readonly type = TRY_LOGIN;

    constructor(public payload: { username: string, password: string }) { }
}

export class Register implements Action {
    readonly type = REGISTER;
    constructor(public payload: string) { }

}

export class Login implements Action {
    readonly type = LOGIN;
    constructor(public payload: string = null) { }

}

export class Logout implements Action {
    readonly type = LOGOUT;
    constructor(public payload: string = null) { }

}

export class SetToken implements Action {
    readonly type = SET_TOKEN;

    constructor(public payload: string = null) { }
}

export type AuthActions = Register | Login | Logout | SetToken | TryRegister | TryLogin;