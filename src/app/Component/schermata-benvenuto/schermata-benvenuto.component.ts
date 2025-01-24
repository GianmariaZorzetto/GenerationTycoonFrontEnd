import { Component } from '@angular/core';
import {BackgroundService} from '../../../../services/background.service';
import {PosizionaDirective} from '../../direttive/posiziona.directive';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-schermata-benvenuto',
  imports: [
    PosizionaDirective,
    RouterLink
  ],
  templateUrl: './schermata-benvenuto.component.html',
  standalone: true,
  styleUrl: './schermata-benvenuto.component.css'
})
export class SchermataBenvenutoComponent {

  //cambiare immagine di sfondo, dimensioni diverse (vedi figma)
  constructor(private bg:BackgroundService) {
    this.bg.changeBackground("benvenuto/benvenutoFinal.png")
  }
}
