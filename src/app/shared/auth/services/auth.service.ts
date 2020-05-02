import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppUser } from './user.model';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
    providedIn: "root"
})
export class AuthService{

    private tokenKey: string = "sd-token";

    private loggedIn = new BehaviorSubject<boolean>(this.isUserLoggedIn());

    authStatus = this.loggedIn.asObservable();

    user$: Observable<AppUser>;

    constructor(
        private router: Router,
        private route: ActivatedRoute
    ){}

    /** Login User */
    loginUser(loginResponse){
        this.handleToken(loginResponse);
        this.changeAuthStatus(true);

        let returnUrl;
        this.route.queryParams.subscribe(params=>{
            returnUrl = params["returnUrl"];
        })
        if(returnUrl) this.router.navigate([returnUrl]);
        else this.router.navigate(["/"]);
    }

    private changeAuthStatus(value: boolean){
        this.loggedIn.next(value);
    }

    private handleToken(tokenResponse){
        this.setToken(tokenResponse);
    }

    private setToken(token){
        localStorage.setItem(this.tokenKey, token.jwt);
    }
    private getToken(){
        return localStorage.getItem(this.tokenKey);
    }

    private isTokenValid(){
        const token = this.getToken();
        if(token){
            const payload = this.getPayload(token);
            //console.log(payload);
            return true;
        }
        return false;
    }

    private getPayload(token){
        const payload = token.split('.')[1];
        return this.decodeTokenPayload(payload);
    }

    private decodeTokenPayload(payload){
        return JSON.parse(atob(payload));
    }

    isUserLoggedIn(){
        console.log({token: this.isTokenValid()});
        return this.isTokenValid();
    }

    /** Logout User */
    logoutUser(){
        this.removeToken();
        this.changeAuthStatus(false);
        this.router.navigate(["/"]);
    }
    private removeToken(){
        localStorage.removeItem("sd-token");
    }
}