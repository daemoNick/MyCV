import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PAGES } from '../data/page-data';
import { CVPage } from '../models/page.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pages: CVPage[] =  PAGES;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  doubleClick(event) {
    console.log(event);
    this.router.navigateByUrl('angular');
  }

}
