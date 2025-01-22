import { Component } from '@angular/core';
import {BackgroundService} from '../../../../services/background.service';

@Component({
  selector: 'app-schermata-desktop',
  imports: [],
  templateUrl: './schermata-desktop.component.html',
  styleUrl: './schermata-desktop.component.css'
})
export class SchermataDesktopComponent
{
  constructor(private bg:BackgroundService)
  {
    this.bg.changeBackground("desktop/sfondo_desktop.png")
  }
}
