import { Component, OnInit} from '@angular/core';
import { BotsDataService } from 'src/app/services/bots-data.service';


@Component({
  selector: 'app-bots',
  templateUrl: './bots.component.html',
  styleUrls: ['./bots.component.scss']
})
export class BotsComponent implements OnInit {
  bots:any
  constructor(private botData:BotsDataService ) { 
    botData.bots().subscribe( (data:any)=>{
      console.warn(data)
      this.bots=data["databots"]

    })
  }
 
  ngOnInit(): void {
  }

  

}
