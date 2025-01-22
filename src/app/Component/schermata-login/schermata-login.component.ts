import { Component } from '@angular/core';
import {BackgroundService} from '../../../../services/background.service';

@Component({
  selector: 'app-schermata-login',
  imports: [],
  templateUrl: './schermata-login.component.html',
  standalone: true,
  styleUrl: './schermata-login.component.css'
})
export class SchermataLoginComponent
{
  constructor(private backgroundService: BackgroundService)
  {
    this.backgroundService.changeBackground("login/login.png")
  }
}
