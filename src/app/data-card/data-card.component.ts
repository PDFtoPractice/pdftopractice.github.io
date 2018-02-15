import { Component, OnInit } from '@angular/core';

import { AdviceService } from '../advice.service';

import { Advice } from '../model/Advice';

@Component({
  selector: 'app-data-card',
  templateUrl: './data-card.component.html',
  styleUrls: ['./data-card.component.css']
})
export class DataCardComponent implements OnInit {

  private interaction = new Advice('','','','','');
  private drugOperation = new Advice('','','','','');
  private drugCondition = new Advice('','','','','');

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
}
