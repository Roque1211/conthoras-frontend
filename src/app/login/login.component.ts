import { Component, OnInit } from '@angular/core';
import { UsersService } from "../user/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usr: string;
  pass: string;

  constructor(public usersService:UsersService) {
    this.usr="";
    this.pass="";
   }

  ngOnInit(): void {
  }

  login() {
    console.log(this.usr);
    console.log(this.pass);
    const user = {mail: this.usr, pwd: this.pass};
    this.usersService.login(user).subscribe( data => {
      console.log(data);
    });
  }

}
