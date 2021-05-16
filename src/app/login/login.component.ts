import { Component, OnInit } from '@angular/core';
import { UsersService } from "../user/user.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usr: string;
  pass: string;

  constructor(public usersService:UsersService, public router: Router) {
    this.usr="";
    this.pass="";
   }

  ngOnInit(): void {
  }

  login() {
    // salida en consola
    console.log(this.usr);
    console.log(this.pass);

    const user = {mail: this.usr, pwd: this.pass};

    this.usersService.login(user).subscribe( data => {
      // devuelve token en data y lo guarda en cookies
      this.usersService.setToken(data.token)
      this.router.navigateByUrl('/MainMenu');
      // token en consola
      console.log(data);
    },
    error => {
      console.log(error);
    });
  }

}
