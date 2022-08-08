import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MinersDataService } from 'src/app/services/miner/miners-data.service';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';
import { PopUpComponent } from '../../pop-up/pop-up.component';
@Component({
  selector: 'app-top-bar-miner',
  templateUrl: './top-bar-miner.component.html',
  styleUrls: ['./top-bar-miner.component.scss']
})
export class TopBarMinerComponent implements OnInit {

  heading:any
  identifier:any
  toShow=true
  showSearch=false
  @Output() receiveFlag:EventEmitter<any>=new EventEmitter()
  constructor(private router: Router,private minerData: MinersDataService, private activatedRoute: ActivatedRoute,private dialogref: MatDialog,private dialog: MatDialog){
    this.identifier=this.activatedRoute.snapshot.params['identifier']
    this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        if((val.url).includes('/miner')){
          this.showSearch=true  
          this.toShow=false
          this.heading="All Miners"
          if(this.identifier){
            this.heading="Miners details"
            this.toShow=true
            this.showSearch=false
          }
        }
        if((val.url).startsWith('/createMiner')){
          this.heading="Miner details"
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
  deleteMiner(){
    this.minerData.deleteMiner(this.activatedRoute.snapshot.params['identifier']).subscribe({
      next:(data)=>{
        this.openDialog("Miner is deleted succesfully","miner")
      },
      error:(error)=>{console.warn(error)}
    })
  }
  delMiner(){
    this.openConfirmDialog("Are you sure want to delete the Miner?")
      .afterClosed().subscribe((res:any)=>{
          if(res){
            this.deleteMiner()
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
