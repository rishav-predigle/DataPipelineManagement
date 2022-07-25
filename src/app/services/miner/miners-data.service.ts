import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MinersDataService {
  
  URL="http://127.0.0.1:5000/bot/dataminers"
  constructor(private http: HttpClient) { }
  miners(){
    return this.http.get(this.URL)
  }
  saveMiner(data:any){
    return this.http.post(this.URL,data)
  }
}
