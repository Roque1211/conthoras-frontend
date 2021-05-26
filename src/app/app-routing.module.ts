import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import {LoginComponent} from './login/login.component';
import {MainmenuComponent} from "./mainmenu/mainmenu.component";
import {UserComponent} from "./user/user.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import { ReghorasComponent } from './reghoras/reghoras.component';
import { QueryuserComponent } from './queryuser/queryuser.component';

const routes: Routes = [
  {path: "", redirectTo: 'login', pathMatch: "full"},
  {path: "login", component: LoginComponent, pathMatch: "full"},
  {path: "mainMenu", component: MainmenuComponent, pathMatch: "full"},
  {path: "user", component: UserComponent, pathMatch: "full"},
  {path: "dashboard", component: DashboardComponent, pathMatch: "full"},
  {path: "reghoras", component: ReghorasComponent, pathMatch: "full"},
  {path: "queryuser", component: QueryuserComponent, pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routing=RouterModule.forRoot(routes);