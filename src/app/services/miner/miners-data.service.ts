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
  miner(identifier:any){    
    return this.http.get(`${this.URL}/${identifier}`)
  }
  saveMiner(data:any){
    return this.http.post(this.URL,data)
  }
  updateMiner(identifier:any,data:any){    
    return this.http.put(`${this.URL}/${identifier}`,data)
  }
  deleteMiner(identifier:any){    
    return this.http.delete(`${this.URL}/${identifier}`)
  }

}
