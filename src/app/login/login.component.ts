import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usr: string;
  pass: string;

  constructor() {
    this.usr="";
    this.pass="";
   }

  ngOnInit(): void {
  }

  login() {
    console.log(this.usr);
    console.log(this.pass);
  }

}
