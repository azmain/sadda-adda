import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

import * as endpoints from "./sidenav.endpoints";

@Injectable({
    providedIn: "root"
})
export class SidenavService{

    constructor(private http: HttpClient){}

    public getMenuList<T>(): Observable<any>{

        return this.http.get(endpoints.MENU_LIST);
    }

}