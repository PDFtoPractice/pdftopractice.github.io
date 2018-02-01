import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NameCardComponent } from './name-card/name-card.component';
import { FilterCardComponent } from './filter-card/filter-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NameCardComponent,
    FilterCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
