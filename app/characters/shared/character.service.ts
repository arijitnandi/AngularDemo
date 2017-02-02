import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Character} from "./character.model";

@Injectable()
export class CharacterService{

  private characterList : Character[];
  constructor(private _http : Http){}

  getCharacters(){
    return this._http.get('api/characters.json')
      .map((response : Response) => <Character[]>response.json().data)
      .do(characters => this.characterList = characters);
  }

  getCharacter(id : number) : Character{
    //return this.getCharacters().map(characters => characters.find(character => character.id === id));
    return this.characterList.find(character => character.id === id);
  }
}
