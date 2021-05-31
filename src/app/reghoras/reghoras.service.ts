import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl="https://localhost:44300/api/daily";

@Injectable({
  providedIn: 'root'
})

export class ReghorasService {

  constructor(public router: Router, private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }

  get(id:any): Observable<any> {
    return this.http.get(baseUrl + '/' + id);
  }

  create(data:any): Observable<any> {
    console.log(data);
    return this.http.post(baseUrl + '/post/', data);
  }

  update(id:any, data:any): Observable<any> {
    return this.http.put(baseUrl + '/put/' + id, data);
  }

  delete(id:any): Observable<any> {
    return this.http.delete(baseUrl + '/delete/' + id);
  }

  findByname(name:any): Observable<any> {
    return this.http.get(baseUrl + '?name=' + name);
  }
}
