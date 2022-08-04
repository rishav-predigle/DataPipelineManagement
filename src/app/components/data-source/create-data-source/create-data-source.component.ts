import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { SourceService } from 'src/app/services/dataSource/source.service';
import { PopUpComponent } from '../../pop-up/pop-up.component';
@Component({
  selector: 'app-create-data-source',
  templateUrl: './create-data-source.component.html',
  styleUrls: ['./create-data-source.component.scss']
})
export class CreateDataSourceComponent implements OnInit {

  flag:any
  showCreateButton=false
  showUpdateButton=false
  identifier:any
  SourceForm = new FormGroup({
    name : new FormControl('',[Validators.required]),
    description : new FormControl('',[Validators.required]),
    address : new FormControl('',[Validators.required])
  })


  constructor(private router: ActivatedRoute,private sourceData:SourceService,private dialogref: MatDialog) { }
  
  receiveFlag(data:any){
    if(data){
      this.SourceForm.enable()
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
      this.setDefaultValues(null,null,null)
    }else{
      console.log("else 1")
      this.showCreateButton=false
      console.log("value flag ->",this.flag)
      this.sourceData.source(this.router.snapshot.params['identifier']).subscribe(
          {
            next: (data: any) => {
              this.setDefaultValues(data['datasource']['name'], data['datasource']['description'], data['datasource']['address'])
              this.SourceForm.disable();
            },
            error: (error) => { console.warn(error) }
          }
        )
    }
  }
  setDefaultValues(name: any, desc: any, add: any) {
    this.SourceForm.patchValue({ name: name, description: desc, address: add });
  }

  sourceSubmitForm(){
    if(!this.identifier){
      var data:any
      data=this.SourceForm.value
      console.log(data)
      data['update_id']=0
      data['create_id']=0
      console.log(data)
      this.sourceData.saveSource(data).subscribe({
        next:(data)=>{
          console.log(data)
          this.openDialog("Data Source is created succesfully","dataSource")
      },
        error:(error)=>{console.warn(error)}
      })
    }else{
      console.log(this.SourceForm);

      let tempdata:any = this.SourceForm.value
      tempdata['update_id']=0
      tempdata['create_id']=0
      console.log("data-> ",tempdata)
      this.sourceData.updateSource(this.router.snapshot.params['identifier'],tempdata).subscribe({
        next:(data)=>{
          this.SourceForm.disable();
          this.showUpdateButton=false;
          this.openDialog("DataSource is updated succesfully",`dataSource/${this.router.snapshot.params['identifier']}`);
        
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
