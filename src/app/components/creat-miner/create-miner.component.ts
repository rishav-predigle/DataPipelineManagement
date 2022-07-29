import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MinersDataService } from 'src/app/services/miner/miners-data.service';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';
@Component({
  selector: 'app-create-miner',
  templateUrl: './create-miner.component.html',
  styleUrls: ['./create-miner.component.scss']
})
export class CreateMinerComponent implements OnInit {
  constructor(private minerData:MinersDataService,private dialogref: MatDialog) { }

  ngOnInit(): void {
  }
  minerSubmitForm(data:any){
    data['update_id']=0
    data['create_id']=0
    console.log(data)
    this.minerData.saveMiner(data).subscribe({
      next:(data)=>{
        console.log(data)
        this.openDialog("Miner is created succesfully","miner")
    },
      error:(error)=>{console.warn(error)}
    })
  }

  
  openDialog(message:any,rout:any){
    this.dialogref.open(PopUpComponent,{
      data:{
        msg:message,
        route:rout
      }
    });
  }
}
