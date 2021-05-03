import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from "./register/register.component";
import {MainmenuComponent} from "./mainmenu/mainmenu.component";
import {UserComponent} from "./user/user.component";

const routes: Routes = [
  {path: "", component: AppComponent, pathMatch: "full"},
  {path: "login", component: LoginComponent, pathMatch: "full"},
  {path: "register", component: RegisterComponent, pathMatch: "full"},
  {path: "mainMenu", component: RegisterComponent, pathMatch: "full"},
  {path: "user", component: RegisterComponent, pathMatch: "full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routing=RouterModule.forRoot(routes);