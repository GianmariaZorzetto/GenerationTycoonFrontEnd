import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import { BackgroundService } from '../../../../services/background.service';
import { FormsModule } from '@angular/forms';
import { UserDTOReq } from '../../model/UserDTOReq';
import { PosizionaDirective } from '../../direttive/posiziona.directive';
import { NgForOf, NgIf } from '@angular/common';
import {HttpService} from '../../services/http-service.service';


@Component({
  selector: 'app-schermata-registrati',
  imports: [FormsModule, PosizionaDirective, NgIf, NgForOf, RouterLink],
  templateUrl: './schermata-registrati.component.html',
  standalone: true,
  styleUrls: ['./schermata-registrati.component.css']
})
export class SchermataRegistratiComponent {
  showPassword = true;

  user: UserDTOReq = {
    email: '',
    username: '',
    password: '',
    difficulty: ''  // Aggiunta la proprietà 'difficulty'
  };

  // Variabile per tenere traccia della difficoltà selezionata
  selectedDifficulty: string = '';

  // Array di oggetti che rappresentano i bottoni di difficoltà
  items = [
    {
      baseX: 440, baseY: 531, baseW: 173, baseH: 47,
      baseImage: 'sfondi_schermate/register/facile_button.png',
      hoverImage: 'sfondi_schermate/register/modalita_facile.png',
      isHovered: false,
      // Aggiungi altre caratteristiche che non dipendono dal mouse
    },
    {
      baseX: 680, baseY: 531, baseW: 173, baseH: 47,
      baseImage: 'sfondi_schermate/register/intermedio_button.png',
      hoverImage: 'sfondi_schermate/register/modalita_intermedia.png',
      isHovered: false,
    },
    {
      baseX: 920, baseY: 531, baseW: 173, baseH: 47,
      baseImage: 'sfondi_schermate/register/avanzato_button.png',
      hoverImage: 'sfondi_schermate/register/modalita_avanzata.png',
      isHovered: false,
    }
  ];

  // Metodo chiamato quando il mouse entra nell'area dell'elemento
  onMouseEnter(index: number) {
    this.items[index].isHovered = true;
  }

  // Metodo chiamato quando il mouse esce dall'area dell'elemento
  onMouseLeave(index: number) {
    this.items[index].isHovered = false;
  }

  // Metodo per selezionare la difficoltà (facile, intermedio, avanzato)
  selectDifficulty(difficulty: string) {
    this.selectedDifficulty = difficulty;
    this.user.difficulty = difficulty; // Aggiorna la difficoltà nel modello user
  }

  // Metodo per gestire il salvataggio del nuovo utente
  saveUser() {
    console.log('Utente creato:', this.user);
    // Chiamata al servizio HTTP per salvare l'utente
    this.httpService.insertUser(this.user).subscribe(() => {
      this.route.navigate(['/benvenuto']);  // Naviga alla pagina di benvenuto dopo il salvataggio
    });
  }

  constructor(private service: BackgroundService, private route: Router,private httpService: HttpService) {
    this.service.changeBackground('register/schermata_registrazioneProva.png');
  }
}
