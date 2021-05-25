import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(private http: HttpClient, private cookies: CookieService) {}

  // llamada a la API
  login(user: any): Observable<any> {
    return this.http.post("https://localhost:44300/api/Login",user);
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

  // recupera user con un id determinado
  getUser() {
  //  return this.http.post("https://localhost:44300/api/User",userId);
  }

  // recupera user actual
  getUserLogged() {
    const token = this.getToken();
    // hay que sacar el id del usuario actual
    return this.http.get("https://localhost:44300/api/User");  }
}