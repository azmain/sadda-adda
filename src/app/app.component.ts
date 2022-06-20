import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sadda-adda';
  menus: object[] = [
    {
      link: '/',
      name: 'Home'
    },
    {
      link: '/movies',
      name: 'Movies'
    },
    {
      link: '/flat-share',
      name: 'Flat Share'
    }
  ];

  isLoggedIn: boolean = false;

  constructor(
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
