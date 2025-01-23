import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BackgroundService} from '../../../../services/background.service';
import {Router, RouterLink} from "@angular/router";
import {PosizionaDirective} from '../../direttive/posiziona.directive';

@Component({
  selector: 'app-bedroom',
  imports: [CommonModule, RouterLink, PosizionaDirective],
  templateUrl: './bedroom.component.html',
  standalone: true,
  styleUrl: './bedroom.component.css'
})
export class BedroomComponent {

  constructor(private bg: BackgroundService) {
    this.bg.changeBackground("stanza/cameretta.png");
  }
}
