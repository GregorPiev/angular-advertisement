import { Component, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Card } from '../../shared/card.type';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {
  card: Card;
  constructor(private route: ActivatedRoute) {
    this.card = new Card();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.card.id = params['id'];
      this.card.title = 'Заголовок';
      this.card.date = new Date();
      this.card.email = 'vip.alona@gmail.com';
      this.card.longText = 'Подробный текст объявления';
      this.card.name = 'Gregory';
      this.card.phone = '+7 (920) 737-1024';
      this.card.price = 1000;
      this.card.site = 'https://rt.pornhub.com/view_video.php?viewkey=ph5e3a1a80dddf8';
      this.card.text = 'Описание объявления из кода 1';
      this.card.type = { id: 1, name: 'Категория 1' };
      this.card.city = { id: 1, name: 'Haifa' };
      this.card.tags = ['Объявление', 'Тест', 'Тег'];
      console.log(this.card);
    });


  }

}
