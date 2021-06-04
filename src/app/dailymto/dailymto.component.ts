import { Component, OnInit } from '@angular/core';
import {Daily} from '../models/daily'
import {MessageService} from '../messages/message.service'
import {DailymtoserviceService} from './dailymtoservice.service'

@Component({
  selector: 'app-dailymto',
  templateUrl: './dailymto.component.html',
  styleUrls: ['./dailymto.component.css']
})
export class DailymtoComponent implements OnInit {
  title ="Mantenimiento de registros diarios"
  submitted = false;
  projectAdd=false;
  miDaily:  Daily= {} as Daily;
  curRecord!: number;
  records!: number;
  miDailys: Daily [] = [];
  constructor(public dailymtoService: DailymtoserviceService, public messageService: MessageService) { }

  ngOnInit(): void {
    this.getAllDailys();
  }

  // carga todos los Dailys en un array
  getAllDailys() {
    console.log(this.miDaily);
    this.dailymtoService.getAll()
      .subscribe(
        response => {
          this.miDailys= []
          this.miDailys=response;
          console.log("-----------------getAll")
          console.log(response)
          this.miDailys.sort((a,b) => a.dailyInout.localeCompare(b.dailyInout));
          this.records=this.miDailys.length;
          this.curRecord=0;
          this.miDaily=this.miDailys[0];
          this.submitted = false;

        },
        error => {
          console.log(error);
        });
  }

  // carga primer Daily
  getFirst(): void {
    this.miDaily=this.miDailys[0];
    this.curRecord=0;
  }
  // carga siguiente Daily
  getNext(): void {

    if (this.curRecord < this.miDailys.length-1) {
       this.curRecord=this.curRecord+1;
       this.miDaily=this.miDailys[this.curRecord];
    } else {
      this.messageService.add("Ya está en el último registro")
    }
    console.log("-----------------next")
    console.log(this.curRecord)
    console.log(this.miDaily)
  }
  // carga último Daily
  getLast(): void {
    this.miDaily=this.miDailys[this.miDailys.length-1];
    this.curRecord=this.miDailys.length-1;
  }
  // carga anterior Daily
  getPrevious(): void {

    if (this.curRecord > 0) {
      this.curRecord=this.curRecord-1;
      this.miDaily=this.miDailys[this.curRecord];
    } else {
      this.messageService.add("Ya está en el primer registro")
    }
    console.log("-----------------previous")
    console.log(this.curRecord)
    console.log(this.miDaily)
  }
  // modifica usuario
  put(): void {
    // cambia el array
    this.miDailys[this.curRecord]=this.miDaily;
 
    // modificar daily
    console.log(this.miDaily);
    console.log("------------------------- userId antes") 
    this.dailymtoService.put(this.miDaily)
      .subscribe(
        response => {
          console.log(response);
          console.log("------------------------- userId despues") 
          //this.miDaily=response;
          this.submitted = true;
        },
        error => {
          console.log(error);
    });

  }

  // borra usuario
  delete(): void {
    this.dailymtoService.delete(this.miDaily)
      .subscribe(
        response => {
          console.log ("---------------DeleteMto-----------------------")
          console.log(response);
          this.miDaily=response;
          this.submitted = true;
        },
        error => {
          console.log(error);
    });

    // cambia el array
    this.miDailys.splice(this.curRecord);
    this.miDaily=this.miDailys[0];
    this.curRecord=0;
  }

  // Pantalla añade un usuario
  addDaily(): void{
        // inicializa variablesS
        this.newDaily();
        // pantalla añadir project
        this.projectAdd=true;
  }

// añade un usuario
  saveDaily(): void {
    console.log(this.miDaily);
    this.dailymtoService.create(this.miDaily)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
    });
    // cambia el array
    this.miDailys.push(this.miDaily);
    this.miDaily=this.miDailys[0];
    this.curRecord=0;
    this.records=this.miDailys.length;
    this.getAllDailys
    this.projectAdd=false;
  }

  // inicializa usuario
  newDaily(): void {
    this.submitted = false;
    this.miDaily = {
      dailyId: '',
      dailyUser: '',
      dailyType: 'Entrada',
      dailyInout: '',
      userId: '',
    };
  }

}