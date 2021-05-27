import { Component, OnInit } from '@angular/core';
import { ReghorasService } from './reghoras.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reghoras',
  templateUrl: './reghoras.component.html',
  styleUrls: ['./reghoras.component.css']
})
export class ReghorasComponent implements OnInit {

  daily = {
    dailyId: '',
    dailyUser: '',
    type: '',
    dailyIn: '',
    dailyOut: ''   
  };
  submitted = false;

  constructor (private reghorasService: ReghorasService) 
  {

  }

  ngOnInit(): void {

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
