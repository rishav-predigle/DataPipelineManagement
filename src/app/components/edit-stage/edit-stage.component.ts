import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StageService } from 'src/app/services/dataStage/stage.service';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-edit-stage',
  templateUrl: './edit-stage.component.html',
  styleUrls: ['./edit-stage.component.scss']
})
export class EditStageComponent implements OnInit {
  identifier:any
  editStageForm = new FormGroup({
    name : new FormControl(''),
    description : new FormControl(''),
  })
  constructor( private router : ActivatedRoute,private stageData:StageService,private dialogref: MatDialog) { }
  ngOnInit(): void {
    console.log(this.router.snapshot.params['identifier'])
    
    this.identifier=this.router.snapshot.params['identifier']
    this.stageData.stage(this.router.snapshot.params['identifier']).subscribe(
      {
        next:(data:any)=>{
          console.log("data -> ",data)
          this.setDefaultValues(data['datastage']['name'],data['datastage']['description'])
        },
        error:(error)=>{console.warn(error)}
      }
    )
  }
  setDefaultValues(name:any,desc:any){
    this.editStageForm.patchValue({name:name, description:desc});
  }

  updateStage(){   
    let tempdata:any = this.editStageForm.value
    tempdata['update_id']=0
    tempdata['create_id']=0
    console.log("data-> ",tempdata)
    this.stageData.updateStage(this.router.snapshot.params['identifier'],tempdata).subscribe({
      next:(data)=>{console.log(data);this.openDialog("DataStage is updated succesfully",`viewDataStage/${this.router.snapshot.params['identifier']}`)},
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
