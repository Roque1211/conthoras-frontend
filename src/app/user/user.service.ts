import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { CookieService } from "ngx-cookie-service";

const baseUrl="https://localhost:44300/api/user"

@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(private http: HttpClient, private cookies: CookieService) {}

  // llamada a la API
  login(user: any): Observable<any> {
    return this.http.post("https://localhost:44300/api/login",user);
  }

  // guarda token en una cookie
  setToken(token: string) {
    console.log("settoken: " + token);
    this.cookies.set("token", token);
  }

  // devuelve token desde una cookie
  getToken() {
    console.log("getToken--------------------------: " + this.cookies.get("token"))
    return this.cookies.get("token");
  }

  // recupera user actual
  getUserLogged() {
    const token = this.getToken();
    return this.http.get(baseUrl + '/get/?token=' + token);  }
}