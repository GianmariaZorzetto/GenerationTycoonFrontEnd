// import { Routes } from '@angular/router';
// import {SchermataInizialeComponent} from './Component/schermata-iniziale/schermata-iniziale.component';
// import {SchermataLoginComponent} from './Component/schermata-login/schermata-login.component';
// import {SchermataRegistratiComponent} from './Component/schermata-registrati/schermata-registrati.component';
//
// export const routes: Routes = [
//   {path: '', component: SchermataInizialeComponent},
//   {path: 'login', component: SchermataLoginComponent},
//   {path: 'register', component: SchermataRegistratiComponent}
// ];


import { Routes } from '@angular/router';
import { SchermataInizialeComponent } from './Component/schermata-iniziale/schermata-iniziale.component';
import { SchermataLoginComponent } from './Component/schermata-login/schermata-login.component';
import { SchermataRegistratiComponent } from './Component/schermata-registrati/schermata-registrati.component';
import { BedroomComponent } from './Component/bedroom/bedroom.component';  // Assicurati di importare il componente
import { LeaderboardComponent } from './Component/leaderboard/leaderboard.component';
import {LibroVerdeComponent} from './Component/libro-verde/libro-verde.component';
import {LibroBluComponent} from './Component/libro-blu/libro-blu.component';


export const routes: Routes = [
  { path: '', component: SchermataInizialeComponent },
  { path: 'login', component: SchermataLoginComponent },
  { path: 'register', component: SchermataRegistratiComponent },
  { path: 'bedroom', component: BedroomComponent },
  { path: 'leaderboard', component: LeaderboardComponent },
  { path: 'greenBook', component: LibroVerdeComponent },
  { path: 'blueBook', component: LibroBluComponent }
];

