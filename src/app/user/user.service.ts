import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { CookieService } from "ngx-cookie-service";

/* control de request*/
const baseUrl="https://localhost:44300/api/user"
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

/* control de token y user en cookies */
const USER_KEY = 'auth-user';


@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(private http: HttpClient, private cookies: CookieService) {}

  // llamada GetAll
  getAll(): Observable<any> {

    return this.http.get(baseUrl + "/getall/");
  }

    // llamada a la API login
    login(user: any): Observable<any> {
      console.log(user)
      return this.http.post("https://localhost:44300/api/login", user, httpOptions);
    }

  // guarda token en una cookie
  setToken(token: string) {
    this.cookies.set("token", token);
  }

  // devuelve token desde una cookie
  getToken() {
    return this.cookies.get("token");
  }

 //borra cookies al final de la sesion
  signOut() {
    window.sessionStorage.clear();
  }
  // save user actual en cookies
  public saveUser(user: any) {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }
  // recupera user from cookies
  public getUser() {
    return JSON.parse(sessionStorage.getItem(USER_KEY)!.toString());
  }
}

