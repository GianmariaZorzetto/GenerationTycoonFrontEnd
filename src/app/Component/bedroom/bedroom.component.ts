import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BackgroundService} from '../../../../services/background.service';
import {RouterLink} from "@angular/router";
import {PosizionaDirective} from '../../direttive/posiziona.directive';
import {HttpService} from '../../services/http-service.service';
import {AudioLoopService} from '../../services/audio-loop.service';

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

  constructor(private bg: BackgroundService, protected httpService: HttpService, private audioService: AudioLoopService) {
    this.bg.changeBackground("stanza/camerettaFinale.png");
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
    this.audioService.playNoodleSound()
    this.httpService.life += 1
  }

  blueBookSound() {
    this.audioService.playPagesSound()
  }

  greenBookSound() {
    this.audioService.playPagesSound()
  }

  computerSound() {
    this.audioService.playComputerSound()
  }

  leaderboardSound() {
    this.audioService.playLeaderboardSound()
  }

  radioSound() {
    this.audioService.playComputerSound()
    if(this.audioService.isPaused) {
      this.audioService.resumeLoop()
      this.audioService.isPaused = false;
    }
    else {
      this.audioService.pauseLoop();
      this.audioService.isPaused = true;
    }
  }


}
