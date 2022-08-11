import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { debounceTime, map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  // placeholder="Miner"
  // enteredSearchValue : string ='';
  // searchResult:any=''
  endpoint:any
  searchResult:any=[];
  searchForm = new FormGroup({
    searchInput: new FormControl('')
  })

  @Input() data:any;
  @Input() placeHolder:string='';

  constructor(private router: Router) {
  }

  onSelect = (value:any) => {
    let route:any
    if(this.router.url=='/parameter')
      route=this.data["endPoint"]+"/"+value.identifer    
    else
      route=this.data["endPoint"]+"/"+value.identifier    
    this.router.navigate([route]);
  }



  ngOnInit(): void {
    this.searchForm
      .get('searchInput')
      ?.valueChanges.pipe(
        debounceTime(500),
        startWith(''),
        map((value) => this.search(value))
      )
      .subscribe();
  }
  search(searchValue:any){
    if(this.data){
      this.searchResult = this.data['searchData']?.filter(function (el : any) {
        if (!searchValue){
          return ''
        }   
        return el.name.toLowerCase().startsWith(searchValue.toLowerCase())
      });
    }else{
      this.searchResult=''
    }
    
  }
  
   

 





  
}
