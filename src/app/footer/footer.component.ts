import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
 title: string;
 author: string;
 year: number;
 content: string;
  constructor() { }

  ngOnInit() {
    this.title = 'footer';
    this.author = 'Gregory Pievski';
    this.year = 2020;
    this.content = 'Все права защищены.';
  }

}
