import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-user-movie',
  templateUrl: './user-movie.component.html',
  styleUrls: ['./user-movie.component.css']
})
export class UserMovieComponent implements OnInit {
  movieData: any;

  constructor(private authService: AuthService,private route:Router) {
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

  
  ngOnInit() {
    // this.reload();
  }

  reload(){
    location.reload();
  }

  routeParam(id:number,name:string){
      this.route.navigateByUrl('book/'+id+'/'+name);
  }

}
