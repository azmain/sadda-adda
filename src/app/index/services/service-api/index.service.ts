import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import * as endpoints from '../index.endpoints';

@Injectable()
export class IndexService{

    private _url = "assets/data/covidDailyReportData.json";

    constructor(private http: HttpClient){}

    public fetchCovidDailyReportData(): Observable<any>{

        return this.http.get(endpoints.COVID_DAILY_REPORT_DATA);
    }
}