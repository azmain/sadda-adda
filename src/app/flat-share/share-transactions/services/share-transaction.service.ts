import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import * as endpoints from "./share-transaction.endpoints";

@Injectable()
export class ShareTransactionService{

    constructor(private http: HttpClient){}

    public fetchShareTransaction(urlSearchParams): Observable<any>{

        let headers = new HttpHeaders();
        headers = headers.append("Authorization", "Bearer "+localStorage.getItem("sd-token"));
        return this.http.get(endpoints.SHARE_TRANSACTION_INDEX, {
            headers: headers,
            params: urlSearchParams
        });
    }
}