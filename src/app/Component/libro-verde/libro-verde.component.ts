import { Component } from '@angular/core';
import {BackgroundService} from '../../../../services/background.service';
import {PosizionaDirective} from '../../direttive/posiziona.directive';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-libro-verde',
  imports: [
    PosizionaDirective,
    RouterLink
  ],
  templateUrl: './libro-verde.component.html',
  standalone: true,
  styleUrl: './libro-verde.component.css'
})
export class LibroVerdeComponent {
  constructor(private bg:BackgroundService) {
    this.bg.changeBackground("stanza/aperturaLibroVerde.png")
  }
}
