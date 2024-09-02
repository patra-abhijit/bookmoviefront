import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Register } from '../register';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerform: Register = new Register();
  submit = false;
  errorMessage = "";
  loading = false;

  constructor(private auth: AuthService, private route: Router) { }

  ngOnInit(): void {
    // this.auth.canAuthenticate();
  }

  onSubmit() {

    this.loading = true;
    console.log(this.registerform);
    //call register service
    this.auth
      .register(this.registerform)
      .subscribe(data => {
        if (data.id != null) {
          Swal.fire(
            'User Registered successfully',
            '',
            'success'
          )
          this.route.navigateByUrl('/');
        }
        else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Registeration failed!',
          })
        }
        console.log(data);
      });
  }

}

