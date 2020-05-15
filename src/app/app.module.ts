import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* routing */
import { AppRoutingModule } from './app.routes';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { IndexComponent } from './index/components/index.component';

import { IndexService } from './index/services/service-api/index.service';
import { LoginComponent } from './shared/login/components/login.component';
import { MessageService } from 'primeng/api';
import { LoginService } from './shared/login/services/service-api/login.service';
import { NotificationComponent } from './shared/notification/components/notification.component';
import { SaddaAddaSharedModule } from './shared/sadda-adda-shared.module';

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
    BrowserAnimationsModule,
    // routing
    AppRoutingModule,
    SaddaAddaSharedModule,
    
  ],
  providers: [
    IndexService, 
    MessageService, 
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
