import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-bot',
  templateUrl: './view-bot.component.html',
  styleUrls: ['./view-bot.component.scss']
})
export class ViewBotComponent implements OnInit {
  
  public tabs=["step 1", "step 2", "step 3"];

  constructor() { }

  ngOnInit(): void {
  }

}
