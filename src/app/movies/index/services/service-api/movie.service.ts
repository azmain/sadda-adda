import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import * as endpoints from "./../movies.endpoints";

@Injectable()
export class MovieService{

    constructor(private http: HttpClient){}

    public fetchMovies(urlSearchParams): Observable<any>{

        let headers = new HttpHeaders();
        headers = headers.append("Authorization", "Bearer "+localStorage.getItem("sd-token"));
        return this.http.get(endpoints.MOVIE_INDEX, {
            headers: headers,
            params: urlSearchParams
        });
    }
}