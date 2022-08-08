import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SetService {
  URL="http://127.0.0.1:5000/bot/datasets"
  constructor(private http: HttpClient) { }
  allSet(){
    return this.http.get(this.URL)
  }
  set(identifier:any){    
    return this.http.get(`${this.URL}/${identifier}`)
  }
  saveSet(data:any){
    return this.http.post(this.URL,data)
  }
  updateSet(identifier:any,data:any){    
    return this.http.put(`${this.URL}/${identifier}`,data)
  }
  deleteSet(identifier:any){    
    return this.http.delete(`${this.URL}/${identifier}`)
  }
}
