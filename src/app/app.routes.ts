import { Routes } from '@angular/router';
import {SchermataBoomComponent} from './Component/schermata-boom/schermata-boom.component';
import {SchermataDesktopComponent} from './Component/schermata-desktop/schermata-desktop.component';
import { SchermataInizialeComponent } from './Component/schermata-iniziale/schermata-iniziale.component';
import { SchermataLoginComponent } from './Component/schermata-login/schermata-login.component';
import { SchermataRegistratiComponent } from './Component/schermata-registrati/schermata-registrati.component';
import { BedroomComponent } from './Component/bedroom/bedroom.component';  // Assicurati di importare il componente
import { LeaderboardComponent } from './Component/leaderboard/leaderboard.component';
import {SchermataTutorialComponent} from './Component/schermata-tutorial/schermata-tutorial.component';
import {SchermataBrainjComponent} from './Component/schermata-brainj/schermata-brainj.component';  // Importa anche il LeaderboardComponent

export const routes: Routes = [
  {path: '', component: SchermataInizialeComponent},
  {path: 'login', component: SchermataLoginComponent},
  {path: 'register', component: SchermataRegistratiComponent},
  {path: 'desktop', component: SchermataDesktopComponent},
  {path: 'boom', component: SchermataBoomComponent},
  { path: 'bedroom', component: BedroomComponent },
  { path: 'leaderboard', component: LeaderboardComponent },
  {path: 'tutorial', component: SchermataTutorialComponent},
  {path: 'brainj', component: SchermataBrainjComponent}
];
