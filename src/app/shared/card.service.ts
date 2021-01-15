import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import {NgModule} from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { Card } from '../shared/card.type';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http: HttpClient) { }
  getAllCards() {
    return this.http.get('api/card/getail').pipe(
      map(response => response as Card)
    ).toPromise();
  }
  getCard(id: number) {
    return this.http.get(`api/card/${id}`).pipe(
      map(response => response as Card)
    ).toPromise();
  }

  addCard(card: Card) {
     return this.http.post('api/card/add', card);
  }
}
