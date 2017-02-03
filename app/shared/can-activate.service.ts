import {
  CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Route,
  Router, CanLoad
} from "@angular/router";
import {Injectable} from "@angular/core";
import {UserProfileService} from "./user-profile.service";

@Injectable()
export class CanActivateAuthGuard implements CanActivate, CanActivateChild, CanLoad{
  constructor(private _router : Router,
              private _userProfileService : UserProfileService){}

  canActivateChild(next : ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.canActivate(next,state);
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this._userProfileService.isLoggedin()){
      return true;
    }
    this._router.navigate(['/login'], {queryParams : {redirectTo : state.url}});
    return false;
  }

  canLoad(route : Route){
    return true;
  }
}
