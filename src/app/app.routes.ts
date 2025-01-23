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
import {SchermataBoomComponent} from './Component/schermata-boom/schermata-boom.component';
import {SchermataDesktopComponent} from './Component/schermata-desktop/schermata-desktop.component';
import { SchermataInizialeComponent } from './Component/schermata-iniziale/schermata-iniziale.component';
import { SchermataLoginComponent } from './Component/schermata-login/schermata-login.component';
import { SchermataRegistratiComponent } from './Component/schermata-registrati/schermata-registrati.component';
import { BedroomComponent } from './Component/bedroom/bedroom.component';  // Assicurati di importare il componente
import {SchermataTutorialComponent} from './Component/schermata-tutorial/schermata-tutorial.component';
import {SchermataBrainjComponent} from './Component/schermata-brainj/schermata-brainj.component';  // Importa anche il LeaderboardComponent
import { LeaderboardComponent } from './Component/leaderboard/leaderboard.component';
import {LibroVerdeComponent} from './Component/libro-verde/libro-verde.component';
import {LibroBluComponent} from './Component/libro-blu/libro-blu.component';
import {SchermataBenvenutoComponent} from './Component/schermata-benvenuto/schermata-benvenuto.component';
import {SchermataGraduationComponent} from './Component/schermata-graduation/schermata-graduation.component';
import {SchermataLoseComponent} from './Component/schermata-lose/schermata-lose.component';


export const routes: Routes = [
  {path: '', component: SchermataInizialeComponent},
  {path: 'login', component: SchermataLoginComponent},
  {path: 'register', component: SchermataRegistratiComponent},
  {path: 'desktop', component: SchermataDesktopComponent},
  {path: 'boom', component: SchermataBoomComponent},
  { path: 'bedroom', component: BedroomComponent},
  { path: 'leaderboard', component: LeaderboardComponent},
  { path: 'greenBook', component: LibroVerdeComponent},
  { path: 'blueBook', component: LibroBluComponent},
  {path: 'tutorial', component: SchermataTutorialComponent},
  {path: 'brainj', component: SchermataBrainjComponent},
  {path: 'benvenuto', component: SchermataBenvenutoComponent},
  {path: 'graduation', component: SchermataGraduationComponent},
  {path: 'lose', component: SchermataLoseComponent},

];

