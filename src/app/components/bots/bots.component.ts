import { Component, OnInit} from '@angular/core';
import { CreateBotComponent } from '../create-bot/create-bot.component';
import { ShowBotComponent } from '../show-bot/show-bot.component';

@Component({
  selector: 'app-bots',
  templateUrl: './bots.component.html',
  styleUrls: ['./bots.component.scss']
})
export class BotsComponent implements OnInit {
  content:any
  toDisplay = true;
  constructor() { }
 
  ngOnInit(): void {
    this.content=ShowBotComponent
  }

  loadCreatebot(){
    this.content=CreateBotComponent
    this.toDisplay = false;
  }

}
