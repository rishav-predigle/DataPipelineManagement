import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ParamService } from 'src/app/services/parameter/param.service';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-view-param',
  templateUrl: './view-param.component.html',
  styleUrls: ['./view-param.component.scss']
})
export class ViewParamComponent implements OnInit {
  toDisplay=true
  identifier:any
  viewParamForm = new FormGroup({
    Parameter : new FormControl(''),
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
          this.viewParamForm.disable();
        },
        error:(error)=>{console.warn(error)}
      }
    )
  }
  setDefaultValues(Param:any,key:any,value:any){
    this.viewParamForm.patchValue({Parameter:Param, param_key:key,param_value:value});
  }

  deleteParameter(){
    this.paramData.deleteParam(this.router.snapshot.params['identifier']).subscribe({
      next:(data)=>{
        this.openDialog("Parameter is deleted succesfully","parameter")
      },
      error:(error)=>{console.warn(error)}
    })
  }
  delParam(){
    this.openConfirmDialog("Are you sure want to delete the Parameter?")
      .afterClosed().subscribe(res=>{
          if(res){
            this.deleteParameter()
          }
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

  openConfirmDialog(msg:any){
    return this.dialog.open(ConfirmDialogComponent,{
      width:'390px',
      panelClass:'confirm-dialog-container',
      disableClose:true,
      data:{
        message:msg
      }
    });
  }
  // check(display:boolean){
  //   this.toDisplay=display
  // }

}

