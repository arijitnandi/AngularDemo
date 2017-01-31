
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {VehicleRoutingModule, vehicleRoutingComponents} from "./vehicle-routing.module";
import {HttpModule} from "@angular/http";
@NgModule({
  imports : [CommonModule,HttpModule,VehicleRoutingModule],
  declarations: [vehicleRoutingComponents]
})
export class VehicleModule{

}
