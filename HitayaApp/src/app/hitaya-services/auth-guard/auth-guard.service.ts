import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    //check condition
    if (sessionStorage.getItem('userName') == null) {
      alert('You are not allowed to view this page');
      //return false to cancel the navigation
      this._router.navigate(['/register']);
      return false;
    }
    return true;
  }
}
