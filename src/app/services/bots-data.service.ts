import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BotsDataService {
  URL="http://127.0.0.1:5000/bot/databots"
  constructor(private http: HttpClient) { }

  bots(){
    return this.http.get(this.URL)
  }
}
