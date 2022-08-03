import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StageService {

  URL="http://127.0.0.1:5000/bot/datastages"
  constructor(private http: HttpClient) { }
  allStage(){
    return this.http.get(this.URL)
  }
  stage(identifier:any){    
    return this.http.get(`${this.URL}/${identifier}`)
  }
  saveStage(data:any){
    return this.http.post(this.URL,data)
  }
  updateStage(identifier:any,data:any){    
    return this.http.put(`${this.URL}/${identifier}`,data)
  }
  deleteStage(identifier:any){    
    return this.http.delete(`${this.URL}/${identifier}`)
  }
}
