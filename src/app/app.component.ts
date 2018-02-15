import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  private pages = {
    'name': true,
    'data': false,
    'about': false,
    'disclaimer': false,
    'aboutUs': false
  };

  toggle(page : string) : void {
    for (let key in this.pages) {
      this.pages[key] = false;
    }
    this.pages[page] = true;
  }
}
