import { Component, OnInit, ViewEncapsulation, ViewChild, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material';
import { IndexService } from '../services/service-api/index.service';
import { Table } from 'primeng/table';
import { FilterUtils } from "primeng/components/utils/filterutils";

import { Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
    selector: 'sd-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit, OnDestroy {

    date: Date = new Date();
    
    covidDailyReportData: any[] = [];

    frozenCols: any[] = [];

    scrollableCols: any[] = [];

    @ViewChild('dt', {static: false}) private _table: Table;

    subscription: Subscription;

    constructor(
        private _snackBar: MatSnackBar,
        private indexService: IndexService) { }

    ngOnInit() {

        this.createCustomTableFilter();

        this.initializeFrozenColumns();
        this.initializeScrollableColumns();

        this.subscription = timer(0, 3600000).pipe(
            switchMap(() => this.indexService.fetchCovidDailyReportData())
          ).subscribe(result => this.covidDailyReportData = result);
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

    createCustomTableFilter(){
        FilterUtils['custom'] = (value, filter): boolean => {
            if (filter === undefined || filter === null || filter.trim() === '') {
                return true;
            }
    
            if (value === undefined || value === null) {
                return false;
            }
            
            return parseInt(filter) < value;
        }
    }

    initializeFrozenColumns() {
        this.frozenCols = [{ field: 'country', header: 'Country' }];
    }

    initializeScrollableColumns() {
        this.scrollableCols = [
            { field: 'totalCases', header: 'Total Cases' },
            { field: 'newCases', header: 'New Cases' },
            { field: 'totalDeaths', header: 'Total Deaths' },
            { field: 'newDeaths', header: 'New Deaths' },
            { field: 'totalRecovered', header: 'Total Recovered' },
        ];
    }

    getCovidDailyData() {
        this.indexService.fetchCovidDailyReportData().subscribe(data=>{
            this.covidDailyReportData = data;
        })
    }

}
