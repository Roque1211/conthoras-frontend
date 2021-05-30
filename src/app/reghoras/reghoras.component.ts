import { Component, OnInit } from '@angular/core';
import { ReghorasService } from './reghoras.service';
import { UsersService} from '../user/user.service';

@Component({
  selector: 'app-reghoras',
  templateUrl: './reghoras.component.html',
  styleUrls: ['./reghoras.component.css']
})
export class ReghorasComponent implements OnInit {

  dailytype: string;
  dailyInOut: string;  
  token: string; 
  submitted = false;

  constructor (private reghorasService: ReghorasService, private usersService: UsersService) 
  {
    this.dailyInOut='';
    this.dailytype='';
    this.token='';
  }

  ngOnInit(): void {

  }

  saveDaily(): void {
    this.token = this.usersService.getToken();

    const data = {
      dailytype: this.dailytype,
      dailyInOut: this.dailyInOut,
      token: this.token
    };

    console.log(data);
    
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
    this.dailytype= '';
    this.dailyInOut= '';
  }

}
