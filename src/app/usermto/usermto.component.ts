import { Component, OnInit } from '@angular/core';
import {User} from '../models/User';
import {UsermtoService} from './usermto.service';

@Component({
  selector: 'app-usermto',
  templateUrl: './usermto.component.html',
  styleUrls: ['./usermto.component.css']
})

export class UsermtoComponent implements OnInit {
  submitted = false;
  miUser!: User;

  constructor(public usermtoService: UsermtoService) { }

  ngOnInit(): void {
  }

  saveUser(): void {

    console.log(this.miUser);
    
    this.usermtoService.create(this.miUser)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newUser(): void {
    this.submitted = false;
    this.miUser = {
      id: '',
      nick : '',
      pwd : '',
      name: '',
      surname: '',
      mail: '',
      rol: '',
      last_login: '',
      first_login: ''
    };
  }
}
