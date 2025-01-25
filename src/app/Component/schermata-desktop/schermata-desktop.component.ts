import {Component} from '@angular/core';
import {BackgroundService} from '../../../../services/background.service';
import {RouterLink} from '@angular/router';
import {PosizionaDirective} from '../../direttive/posiziona.directive';

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
  constructor(private bg: BackgroundService) {
    this.bg.changeBackground("desktop/sfondo_desktop_ufficiale.png")
  }
}
