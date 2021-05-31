import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const baseUrl = 'https://localhost:44300/api/daily';

@Injectable({
  providedIn: 'root'
})


export class DailyserviceService {


  constructor(private http: HttpClient) {

   }

  getAll(): Observable<any> {
    return this.http.get(baseUrl + "/getall/");
  }

  getAllUser(user: any): Observable<any> {
    return this.http.post(baseUrl + "/getalluser/",user);
  }
}
