import {Component} from '@angular/core';
import {BackgroundService} from '../../../../services/background.service';
import {PosizionaDirective} from "../../direttive/posiziona.directive";
import {RouterLink} from "@angular/router";
import {HttpService} from '../../services/http-service.service';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-schermata-kaboom-risultato',
  imports: [
    PosizionaDirective,
    RouterLink,
    NgIf
  ],
  templateUrl: './schermata-kaboom-risultato.component.html',
  standalone: true,
  styleUrl: './schermata-kaboom-risultato.component.css'
})
export class SchermataKaboomRisultatoComponent {

  quizResult: { result: boolean, score: number }

  constructor(private bg: BackgroundService, private httpService: HttpService) {
    this.bg.changeBackground("punteggio/kaboom_punteggio.png")
    this.quizResult = this.httpService.quizResult
    console.log(`HAI VITE: ${this.httpService.life}`)
    console.log(`Hai numero di quiz: ${this.httpService.numberOfQuiz}`)
  }

}
