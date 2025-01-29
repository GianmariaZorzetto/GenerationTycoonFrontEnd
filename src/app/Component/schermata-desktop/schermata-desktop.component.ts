import {Component} from '@angular/core';
import {BackgroundService} from '../../../../services/background.service';
import {RouterLink} from '@angular/router';
import {PosizionaDirective} from '../../direttive/posiziona.directive';
import {AudioLoopService} from '../../services/audio-loop.service';

@Component({
  selector: 'app-schermata-desktop',
  imports: [
    RouterLink,
    PosizionaDirective
  ],
  templateUrl: './schermata-desktop.component.html',
  standalone: true,
  styleUrl: './schermata-desktop.component.css'
})
export class SchermataDesktopComponent {
  constructor(private bg: BackgroundService, private audioService: AudioLoopService) {
    this.bg.changeBackground("desktop/sfondo_desktop_ufficiale.png")
  }

  applicationSound()
  {
    this.audioService.playApplicationSound()
  }
}
