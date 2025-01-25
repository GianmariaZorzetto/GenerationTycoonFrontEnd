import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {BackgroundService} from '../../services/background.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GenerationTycoonFrontEnd';

  constructor(private bg: BackgroundService) {
  }

  cambia() {
    this.bg.changeBackground("immagine.svg")
  }


}
