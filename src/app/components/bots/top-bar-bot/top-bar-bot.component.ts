import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BotsDataService } from 'src/app/services/bots-data.service';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';
import { PopUpComponent } from '../../pop-up/pop-up.component';
@Component({
  selector: 'app-top-bar-bot',
  templateUrl: './top-bar-bot.component.html',
  styleUrls: ['./top-bar-bot.component.scss']
})
export class TopBarBotComponent implements OnInit {
  heading:any
  identifier:any
  toShow=true
  showSearch=false
  @Output() receiveFlag:EventEmitter<any>=new EventEmitter()
  constructor(private router: Router,private botata: BotsDataService, private activatedRoute: ActivatedRoute,private dialogref: MatDialog,private dialog: MatDialog){
    this.identifier=this.activatedRoute.snapshot.params['identifier']
    this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        if((val.url)=='/'){
          this.showSearch=true  
          this.toShow=false
          this.heading="All Bots"
          if(this.identifier){
            this.heading="Data Bot details"
            this.toShow=true
            this.showSearch=false
          }
        }
        if((val.url).startsWith('/createBot')){
          this.heading="Data Bot details"
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
  deletebot(){
    // this.botData.deleteParam(this.activatedRoute.snapshot.params['identifier']).subscribe({
    //   next:(data)=>{
    //     this.openDialog("Data Bot is deleted succesfully","bot")
    //   },
    //   error:(error)=>{console.warn(error)}
    // })
  }
  delbot(){
    this.openConfirmDialog("Are you sure want to delete the Bot?")
      .afterClosed().subscribe((res:any)=>{
          if(res){
            this.deletebot()
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
