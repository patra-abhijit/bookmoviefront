import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  movieId!: number;

  moviedata!: any;

  movieName!: any;

  username!: string;

  ticketForm!: FormGroup;

  respdata!: any;

  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router) {

    this.movieId = this.route.snapshot.params['id'];
    this.movieName = this.route.snapshot.params['name'];
    this.username = sessionStorage.getItem('username')!;
    console.log("formdata :" + this.movieId);
    this.authService.getMovieByID(this.movieId).subscribe(data => {
      this.moviedata = data;
      // console.log(res);
      console.log("response data:" + this.moviedata);
    });
  }

  ngOnInit() {

    this.ticketForm = new FormGroup(
      {
        username: new FormControl('', Validators.required),
        movie_id_fk: new FormControl(this.movieId, Validators.required),
        //moviename: new FormControl(this.movieName,Validators.required),
        theatre: new FormControl('', Validators.required),
        bookedSeats: new FormControl('', Validators.required)
      }
    );
  }

  logout() {
    //remove token
    this.authService.removeToken();
    this.authService.canAccess();
  }

  Book() {
    console.log(this.ticketForm.value);
    this.authService.Book(this.ticketForm.value, this.movieId).subscribe(item => {
      this.respdata = item;
      if (this.respdata) {
        this.router.navigateByUrl('usermovie');
      }
    });
  }
    // Book(){
    //   console.log(this.ticketForm.value);
    //   this.authService.Book(this.ticketForm.value,this.movieId).subscribe(data=> { 
    //     console.log(data);

    //   })
    //   this.router.navigateByUrl('usermovie');
    // }
}
