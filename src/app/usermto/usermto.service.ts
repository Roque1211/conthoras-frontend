import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


const baseUrl="https://localhost:44300/api/user";

@Injectable({
  providedIn: 'root'
})
export class UsermtoService {
  
  constructor(private http: HttpClient) { }

  create(data:any): Observable<any> {
    console.log(data);
    return this.http.post(baseUrl + '/post/', data);
  }


}
