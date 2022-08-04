import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { SourceService } from 'src/app/services/dataSource/source.service';

@Component({
  selector: 'app-top-bar-data-source',
  templateUrl: './top-bar-data-source.component.html',
  styleUrls: ['./top-bar-data-source.component.scss']
})
export class TopBarDataSourceComponent implements OnInit {

  heading:any
  identifier:any
  toShow=true
  showSearch=false
  @Output() receiveFlag:EventEmitter<any>=new EventEmitter()

  constructor(private router: Router,private sourceData: SourceService, private activatedRoute: ActivatedRoute,private dialogref: MatDialog,private dialog: MatDialog){
    this.identifier=this.activatedRoute.snapshot.params['identifier']
    this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        if((val.url).includes('/dataSource')){
          this.showSearch=true
          this.toShow=false
          this.heading="All DataSources"
          console.log(this.identifier)
          if(this.identifier){
            this.heading="DataSource details"
            this.toShow=true
            this.showSearch=false
          }
        }
        if((val.url).startsWith('/createDataSource')){
          this.heading="DataSource details"
          this.toShow=false
          this.showSearch=false

        }  
      }
    }); 
  }

  ngOnInit(): void {
    
    
  }

  sendFlag(){
    console.log("edit click")
    this.receiveFlag.emit(true)
    console.log("-> ",this.identifier)
    // this.router.navigate([`/dataSource/${this.identifier}`]); 
  }
  deleteSource(){
    this.sourceData.deleteSource(this.activatedRoute.snapshot.params['identifier']).subscribe({
      next:(data)=>{
        this.openDialog("DataSource is deleted succesfully","dataSource")
      },
      error:(error)=>{console.warn(error)}
    })
  }
  delSource(){
    this.openConfirmDialog("Are you sure want to delete the DataSource?")
      .afterClosed().subscribe((res:any)=>{
          if(res){
            this.deleteSource()
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
