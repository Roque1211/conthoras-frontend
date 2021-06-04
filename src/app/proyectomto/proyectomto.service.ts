import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl="https://localhost:44300/api/project";

@Injectable({
  providedIn: 'root'
})

export class ProyectomtoService {

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
    console.log("--------------DeleteService--------------------")
    console.log(data);
    console.log("--------------DeleteService--------------------")
    return this.http.put(baseUrl + '/delete/', data);
  }

  put(data:any): Observable<any> {
    console.log("--------------put Service--------------------")
    console.log(data);
    console.log("--------------put Service--------------------")
    return this.http.put(baseUrl + '/put/', data);
  }
}
