import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from './login/login.component';
import {MainmenuComponent} from "./mainmenu/mainmenu.component";
import {UserComponent} from "./user/user.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import { ReghorasComponent } from './reghoras/reghoras.component';
import { QueryuserComponent } from './queryuser/queryuser.component';
import { DailylistComponent } from './dailylist/dailylist.component';
import { TablasComponent } from './tablas/tablas.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { UsermtoComponent } from './usermto/usermto.component';

const routes: Routes = [
  {path: "", redirectTo: 'login', pathMatch: "full"},
  {path: "login", component: LoginComponent, pathMatch: "full"},
  {path: "mainMenu", component: MainmenuComponent, pathMatch: "full"},
  {path: "user", component: UserComponent, pathMatch: "full"},
  {path: "dashboard", component: DashboardComponent, pathMatch: "full"},
  {path: "reghoras", component: ReghorasComponent, pathMatch: "full"},
  {path: "queryuser", component: QueryuserComponent, pathMatch: "full"},
  {path: "dailylist", component: DailylistComponent, pathMatch: "full"},
  {path: "tablas", component: TablasComponent, pathMatch: "full"},
  {path: "consultas", component: ConsultasComponent, pathMatch: "full"},
  {path: "usermto", component: UsermtoComponent, pathMatch: "full"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routing=RouterModule.forRoot(routes);