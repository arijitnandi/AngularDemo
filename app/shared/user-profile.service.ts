import {Injectable} from "@angular/core";


@Injectable()
export class UserProfileService{
  private isUserLoggedin : boolean;

  login():void{
    this.isUserLoggedin = true;
  }

  logout(): void{
    this.isUserLoggedin = false;
  }

  isLoggedin():boolean{
    return this.isUserLoggedin;
    //return true;
  }
}
