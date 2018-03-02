import { Component, OnInit } from '@angular/core';

import { AdviceService } from '../advice.service';

import { Results } from '../model/Results';

import { QueryType } from '../enums/queryType';
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

  type: QueryType = QueryType.DrugInteraction;
  drug1: string;
  drug2: string;
  drug3: string;
  operation: string;
  drug4: string;
  condition: string;

  results: Results[] = [];

  showResults: boolean = false;
  showError: boolean = false;
  errorMsg: string;

  loading: boolean = false;

  drugCtrl: FormControl;
  filteredDrugs: Observable<any[]>;

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
    let value1 = '', value2 = '';
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
    if (!value1 || !value2) {
      this.showError = true;
      this.errorMsg = 'Please ensure you have provided two inputs.';
    } else {
      this.loading = true;
      this.adviceService.getAdvice(this.type, value1, value2)
      .subscribe((results: Results[]) => {
        this.results = results;
        this.showResults = true;
        this.loading = false;
      }, (err) => {
        this.loading = false;
        console.log(err);
        this.showError = true;
        this.errorMsg = 'Error handling request, please try again.';
      });
    }
  }

  goBack() {
    this.showError = false;
    this.resetValues();
  }

  toggle(page: string) {
    this.showResults = false;
    this.resetValues();
  }

  resetValues() {
    this.type = QueryType.DrugInteraction;
    this.drug1 = '';
    this.drug2 = '';
    this.drug3 = '';
    this.operation = '';
    this.drug4 = '';
    this.condition = '';
    this.results = [];
  }
}
