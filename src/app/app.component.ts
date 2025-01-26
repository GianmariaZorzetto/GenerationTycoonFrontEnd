import {Component, OnDestroy, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {BackgroundService} from '../../services/background.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy
{
  title = 'GenerationTycoonFrontEnd';
  private confirmUnload = false;

  constructor(private bg: BackgroundService) {
  }

  cambia() {
    this.bg.changeBackground("immagine.svg")
  }

  enableUnloadConfirmation(): void {
    this.confirmUnload = true;
    window.addEventListener('beforeunload', this.handleBeforeUnload);
  }

  disableUnloadConfirmation(): void {
    this.confirmUnload = false;
    window.removeEventListener('beforeunload', this.handleBeforeUnload);
  }

  private handleBeforeUnload = (event: BeforeUnloadEvent): void => {
    if (this.confirmUnload) {
      event.preventDefault();
      event.returnValue = ''; // Messaggio generico del browser
    }
  };

  ngOnInit(): void {
    this.enableUnloadConfirmation(); // Attiva la conferma di uscita
  }

  ngOnDestroy(): void {
    this.disableUnloadConfirmation(); // Disattiva la conferma di uscita
  }
}
