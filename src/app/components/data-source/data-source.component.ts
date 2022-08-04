import { Component, OnInit } from '@angular/core';
import { SourceService } from 'src/app/services/dataSource/source.service';

@Component({
  selector: 'app-data-source',
  templateUrl: './data-source.component.html',
  styleUrls: ['./data-source.component.scss']
})
export class DataSourceComponent implements OnInit {
  dataSources:any
  constructor( private sourceData:SourceService) { 
    sourceData.allSources().subscribe({
      next:(data:any)=>{this.dataSources=data["datasources"];},
      error:(error)=>{console.warn(error)}
    })
  }

  ngOnInit(): void {
  }

}
