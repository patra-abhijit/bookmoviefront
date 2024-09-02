import { Component, OnInit } from '@angular/core';
import { SelectMultipleControlValueAccessor } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})

export class ForgetPasswordComponent implements OnInit {

  nickname!: string;
  password!: string;
  resdata: any;
  constructor(private authService: AuthService, private router: Router) {

  }
  ngOnInit() {

  }
  register() {

    console.log(this.nickname, this.password);
    this.authService.forgetpassword(this.nickname, this.password).subscribe((data) => {
      this.resdata = data;
      if (this.resdata.message == "password updated successfully...") {
        Swal.fire(
          'User Password changed successfully!',
          '',
          'success'
        ).then((result) => {
          if (result.isConfirmed) {
            this.router.navigateByUrl('/');
          }
        }
        )
      }
    })
  }

}

