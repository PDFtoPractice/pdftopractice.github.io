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

  public results : Results = new Results(QueryType.DrugInteraction,
    MedicalType.OngoingMedication,
    MedicalType.NewMedication,
    '', '', '', '');

    public showResults : boolean = false;

  constructor(private adviceService : AdviceService) { }

  ngOnInit() {
  }

  updateType(event : MatTabChangeEvent) : void {
    this.results.value1 = '';
    this.results.value2 = '';
    switch (event.tab.textLabel) {
      case 'Drug Interaction':
        this.results.type = QueryType.DrugInteraction;
        break;
      case 'Drug-Operation':
        this.results.type = QueryType.DrugOperation;
        break;
      case 'Drug-Condition':
        this.results.type = QueryType.DrugCondition;
        break;
    }
  }

  getDrugOperation() : void {
    // TODO: Sanitise inputs (maybe dropdown in html)
    this.adviceService.getAdvice(this.results.type, this.results.value1, this.results.value2)
      .subscribe((results : Results) => {
        this.results = results;
      });
      this.showResults = true;
  }

  toggle(page : string) {
    this.showResults = false;
  }
}
