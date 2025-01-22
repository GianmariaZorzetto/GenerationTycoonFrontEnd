import { Component } from '@angular/core';
import {BackgroundService} from '../../../../services/background.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-leaderboard',
  imports: [
    RouterLink
  ],
  templateUrl: './leaderboard.component.html',
  standalone: true,
  styleUrl: './leaderboard.component.css'
})

//cambiare immagine di sfondo, dimensioni diverse (vedi figma)
export class LeaderboardComponent {
  constructor(private bg:BackgroundService) {
    this.bg.changeBackground("stanza/schermoVerde.png")
  }

}
