import { Component, OnInit } from '@angular/core';
import { MinersDataService } from 'src/app/services/miner/miners-data.service';

@Component({
  selector: 'app-miner',
  templateUrl: './miner.component.html',
  styleUrls: ['./miner.component.scss']
})
export class MinerComponent implements OnInit {
  toDisplay = true;
  miners:any
  constructor(private minerData:MinersDataService ) { 
    minerData.miners().subscribe( (data:any)=>{
      // console.warn(data)
      this.miners=data["dataminers"]
      // console.log("testing bot",this.miners)

    })
  }

  ngOnInit(): void {
  }
  change(){
    this.toDisplay =! this.toDisplay
  }

}
