import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {
 @Input() title: string;
 items: Array<string>;
  constructor() { }

  ngOnInit() {
    this.items = ['Элемент 1', 'Элемент 2', 'Элемент 3'];
  }

}
