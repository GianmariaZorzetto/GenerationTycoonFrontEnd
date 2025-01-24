import { Component } from '@angular/core';
import {PosizionaDirective} from '../../direttive/posiziona.directive';
import {RouterLink} from '@angular/router';
import {BackgroundService} from '../../../../services/background.service';

@Component({
  selector: 'app-schermata-brainj-risultato',
  imports: [
    PosizionaDirective,
    RouterLink
  ],
  templateUrl: './schermata-brainj-risultato.component.html',
  standalone: true,
  styleUrl: './schermata-brainj-risultato.component.css'
})
export class SchermataBrainjRisultatoComponent {

  constructor(private bg:BackgroundService)
  {
    this.bg.changeBackground("punteggio/BrainJ_punteggio.png")
  }

}
