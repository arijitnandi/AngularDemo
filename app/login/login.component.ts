
import {Component} from "@angular/core";
import {LoginService} from "./login.service";
import {UserProfileService} from "../shared/user-profile.service";
import {ActivatedRoute, Router, __router_private__} from "@angular/router";
@Component({
  moduleId: module.id,
  templateUrl: 'login.component.html',
})
export class LoginComponent{

  isUserLoggedin : boolean;
  constructor(private _loginService : LoginService,
              private _userProfileService : UserProfileService,
              private _activatedRoute : ActivatedRoute,
              private _router : Router){
    this.isUserLoggedin = _userProfileService.isLoggedin();
  }

  loginUser(){
    this._loginService.login();
    this.isUserLoggedin = true;
    let navigationUrl = this._activatedRoute.snapshot.queryParams['redirectTo']
    this._router.navigate([navigationUrl]);
  }

  logoutUser(){
    this._loginService.logout();
    this.isUserLoggedin = false;
  }
}
