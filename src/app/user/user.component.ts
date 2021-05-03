import { Component, OnInit } from '@angular/core';
import  { User } from '../models/User'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    user: User = {
      id:"una id",
      nick: "nick",
      pwd : "1234",
      name: "Un nombre",
      surname: "un surnme",
      mail: "unmail",
      rol: "un rol ",
      last_login: "un last login",
      first_login: "un first login"
    };


  constructor() { }

  ngOnInit(): void {
  }

}
