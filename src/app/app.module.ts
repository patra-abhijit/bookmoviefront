import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component'
import { AuthInterceptorProvider } from './auth.interceptor';
import { ViewMovieComponent } from './view-movie/view-movie.component';
import { AddMoviesComponent } from './add-movies/add-movies.component';
import { UserMovieComponent } from './user-movie/user-movie.component';
import { BookingComponent } from './booking/booking.component';
import { MybookingsComponent } from './mybookings/mybookings.component';

const routes:Routes = [
  {path:'register',component:RegisterComponent},
  {path:'',component:LoginComponent},
  {path:'admin',component:DashboardComponent},
  {path:'forget',component:ForgetPasswordComponent},
  {path:'userdashboard',component:UserDashboardComponent},
  {path:'viewmovies',component:ViewMovieComponent},
  {path:'addmovies',component:AddMoviesComponent},
  {path:'usermovie',component:UserMovieComponent},
  {path:'book/:id/:name',component:BookingComponent},
  {path:'mybooking',component:MybookingsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    ForgetPasswordComponent,
    UserDashboardComponent,
    ViewMovieComponent,
    AddMoviesComponent,
    UserMovieComponent,
    BookingComponent,
    MybookingsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
