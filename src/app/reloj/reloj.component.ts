import { Component, OnInit } from '@angular/core';
import {XsegundoService, valorReloj} from '../reloj/reloj.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reloj',
  templateUrl: './reloj.component.html',
  styleUrls: ['./reloj.component.css']
})

export class RelojComponent implements OnInit {
  datos$!: Observable<valorReloj>;
  hora!: number;
  minutos!: string;
  dia!: string;
  fecha!: string;
  ampm!: string;
  segundos!: string;

  constructor(private segundo: XsegundoService) { }

    ngOnInit() {
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

}
