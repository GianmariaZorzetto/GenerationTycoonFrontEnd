import { Component } from '@angular/core';
import {BackgroundService} from '../../../../services/background.service';
import {PosizionaDirective} from '../../direttive/posiziona.directive';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-schermata-brainj',
  imports: [
    PosizionaDirective,
    RouterLink
  ],
  templateUrl: './schermata-brainj.component.html',
  styleUrl: './schermata-brainj.component.css'
})
export class SchermataBrainjComponent {
  constructor(private bg: BackgroundService) {
    this.bg.changeBackground("brainj/brainj_theme_final.png")
  }
}
