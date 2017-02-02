
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {VehicleRoutingModule, vehicleRoutingComponents} from "./vehicle-routing.module";
import {HttpModule} from "@angular/http";
import {VehicleService} from "./shared/vehicle.service";
@NgModule({
  imports : [CommonModule,HttpModule,VehicleRoutingModule],
  declarations: [vehicleRoutingComponents],
  providers: [VehicleService]
})
export class VehicleModule{

}
