import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public pages = {
    'name': true,
    'data': false,
  };

  toggle(page : string) : void {
    for (let key in this.pages) {
      this.pages[key] = false;
    }
    this.pages[page] = true;
  }
}
