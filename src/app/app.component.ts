import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SchermataInizialeComponent} from './Component/schermata-iniziale/schermata-iniziale.component';
import {BackgroundService} from '../../services/background.service';
import {SchermataBoomComponent} from './Component/schermata-boom/schermata-boom.component';
import {BedroomComponent} from './Component/bedroom/bedroom.component';
import {SchermataRegistratiComponent} from './Component/schermata-registrati/schermata-registrati.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SchermataInizialeComponent, BedroomComponent, SchermataRegistratiComponent],
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
