import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Character} from "./character.model";
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CharacterService{

  constructor(private _http : Http){}

  getCharacters(){
    return this._http.get('api/characters.json')
      .map((response : Response) => <Character[]>response.json().data);
  }
}
