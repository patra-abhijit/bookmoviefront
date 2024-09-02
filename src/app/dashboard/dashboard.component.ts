import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{


constructor(private authService:AuthService){
  
}

ngOnInit() {
 
}


logout(){
  //remove token
  this.authService.removeToken();
  this.authService.canAccess();
}

}
