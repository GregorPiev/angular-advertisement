import { Component, OnInit } from "@angular/core";

import { Card } from "../shared/card.type";
import { CardService } from "../shared/card.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  cards: Card[];

  constructor() {}

  ngOnInit() {
    this.cards = [
      {
        id: 1,
        title: "Заголовок из кода",
        date: new Date(),
        email: "vip.alona@gmail.com",
        longText: "Очень подробное описание объявления",
        name: "Gregori",
        phone: "0548017214",
        price: 0,
        site: "https://shwanoff.ru",
        tags: ["объявление, тест"],
        text: "Описание объявления",
        type: { id: 1, name: "Категория 1" },
        city: { id: 1, name: "Haifa" },
      },
    ];
  }
}
