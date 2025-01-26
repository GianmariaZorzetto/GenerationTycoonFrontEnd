import {Component} from '@angular/core';
import {BackgroundService} from '../../../../services/background.service';
import {HttpService} from '../../services/http-service.service';
import {UserLeaderboardDTOResp} from '../../model/UserLeaderboardDTOResp';
import {PosizionaDirective} from '../../direttive/posiziona.directive';

@Component({
  selector: 'app-schermata-graduation',
  imports: [
    PosizionaDirective
  ],
  templateUrl: './schermata-graduation.component.html',
  standalone: true,
  styleUrl: './schermata-graduation.component.css'
})
export class SchermataGraduationComponent {

  graduationInfo: UserLeaderboardDTOResp

  constructor(private bg: BackgroundService, private httpService: HttpService) {
    this.bg.changeBackground("graduation/graduation.png");
    this.graduationInfo = this.httpService.graduationInfo
  }

}
