import { Component, OnInit } from '@angular/core';

import { AdviceService } from '../advice.service';

@Component({
  selector: 'app-data-card',
  templateUrl: './data-card.component.html',
  styleUrls: ['./data-card.component.css']
})
export class DataCardComponent implements OnInit {

  drug : string;
  operation : string;
  advice : string;

  constructor(private adviceService : AdviceService) { }

  ngOnInit() {
  }

  getAdvice() : void {
    // TODO: Sanitise inputs (maybe dropdown in html)
    this.advice = this.adviceService.getAdvice(this.drug, this.operation);
  }
}
