import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {Vehicle} from "./vehicle.model";
import "rxjs/add/operator/map";
import {CONFIG} from "../../core/config";

@Injectable()
export class VehicleService{
  requestUrl = CONFIG.baseUrl.vehicles;
  constructor(private _http: Http){}

  getVehicles(): Observable<Vehicle[]>{
    return this._http.get(this.requestUrl).map((response : Response) => response.json().data);
  }

}
