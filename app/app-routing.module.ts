import {NgModule} from "@angular/core";
import {RouterModule, Routes, PreloadAllModules} from "@angular/router";
import {CanActivateAuthGuard} from './shared/can-activate.service';
import {PageNotFoundComponent} from "./page-not-found.component"
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'vehicles'},
  {path: 'login', component: LoginComponent},
  {path: 'characters',
    loadChildren: 'app/characters/character.module#CharacterModule',
    canActivate: [CanActivateAuthGuard],
    canActivateChild: [CanActivateAuthGuard],
    canLoad: [CanActivateAuthGuard]
  },
  {path: '**', pathMatch: 'full', component: PageNotFoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy : PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule{

}

export const routeComponents:any[] = [];
