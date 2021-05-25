import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { UsersService } from "../user/user.service";

@Injectable({
  providedIn: 'root'
})
export class MainMenuService {

  constructor(private http: HttpClient, private usersService: UsersService) { }
  // llamada a la API
  getrole(token: any): Observable<ArrayBuffer> {
    
    console.log("mainmenuservice: " + token)
    return this.http.get("https://localhost:44300/api/session/getrole", token)
                          
  }
}
