import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ParamService } from 'src/app/services/parameter/param.service';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';
@Component({
  selector: 'app-create-param',
  templateUrl: './create-param.component.html',
  styleUrls: ['./create-param.component.scss']
})
export class CreateParamComponent implements OnInit {
  toDisplay=true
  constructor(private paramData:ParamService,private dialogref: MatDialog) { }

  ngOnInit(): void {
  }
  paramSubmitForm(data:any){
    data['update_id']=0
    data['create_id']=0
    console.log(data)
    this.paramData.saveParam(data).subscribe({
      next:(data)=>{
        console.log(data)
        this.openDialog("Parameter is created succesfully","parameter")
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
