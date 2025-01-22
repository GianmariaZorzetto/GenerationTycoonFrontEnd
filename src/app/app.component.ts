import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SchermataInizialeComponent} from './Component/schermata-iniziale/schermata-iniziale.component';
import {BackgroundService} from '../../services/background.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SchermataInizialeComponent, SchermataBoomComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GenerationTycoonFrontEnd';

  constructor(private bg:BackgroundService) {
  }

  cambia(){

    this.bg.changeBackground("immagine.svg")

  }
}
