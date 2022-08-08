import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { StageService } from 'src/app/services/dataStage/stage.service';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';
import { PopUpComponent } from '../../pop-up/pop-up.component';

@Component({
  selector: 'app-top-bar-data-stage',
  templateUrl: './top-bar-data-stage.component.html',
  styleUrls: ['./top-bar-data-stage.component.scss']
})
export class TopBarDataStageComponent implements OnInit {
  heading:any
  identifier:any
  toShow=true
  showSearch=false
  @Output() receiveFlag:EventEmitter<any>=new EventEmitter()
  constructor(private router: Router,private stageData: StageService, private activatedRoute: ActivatedRoute,private dialogref: MatDialog,private dialog: MatDialog){
    this.identifier=this.activatedRoute.snapshot.params['identifier']
    this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        if((val.url).includes('/dataStage')){
          this.showSearch=true  
          this.toShow=false
          this.heading="All DataStage"
          if(this.identifier){
            this.heading="DataStage details"
            this.toShow=true
            this.showSearch=false
          }
        }
        if((val.url).startsWith('/createDataStage')){
          this.heading="DataStagedetails"
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
  deleteDataStage(){
    this.stageData.deleteStage(this.activatedRoute.snapshot.params['identifier']).subscribe({
      next:(data)=>{
        this.openDialog("DataStage is deleted succesfully","dataStage")
      },
      error:(error)=>{console.warn(error)}
    })
  }
  delDatastage(){
    this.openConfirmDialog("Are you sure want to delete the DataStage?")
      .afterClosed().subscribe((res:any)=>{
          if(res){
            this.deleteDataStage()
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
