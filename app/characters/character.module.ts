import {NgModule} from "@angular/core";
import {CharacterRoutingModule, characterRoutedComponents} from "./character-routing.module";
import {HttpModule} from "@angular/http";
import {CommonModule} from "@angular/common";
@NgModule({
  imports: [CommonModule,HttpModule,CharacterRoutingModule],
  declarations: [characterRoutedComponents]
})
export class CharacterModule{

}
