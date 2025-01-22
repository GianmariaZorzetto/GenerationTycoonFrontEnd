import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BackgroundService} from '../../../../services/background.service';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-bedroom',
    imports: [CommonModule, RouterLink],
  templateUrl: './bedroom.component.html',
  standalone: true,
  styleUrl: './bedroom.component.css'
})
export class BedroomComponent {

  isHovered: boolean = false;

  onMouseEnter(): void {
    this.isHovered = true;  // Il mouse è sopra il bottone
  }

  onMouseLeave(): void {
    this.isHovered = false;  // Il mouse lascia il bottone
  }

  constructor(private bg:BackgroundService) {
    this.bg.changeBackground("stanza/cameretta.png")
  }

}
