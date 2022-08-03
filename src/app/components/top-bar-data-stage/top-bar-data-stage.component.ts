import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { StageService } from 'src/app/services/dataStage/stage.service';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

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
  constructor(private router: Router, private activatedRoute: ActivatedRoute,private stageData:StageService,private dialogref: MatDialog,private dialog: MatDialog){
        router.events.subscribe(val => {
          if (val instanceof NavigationEnd) {
            if(val.url==='/dataStage'){
              this.showSearch=true
              this.toShow=false
              this.heading="All DataStage"
            }
            if((val.url).startsWith('/viewDataStage')){
              this.identifier=this.activatedRoute.snapshot.params['identifier']
              this.toShow=true
              this.showSearch=false
              this.heading="DataStage details"

            }
            if((val.url).startsWith('/editStage')){
              this.heading="DataStage details"
              this.identifier=this.activatedRoute.snapshot.params['identifier']
              this.toShow=false
              this.showSearch=false
            }
            if((val.url).startsWith('/createDataStage')){
              this.heading="DataStage details"
              this.toShow=false
              this.showSearch=false

            }  
          }
        });
  }
  ngOnInit(): void {
  }
  deleteStage(){
    this.stageData.deleteStage(this.activatedRoute.snapshot.params['identifier']).subscribe({
      next:(data)=>{
        this.openDialog("DataStage is deleted succesfully","dataStage")
      },
      error:(error)=>{console.warn(error)}
    })
  }
  delStage(){
    this.openConfirmDialog("Are you sure want to delete the DataStage?")
      .afterClosed().subscribe((res:any)=>{
          if(res){
            this.deleteStage()
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
