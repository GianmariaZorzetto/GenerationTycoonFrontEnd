import { Component } from '@angular/core';
import {BackgroundService} from '../../../../services/background.service';
import {PosizionaDirective} from '../../direttive/posiziona.directive';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-schermata-lose',
  imports: [
    PosizionaDirective,
    RouterLink
  ],
  templateUrl: './schermata-lose.component.html',
  standalone: true,
  styleUrl: './schermata-lose.component.css'
})
export class SchermataLoseComponent {

  constructor(private bg: BackgroundService) {
    this.bg.changeBackground("lose/lose.png");
  }

}
