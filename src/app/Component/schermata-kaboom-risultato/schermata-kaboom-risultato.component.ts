import { Component } from '@angular/core';
import {BackgroundService} from '../../../../services/background.service';

@Component({
  selector: 'app-schermata-kaboom-risultato',
  imports: [],
  templateUrl: './schermata-kaboom-risultato.component.html',
  standalone: true,
  styleUrl: './schermata-kaboom-risultato.component.css'
})
export class SchermataKaboomRisultatoComponent {

  constructor(private bg:BackgroundService)
  {
    this.bg.changeBackground("kaboom/kaboom_punteggio.png")
  }

}
