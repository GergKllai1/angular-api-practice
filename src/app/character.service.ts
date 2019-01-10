import { ICharacter } from './character';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class Character {

  private swUrl = 'https://swapi.co/api/people/1';

  constructor(private http: HttpClient) {}

  getCharacter(): Observable<ICharacter[]> {
    return this.http.get<ICharacter[]>(this.swUrl);
  }
}
