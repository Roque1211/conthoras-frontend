import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl="https://localhost:44300/api/daily";

@Injectable({
  providedIn: 'root'
})
export class DailymtoserviceService {

  getAll():Observable<any> {
    return this.http.get(baseUrl + '/getall/'); 
   }
  
  constructor(private http: HttpClient) { }

  create(data:any): Observable<any> {
    console.log("--------------Create Service--------------------")
    console.log(data);
    console.log("--------------Create Service--------------------")
    return this.http.put(baseUrl + '/post/', data);
  }

  delete(data:any): Observable<any> {

    return this.http.put(baseUrl + '/delete/', data);
  }

  put(data:any): Observable<any> {
    console.log("--------------GetDailyUserId Service put--------------------")
    console.log(data);
    console.log("--------------GetDailyUserId Service--------------------")
    return this.http.put(baseUrl + '/put/', data);
  }


  
}
