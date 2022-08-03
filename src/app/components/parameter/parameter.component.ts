import { Component, OnInit } from '@angular/core';
import { ParamService } from 'src/app/services/parameter/param.service';

@Component({
  selector: 'app-parameter',
  templateUrl: './parameter.component.html',
  styleUrls: ['./parameter.component.scss']
})
export class ParameterComponent implements OnInit {
  toDisplay=true
  params:any
  constructor( private paramData:ParamService) { 
    paramData.dataparams().subscribe({
      next:(data:any)=>{this.params=data["dataparams"];console.log("params checking",this.params)},
      error:(error)=>{console.warn(error)}
    })
  }

  ngOnInit(): void {
  }

}
