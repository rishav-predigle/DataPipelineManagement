import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ParamService } from 'src/app/services/parameter/param.service';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-edit-param',
  templateUrl: './edit-param.component.html',
  styleUrls: ['./edit-param.component.scss']
})
export class EditParamComponent implements OnInit {
  toDisplay=true
  identifier:any
  editParamForm= new FormGroup({
    name : new FormControl(''),
    param_key : new FormControl(''),
    param_value : new FormControl('')
  })
  constructor( private router : ActivatedRoute,private paramData:ParamService,private dialogref: MatDialog,private dialog: MatDialog) { }
  ngOnInit(): void {
    console.log(this.router.snapshot.params['identifier'])
    this.identifier=this.router.snapshot.params['identifier']
    this.paramData.dataparam(this.router.snapshot.params['identifier']).subscribe(
      {
        next:(data:any)=>{
          this.setDefaultValues(data['dataparam']['name'],data['dataparam']['param_key'],data['dataparam']['param_value'])
        },
        error:(error)=>{console.warn(error)}
      }
    )
  }
  setDefaultValues(Param:any,key:any,value:any){
    this.editParamForm.patchValue({name:Param, param_key:key,param_value:value});
  }

  updateParam(){   
    let tempdata:any = this.editParamForm.value
    tempdata['update_id']=0
    tempdata['create_id']=0
    console.log("data-> ",tempdata)
    this.paramData.updateParam(this.router.snapshot.params['identifier'],tempdata).subscribe({
      next:(data)=>{console.log(data);this.openDialog("Param is updated succesfully",`viewParameter/${this.router.snapshot.params['identifier']}`)},
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
  check(display:boolean){
    this.toDisplay=display
  }


}
