import {Component} from '@angular/core';
import {PosizionaDirective} from '../../direttive/posiziona.directive';
import {Router, RouterLink} from '@angular/router';
import {BackgroundService} from '../../../../services/background.service';
import {HttpService} from '../../services/http-service.service';

@Component({
  selector: 'app-schermata-brainj-risultato',
  imports: [
    PosizionaDirective,
    RouterLink
  ],
  templateUrl: './schermata-brainj-risultato.component.html',
  standalone: true,
  styleUrl: './schermata-brainj-risultato.component.css'
})
export class SchermataBrainjRisultatoComponent {

  quizResult: { result: boolean, score: number }

  constructor(private bg: BackgroundService, private route: Router, private httpService: HttpService) {
    this.bg.changeBackground("punteggio/BrainJ_punteggio.png")
    this.quizResult = this.httpService.quizResult
  }

}
