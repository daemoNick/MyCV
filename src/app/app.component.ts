import { Component, ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;

  title = 'myCV';
  menuOpened = false;

  displayMenu(value) {
    if (value === 'toggle') {
      this.menuOpened = !this.menuOpened;
    }
  }

  close() {
    this.sidenav.close();
  }
}
