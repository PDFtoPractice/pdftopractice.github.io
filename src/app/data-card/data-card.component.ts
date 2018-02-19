import { Component, OnInit } from '@angular/core';

import { AdviceService } from '../advice.service';

import { Advice } from '../model/Advice';

@Component({
  selector: 'app-data-card',
  templateUrl: './data-card.component.html',
  styleUrls: ['./data-card.component.css']
})
export class DataCardComponent implements OnInit {

  public interaction = new Advice('','','','','');
  public drugOperation = new Advice('','','','','');
  public drugCondition = new Advice('','','','','');

  constructor(private adviceService : AdviceService) { }

  ngOnInit() {
  }

  getDrugOperation() : void {
    // TODO: Sanitise inputs (maybe dropdown in html)
    this.adviceService.getAdvice(this.drugOperation.drug1, this.drugOperation.operation)
      .subscribe((advice : Advice) => {
        this.drugOperation = advice;
      });
  }

  getInteraction() : void {

  }

  getDrugCondition() : void {

  }
}
