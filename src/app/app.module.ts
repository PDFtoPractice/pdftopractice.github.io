import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialImportsModule } from './material-imports/material-imports.module';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NameCardComponent } from './name-card/name-card.component';
import { DataCardComponent } from './data-card/data-card.component';

import { AdviceService } from './advice.service';
import { NavigationComponent } from './navigation/navigation.component';
import { ResultsCardComponent } from './results-card/results-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NameCardComponent,
    DataCardComponent,
    NavigationComponent,
    ResultsCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialImportsModule,
    ReactiveFormsModule
  ],
  providers: [AdviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
