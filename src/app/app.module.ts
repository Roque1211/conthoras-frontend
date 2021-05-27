import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { AppRoutingModule, routing } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './messages/message.service';
import {MainMenuService} from './mainmenu/mainmenu.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReghorasComponent } from './reghoras/reghoras.component';
import { QueryuserComponent } from './queryuser/queryuser.component';

import { RelojComponent } from './reloj/reloj.component';

@NgModule({
  declarations: [
    AppComponent,
    MainmenuComponent,
    UserComponent,
    LoginComponent,
    MessagesComponent,
    DashboardComponent,
    ReghorasComponent,
    QueryuserComponent,
    RelojComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [CookieService, MessageService, MainMenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
