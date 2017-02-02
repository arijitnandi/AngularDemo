import {Component, OnInit} from "@angular/core";
import {VehicleService} from "../shared/vehicle.service";
import {ActivatedRoute} from "@angular/router";
import {Vehicle} from "../shared/vehicle.model";
@Component({
  moduleId: module.id,
  selector: 'vehicle',
  templateUrl: 'vehicle.component.html',
})
export class VehicleComponent implements OnInit{

  private id : number;
  vehicle : Vehicle;

  constructor(private _vehicleService : VehicleService,
              private _activatedRoute : ActivatedRoute){}

  ngOnInit(){
    if(!this.vehicle){
      this._activatedRoute.params
        .map(params => params['id'])
        .do(id => this.id = +id)
        .subscribe(id => this.getVehicle());
    }
  }

  getVehicle(){
    this._vehicleService.getVehicle(this.id)
      .subscribe(vehicle => this.vehicle = vehicle);
  }

}
