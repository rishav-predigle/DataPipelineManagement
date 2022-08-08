import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MinersDataService } from 'src/app/services/miner/miners-data.service';
import { PopUpComponent } from '../../pop-up/pop-up.component';
@Component({
  selector: 'app-manage-miner',
  templateUrl: './manage-miner.component.html',
  styleUrls: ['./manage-miner.component.scss']
})
export class ManageMinerComponent implements OnInit {

  flag:any
  showCreateButton=false
  showUpdateButton=false
  identifier:any
  minerForm = new FormGroup({
    name : new FormControl('',[Validators.required]),
    description : new FormControl('',[Validators.required]),
    module_name : new FormControl('',[Validators.required]),
    class_name : new FormControl('',[Validators.required])

  })
  constructor(private router: ActivatedRoute,private minerData:MinersDataService,private dialogref: MatDialog )  { }
  ngOnInit(): void {
    this.identifier = this.router.snapshot.params['identifier']
    if(!this.identifier){
      this.showCreateButton=true
      this.setDefaultValues(null,null,null,null)
    }else{
      this.showCreateButton=false
      this.minerData.miner(this.router.snapshot.params['identifier']).subscribe(
          {
            next: (data: any) => {   
              console.log("data view",data);
                         
              this.setDefaultValues(data['dataminer']['name'], data['dataminer']['description'],data['dataminer']['module_name'],data['dataminer']['class_name'])
              this.minerForm.disable();
            },
            error: (error) => { console.warn(error) }
          }
        )
    }
  }
  setDefaultValues(name: any,  description: any,module_name:any,class_name:any) {
    this.minerForm.patchValue({ name: name, description: description ,module_name:module_name,class_name:class_name});
  }
  receiveFlag(data:any){
    if(data){
      this.minerForm.enable()
      this.showUpdateButton=true
      this.showCreateButton=false

    }
  }
  minersubmitForm(){
    if(!this.identifier){
      let tempdata:any = this.minerForm.value
      tempdata['update_id']=0
      tempdata['create_id']=0
      this.minerData.saveMiner(tempdata).subscribe({
        next:(data)=>{
          this.openDialog("Miner is created succesfully","miner")
      },
        error:(error)=>{console.warn(error)}
      })
    }else{
      let tempdata:any = this.minerForm.value
      tempdata['update_id']=0
      tempdata['create_id']=0
      this.minerData.updateMiner(this.router.snapshot.params['identifier'],tempdata).subscribe({
        next:(data)=>{
          this.minerForm.disable();
          this.showUpdateButton=false;
          this.openDialog("Miner is updated succesfully",`miner/${this.router.snapshot.params['identifier']}`);
        
        },
        error:(error)=>{console.warn(error)}
      })
    }
  }

  openDialog(message:any,rout:any){
    this.dialogref.open(PopUpComponent,{
      data:{
        msg:message,
        route:rout
      }
    });
  }

}
