import {Component, HostListener} from '@angular/core';
import {BackgroundService} from '../../../../services/background.service';
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

  dataDiInizio: Date

  solution: string

  constructor(private bg: BackgroundService, private httpService: HttpService) {
    this.bg.changeBackground("brainj/schermata_brainj_final.png")
    this.brainj = this.httpService.getSingleBrainj();
    this.dataDiInizio = new Date()
    console.log(this.dataDiInizio)
    this.solution = ""
  }

  @HostListener('window:message', ['$event'])
  onMessage(event: MessageEvent<any>) {
    if (event.origin === 'https://onecompiler.com') {
      this.solution = event.data.result?.output;
    }
  }

  checkAnswer() {
    if (this.solution === this.brainj.answer) {
      // TODO INVIO RICHIESTA PUNTEGGIo
      console.log("HAI FATTO GIUSTO")
    } else {
      // TODO TOGLI VITA
      console.log("HAI FATTO SBAGLIATO")
    }
  }
}
