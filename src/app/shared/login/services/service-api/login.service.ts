import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { HttpClient } from '@angular/common/http';

import {environment} from "../../../../../environments/environment";
var baseUrl = environment.baseUrl;

@Injectable({
    providedIn: "root"
})
export class LoginService{

    private _url = baseUrl+"/auth/login";

    constructor(private http: HttpClient){}

    public login(data): Observable<any>{

        return this.http.post(this._url, data);
    }

    public isUserLoggedIn(): Observable<any>{
        var token = localStorage.getItem("sd-token");
        return token?of(true):of(false);
    }
}