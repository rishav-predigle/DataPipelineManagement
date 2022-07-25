import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MinersDataService } from 'src/app/services/miner/miners-data.service';
@Component({
  selector: 'app-create-miner',
  templateUrl: './create-miner.component.html',
  styleUrls: ['./create-miner.component.scss']
})
export class CreateMinerComponent implements OnInit {
  show1:boolean=false
  show2:boolean=false
  constructor(private minerData:MinersDataService) { }

  ngOnInit(): void {
  }
  minerSubmitForm(data:any){
    data['update_id']=0
    data['create_id']=0
    console.log(data)
    this.minerData.saveMiner(data).subscribe({
      next:(data)=>{this.show1=true},
      error:(error)=>{console.warn(error)}
    })
  }
}
