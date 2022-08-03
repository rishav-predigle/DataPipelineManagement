import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { StageService } from 'src/app/services/dataStage/stage.service';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';
@Component({
  selector: 'app-create-data-stage',
  templateUrl: './create-data-stage.component.html',
  styleUrls: ['./create-data-stage.component.scss']
})
export class CreateDataStageComponent implements OnInit {
  createStageForm = new FormGroup({
    name : new FormControl('',[Validators.required]),
    description : new FormControl('',[Validators.required]),
  })
  constructor(private stageData:StageService,private dialogref: MatDialog) { }
  get name(){ return this.createStageForm.get('name')}
  get description(){ return this.createStageForm.get('description')}
  ngOnInit(): void {
  }
  stageSubmitForm(){
    var data:any
    data=this.createStageForm.value
    console.log(data)
    data['update_id']=0
    data['create_id']=0
    console.log(data)
    this.stageData.saveStage(data).subscribe({
      next:(data)=>{
        console.log(data)
        this.openDialog("Data Stage is created succesfully","dataStage")
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
