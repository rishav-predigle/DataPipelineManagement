import { Component, OnInit } from '@angular/core';
import { SetService } from 'src/app/services/dataSet/set.service';

@Component({
  selector: 'app-data-set',
  templateUrl: './data-set.component.html',
  styleUrls: ['./data-set.component.scss']
})
export class DataSetComponent implements OnInit {
  dataSets:any
  constructor( private setData:SetService) { 
    setData.allSet().subscribe({
      next:(data:any)=>{this.dataSets=data["datasets"];console.log("set checking",this.dataSets)},
      error:(error)=>{console.warn(error)}
    })
  }

  ngOnInit(): void {
  }

}
