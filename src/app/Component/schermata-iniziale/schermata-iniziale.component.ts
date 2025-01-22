import { Component } from '@angular/core';
import {BackgroundService} from '../../../../services/background.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-schermata-iniziale',
  imports: [
    RouterLink
  ],
  templateUrl: './schermata-iniziale.component.html',
  standalone: true,
  styleUrl: './schermata-iniziale.component.css'
})
export class SchermataInizialeComponent
{

  constructor(private service: BackgroundService)
  {
    this.service.changeBackground("login/background_Final.png")
  }

}
