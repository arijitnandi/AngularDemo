import {NgModule, Component} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {VehiclesComponent} from "./vehicles.component";
import {VehicleListComponent} from "./vehicle-list/vehicle-list.component";
import {VehicleComponent} from "./vehicle/vehicle.component";

const vehicleRoutes : Routes = [
  { path: 'vehicles',
    component: VehiclesComponent,
    children : [
      {path: '', component: VehicleListComponent},
      {path: ':id', component: VehicleComponent}
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(vehicleRoutes)],
  exports: [RouterModule]
})
export class VehicleRoutingModule{

}

export const vehicleRoutingComponents : Component[] = [
  VehiclesComponent,
  VehicleListComponent,
  VehicleComponent
];
