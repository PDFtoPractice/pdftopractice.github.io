import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-name-card',
  templateUrl: './name-card.component.html',
  styleUrls: ['./name-card.component.css']
})
export class NameCardComponent implements OnInit {
  appname = 'Should I Take?';

  @Output() toggled = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  toggle(page : string) : void {
    this.toggled.emit(page);
  }

}
