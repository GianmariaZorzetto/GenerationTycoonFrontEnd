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

  consegna: string | undefined

  solution: string

  constructor(private bg: BackgroundService, private route: Router, private httpService: HttpService) {
    this.bg.changeBackground("brainj/schermata_brainj_finale.png")
    this.brainj = this.httpService.getSingleBrainj();
    this.startDate = new Date()
    console.log(this.startDate)
    this.solution = ""
  }

  ngOnInit(): void{
    this.consegna = this.brainj.question
  }

  ngOnDestroy(): void {
    this.failQuiz()
  }

  @HostListener('window:message', ['$event'])
  onMessage(event: MessageEvent<any>) {
    if (event.origin === 'https://onecompiler.com') {
      this.solution = event.data.result?.output;
    }
  }

  checkAnswer() {
    if (this.solution === this.brainj.answer) {
      let endDate = new Date();
      let dto: UserScoreDTOReq = {
        difficulty: this.httpService.userLoginReqDto.difficulty,
        endTime: endDate,
        hp: this.httpService.life,
        startTime: this.startDate
      }
      this.httpService.calculateScore(dto).subscribe({
        next: (res) => {
          this.httpService.quizResult = {result: true, score: res.score}
          this.route.navigate(["/brainj_dinamico_risultato"])
        },
        error: (err) => {
          alert("Errore nel calcolo del punteggio")
        }
      })
    } else {
      this.failQuiz();
    }
  }

  private failQuiz() {
    this.httpService.quizResult = {result: false, score: 0}
    this.httpService.quizCompleted()
    this.httpService.loseLife()
    this.route.navigate(["/brainj_dinamico_risultato"])
  }
}
