import { Component } from '@angular/core';
import {BackgroundService} from '../../../../services/background.service';
import {NgIf} from '@angular/common';
import {PosizionaDirective} from '../../direttive/posiziona.directive';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-schermata-kaboom',
  imports: [
    NgIf,
    PosizionaDirective,
    RouterLink
  ],
  templateUrl: './schermata-kaboom_dinamica.component.html',
  standalone: true,
  styleUrl: './schermata-kaboom_dinamica.component.css'
})
export class SchermataKaboom_dinamicaComponent {

  constructor(private bg:BackgroundService)
  {
    this.bg.changeBackground("kaboom/KaboomSfondoFinale.png")
  }

}
