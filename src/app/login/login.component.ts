import { Component, OnInit } from '@angular/core';
import { UsersService } from "../user/user.service";
import { Router } from '@angular/router';
import { MessageService } from '../messages/message.service';
import {MainMenuService } from '../mainmenu/mainmenu.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usr: string;
  pass: string;
  miUser: any;

  constructor(public usersService:UsersService, public router: Router,
                private messageService: MessageService, private mainmenuService: MainMenuService) {
    this.usr="";
    this.pass="";
   }

  ngOnInit(): void {  }

  login() {

    const user = {mail: this.usr, pwd: this.pass};

    this.usersService.login(user).subscribe( data => {
      // devuelve token en data y lo guarda en cookies
      this.usersService.setToken(data)
      
      // devuelve el usuario y lo guarda en cookies
      this.mainmenuService.getrole(this.usersService.getToken())
        .subscribe(
            (        data: any) => {
              this.usersService.saveUser(data)
              this.messageService.add('Bienvenido.' 
                                      + data.name + " " 
                                      + data.surname 
                                      + ' te has logeado con el rol de ' 
                                      + data.rol);
            },
            error => {
              console.log(error);
            });
   
      this.router.navigateByUrl('/reghoras');
    },
    error => {
      this.messageService.add('Usuario o contraseña incorrecta');
    });
  }

}
