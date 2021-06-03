import { Component, OnInit } from '@angular/core';
import {DailyserviceService} from './dailyservice.service'
import { UsersService } from '../user/user.service';

@Component({
  selector: 'app-dailylist',
  templateUrl: './dailylist.component.html',
  styleUrls: ['./dailylist.component.css']
})


export class DailylistComponent implements OnInit {
  title = '';
  dailys: any;
  miUser;
  constructor(private dailyService: DailyserviceService,  userService: UsersService) { 
    this.miUser=userService.getUser();
  }

  ngOnInit(): void {
    if (this.miUser['rol'] == "Administrador") {
      this.retrieveDailys()
    } else {
      this.retrieveDailysUser(this.miUser);
    }

  }

  retrieveDailys(): void {
    this.dailyService.getAll()
      .subscribe(
        (        data: any) => {
          this.dailys = data;
          console.log(data);
          console.log("-------------------data----------------");
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  retrieveDailysUser(user: any): void {
    this.dailyService.getAllUser(user)
      .subscribe(
        (        data: any) => {
          this.dailys = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
