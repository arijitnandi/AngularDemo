import {NgModule} from "@angular/core";
import {RouterModule, Routes, PreloadAllModules} from "@angular/router";
import {PageNotFoundComponent} from "./page-not-found.component"

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'vehicles'},
  {path: 'characters', loadChildren: 'app/characters/character.module#CharacterModule'},
  {path: '**', pathMatch: 'full', component: PageNotFoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy : PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule{

}

export const routeComponents:any[] = [];
