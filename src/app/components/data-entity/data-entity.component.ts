import { Component, OnInit } from '@angular/core';
import { EntityDataService } from 'src/app/services/Entity/entity-data.service';
@Component({
  selector: 'app-data-entity',
  templateUrl: './data-entity.component.html',
  styleUrls: ['./data-entity.component.scss']
})
export class DataEntityComponent implements OnInit {
  dataEntity:any
  constructor( private entityData:EntityDataService) { 
    entityData.allEntities().subscribe({
      next:(data:any)=>{
        this.dataEntity=data["dataentities"];
        console.log("entity ",this.dataEntity);  
      },
      error:(error)=>{console.warn(error)}
    })
  }
  ngOnInit(): void {
  }

}
