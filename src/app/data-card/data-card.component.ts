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
import 'rxjs/add/observable/of';

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

  drugs: string[] = [
    'Warfarin',
    'Warfarin sodium',
    'Warfarin 0.5mg Tablets',
    'Warfarin 1mg Tablets',
    'Warfarin 3mg Tablets',
    'Warfarin 5mg Tablets',
    'Boots Ibuprofen 200 mg Caplets',
    'Aspirin 75mg Dispersible Tablets',
    'Aspirin 300mg Soluble Tablets',
    'Aspirin 300mg Caplets',
    'Boots Aspirin 75mg Dispersible Tablets',
    'Aspirin Suppositories 150mg',
    'Aspirin Suppositories 300mg',
    'Venlafaxine  37.5 Mg Tablets  ',
    'Venlafaxine 75 Mg Tablets',
    'Venlafaxine',
    'Alcohol'
    ];

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

  clearAuto() {
    this.filteredDrugs = Observable.of(this.drugs);
    this.filteredDrugs = this.drugCtrl.valueChanges
      .pipe(
      startWith(''),
      map(drug => drug ? this.filterDrugs(drug) : this.drugs.slice())
      );
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
