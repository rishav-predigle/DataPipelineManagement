import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PopUpComponent } from '../../pop-up/pop-up.component';
import { ParamService } from 'src/app/services/parameter/param.service';
@Component({
  selector: 'app-manage-parameter',
  templateUrl: './manage-parameter.component.html',
  styleUrls: ['./manage-parameter.component.scss']
})
export class ManageParameterComponent implements OnInit {
  flag:any
  showCreateButton=false
  showUpdateButton=false
  identifier:any
  paramForm = new FormGroup({
    name : new FormControl('',[Validators.required]),
    param_key : new FormControl('',[Validators.required]),
    param_value : new FormControl('',[Validators.required])

  })
  constructor(private router: ActivatedRoute,private paramData:ParamService,private dialogref: MatDialog )  { }
  ngOnInit(): void {
    this.identifier = this.router.snapshot.params['identifier']
    if(!this.identifier){
      this.showCreateButton=true
      this.setDefaultValues(null,null,null)
    }else{
      this.showCreateButton=false
      this.paramData.dataparam(this.router.snapshot.params['identifier']).subscribe(
          {
            next: (data: any) => {   
              console.log("data view",data);
                         
              this.setDefaultValues(data['dataparam']['name'], data['dataparam']['param_key'],data['dataparam']['param_value'])
              this.paramForm.disable();
            },
            error: (error) => { console.warn(error) }
          }
        )
    }
  }
  setDefaultValues(name: any,  key: any,value:any) {
    this.paramForm.patchValue({ name: name, param_key: key ,param_value:value});
  }
  receiveFlag(data:any){
    if(data){
      this.paramForm.enable()
      this.showUpdateButton=true
      this.showCreateButton=false

    }
  }
  paramSubmitForm(){
    if(!this.identifier){
      let tempdata:any = this.paramForm.value
      tempdata['update_id']=0
      tempdata['create_id']=0
      this.paramData.saveParam(tempdata).subscribe({
        next:(data)=>{
          this.openDialog("Data Param is created succesfully","parameter")
      },
        error:(error)=>{console.warn(error)}
      })
    }else{
      let tempdata:any = this.paramForm.value
      tempdata['update_id']=0
      tempdata['create_id']=0
      this.paramData.updateParam(this.router.snapshot.params['identifier'],tempdata).subscribe({
        next:(data)=>{
          this.paramForm.disable();
          this.showUpdateButton=false;
          this.openDialog("DataParam is updated succesfully",`parameter/${this.router.snapshot.params['identifier']}`);
        
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
