import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string;
  logoPath: string;
  constructor() { }

  ngOnInit() {
    this.title = 'Header';
    this.logoPath = '../../assets/images/logo.png';
  }

}
