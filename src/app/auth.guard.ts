import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './core/http/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private authServie: AuthService,
    private router: Router) {

  }
  canActivate(): boolean{
    if(this.authServie.loggedIn()){
      return true;
    }
    this.router.navigate(['/auth']);
    return false;
  }
  
}
