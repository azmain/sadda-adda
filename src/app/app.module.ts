import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* material design */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* routing */
import { AppRoutingModule } from './app.routes';

import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { IndexComponent } from './index/components/index.component';

import { IndexService } from './index/services/service-api/index.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './shared/login/components/login.component';
import { MessageService } from 'primeng/api';
import { LoginService } from './shared/login/services/service-api/login.service';
import { AngularPrimeModule } from './shared/angular.prime.module';
import { AngularMaterialModule } from './shared/angular.material.module';
import { NotificationComponent } from './shared/notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    NotFoundComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    // routing
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    BrowserAnimationsModule,
    // material design

    AngularPrimeModule,
    AngularMaterialModule
    

    
  ],
  providers: [
    IndexService, 
    MessageService, 
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
