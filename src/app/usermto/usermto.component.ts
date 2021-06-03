import { Component, OnInit } from '@angular/core';
import {User} from '../models/User';
import {UsermtoService} from './usermto.service';
import {MessageService} from '../messages/message.service'

@Component({
  selector: 'app-usermto',
  templateUrl: './usermto.component.html',
  styleUrls: ['./usermto.component.css']
})



export class UsermtoComponent implements OnInit {
  submitted = false;
  userAdd=false;
  nick!: string;
  miUser:  User= {} as User;
  curRecord!: number;
  records!: number;
  miUsers: User [] = [];
  llogin:string="";
  flogin:string="";
  constructor(public usermtoService: UsermtoService, public messageService: MessageService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  // carga todos los usuarios en un array
  getAllUsers() {
    console.log(this.miUser);
    this.usermtoService.getAll()
      .subscribe(
        response => {
          this.miUsers= []
          this.miUsers=response;
          this.miUsers.sort((a,b) => a.nick.localeCompare(b.nick));
          this.records=this.miUsers.length;
          this.curRecord=0;
          this.miUser=this.miUsers[0];
          this.submitted = false;
          console.log(this.miUser)
        },
        error => {
          console.log(error);
        });
  }

  // carga primer usuario
  getFirst(): void {
    this.miUser=this.miUsers[0];
    this.curRecord=0;
  }
  // carga siguiente usuario
  getNext(): void {

    if (this.curRecord < this.miUsers.length-1) {
       this.curRecord=this.curRecord+1;
       this.miUser=this.miUsers[this.curRecord];
    } else {
      this.messageService.add("Ya está en el último registro")
    }
    console.log("-----------------next")
    console.log(this.curRecord)
    console.log(this.miUser)
  }
  // carga último usuario
  getLast(): void {
    this.miUser=this.miUsers[this.miUsers.length-1];
    this.curRecord=this.miUsers.length-1;
  }
  // carga anterior usuario
  getPrevious(): void {

    if (this.curRecord > 0) {
      this.curRecord=this.curRecord-1;
      this.miUser=this.miUsers[this.curRecord];
    } else {
      this.messageService.add("Ya está en el primer registro")
    }
    console.log("-----------------previous")
    console.log(this.curRecord)
    console.log(this.miUser)
  }
  // modifica usuario
  put(): void {
    // cambia el array
    this.miUsers[this.curRecord]=this.miUser;

    console.log(this.miUser);
    this.usermtoService.put(this.miUser)
      .subscribe(
        response => {
          console.log(response);
          this.miUser=response;
          this.submitted = true;
        },
        error => {
          console.log(error);
        });

  }
  // borra usuario
  delete(): void {
    this.usermtoService.delete(this.miUser)
      .subscribe(
        response => {
          console.log ("---------------DeleteMto-----------------------")
          console.log(response);
          this.miUser=response;
          this.submitted = true;
        },
        error => {
          console.log(error);
    });

    // cambia el array
    this.miUsers.splice(this.curRecord);
    this.miUser=this.miUsers[0];
    this.curRecord=0;
  }

  // Pantalla añade un usuario
  addUser(): void{
        // inicializa variablesS
        this.newUser();
        // pantalla añadir user
        this.userAdd=true;
  }

// añade un usuario
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
    // cambia el array
    this.miUsers.push(this.miUser);
    this.miUser=this.miUsers[0];
    this.curRecord=0;
    this.records=this.miUsers.length;
    this.getAllUsers
    this.userAdd=false;
  }

  // inicializa usuario
  newUser(): void {
    this.submitted = false;
    this.miUser = {
      id: '',
      nick :'',
      pwd : '',
      name: '',
      surname: '',
      mail: '',
      rol: '',
      lastlogin: '',
      firstlogin: '',
    };
  }

}
