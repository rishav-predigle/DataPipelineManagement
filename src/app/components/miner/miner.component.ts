import { Component, OnInit } from '@angular/core';
import { MinersDataService } from 'src/app/services/miner/miners-data.service';

@Component({
  selector: 'app-miner',
  templateUrl: './miner.component.html',
  styleUrls: ['./miner.component.scss']
})
export class MinerComponent implements OnInit {
  toDisplay = true;
  miners:any
  constructor(private minerData:MinersDataService ) { 
    minerData.miners().subscribe( (data:any)=>{
      this.miners=data["dataminers"]
    })
  }

  ngOnInit(): void {
  }

  check(display:boolean){
    this.toDisplay=display
  }
  // onSearchTextEntered(searchValue:string){
  //   if (searchValue==''){
  //     this.toDisplay=true
  //   }else{
  //     this.toDisplay=false
  //   }
  //   this.searchText=searchValue
  //   console.log(this.searchText)
  //   // console.log(typeof(this.miners));
  //   // console.log(this.miners)
  //   this.searchResult = this.miners.filter(function (el : any) {
  //     if (searchValue==''){
  //       return ''
  //     }    
  //     return el.name.toLowerCase().startsWith(searchValue.toLowerCase())
  //   });
  //   console.log(this.searchResult)
  // }


  

}
