import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-mybookings',
  templateUrl: './mybookings.component.html',
  styleUrls: ['./mybookings.component.css']
})
export class MybookingsComponent implements OnInit {


  username:any = sessionStorage.getItem('username');

  myBookings!:any;

  movies!:any;

  response!:any;

  message!:any;

  movieId!:any;
  
  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.authService.getMovieBookingByName(this.username).subscribe(data=>{
      console.log(data);
      this.myBookings=data;
      this.movieId=data.movie_id_fk;
      console.log(this.movieId);
    });
    // this.authService.getMovieByID(this.movieId).subscribe(data=>{
    //   console.log(data);
    // })
  }

  logout(){
    //remove token
    this.authService.removeToken();
    this.authService.canAccess();
  }

  deletebooking(i:number){
    this.authService.deletebooking(i).subscribe(data=>{
        this.response=data;
        console.log(this.response);
    })
    this.reload();
    if(this.myBookings==null){
      this.message="No Bookings";
    }
  }

  
  reload(){
    location.reload();
    
  }
}
