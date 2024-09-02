import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { User } from '../user';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',  
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users:User = new User();
  submit=false;
  loading=false;
  errorMessage="";
  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
    // this.auth.canAuthenticate();
  }

  onSubmit(){
    console.log(this.users.username);
    this.auth.login(this.users).subscribe((data: any)=>{
        console.log(data);
        if(data.message=="User not logged in"){
          this.router.navigate(['/']);
          Swal.fire(
            'Incorrect Username or Password!',
            '',
            'error'
          )
        }
        else{
          sessionStorage.setItem('token',data.jwtToken);
          sessionStorage.setItem('username',this.users.username!);
          this.auth.canAuthenticate(data);
        }
      
    });
    }

}
