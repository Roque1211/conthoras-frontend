import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "login/src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(private http: HttpClient) {}

  login(user: any): Observable<any> {

    return this.http.post("https://localhost:44300/api/Login", user);
  }
}