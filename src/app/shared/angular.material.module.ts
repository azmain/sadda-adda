import { NgModule } from '@angular/core';

import { MatCheckboxModule, MatExpansionModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';

@NgModule({

    imports: [
        MatCheckboxModule,
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatToolbarModule,
        MatMenuModule,
        MatListModule,
        MatCardModule,
        MatSnackBarModule,
        MatInputModule,
        MatExpansionModule
    ],
    exports: [
        MatCheckboxModule,
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatToolbarModule,
        MatMenuModule,
        MatListModule,
        MatCardModule,
        MatSnackBarModule,
        MatInputModule,
        MatExpansionModule
    ]
})
export class AngularMaterialModule { }