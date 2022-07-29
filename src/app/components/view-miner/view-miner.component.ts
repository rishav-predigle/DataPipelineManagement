import { Component, OnInit } from '@angular/core';
import { MinersDataService } from 'src/app/services/miner/miners-data.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
@Component({
  selector: 'app-view-miner',
  templateUrl: './view-miner.component.html',
  styleUrls: ['./view-miner.component.scss']
})
export class ViewMinerComponent implements OnInit {
  identifier:any
  toDisplay = true;
  editminerForm= new FormGroup({
    name : new FormControl(''),
    description : new FormControl(''),
    module_name : new FormControl(''),
    class_name : new FormControl('')
  })
  
  constructor(private minerData:MinersDataService, private router : ActivatedRoute,private dialogref: MatDialog,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.identifier=this.router.snapshot.params['identifier']
    this.minerData.miner(this.router.snapshot.params['identifier']).subscribe(
      {
        next:(data:any)=>{
          this.editminerForm= new FormGroup({
            name : new FormControl(data['dataminer']['name']),
            description : new FormControl(data['dataminer']['description']),
            module_name : new FormControl(data['dataminer']['module_name']),
            class_name : new FormControl(data['dataminer']['class_name'])
          });
          this.editminerForm.disable();
        },
        error:(error)=>{console.warn(error)}
      }
    )
  }
  deleteMiner(){
    this.minerData.deleteMiner(this.router.snapshot.params['identifier']).subscribe({
      next:(data)=>{
        this.openDialog("Miner is deleted succesfully","miner")
      },
      error:(error)=>{console.warn(error)}
    })
  }
  delMiner(){
    this.openConfirmDialog("Are you sure want to delete the miner?")
      .afterClosed().subscribe(res=>{
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
  check(display:boolean){
    this.toDisplay=display
  }


}
