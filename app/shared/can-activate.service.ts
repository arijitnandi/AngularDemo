import {
  CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Route,
  Router, CanLoad
} from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable()
export class CanActivateAuthGuard implements CanActivate, CanActivateChild, CanLoad{
  constructor(private _router : Router){}

  canActivateChild(next : ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.canActivate(next,state);
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    this._router.navigate(['/login']);
    return false;
  }

  canLoad(route : Route){
    return true;
  }
}
