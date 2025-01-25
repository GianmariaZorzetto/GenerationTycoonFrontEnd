import {Component} from '@angular/core';
import {BackgroundService} from '../../../../services/background.service';
import {PosizionaDirective} from "../../direttive/posiziona.directive";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-schermata-kaboom-risultato',
  imports: [
    PosizionaDirective,
    RouterLink
  ],
  templateUrl: './schermata-kaboom-risultato.component.html',
  standalone: true,
  styleUrl: './schermata-kaboom-risultato.component.css'
})
export class SchermataKaboomRisultatoComponent {

  constructor(private bg: BackgroundService) {
    this.bg.changeBackground("punteggio/kaboom_punteggio.png")
  }

}
