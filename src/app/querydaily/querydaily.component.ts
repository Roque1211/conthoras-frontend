import { Component, OnInit } from '@angular/core';
import {DailymtoserviceService} from '../dailymto/dailymtoservice.service'

@Component({
  selector: 'app-querydaily',
  templateUrl: './querydaily.component.html',
  styleUrls: ['./querydaily.component.css']
})
export class QuerydailyComponent implements OnInit {

  dailys: any;
  title: string = "Consulta de registros diarios"
  constructor(public dailymtoserviceService: DailymtoserviceService) { }
  
  ngOnInit(): void {
    this.retrieveDailys();
  }

  retrieveDailys(): void {
    this.dailymtoserviceService.getAll()
      .subscribe(
        (        data: any) => {
          this.dailys = data;
          console.log("-------------------data----------------");
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
