import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BackgroundService} from '../../../../services/background.service';
import {Router, RouterLink} from "@angular/router";
import {PosizionaDirective} from '../../direttive/posiziona.directive';
import {HttpService} from '../../services/http-service.service';
import {UserRegistrationDTOReq} from '../../model/UserRegistrationDTOReq';

@Component({
  selector: 'app-bedroom',
  imports: [CommonModule, RouterLink, PosizionaDirective],
  templateUrl: './bedroom.component.html',
  standalone: true,
  styleUrl: './bedroom.component.css'
})
export class BedroomComponent {

  user: UserRegistrationDTOReq | null = null;

  constructor(private bg: BackgroundService, private HttpService: HttpService) {
    this.bg.changeBackground("stanza/cameretta.png");

    // this.HttpService.getUserInfo(id).subscribe(result => {this.user=res})
  }

  // cuori : number = 3; //da cambiare
  // tokenVita: number = 1;
  //
  // addVita(): number {
  //
  //     if (this.cuori < 3 && this.tokenVita!=0) {
  //       this.cuori +=1;
  //       this.tokenVita--;
  //     }
  //   return this.cuori;
  // }

}
