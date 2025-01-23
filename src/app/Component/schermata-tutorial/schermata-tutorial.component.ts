import { Component } from '@angular/core';
import {BackgroundService} from '../../../../services/background.service';
import {RouterLink} from '@angular/router';
import {PosizionaDirective} from '../../direttive/posiziona.directive';

@Component({
  selector: 'app-schermata-tutorial',
  imports: [
    RouterLink,
    PosizionaDirective
  ],
  templateUrl: './schermata-tutorial.component.html',
  styleUrl: './schermata-tutorial.component.css'
})
export class SchermataTutorialComponent {
  constructor(private bg: BackgroundService) {
    this.bg.changeBackground("tutorial/tutorial_finale.png")
  }
}
