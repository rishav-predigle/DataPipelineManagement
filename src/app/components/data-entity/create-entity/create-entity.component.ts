import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { EntityDataService } from 'src/app/services/Entity/entity-data.service';
import { PopUpComponent } from '../../pop-up/pop-up.component';
@Component({
  selector: 'app-create-entity',
  templateUrl: './create-entity.component.html',
  styleUrls: ['./create-entity.component.scss']
})
export class CreateEntityComponent implements OnInit {
  flag:any
  showCreateButton=false
  showUpdateButton=false
  identifier:any
  entityForm = new FormGroup({
    name : new FormControl('',[Validators.required]),
    type : new FormControl('',[Validators.required])
  })
  constructor(private router: ActivatedRoute,private entityData:EntityDataService,private dialogref: MatDialog) { }
  receiveFlag(data:any){
    if(data){
      this.entityForm.enable()
      this.showUpdateButton=true
      this.showCreateButton=false

    }
  }
  ngOnInit(): void {
    this.identifier = this.router.snapshot.params['identifier']
    console.log("identifier ,",this.identifier)    
    if(!this.identifier){
      console.log("else 1")
      this.showCreateButton=true
      this.setDefaultValues(null,null)
    }else{
      console.log("else 1")
      this.showCreateButton=false
      console.log("value flag ->",this.flag)
      this.entityData.entity(this.router.snapshot.params['identifier']).subscribe(
          {
            next: (data: any) => {              
              this.setDefaultValues(data['dataentity']['name'], "dummy data")
              this.entityForm.disable();
            },
            error: (error) => { console.warn(error) }
          }
        )
    }
  }
  setDefaultValues(name: any,  type: any) {
    this.entityForm.patchValue({ name: name, type: type });
  }

  entitySubmitForm(){
    if(!this.identifier){
      let data:string = this.entityForm.get('name')?.value || "";
      console.log(data)
      const requestBody = {
        update_id:0,
        create_id:0,
        name: data
      }
      this.entityData.saveEntity(requestBody).subscribe({
        next:(data)=>{
          console.log(data)
          this.openDialog("Data Entity is created succesfully","dataEntity")
      },
        error:(error)=>{console.warn(error)}
      })
    }else{
      let data:string = this.entityForm.get('name')?.value || "";
      console.log(data)
      const requestBody = {
        update_id:0,
        create_id:0,
        name: data
      }
      this.entityData.updateEntity(this.router.snapshot.params['identifier'],requestBody).subscribe({
        next:(data)=>{          
          this.entityForm.disable();
          this.showUpdateButton=false;
          this.openDialog("DataEntity is updated succesfully",`dataEntity/${this.router.snapshot.params['identifier']}`);
        
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
