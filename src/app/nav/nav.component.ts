import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Output() public menuToggle = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    this.menuToggle.emit('toggle');
  }

}
