import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StageService } from 'src/app/services/dataStage/stage.service';
import { PopUpComponent } from '../../pop-up/pop-up.component';
@Component({
  selector: 'app-manage-data-stage',
  templateUrl: './manage-data-stage.component.html',
  styleUrls: ['./manage-data-stage.component.scss']
})
export class ManageDataStageComponent implements OnInit {

  flag:any
  showCreateButton=false
  showUpdateButton=false
  identifier:any
  stageForm = new FormGroup({
    name : new FormControl('',[Validators.required]),
    description : new FormControl('',[Validators.required])
  })
  constructor(private router: ActivatedRoute,private stageData:StageService,private dialogref: MatDialog )  { }
  ngOnInit(): void {
    this.identifier = this.router.snapshot.params['identifier']
    if(!this.identifier){
      this.showCreateButton=true
      this.setDefaultValues(null,null)
    }else{
      this.showCreateButton=false
      this.stageData.stage(this.router.snapshot.params['identifier']).subscribe(
          {
            next: (data: any) => {   
              console.log("data view",data);
                         
              this.setDefaultValues(data['datastage']['name'], data['datastage']['description'])
              this.stageForm.disable();
            },
            error: (error) => { console.warn(error) }
          }
        )
    }
  }
  setDefaultValues(name: any,  description: any) {
    this.stageForm.patchValue({ name: name, description: description });
  }
  receiveFlag(data:any){
    if(data){
      this.stageForm.enable()
      this.showUpdateButton=true
      this.showCreateButton=false

    }
  }
  stageSubmitForm(){
    if(!this.identifier){
      let tempdata:any = this.stageForm.value
      tempdata['update_id']=0
      tempdata['create_id']=0
      this.stageData.saveStage(tempdata).subscribe({
        next:(data)=>{
          console.log(data)
          this.openDialog("Data Stage is created succesfully","dataStage")
      },
        error:(error)=>{console.warn(error)}
      })
    }else{
      let tempdata:any = this.stageForm.value
      tempdata['update_id']=0
      tempdata['create_id']=0
      this.stageData.updateStage(this.router.snapshot.params['identifier'],tempdata).subscribe({
        next:(data)=>{
          this.stageForm.disable();
          this.showUpdateButton=false;
          this.openDialog("DataStage is updated succesfully",`dataStage/${this.router.snapshot.params['identifier']}`);
        
        },
        error:(error)=>{console.warn(error)}
      })
    }
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
