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
import {SchermataKaboomComponent} from './Component/schermata-kaboom/schermata-kaboom.component';
import {SchermataDifficoltaComponent} from './Component/schermata-difficolta/schermata-difficolta.component';
import {
  SchermataKaboom_dinamicaComponent
} from './Component/schermata-kaboom_dinamica/schermata-kaboom_dinamica.component';
import {
  SchermataBrainj_dinamicaComponent
} from './Component/schermata-brainj_dinamica/schermata-brainj_dinamica.component';
import {
  SchermataKaboomRisultatoComponent
} from './Component/schermata-kaboom-risultato/schermata-kaboom-risultato.component';
import {
  SchermataBrainjRisultatoComponent
} from './Component/schermata-brainj-risultato/schermata-brainj-risultato.component';
import {authGuard} from './services/auth.guard';


export const routes: Routes = [
  {path: '', component: SchermataInizialeComponent},
  {path: 'login', component: SchermataLoginComponent},
  {path: 'register', component: SchermataRegistratiComponent},
  {path: 'desktop', component: SchermataDesktopComponent, canActivate:[authGuard]},
  {path: 'boom', component: SchermataBoomComponent, canActivate:[authGuard]},
  { path: 'bedroom', component: BedroomComponent, canActivate:[authGuard]},
  { path: 'leaderboard', component: LeaderboardComponent, canActivate:[authGuard]},
  { path: 'greenBook', component: LibroVerdeComponent, canActivate:[authGuard]},
  { path: 'blueBook', component: LibroBluComponent, canActivate:[authGuard]},
  {path: 'tutorial', component: SchermataTutorialComponent, canActivate:[authGuard]},
  {path: 'brainj', component: SchermataBrainjComponent, canActivate:[authGuard]},
  {path: 'benvenuto', component: SchermataBenvenutoComponent, canActivate:[authGuard]},
  {path: 'graduation', component: SchermataGraduationComponent, canActivate:[authGuard]},
  {path: 'lose', component: SchermataLoseComponent, canActivate:[authGuard]},
  {path: 'kaboom', component: SchermataKaboomComponent, canActivate:[authGuard]}, //kaboom stock per desktop
  {path: 'difficolta', component: SchermataDifficoltaComponent, canActivate:[authGuard]},
  {path: 'kaboom_dinamico', component: SchermataKaboom_dinamicaComponent, canActivate:[authGuard]}, //Kaboom per task
  {path: 'kaboom_dinamico_risultato', component: SchermataKaboomRisultatoComponent, canActivate:[authGuard]}, //risultato Kaboom per task
  {path: 'brainj_dinamico', component: SchermataBrainj_dinamicaComponent, canActivate:[authGuard]}, //brainj per task
  {path: 'brainj_dinamico_risultato', component: SchermataBrainjRisultatoComponent, canActivate:[authGuard] } //risultato brainj per task


];

