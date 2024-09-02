// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { Observable, tap } from 'rxjs';
// import { AuthService } from './_services/auth.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class IsAuthenticatedGuard implements CanActivate {

//   constructor(private authService:AuthService,private route:Router){}
//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     return this.authService.isLoggedInpub$.pipe(
//       tap(isLoggedIn=>{
//         if(!isLoggedIn){
//           this.route.navigate(['/login']);
//         }
//       })
//     );
//   }
  
// }
