import { Component, OnInit } from '@angular/core';
import { MinersDataService } from 'src/app/services/miner/miners-data.service';

@Component({
  selector: 'app-miner',
  templateUrl: './miner.component.html',
  styleUrls: ['./miner.component.scss']
})
export class MinerComponent implements OnInit {
  miners:any
  constructor(private minerData:MinersDataService ) { 
    minerData.miners().subscribe( (data:any)=>{
      this.miners=data["dataminers"]
    })
  }

  ngOnInit(): void {
  }





  

}
