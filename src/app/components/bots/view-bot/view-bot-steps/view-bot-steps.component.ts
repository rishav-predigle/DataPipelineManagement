import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-bot-steps',
  templateUrl: './view-bot-steps.component.html',
  styleUrls: ['./view-bot-steps.component.scss']
})
export class ViewBotStepsComponent implements OnInit {

  
  botInput = [
    {
      "label":"Bot type:",
      "value":"Data Bot"
    },
    {
      "label":"Miner:",
      "value":"Miner name"
    },
    {
      "label":"Data Source:",
      "value":"Data source"
    },
    {
      "label":"Data Parameter:",
      "value":"Data Parameter"
    },
    {
      "label":"Data Stage:",
      "value":"Data stage"
    },
    {
      "label":"Data Entity:",
      "value":"Data Entity"
    }  ]

  constructor() { }

  ngOnInit(): void {
  }

}
