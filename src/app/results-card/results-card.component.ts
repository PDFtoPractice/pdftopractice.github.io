import { Component, OnInit, Input } from '@angular/core';

import { Results } from '../model/Results';

@Component({
  selector: 'app-results-card',
  templateUrl: './results-card.component.html',
  styleUrls: ['./results-card.component.css']
})
export class ResultsCardComponent implements OnInit {

  public _results : Results[];

  @Input() set results(value : Results[]) {
    this._results = value;
  }

  get results() : Results[] {
    return this._results;
  }

  constructor() { }

  ngOnInit() {
  }

}
