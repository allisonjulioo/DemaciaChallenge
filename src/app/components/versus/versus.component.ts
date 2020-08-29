import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dc-versus',
  templateUrl: './versus.component.html',
  styleUrls: ['./versus.component.scss'],
})
export class VersusComponent implements OnInit {
  leagues: Array<object>;

  constructor() {}

  ngOnInit(): void {
    this.leagues = [
      { step: '1', team1: 'Lorem', team2: 'Lorem2', loser: 'Lorem2' },
      { step: '2', team1: 'Lorem', team2: 'CAS', loser: '' },
    ];
  }
}
