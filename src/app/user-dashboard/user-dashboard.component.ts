import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  

  constructor(private authService:AuthService) { }

  ngOnInit() {
     
  }

  logout(){
    //remove token
    this.authService.removeToken();
    this.authService.canAccess();
  }
  

}
