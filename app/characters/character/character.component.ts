import {Component, OnInit, Input} from "@angular/core";
import {CharacterService} from "../shared/character.service";
import {ActivatedRoute} from "@angular/router";
import {Character} from "../shared/character.model";


@Component({
  moduleId: module.id,
  selector : 'character',
  templateUrl: 'character.component.html',
})
export class CharacterComponent implements OnInit{

  private id : any;
  character : Character;

  constructor(private _characterService : CharacterService,
              private _activatedRoute: ActivatedRoute){}

  ngOnInit(){
    if (!this.character){
      this._activatedRoute.params
        .map(params => params['id'])
        .do(id => this.id = +id)
        .subscribe(id => this.getCharacter());
    }
  }
  getCharacter(){
    /*this._characterService.getCharacter(this.id)
      .subscribe(character => this.character = character);*/
    this.character = this._characterService.getCharacter(this.id);
  }
}
