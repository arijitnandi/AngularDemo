
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CharactersComponent} from "./characters.component";
import {CharacterListComponent} from "./character-list/character-list.component"

const routes : Routes = [
  {path: '',
    component: CharactersComponent,
    children: [
      {path : '', component:CharacterListComponent},
      // {path : ':id', component: CharacterComponent}
    ]
  },

]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterRoutingModule{

}

export const characterRoutedComponents = [
 CharactersComponent,
  CharacterListComponent
];
