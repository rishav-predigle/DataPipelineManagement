import { Component, OnInit } from '@angular/core';
import { StageService } from 'src/app/services/dataStage/stage.service';

@Component({
  selector: 'app-data-stage',
  templateUrl: './data-stage.component.html',
  styleUrls: ['./data-stage.component.scss']
})
export class DataStageComponent implements OnInit {

  dataStages:any
  ngOnInit(): void {
  }
  constructor( private stageData:StageService) { 
    stageData.allStage().subscribe({
      next:(data:any)=>{this.dataStages=data["datastages"];console.log("stage checking",this.dataStages)},
      error:(error)=>{console.warn(error)}
    })
  }

}
