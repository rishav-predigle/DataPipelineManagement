import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SetService } from 'src/app/services/dataSet/set.service';
import { PopUpComponent } from '../../pop-up/pop-up.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-manage-data-set',
  templateUrl: './manage-data-set.component.html',
  styleUrls: ['./manage-data-set.component.scss']
})
export class ManageDataSetComponent implements OnInit {

  flag:any
  showCreateButton=false
  showUpdateButton=false
  identifier:any
  setForm = new FormGroup({
    name : new FormControl('',[Validators.required]),
    description : new FormControl('',[Validators.required])
  })
  constructor(private router: ActivatedRoute,private setData:SetService,private dialogref: MatDialog )  { }
  receiveFlag(data:any){
    if(data){
      this.setForm.enable()
      this.showUpdateButton=true
      this.showCreateButton=false

    }
  }
  ngOnInit(): void {
    this.identifier = this.router.snapshot.params['identifier']
    if(!this.identifier){
      this.showCreateButton=true
      this.setDefaultValues(null,null)
    }else{
      this.showCreateButton=false
      this.setData.set(this.router.snapshot.params['identifier']).subscribe(
          {
            next: (data: any) => {   
              console.log("data view",data);
                         
              this.setDefaultValues(data['dataset']['name'], data['dataset']['description'])
              this.setForm.disable();
            },
            error: (error) => { console.warn(error) }
          }
        )
    }
  }
  setDefaultValues(name: any,  description: any) {
    this.setForm.patchValue({ name: name, description: description });
  }

  setSubmitForm(){
    if(!this.identifier){
      let tempdata:any = this.setForm.value
      tempdata['update_id']=0
      tempdata['create_id']=0
      this.setData.saveSet(tempdata).subscribe({
        next:(data)=>{
          console.log(data)
          this.openDialog("Data Set is created succesfully","dataSet")
      },
        error:(error)=>{console.warn(error)}
      })
    }else{
      let tempdata:any = this.setForm.value
      tempdata['update_id']=0
      tempdata['create_id']=0
      this.setData.updateSet(this.router.snapshot.params['identifier'],tempdata).subscribe({
        next:(data)=>{
          this.setForm.disable();
          this.showUpdateButton=false;
          this.openDialog("DataSet is updated succesfully",`dataSet/${this.router.snapshot.params['identifier']}`);
        
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
