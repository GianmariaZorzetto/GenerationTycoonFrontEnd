import { Component } from '@angular/core';
import {BackgroundService} from '../../../../services/background.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-schermata-login',
  imports: [
    RouterLink
  ],
  templateUrl: './schermata-login.component.html',
  standalone: true,
  styleUrl: './schermata-login.component.css'
})
export class SchermataLoginComponent
{
  constructor(private backgroundService: BackgroundService)
  {
    this.backgroundService.changeBackground("login/Sfondo_login_reference.png")
  }
}
