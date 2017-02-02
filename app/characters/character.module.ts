import {NgModule} from "@angular/core";
import {CharacterRoutingModule, characterRoutedComponents} from "./character-routing.module";
import {HttpModule} from "@angular/http";
import {CommonModule} from "@angular/common";
import {CharacterService} from "./shared/character.service";
@NgModule({
  imports: [CommonModule,HttpModule,CharacterRoutingModule],
  declarations: [characterRoutedComponents],
  providers: [CharacterService]
})
export class CharacterModule{

}
