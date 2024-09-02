import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movies',
  templateUrl: './add-movies.component.html',
  styleUrls: ['./add-movies.component.css']
})
export class AddMoviesComponent implements OnInit {

  response: any;

  constructor(private authService: AuthService, private route: Router) {
  
  }


  movieForm = new FormGroup({
    movieName: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    theatreDetails: new FormArray([
      new FormGroup({
        theatreName: new FormControl(''),
        ticketPrice: new FormControl('')
      })
    ])
  });


  addTheatre() {
    const control = <FormArray>this.movieForm.controls['theatreDetails'];
    control.push(
      new FormGroup({
        theatreName: new FormControl(''),
        ticketPrice: new FormControl('')
      })
    );
  }

  removeTheatre(index: number) {
    const control = <FormArray>this.movieForm.controls['theatreDetails'];
    control.removeAt(index);
  }

  get movieFormGroups() {
    return this.movieForm.get('theatreDetails') as FormArray;
  }

  ngOnInit(): void {
  }

  logout() {
    //remove token
    this.authService.removeToken();
    this.authService.canAccess();
  }

  AddMovie() {
    console.log("form data:" + this.movieForm.value);

    this.authService.AddMovie(this.movieForm.value).subscribe(data => {
      this.response = data;
      if (data.movieId != null) {
        Swal.fire(
          'Movie added :)',
          '',
          'success'
        ).then((result) => {
          if (result.value) {
            this.route.navigateByUrl('viewmovies');
          }
        })
      }
      else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })
      }
    });
    console.log("form data:" + this.movieForm.value);
    console.log("response:" + this.response);
  }
}
