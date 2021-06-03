import { Component, OnInit } from '@angular/core';
import {UsersService} from '../user/user.service'

@Component({
  selector: 'app-queryuser',
  templateUrl: './queryuser.component.html',
  styleUrls: ['./queryuser.component.css']
})
export class QueryuserComponent implements OnInit {
  users: any;
  title: string = "Consulta de usuarios"
  constructor(public usersService: UsersService) { }

  ngOnInit(): void {
    this.retrieveUsers();
  }

  retrieveUsers(): void {
    this.usersService.getAll()
      .subscribe(
        (        data: any) => {
          this.users = data;
          console.log("-------------------data----------------");
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
