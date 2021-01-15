import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Card } from '../../shared/card.type';

@Component({
  selector: 'app-card-add',
  templateUrl: './card-add.component.html',
  styleUrls: ['./card-add.component.css']
})
export class CardAddComponent implements OnInit {
  card: Card;
  types: Array<string>;

  constructor() {}

  ngOnInit() {
    this.card = new Card();
    this.types = ['Категория 1', 'Категория 2', 'Категория 3'];
  }

  add() {
    console.log(this.card);
  }

}
