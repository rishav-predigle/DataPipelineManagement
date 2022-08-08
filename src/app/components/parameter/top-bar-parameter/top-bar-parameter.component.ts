import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ParamService } from 'src/app/services/parameter/param.service';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';
import { PopUpComponent } from '../../pop-up/pop-up.component';

@Component({
  selector: 'app-top-bar-parameter',
  templateUrl: './top-bar-parameter.component.html',
  styleUrls: ['./top-bar-parameter.component.scss']
})
export class TopBarParameterComponent implements OnInit {
  heading:any
  identifier:any
  toShow=true
  showSearch=false
  @Output() receiveFlag:EventEmitter<any>=new EventEmitter()
  constructor(private router: Router,private paramData: ParamService, private activatedRoute: ActivatedRoute,private dialogref: MatDialog,private dialog: MatDialog){
    this.identifier=this.activatedRoute.snapshot.params['identifier']
    this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        if((val.url).includes('/parameter')){
          this.showSearch=true  
          this.toShow=false
          this.heading="All Parameters"
          if(this.identifier){
            this.heading="DataParameter details"
            this.toShow=true
            this.showSearch=false
          }
        }
        if((val.url).startsWith('/createParameter')){
          this.heading="DataParameter details"
          this.toShow=false
          this.showSearch=false

        }  
      }
    }); 
  }
  ngOnInit(): void {
  }
  sendFlag(){
    this.receiveFlag.emit(true)
  }
  deleteParameter(){
    this.paramData.deleteParam(this.activatedRoute.snapshot.params['identifier']).subscribe({
      next:(data)=>{
        this.openDialog("Data Parameter is deleted succesfully","parameter")
      },
      error:(error)=>{console.warn(error)}
    })
  }
  delParameter(){
    this.openConfirmDialog("Are you sure want to delete the Parameter?")
      .afterClosed().subscribe((res:any)=>{
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

}
