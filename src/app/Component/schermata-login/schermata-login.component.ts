import {Component} from '@angular/core';
import {BackgroundService} from '../../../../services/background.service';
import {Router, RouterLink} from '@angular/router';
import {PosizionaDirective} from '../../direttive/posiziona.directive';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import {HttpService} from '../../services/http-service.service';
import {UserDTOLoginReq} from '../../model/UserDTOLoginReq';

@Component({
  selector: 'app-schermata-login',
  imports: [
    RouterLink,
    PosizionaDirective,
    FormsModule,
    NgIf
  ],
  templateUrl: './schermata-login.component.html',
  standalone: true,
  styleUrl: './schermata-login.component.css'
})
export class SchermataLoginComponent {
  constructor(private backgroundService: BackgroundService, private route: Router, private httpService: HttpService) {
    this.backgroundService.changeBackground("login/Sfondo_login.png")
  }

  showPassword = true;

  user: UserDTOLoginReq = {
    email: "",
    password: "",
  }

  loginUser() {
    this.httpService.login(this.user).subscribe(
      {
        next: (res) => {
          this.httpService.mangiaNoodle()
          this.httpService.prendiBrainjs()
          this.httpService.prendiKabooms()
          this.route.navigate(["/bedroom"])
        },
        error: (err) => {
          alert("Email o Password non validi.")
        }
      })
  }
}
