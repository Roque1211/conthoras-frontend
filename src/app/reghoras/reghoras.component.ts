import { Component, OnInit } from '@angular/core';
import { ReghorasService } from './reghoras.service';
import {XsegundoService, valorReloj} from '../watch/watch.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reghoras',
  templateUrl: './reghoras.component.html',
  styleUrls: ['./reghoras.component.css']
})
export class ReghorasComponent implements OnInit {
  datos$: Observable<valorReloj>;
  hora: number;
  minutos: string;
  dia: string;
  fecha: string;
  ampm: string;
  segundos: string;

  daily = {
    dailyId: '',
    dailyUser: '',
    type: '',
    dailyIn: '',
    dailyOut: ''   
  };
  submitted = false;

  constructor (private reghorasService: ReghorasService, private segundo: XsegundoService) 
  {
    this.datos$=new Observable<valorReloj>();
    this.hora=0;
    this.minutos='';
    this.dia='';
    this.fecha='';
    this.ampm='';
    this.segundos='';
  }

  ngOnInit(): void {
    this.datos$=this.segundo.getInfoReloj();
    this.datos$.subscribe(x => {
      this.hora = x.hora;
      this.minutos = x.minutos;
      this.dia = x.diadesemana;
      this.fecha = x.diaymes;
      this.ampm = x.ampm;
      this.segundos = x.segundo
    });
  }

  saveDaily(): void {
    const data = {
      dailyId: this.daily.dailyId,
      dailyUser: this.daily.dailyUser,
      type: this.daily.type,
      dailyIn: this.daily.dailyIn,
      dailyOut: this.daily.dailyOut
    };

    this.reghorasService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newDaily(): void {
    this.submitted = false;
    this.daily = {
      dailyId: '',
      dailyUser: '',
      type: '',
      dailyIn: '',
      dailyOut: ''
    };
  }

}
