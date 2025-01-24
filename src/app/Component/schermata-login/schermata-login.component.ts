import { Component } from '@angular/core';
import {BackgroundService} from '../../../../services/background.service';
import {RouterLink} from '@angular/router';
import {PosizionaDirective} from '../../direttive/posiziona.directive';
import {FormsModule} from '@angular/forms';
import {UserDTOReq} from '../../model/UserDTOReq';

@Component({
  selector: 'app-schermata-login',
  imports: [
    RouterLink,
    PosizionaDirective,
    FormsModule
  ],
  templateUrl: './schermata-login.component.html',
  standalone: true,
  styleUrl: './schermata-login.component.css'
})
export class SchermataLoginComponent {
  constructor(private backgroundService: BackgroundService) {
    this.backgroundService.changeBackground("login/Sfondo_login.png")
  }

  showPassword = true;

  user: UserRegistrationDTOReq = {
    email: "",
    username: "",
    password: "",
    difficulty: ""

  }
}
