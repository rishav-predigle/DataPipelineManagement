import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MinersDataService } from 'src/app/services/miner/miners-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  enteredSearchValue : string ='';
  searchResult:any=''
  miners:any
  constructor(private minerData:MinersDataService ) { 
    minerData.miners().subscribe( (data:any)=>{
      this.miners=data["dataminers"]
    })

    
  }


  ngOnInit(): void {
  }

  @Output()
  displayChanged : EventEmitter<boolean>=new EventEmitter<boolean>();

  checkDisplay(){
    if(this.enteredSearchValue=='')
      this.displayChanged.emit(true)
    else
      this.displayChanged.emit(false)
  }
  onSearchTextChanged(){
    this.checkDisplay()
    console.log(this.enteredSearchValue)
    this.search(this.enteredSearchValue)
  }

  search(searchValue:string){
    this.searchResult = this.miners.filter(function (el : any) {
      if (searchValue==''){
        return ''
      }    
      return el.name.toLowerCase().startsWith(searchValue.toLowerCase())
    });
    console.log(this.searchResult)
  }
}
