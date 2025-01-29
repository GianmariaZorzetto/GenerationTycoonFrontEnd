import {Component, OnDestroy} from '@angular/core';
import {BackgroundService} from '../../../../services/background.service';
import {PosizionaDirective} from "../../direttive/posiziona.directive";
import {Router, RouterLink} from "@angular/router";
import {HttpService} from '../../services/http-service.service';
import {NgIf} from '@angular/common';
import {UserUpdateScoreDTOReq} from '../../model/UserUpdateScoreDTOReq';

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
export class SchermataKaboomRisultatoComponent implements OnDestroy {

  quizResult: { result: boolean, score: number }

  constructor(private bg: BackgroundService, private routes: Router, private httpService: HttpService) {
    this.bg.changeBackground("punteggio/kaboom_punteggio.png")
    this.quizResult = this.httpService.quizResult
    console.log(`HAI VITE: ${this.httpService.life}`)
    console.log(`Hai numero di quiz: ${this.httpService.numberOfQuiz}`)
  }

  ngOnDestroy(): void {
    if (this.httpService.numberOfQuiz == 0) {
      let dto: UserUpdateScoreDTOReq = {
        id: this.httpService.userLoginReqDto.id, score: this.httpService.score
      }
      this.httpService.updateUserScore(dto).subscribe({
        next: (res) => {
          this.httpService.graduationInfo = res
          this.routes.navigate(["/graduation"])
        }
      })
    }
  }
}
