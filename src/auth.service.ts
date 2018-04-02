import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { Router } from "@angular/router";


@Injectable()
export class AuthService {

    constructor(private httpClient: HttpClient, private router: Router) { }

    registerUser(username: string, email: string, address: string, password: string, confirmPassword: string) {
        return this.httpClient.post('http://localhost:8000/store/user',
            { username: username, email: email, password: password, status: address }); //da ne menjam na back-u!!!!!!!!!!!
    }

    isAuthenticated() {
        return false;
    }

    loginUser(username:string, password:string) {
        return this.httpClient.post('http://localhost:8000/store/auth/authenticateuser', {username:username, password:password});
    }

    getToken() {
        return localStorage.getItem('token');
    }

    logout() {
        localStorage.removeItem('token');   
        this.router.navigate([''])     ;
    }
}