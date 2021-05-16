import { Component } from '@angular/core';
import { MessageService } from './messages/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Control de horas';
  
  constructor(private messageService: MessageService) {
    this.messageService.add('Introduzca sus credenciales');
  }
  
}
