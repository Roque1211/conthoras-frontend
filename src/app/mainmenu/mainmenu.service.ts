import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MainMenuService {

  constructor(private http: HttpClient) { }
  // llamada a la API
  getrole(token: any): Observable<ArrayBuffer> {
    return this.http.get("https://localhost:44300/api/session/getrole",token)
                          
  }
}
