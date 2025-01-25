import {Component} from '@angular/core';
import {BackgroundService} from '../../../../services/background.service';
import {PosizionaDirective} from '../../direttive/posiziona.directive';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-schermata-kaboom',
  imports: [
    PosizionaDirective,
    RouterLink
  ],
  templateUrl: './schermata-kaboom.component.html',
  standalone: true,
  styleUrl: './schermata-kaboom.component.css'
})
export class SchermataKaboomComponent {

  constructor(private bg: BackgroundService) {
    this.bg.changeBackground("kaboom/KaboomSfondoFinale.png")
  }

}
