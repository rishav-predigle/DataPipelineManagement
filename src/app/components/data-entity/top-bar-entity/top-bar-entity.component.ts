import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { PopUpComponent } from '../../pop-up/pop-up.component';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';
import { EntityDataService } from 'src/app/services/Entity/entity-data.service';

@Component({
  selector: 'app-top-bar-entity',
  templateUrl: './top-bar-entity.component.html',
  styleUrls: ['./top-bar-entity.component.scss']
})
export class TopBarEntityComponent implements OnInit {
  heading:any
  identifier:any
  toShow=true
  showSearch=false
  searchData:any
  data:any;
  placeholder:string='search for DataEntity...'
  @Output() receiveFlag:EventEmitter<any>=new EventEmitter()
  constructor(private router: Router,private entityData: EntityDataService, private activatedRoute: ActivatedRoute,private dialogref: MatDialog,private dialog: MatDialog){
    this.getEntity()
    this.identifier=this.activatedRoute.snapshot.params['identifier']
    this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        if((val.url).includes('/dataEntity')){
          this.showSearch=true  
          this.toShow=false
          this.heading="All DataEntities"
          console.log(this.identifier)
          if(this.identifier){
            this.heading="DataEntity details"
            this.toShow=true
            this.showSearch=false
          }
        }
        if((val.url).startsWith('/createDataEntity')){
          this.heading="DataEntity details"
          this.toShow=false
          this.showSearch=false

        }  
      }
    }); 
  }

  ngOnInit(): void {
    
    
  }
  getEntity = () => {
    this.entityData.allEntities().subscribe( (d:any)=>{
      this.data={
        "searchData":d["dataentities"],
        "endPoint":"dataEntity"
      }
    })
  }

  sendFlag(){
    this.receiveFlag.emit(true)
  }
  deleteDataEntity(){
    this.entityData.deleteEntity(this.activatedRoute.snapshot.params['identifier']).subscribe({
      next:(data)=>{
        this.openDialog("DataEntity is deleted succesfully","dataEntity")
      },
      error:(error)=>{console.warn(error)}
    })
  }
  delDataEntity(){
    this.openConfirmDialog("Are you sure want to delete the DataEntity?")
      .afterClosed().subscribe((res:any)=>{
          if(res){
            this.deleteDataEntity()
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



 

