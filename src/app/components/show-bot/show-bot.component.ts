import { Component, OnInit } from '@angular/core';
import { BotsDataService } from 'src/app/services/bots-data.service';

@Component({
  selector: 'app-show-bot',
  templateUrl: './show-bot.component.html',
  styleUrls: ['./show-bot.component.scss']
})
export class ShowBotComponent implements OnInit {
  bots:any
  
  constructor(private botData:BotsDataService ) { 
    botData.bots().subscribe( (data:any)=>{
      console.warn(data)
      this.bots=data["databots"]
      // console.log("testing bot",this.bots)

    })
  }
   

  ngOnInit(): void {
  }

}
