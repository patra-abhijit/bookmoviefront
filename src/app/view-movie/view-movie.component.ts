import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-view-movie',
  templateUrl: './view-movie.component.html',
  styleUrls: ['./view-movie.component.css']
})
export class ViewMovieComponent implements OnInit {

  movieData: any;

  constructor(private authService: AuthService) {
    this.authService.getAllMovies().subscribe(data => {
      console.log(data);
      this.movieData = data;
      console.log(this.movieData);
    });
  }

  logout() {
    //remove token
    this.authService.removeToken();
    this.authService.canAccess();
  }

  doDelete(id:number) {
    console.log(id);
    this.authService.deleteMovies(id).subscribe(data=>{
      console.log(data)
    });
    this.reload();
  }
  ngOnInit() {

  }

  reload(){
    location.reload();
  }

}
