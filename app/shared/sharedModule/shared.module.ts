
import {NgModule} from "@angular/core";
import {HiddenDirective} from "./directives/hidden.directive";
import {IfDirective} from "./directives/if.directive";
@NgModule({
  declarations: [HiddenDirective,IfDirective],
  exports: [HiddenDirective, IfDirective]
})
export class SharedModule{

}
