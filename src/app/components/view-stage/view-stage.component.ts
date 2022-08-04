import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StageService } from 'src/app/services/dataStage/stage.service';

@Component({
  selector: 'app-view-stage',
  templateUrl: './view-stage.component.html',
  styleUrls: ['./view-stage.component.scss']
})
export class ViewStageComponent implements OnInit {
  toDisplay=true
  identifier:any
  viewStageForm = new FormGroup({
    name : new FormControl(''),
    description : new FormControl(''),
  })
  constructor( private router : ActivatedRoute,private stageData:StageService) { }
  ngOnInit(): void {
    console.log(this.router.snapshot.params['identifier'])
    
    this.identifier=this.router.snapshot.params['identifier']
    this.stageData.stage(this.router.snapshot.params['identifier']).subscribe(
      {
        next:(data:any)=>{
          console.log("data -> ",data)
          this.setDefaultValues(data['datastage']['name'],data['datastage']['description'])
          this.viewStageForm.disable();
        },
        error:(error)=>{console.warn(error)}
      }
    )
  }
  setDefaultValues(name:any,desc:any){
    this.viewStageForm.patchValue({name:name, description:desc});
  }
 

}
