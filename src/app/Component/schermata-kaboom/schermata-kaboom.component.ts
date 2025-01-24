import { Component } from '@angular/core';
import {BackgroundService} from '../../../../services/background.service';

@Component({
  selector: 'app-schermata-kaboom',
  imports: [],
  templateUrl: './schermata-kaboom.component.html',
  standalone: true,
  styleUrl: './schermata-kaboom.component.css'
})
export class SchermataKaboomComponent {

  constructor(private bg:BackgroundService)
  {
    this.bg.changeBackground("desktop/sfondo_desktop_ufficiale.png")
  }
}
