import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  title: string;
  content: string;
  constructor(private router: Router) { }

  ngOnInit() {
    this.title = 'Описание';
    this.content = 'Описание приложения.';
  }

  goToAdd() {
     this.router.navigate(['add']);
  }

}
