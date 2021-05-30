import { Component, OnInit } from '@angular/core';
import {DailyserviceService} from './dailyservice.service'

@Component({
  selector: 'app-dailylist',
  templateUrl: './dailylist.component.html',
  styleUrls: ['./dailylist.component.css']
})


export class DailylistComponent implements OnInit {
  title = '';
  dailys: any;

  constructor(private dailyService: DailyserviceService) { }

  ngOnInit(): void {
    this.retrieveDailys();
  }

  retrieveDailys(): void {
    this.dailyService.getAll()
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
