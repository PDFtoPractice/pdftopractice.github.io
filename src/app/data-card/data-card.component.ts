import { Component, OnInit } from '@angular/core';

import { AdviceService } from '../advice.service';

import { Advice } from '../model/Advice';
import { Results } from '../model/Results';

import { QueryType } from '../enums/queryType';
import { MedicalType } from '../enums/medicalType';

import { ResultsCardComponent } from '../results-card/results-card.component';
import { MatTabChangeEvent } from '@angular/material';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';

@Component({
  selector: 'app-data-card',
  templateUrl: './data-card.component.html',
  styleUrls: ['./data-card.component.css']
})
export class DataCardComponent implements OnInit {

  public type: QueryType = QueryType.DrugInteraction;
  public drug1: string;
  public drug2: string;
  public drug3: string;
  public operation: string;
  public drug4: string;
  public condition: string;

  public results: Results[] = [];

  public showResults: boolean = false;

  public drugCtrl: FormControl;
  public filteredDrugs: Observable<any[]>;

  constructor(private adviceService: AdviceService) {
    this.drugCtrl = new FormControl();
    this.filteredDrugs = this.drugCtrl.valueChanges
      .pipe(
      startWith(''),
      map(drug => drug ? this.filterDrugs(drug) : this.drugs.slice())
      );
  }

  filterDrugs(name: string) {
    return this.drugs.filter(drug =>
      drug.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  ngOnInit() {
  }

  updateType(event: MatTabChangeEvent): void {
    console.log(event.tab.textLabel);
    switch (event.tab.textLabel) {
      case 'Drug-Interaction':
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

  drugs: string[] = ['Aspirin', 'Ibuprofen', 'Paracetamol'];

  getAdvice(): void {
    let value1, value2;
    console.log(this.type);
    switch (this.type) {
      case QueryType.DrugCondition:
        value1 = this.drug4;
        value2 = this.condition;
        break;
      case QueryType.DrugInteraction:
        value1 = this.drug1;
        value2 = this.drug2;
        break;
      case QueryType.DrugOperation:
        value1 = this.drug3;
        value2 = this.operation;
        break;
    }
    this.adviceService.getAdvice(this.type, value1, value2)
      .subscribe((results: Results[]) => {
        this.results = results;
      });
    this.showResults = true;
  }

  toggle(page: string) {
    this.showResults = false;
    this.type = QueryType.DrugInteraction;
    this.drug1 = '';
    this.drug2 = '';
    this.drug3 = '';
    this.operation = '';
    this.drug4 = '';
    this.condition = '';
  }
}
