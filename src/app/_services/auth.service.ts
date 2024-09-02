import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  uri:any = "http://localhost:";

  private isLoggedIn$ = new BehaviorSubject<boolean>(false);

  isLoggedInpub$ = this.isLoggedIn$.asObservable();

  constructor(private router:Router,private http:HttpClient) {
    this.isLoggedIn$.next(false);
   }

  user():any{
    
  }

  isAuthenticated():any{
    if (sessionStorage.getItem('token')!==null) {
        return true;
    }
    return false;
  }

  canAccess(){
    if (!this.isAuthenticated()) {
        //redirect to login
        this.router.navigate(['/']);
    }
  }
  canAuthenticate(data:any){
    if (this.isAuthenticated()) {
      if(data.message == "Admin successfully logged in"){
        //redirect to dashboard
      this.router.navigate(['/admin']);
      }
      else{
        this.router.navigate(['/userdashboard']);
      }
      
    }
  }

  register(register:any):Observable<any>{
      //send data to register api (firebase)
       return this.http.post(this.uri+'8084/auth/v1/addUser',register);
    
  }

  storeToken(token:string){
      sessionStorage.setItem('token',token);
  }

  login(users:any):Observable<any>{
      return this.http.post(this.uri+'8083/call/consumer/login',users).pipe(
        tap(()=>{
          this.isLoggedIn$.next(true);
        })
      );
  }

   forgetpassword(nickname:any,password:any):Observable<any>{
      return this.http.put(this.uri+'8084/auth/v1/forgetPassword/'+nickname+"/"+password,{Response:'json' as 'string'});
   }

  removeToken(){
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('username');
  }

  getAllMovies():Observable<any>{
   return this.http.get(this.uri+'8083/api/v1/getAllMovies');
  }

  deleteMovies(id:any):Observable<any>{
    return this.http.delete(this.uri+'8083/api/v1/delete/'+id);
  }

  AddMovie(movie:any):Observable<any>{
      return this.http.post(this.uri+'8083/api/v1/addMovie',movie);
  }

  getMovieByID(id:number):Observable<any>{
    return this.http.get(this.uri+'8083/api/v1/movieById/'+id);
  }

  Book(ticket:any,movieId:number):Observable<any>{
    return this.http.post(this.uri+'8083/api/v1/ticket/add/'+movieId,ticket);
  }

  getMovieBookingByName(username:any):Observable<any>{
    return this.http.get(this.uri+'8083/api/v1/ticket/getMyBookingByName/'+username);
  }

  deletebooking(id:number){
    return this.http.delete(this.uri+'8083/api/v1/ticket/deleteBookingById/'+id);
  }
}

