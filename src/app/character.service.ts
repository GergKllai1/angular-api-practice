import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class Character {

  private swUrl = 'https://swapi.co/api/people/1';

  constructor(private http: HttpClient) {}

  getCharacter() {
    return this.http.get(this.swUrl);
  }
}
