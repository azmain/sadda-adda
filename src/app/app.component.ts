import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sadda-adda';
  menus:object[] = [
    {
      'link': '/tasks',
      'name': 'Tasks'
    },
    {
      'link': '/transactions',
      'name': 'Transactions'
    },
  ];
}
