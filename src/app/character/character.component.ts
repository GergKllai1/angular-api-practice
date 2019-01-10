import { CharacterService } from './character.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  public character = {};

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.characterService.getCharacter()
      .subscribe(data => {
        this.character = data;
      });
  }

}
