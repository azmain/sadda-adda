import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { IMenu } from "../models/IMenu";
import { SidenavService } from "../services/sidenav.service";

@Component({
    selector: 'app-side-navbar',
    templateUrl: './side-navbar.component.html',
    styleUrls: ['./side-navbar.component.css']
  })
  export class SideNavbarComponent implements OnInit {
  
    menuList: Observable<IMenu[]>;
    constructor(private sidenavService: SidenavService) { }
  
    ngOnInit() {
      this.menuList = this.sidenavService.getMenuList<IMenu>();
    }
  } 