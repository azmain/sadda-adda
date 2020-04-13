import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* material design */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';

/* routing */
import { AppRoutingModule } from './app.routes';

import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { IndexComponent } from './index/components/index.component';
import {InputTextModule} from 'primeng/inputtext';
import {ListboxModule} from 'primeng/listbox';
import {FormsModule} from '@angular/forms';
import {TableModule} from 'primeng/table';
import { IndexService } from './index/services/service-api/index.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    // routing
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    // material design
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatCardModule,
    MatSnackBarModule,

    //primeng
    InputTextModule,
    ListboxModule,
    TableModule
  ],
  providers: [IndexService],
  bootstrap: [AppComponent]
})
export class AppModule { }
