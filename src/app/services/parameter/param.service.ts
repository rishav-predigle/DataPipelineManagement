import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParamService {

  URL="http://127.0.0.1:5000/bot/dataparams"
  constructor(private http: HttpClient) { }
  dataparams(){
    return this.http.get(this.URL)
  }
  dataparam(identifier:any){    
    return this.http.get(`${this.URL}/${identifier}`)
  }
  saveParam(data:any){
    return this.http.post(this.URL,data)
  }
  updateParam(identifier:any,data:any){    
    return this.http.put(`${this.URL}/${identifier}`,data)
  }
  deleteParam(identifier:any){    
    return this.http.delete(`${this.URL}/${identifier}`)
  }
}
