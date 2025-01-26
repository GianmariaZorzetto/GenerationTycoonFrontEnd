import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BackgroundService} from '../../../../services/background.service';
import {RouterLink} from "@angular/router";
import {PosizionaDirective} from '../../direttive/posiziona.directive';
import {HttpService} from '../../services/http-service.service';

@Component({
  selector: 'app-bedroom',
  imports: [CommonModule, RouterLink, PosizionaDirective],
  templateUrl: './bedroom.component.html',
  standalone: true,
  styleUrl: './bedroom.component.css'
})
export class BedroomComponent {

  private lifeToAsset = {
    1: "/hearts/one_heart.svg",
    2: "/hearts/two_heart.svg",
    3: "/hearts/three_heart.svg"
  }

  constructor(private bg: BackgroundService, private httpService: HttpService) {
    this.bg.changeBackground("stanza/cameretta.png");
  }

  showHearts(): string {
    let hearts = this.httpService.life
    // @ts-ignore
    return this.lifeToAsset[`${hearts}`]
  }
}
