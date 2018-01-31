import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-card',
  templateUrl: './name-card.component.html',
  styleUrls: ['./name-card.component.css']
})
export class NameCardComponent implements OnInit {
  appname = 'Should I Take?'
  constructor() { }

  ngOnInit() {
  }

}
