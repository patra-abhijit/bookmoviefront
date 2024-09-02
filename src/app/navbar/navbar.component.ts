import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  public user:any;
  ngOnInit(){
    // if(sessionStorage.getItem('user')==='admin')
    // {
    //   this.user='admin';
    // }
    // else if(sessionStorage.getItem('user')==='user')
    // {
    //   this.user='user';
    // }
    // else{
    //   this.user='NotAuthentiated';
    // }
  }




}
