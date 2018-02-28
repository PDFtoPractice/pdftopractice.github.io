import { Component, OnInit } from '@angular/core';

import { AdviceService } from '../advice.service';

import { Advice } from '../model/Advice';
import { Results } from '../model/Results';

import { QueryType } from '../enums/queryType';
import { MedicalType } from '../enums/medicalType';

import { ResultsCardComponent } from '../results-card/results-card.component';
import { MatTabChangeEvent } from '@angular/material';

@Component({
  selector: 'app-data-card',
  templateUrl: './data-card.component.html',
  styleUrls: ['./data-card.component.css']
})
export class DataCardComponent implements OnInit {

  public type : QueryType = QueryType.DrugCondition;
  public value1 : string = '';
  public value2 : string = '';

  public results : Results[] = [];

  public showResults : boolean = false;

  constructor(private adviceService : AdviceService) { }

  ngOnInit() {
  }

  updateType(event : MatTabChangeEvent) : void {
    this.value1 = '';
    this.value2 = '';
    switch (event.tab.textLabel) {
      case 'Drug Interaction':
        this.type = QueryType.DrugInteraction;
        break;
      case 'Drug-Operation':
        this.type = QueryType.DrugOperation;
        break;
      case 'Drug-Condition':
        this.type = QueryType.DrugCondition;
        break;
    }
  }

  getAdvice() : void {
    this.adviceService.getAdvice(this.type, this.value1, this.value2)
      .subscribe((results : Results[]) => {
        this.results = results;
      });
      this.showResults = true;
  }
}
