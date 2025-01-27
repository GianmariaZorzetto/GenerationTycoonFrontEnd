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
export class BedroomComponent
{
  private lifeToAsset = {
    1: "/hearts/singola_vita.png",
    2: "/hearts/vita_doppia.png",
    3: "/hearts/vita_tripla.png",
    0: ""
  }

  constructor(private bg: BackgroundService, protected httpService: HttpService) {
    this.bg.changeBackground("stanza/camerettaEtodo.png");
  }

  showHearts(): string {
    let hearts = this.httpService.life
    // @ts-ignore
    return this.lifeToAsset[`${hearts}`]
  }

  eatNoodle() {
    if (!this.httpService.availableNoodle()) {
      alert("Non hai noodle a tua disposizione.")
      return
    }
    this.httpService.eatNoodle()
    this.httpService.life += 1
  }
}
