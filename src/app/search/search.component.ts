import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  title: string;
  input: string;
  constructor() { }

  ngOnInit() {
    this.title = 'Поиск';
  }

  search(input: string): void {
    this.input = input;
    console.log('Input:', this.input);
  }

}
