import {Component, OnInit} from '@angular/core';
import {BackgroundService} from '../../../../services/background.service';
import {RouterLink} from '@angular/router';
import {PosizionaDirective} from "../../direttive/posiziona.directive";
import {HttpService} from '../../services/http-service.service';
import {UserLeaderboardDTOResp} from '../../model/UserLeaderboardDTOResp';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-leaderboard',
  imports: [
    RouterLink,
    PosizionaDirective,
    NgForOf
  ],
  templateUrl: './leaderboard.component.html',
  standalone: true,
  styleUrl: './leaderboard.component.css'
})

//cambiare immagine di sfondo, dimensioni diverse (vedi figma)
export class LeaderboardComponent implements OnInit {
  allUsersLeaderboard: UserLeaderboardDTOResp[] = [];

  constructor(private bg: BackgroundService, private httpService: HttpService) {
    this.bg.changeBackground("stanza/leaderboardOpen.png");
  }

  ngOnInit(): void {
    this.httpService.getAllLeaderBoard().subscribe({
      next: (data) => {
        this.allUsersLeaderboard = data;
        this.allUsersLeaderboard.sort((a, b) => {
          if (a.score > b.score)
            return -1
          if (a.score < b.score)
            return 1
          return 0
        })
      },
      error: () => {
        console.log("Errrrrrrore");
      },
    });
  }

}
