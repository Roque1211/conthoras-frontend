import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UsersService} from '../user/user.service'




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  miUser;
  title;
  constructor(public router: Router, public usersService: UsersService) {
    this.title="DASHBOARD";
    this.miUser=this.usersService.getUser();
  }

  ngOnInit(): void {

  }

}

