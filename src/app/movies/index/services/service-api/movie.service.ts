import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import * as endpoints from "./../movies.endpoints";

@Injectable()
export class MovieService{

    constructor(private http: HttpClient){}

    public fetchMovies(urlSearchParams): Observable<any>{

        return this.http.get(endpoints.MOVIE_INDEX, urlSearchParams);
    }
}