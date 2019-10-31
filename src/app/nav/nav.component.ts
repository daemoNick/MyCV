import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Output() public menuToggle = new EventEmitter();

  currentTime;

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.getClockTime();
    }, 1000);
  }

  toggleMenu() {
    this.menuToggle.emit('toggle');
  }

  getClockTime() {
    const timeNow = new Date();
    const hour   = timeNow.getHours();
    const minute = timeNow.getMinutes();
    this.currentTime = `${hour}:${minute}`;
    // console.log(this.currentTime);
  }

}
