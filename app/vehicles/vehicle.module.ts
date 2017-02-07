
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {VehicleRoutingModule, vehicleRoutingComponents} from "./vehicle-routing.module";
import {HttpModule} from "@angular/http";
import {VehicleService} from "./shared/vehicle.service";
import {HiddenDirective} from "../shared/sharedModule/directives/hidden.directive";
import {SharedModule} from "../shared/sharedModule/shared.module";
@NgModule({
  imports : [CommonModule,HttpModule,SharedModule,VehicleRoutingModule],
  declarations: [vehicleRoutingComponents],
  providers: [VehicleService]
})
export class VehicleModule{

}
