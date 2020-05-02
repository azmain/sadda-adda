import { Component, OnInit } from '@angular/core';
import { LoginService } from './shared/login/services/service-api/login.service';
import { timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AuthService } from './shared/auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sadda-adda';
  menus:object[] = [
    {
      'link': '/movies',
      'name': 'Movies'
    },
    {
      'link': '/tasks',
      'name': 'Tasks'
    },
    {
      'link': '/transactions',
      'name': 'Transactions'
    },
  ];

  isLoggedIn: boolean = false;

  constructor(
    private loginService: LoginService,
    private authService: AuthService){
    
  }

  ngOnInit(){
    this.authService.authStatus.subscribe(x=>this.isLoggedIn=x);

    //timer(0, 3600000).subscribe(result => console.log({isLoggedIn: this.isLoggedIn}));
  }

  logOut(){
    this.authService.logoutUser();
  }

}
