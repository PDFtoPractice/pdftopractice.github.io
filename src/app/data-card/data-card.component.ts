import { Component, OnInit } from '@angular/core';

import { AdviceService } from '../advice.service';

import { Advice } from '../model/Advice';

@Component({
  selector: 'app-data-card',
  templateUrl: './data-card.component.html',
  styleUrls: ['./data-card.component.css']
})
export class DataCardComponent implements OnInit {

  private advice = new Advice('','','');

  constructor(private adviceService : AdviceService) { }

  ngOnInit() {
  }

  getAdvice() : void {
    // TODO: Sanitise inputs (maybe dropdown in html)
    this.adviceService.getAdvice(this.advice.drug, this.advice.operation)
      .subscribe((advice : Advice) => {
        this.advice = advice;
      });
  }
}
