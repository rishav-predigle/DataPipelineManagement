import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EntityDataService {
  URL="http://127.0.0.1:5000/bot/dataentities"
  constructor(private http: HttpClient) { }
  allEntities(){
    return this.http.get(this.URL)
  }
  entity(identifier:any){    
    return this.http.get(`${this.URL}/${identifier}`)
  }
  saveEntity(data:any){
    return this.http.post(this.URL,data)
  }
  updateEntity(identifier:any,data:any){    
    return this.http.put(`${this.URL}/${identifier}`,data)
  }
  deleteEntity(identifier:any){    
    return this.http.delete(`${this.URL}/${identifier}`)
  }

}
