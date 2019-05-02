import * as AuthActions from './auth.actions';

export interface State {
    token: string;
    authenticated: boolean;
    userCreated: boolean
    msg: string;
}

const initialState: State = {
    token: null,
    authenticated: false,
    userCreated: false,
    msg: ''
}

export function authReducer(state = initialState, action: AuthActions.AuthActions) {
    switch (action.type) {
        case (AuthActions.REGISTER):
            return {
                ...state,
                userCreated: true,
                msg: action.payload
            };

        case (AuthActions.LOGIN):
            return {
                ...state,
                authenticated: true
            };

        case (AuthActions.LOGOUT):
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                authenticated: false
            };
        case (AuthActions.SET_TOKEN):
            localStorage.setItem('token', action.payload);

            return {
                ...state,
                token: action.payload
            }
        default:
            return state;
    }
}