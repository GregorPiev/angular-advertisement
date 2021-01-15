import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {Card} from '../../shared/card.type';

@Component({
  selector: 'app-card-summary',
  templateUrl: './card-summary.component.html',
  styleUrls: ['./card-summary.component.css']
})
export class CardSummaryComponent implements OnInit {
  title: string;
  date: string;
  text: string;
  @Input() card: Card;
  constructor(private router: Router) { }

  ngOnInit() {
    this.title = 'Заголовок';
    this.date = new Date().toLocaleString();
    this.text = 'Текст объявления';
  }
  goToDetail(id: number) {
    this.router.navigate(['card', id]);
  }

}
