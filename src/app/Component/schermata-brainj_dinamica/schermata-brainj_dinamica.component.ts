import {Component, HostListener, OnDestroy} from '@angular/core';
import {BackgroundService} from '../../../../services/background.service';
import {PosizionaDirective} from '../../direttive/posiziona.directive';
import {Router, RouterLink} from '@angular/router';
import {BrainjDTOResp} from '../../model/BrainjDTOResp';
import {HttpService} from '../../services/http-service.service';
import {UserScoreDTOReq} from '../../model/UserScoreDTOReq';

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
export class SchermataBrainj_dinamicaComponent implements OnDestroy {

  brainj: BrainjDTOResp

  startDate: Date

  richiesta: string | undefined

  solution: string

  quizResult: { result: boolean, score: number }

  constructor(private bg: BackgroundService, private route: Router, private httpService: HttpService) {
    this.bg.changeBackground("brainj/schermata_brainj_finale.png")
    this.brainj = this.httpService.getSingleBrainj();
    console.log(this.brainj)
    this.startDate = new Date()
    console.log(this.startDate)
    this.solution = ""
    this.richiesta = this.brainj.question
    this.quizResult = {result: false, score: 0}
  }

  ngOnDestroy(): void {
    console.log("SONO IN ONDESTROY")
    console.log(`QUIZ RESULT DEL COMPONENTE RESULT:${this.quizResult.result}, ${this.quizResult.score}`)
    console.log(`QUIZ RESULT DEL HTTPSERVICE PRE-SET: ${this.httpService.quizResult.result}, ${this.httpService.quizResult.score}`)
    this.httpService.quizCompleted()
    this.httpService.quizResult = this.quizResult
    console.log(`QUIZ RESULT DEL HTTPSERVICE POST-SET: ${this.httpService.quizResult.result}, ${this.httpService.quizResult.score}`)
    this.httpService.score += this.quizResult.score;
  }

  @HostListener('window:message', ['$event'])
  onMessage(event: MessageEvent<any>) {
    if (event.origin === 'https://onecompiler.com') {
      this.solution = event.data.result?.output;
    }
  }

  checkAnswer() {
    console.log(`SOLUZIONE: ${this.solution === this.brainj.answer}`)
    if (this.solution === this.brainj.answer) {
      console.log(`VITA: ${this.httpService.life}`)
      if (this.httpService.life == 0) {
        // SE SEI ENTRATO QUI DENTRO SIGNIFICA CHE HAI FATTO IL LOGIN
        // STAI QUINDI GIOCANDO FOR FUN
        // AGGIUNGIAMO AL NUMERO DI QUIZ 1 PERCHÉ ONDESTROY GLIELI DIMINUISCE
        // DI 1, IMPEDENDO COSÌ CHE UN UTENTE IN MODALITÀ LOGIN VADA A FINIRE SULLA SCHERMATA
        // DI VITTORIA
        this.httpService.numberOfQuiz += 1
        this.quizResult = {result: true, score: 0}
      }
      let endDate = new Date();
      let dto: UserScoreDTOReq = {
        difficulty: this.httpService.userLoginReqDto.difficulty,
        endTime: endDate,
        hp: this.httpService.life,
        startTime: this.startDate
      }
      this.httpService.calculateScore(dto).subscribe({
        next: (res) => {
          this.quizResult = {result: true, score: res.score}
          this.route.navigate(["/brainj_dinamico_risultato"])
        },
        error: (err) => {
          alert("Errore nel calcolo del punteggio, annullamento del quiz.")
          this.quizResult = {result: true, score: 0}
          // Aumento di uno il numero di quiz in caso di fallimento nel calcolo dello score perché onDestroy scala il numero indipendentemente che abbia fatto giusto o meno.
          this.httpService.numberOfQuiz += 1
          this.route.navigate(["/brainj_dinamico_risultato"])
        }
      })
    } else {
      if (this.httpService.loseLife())
        this.route.navigate(["/lose"])
      else
        this.route.navigate(["/brainj_dinamico_risultato"])
    }
  }
}
