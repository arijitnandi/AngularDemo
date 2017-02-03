import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {AppRoutingModule, routeComponents} from "./app-routing.module";
import {CharacterModule} from "./characters/character.module";
import {PageNotFoundComponent} from "./page-not-found.component";
import {VehicleModule} from "./vehicles/vehicle.module";
import './shared/rxjs-extensions';
import {CanActivateAuthGuard} from "./shared/can-activate.service";
import {LoginComponent} from "./login/login.component";
import {UserProfileService} from "./shared/user-profile.service";
import {LoginService} from "./login/login.service";

@NgModule({
  // AppRoutingModule should be the last import.As we have to load all the eagerly loaded modules first to navigate
  imports:      [ BrowserModule, VehicleModule,AppRoutingModule ],
  declarations: [ AppComponent,LoginComponent,PageNotFoundComponent ],
  bootstrap:    [ AppComponent ],
  providers: [UserProfileService,LoginService,CanActivateAuthGuard]
})
export class AppModule { }
