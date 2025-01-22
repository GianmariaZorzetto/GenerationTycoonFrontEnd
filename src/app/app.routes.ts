import { Routes } from '@angular/router';
import {SchermataInizialeComponent} from './Component/schermata-iniziale/schermata-iniziale.component';
import {SchermataLoginComponent} from './Component/schermata-login/schermata-login.component';
import {SchermataRegistratiComponent} from './Component/schermata-registrati/schermata-registrati.component';

export const routes: Routes = [
  {path: '', component: SchermataInizialeComponent},
  {path: 'login', component: SchermataLoginComponent},
  {path: 'register', component: SchermataRegistratiComponent}
];
