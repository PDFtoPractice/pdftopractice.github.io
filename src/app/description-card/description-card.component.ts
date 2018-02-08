import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description-card',
  templateUrl: './description-card.component.html',
  styleUrls: ['./description-card.component.css']
})
export class DescriptionCardComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  openDescription(evt, tabTitle) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].removeclass('active').addclass('inactive');
    }
    document.getElementById(tabTitle).style.display = "block";
    evt.currentTarget.removeclass('inactive').addclass('active');

  }

}
