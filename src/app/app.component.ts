import { Component } from '@angular/core';
import { NameCardComponent } from './name-card/name-card.component';
import { FilterCardComponent } from './filter-card/filter-card.component';
import { DescriptionCardComponent } from './description-card/description-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
