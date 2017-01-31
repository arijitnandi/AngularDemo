
import {Component, OnInit} from "@angular/core";
import {CharacterService} from "../shared/character.service";
import {Character} from "../shared/character.model";
@Component({
  moduleId: module.id,
  selector: 'character-list',
  templateUrl: 'character-list.component.html',
  providers: [CharacterService]
})
export class CharacterListComponent implements OnInit{

  characters : Character[];
  constructor(private _characterService : CharacterService){}

    getCharacters(){
      this._characterService.getCharacters().subscribe(
        (_characters : Character[]) => this.characters = _characters);
    }

    ngOnInit() : any {
      this.getCharacters();
    }

  refreshData(){
      this.getCharacters();
  }
  }


