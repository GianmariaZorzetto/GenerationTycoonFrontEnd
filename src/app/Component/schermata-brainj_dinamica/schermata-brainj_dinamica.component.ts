import {Component} from '@angular/core';
import {BackgroundService} from '../../../../services/background.service';
import {NgIf} from '@angular/common';
import {PosizionaDirective} from '../../direttive/posiziona.directive';
import {RouterLink} from '@angular/router';
import {BrainjDTOResp} from '../../model/BrainjDTOResp';
import {HttpService} from '../../services/http-service.service';

@Component({
  selector: 'app-schermata-brainj',
  imports: [
    PosizionaDirective,
    RouterLink
  ],
  templateUrl: './schermata-brainj_dinamica.component.html',
  standalone: true,
  styleUrl: './schermata-brainj_dinamica.component.css'
})
export class SchermataBrainj_dinamicaComponent {

  brainj: BrainjDTOResp

  // dataDiInizio : Date

  constructor(private bg: BackgroundService, private httpService: HttpService) {
    this.bg.changeBackground("brainj/brainj_theme_final.png")
    this.brainj = httpService.prendiBrainj();
    // this.dataDiInizio = Dat e adesso
  }


}
