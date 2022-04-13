import { isNull } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './services/Authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor( private authService: AuthenticationService, public router: Router) {
    
  }
  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean>{
    
       let isAuth = await this.authService.isUserAuthenticated();
      //   (data) => { return data;
      //     // if (!isNull(data)) {
      //     //   isAuth =  true;
      //     // }
      //   },
      //   (error) => return false;
      // )

      if (!isAuth) {
          alert('Session Expired, Please Login!');
          this.router.navigateByUrl('/login');
      }

      return isAuth;

    
  }
  
}
