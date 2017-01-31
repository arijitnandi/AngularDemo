import {Component, OnInit} from "@angular/core";
import {VehicleService} from "../shared/vehicle.service";
import {Vehicle} from "../shared/vehicle.model";
@Component({
  moduleId: module.id,
  selector: 'vehicle-list',
  templateUrl: 'vehicle-list.component.html',
  providers: [VehicleService]
})
export class VehicleListComponent implements OnInit{

  vehicles : Vehicle[];
  constructor(private _vehicleService : VehicleService){}

  getVehicles(){
    this._vehicleService.getVehicles().subscribe(
      (_vehicles : Vehicle[]) => this.vehicles = _vehicles);
  }

  ngOnInit() : any{
    this.getVehicles();
  }
}
