import {Injectable} from "@angular/core";
import {UserProfileService} from "../shared/user-profile.service";

@Injectable()
export class LoginService{

  constructor(private _userProfileService : UserProfileService){}

  login(){
    //TODO call remote url for logging in
    if(!this._userProfileService.isLoggedin()){
      this._userProfileService.login();
    }
  }
  logout(){
    //TODO call remote url for logging out
    this._userProfileService.logout();
  }
}
