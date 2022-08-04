import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SourceService {
  

  URL="http://127.0.0.1:5000/bot/datasources"
  constructor(private http: HttpClient) { }
  allSources(){
    return this.http.get(this.URL)
  }
  source(identifier:any){    
    return this.http.get(`${this.URL}/${identifier}`)
  }
  saveSource(data:any){
    return this.http.post(this.URL,data)
  }
  updateSource(identifier:any,data:any){    
    return this.http.put(`${this.URL}/${identifier}`,data)
  }
  deleteSource(identifier:any){    
    return this.http.delete(`${this.URL}/${identifier}`)
  }
}
