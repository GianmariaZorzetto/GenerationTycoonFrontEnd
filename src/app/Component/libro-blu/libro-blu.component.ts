import { Component } from '@angular/core';
import {BackgroundService} from '../../../../services/background.service';
import {RouterLink} from '@angular/router';
import {PosizionaDirective} from '../../direttive/posiziona.directive';

@Component({
  selector: 'app-libro-blu',
  imports: [
    RouterLink,
    PosizionaDirective
  ],
  templateUrl: './libro-blu.component.html',
  standalone: true,
  styleUrl: './libro-blu.component.css'
})
export class LibroBluComponent {
  constructor(private bg:BackgroundService) {
    this.bg.changeBackground("stanza/libroBluOpen.png")
  }
}
