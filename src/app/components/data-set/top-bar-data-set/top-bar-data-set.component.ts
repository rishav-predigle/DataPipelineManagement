import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { SetService } from 'src/app/services/dataSet/set.service';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';
import { PopUpComponent } from '../../pop-up/pop-up.component';

@Component({
  selector: 'app-top-bar-data-set',
  templateUrl: './top-bar-data-set.component.html',
  styleUrls: ['./top-bar-data-set.component.scss']
})
export class TopBarDataSetComponent implements OnInit {
  heading:any
  identifier:any
  toShow=true
  showSearch=false
  searchData:any
  data:any;
  placeholder:string='search for DataSets...'
  @Output() receiveFlag:EventEmitter<any>=new EventEmitter()

  constructor(private router: Router,private setData: SetService, private activatedRoute: ActivatedRoute,private dialogref: MatDialog,private dialog: MatDialog){
    this.getStage()
    this.identifier=this.activatedRoute.snapshot.params['identifier']
    this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        if((val.url).includes('/dataSet')){
          this.showSearch=true  
          this.toShow=false
          this.heading="All DataSets"
          if(this.identifier){
            this.heading="DataSet details"
            this.toShow=true
            this.showSearch=false
          }
        }
        if((val.url).startsWith('/createDataSet')){
          this.heading="DataSets details"
          this.toShow=false
          this.showSearch=false

        }  
      }
    }); 
  }
  ngOnInit(): void {
  }
  getStage = () => {
    this.setData.allSet().subscribe( (d:any)=>{
      this.data={
        "searchData":d["datasets"],
        "endPoint":"dataSet"
      }
    })
  }
  sendFlag(){
    this.receiveFlag.emit(true)
  }
  deleteDataSet(){
    this.setData.deleteSet(this.activatedRoute.snapshot.params['identifier']).subscribe({
      next:(data)=>{
        this.openDialog("DataSet is deleted succesfully","dataSet")
      },
      error:(error)=>{console.warn(error)}
    })
  }
  delDataSet(){
    this.openConfirmDialog("Are you sure want to delete the DataSet?")
      .afterClosed().subscribe((res:any)=>{
          if(res){
            this.deleteDataSet()
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
