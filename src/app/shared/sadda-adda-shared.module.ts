import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AngularMaterialModule } from './angular.material.module';
import { AngularPrimeModule } from './angular.prime.module';
import { CommonModule } from '@angular/common';

@NgModule({

    imports: [
        CommonModule,
        AngularMaterialModule,
        AngularPrimeModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AngularMaterialModule,
        AngularPrimeModule
    ]
})
export class SaddaAddaSharedModule{}