export class AuthService {
    loggedIn: boolean;

    isAuthenticated() {
       return Promise.resolve(true);
    }

    logIn() {
        this.loggedIn = true;
        console.log(this.loggedIn);        
    }

    logout() {
        this.loggedIn = false;
    }
}