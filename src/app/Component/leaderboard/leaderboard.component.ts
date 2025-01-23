import { Component } from '@angular/core';
import {BackgroundService} from '../../../../services/background.service';
import {RouterLink} from '@angular/router';
import {PosizionaDirective} from "../../direttive/posiziona.directive";

@Component({
  selector: 'app-leaderboard',
    imports: [
        RouterLink,
        PosizionaDirective
    ],
  templateUrl: './leaderboard.component.html',
  standalone: true,
  styleUrl: './leaderboard.component.css'
})

//cambiare immagine di sfondo, dimensioni diverse (vedi figma)
export class LeaderboardComponent {
  constructor(private bg:BackgroundService) {
    this.bg.changeBackground("stanza/leaderboardOpen.png")
  }

}
