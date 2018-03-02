import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Results } from '../model/Results';

@Component({
  selector: 'app-results-card',
  templateUrl: './results-card.component.html',
  styleUrls: ['./results-card.component.css']
})
export class ResultsCardComponent implements OnInit {

  _results : Results[];

  @Input() set results(value : Results[]) {
    this._results = value;
  }

  get results() : Results[] {
    return this._results;
  }

  @Output() toggled = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  toggle(page : string) {
    this.toggled.emit(page);
  }
}
