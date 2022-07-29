import { Component, OnInit } from '@angular/core';
import { MinersDataService } from 'src/app/services/miner/miners-data.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup,Validator, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';
@Component({
  selector: 'app-edit-miner',
  templateUrl: './edit-miner.component.html',
  styleUrls: ['./edit-miner.component.scss']
})
export class EditMinerComponent implements OnInit {
  toDisplay = true;

  editminerForm= new FormGroup({
    name : new FormControl('',[Validators.required]),
    description : new FormControl(''),
    module_name : new FormControl(''),
    class_name : new FormControl('')
  })

  get name(){ return this.editminerForm.get('name')}
  get description(){ return this.editminerForm.get('description')}
  get module_name(){ return this.editminerForm.get('module_name')}
  get class_name(){ return this.editminerForm.get('class_name')}

  constructor(private minerData:MinersDataService, private router : ActivatedRoute,private dialogref: MatDialog) { }

  ngOnInit(): void {
    this.minerData.miner(this.router.snapshot.params['identifier']).subscribe(
      {
        next:(data:any)=>{ 
          this.editminerForm= new FormGroup({
            name : new FormControl(data['dataminer']['name'],[Validators.required]),
            description : new FormControl(data['dataminer']['description'],[Validators.required]),
            module_name : new FormControl(data['dataminer']['module_name'],[Validators.required]),
            class_name : new FormControl(data['dataminer']['class_name'],[Validators.required])
          });
        },
        error:(error)=>{console.warn(error)}
      }
    )
  }
  updateMiner(){   
    let tempdata:any = this.editminerForm.value
    tempdata['update_id']=0
    tempdata['create_id']=0
    this.minerData.updateMiner(this.router.snapshot.params['identifier'],tempdata).subscribe({
      next:(data)=>{this.openDialog("Miner is updated succesfully",`viewMiner/${this.router.snapshot.params['identifier']}`)},
      error:(error)=>{console.warn(error)}
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

  check(display:boolean){
    this.toDisplay=display
  }


}
