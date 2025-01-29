import {Component, OnDestroy} from '@angular/core';
import {BackgroundService} from '../../../../services/background.service';
import {PosizionaDirective} from '../../direttive/posiziona.directive';
import {Router, RouterLink} from '@angular/router';
import {KaboomDTOResp} from '../../model/KaboomDTOResp';
import {HttpService} from '../../services/http-service.service';
import {UserScoreDTOReq} from '../../model/UserScoreDTOReq';

@Component({
  selector: 'app-schermata-kaboom',
  imports: [
    PosizionaDirective,
    RouterLink
  ],
  templateUrl: './schermata-kaboom_dinamica.component.html',
  standalone: true,
  styleUrl: './schermata-kaboom_dinamica.component.css'
})
export class SchermataKaboom_dinamicaComponent implements OnDestroy {

  kaboom: KaboomDTOResp

  startDate: Date

  solution: string

  quizResult: { result: boolean, score: number }

  constructor(private bg: BackgroundService, private route: Router, private httpService: HttpService) {
    this.bg.changeBackground("kaboom/KaboomSfondoFinale.png")
    this.kaboom = this.httpService.getSingleKaboom()
    console.log(this.kaboom)
    this.startDate = new Date()
    this.solution = ""
    this.quizResult = {result: false, score: 0}
  }

  ngOnDestroy(): void {
    console.log("SONO IN ONDESTROY")
    this.httpService.quizCompleted()
    this.httpService.quizResult = this.quizResult
    this.httpService.score += this.quizResult.score
  }

  checkAnswer(color: string) {
    if (color === this.kaboom.correctColor) {
      if (this.httpService.life == 0) {
        // SE SEI ENTRATO QUI DENTRO SIGNIFICA CHE HAI FATTO IL LOGIN
        // STAI QUINDI GIOCANDO FOR FUN
        // AGGIUNGIAMO AL NUMERO DI QUIZ 1 PERCHÉ ONDESTROY GLIELI DIMINUISCE
        // DI 1, IMPEDENDO COSÌ CHE UN UTENTE IN MODALITÀ LOGIN VADA A FINIRE SULLA SCHERMATA
        // DI VITTORIA
        this.httpService.numberOfQuiz += 1
        this.quizResult = {result: true, score: 0}
      }
      let endDate = new Date()
      let dto: UserScoreDTOReq = {
        difficulty: this.httpService.userLoginReqDto.difficulty,
        endTime: endDate,
        hp: this.httpService.life,
        startTime: this.startDate
      }
      this.httpService.calculateScore(dto).subscribe({
        next: (res) => {
          this.quizResult = {result: true, score: res.score}
          this.route.navigate(["/kaboom_dinamico_risultato"])
        },
        error: (err) => {
          alert("Errore nel calcolo del punteggio, annullamento del quiz.")
          this.quizResult = {result: true, score: 0}
          this.httpService.numberOfQuiz += 1
          this.route.navigate(["/kaboom_dinamico_risultato"])
        }
      })
    } else {
      // LOSE LIFE MI RESTITUISCE TRUE SE L'UTENTE È MORTO
      // FALSE ALTRIMENTI
      // CONTROLLA INOLTRE CHE NON TI FACCIA ANDARE SULLA SCHERMATA DI LOSE
      // NEL CASO IN CUI TU SIA IN MODALITÀ LOGIN
      if (this.httpService.loseLife())
        this.route.navigate(["/lose"])
      else
        this.route.navigate(["/kaboom_dinamico_risultato"])
    }
  }
}
