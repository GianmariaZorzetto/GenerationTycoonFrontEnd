import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {BackgroundService} from '../../../../services/background.service';
import {FormsModule} from '@angular/forms';
import {UserDTOReq} from '../../model/UserDTOReq';
import {PosizionaDirective} from '../../direttive/posiziona.directive';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-schermata-registrati',
  imports: [RouterLink, FormsModule, PosizionaDirective, NgIf, NgForOf],
  templateUrl: './schermata-registrati.component.html',
  standalone: true,
  styleUrl: './schermata-registrati.component.css'
})
export class SchermataRegistratiComponent
{
  user:UserDTOReq=  {
    email:"",
    username:"",
    password:""
  };

  // bottoneFacile: string = 'sfondi_schermate/register/facile_button.png';  // Immagine di base
  // modalitaFacile: string = 'sfondi_schermate/register/modalita_facile.png';  // Immagine che appare al passaggio del mouse
  // bottoneIntermedio: string = 'sfondi_schermate/register/intermedio_button.png';  // Immagine di base
  // modalitaIntermedia: string = 'sfondi_schermate/register/modalita_intermedia.png';  // Immagine che appare al passaggio del mouse
  // bottoneFacile: string = 'sfondi_schermate/register/facile_button.png';  // Immagine di base
  // modalitaFacile: string = 'sfondi_schermate/register/modalita_facile.png';  // Immagine che appare al passaggio del mouse
  // Array di oggetti che rappresentano i bottoni
  items = [
    {
      baseX: 440, baseY: 531, baseW: 173, baseH: 47,
      baseImage: 'sfondi_schermate/register/facile_button.png',
      hoverX: 382, hoverY: 440, hoverW: 300, hoverH: 118,
      hoverImage: 'sfondi_schermate/register/modalita_facile.png',
      isHovered: false
    },
    {
      baseX: 680, baseY: 531, baseW: 173, baseH: 47,
      baseImage: 'sfondi_schermate/register/intermedio_button.png',
      hoverX: 619, hoverY: 503, hoverW: 300, hoverH: 118,
      hoverImage: 'sfondi_schermate/register/modalita_intermedia.png',
      isHovered: false
    },
    {
      baseX: 920, baseY: 531, baseW: 173, baseH: 47,
      baseImage: 'sfondi_schermate/register/avanzato_button.png',
      hoverX: 853, hoverY: 503, hoverW: 300, hoverH: 118,
      hoverImage: 'sfondi_schermate/register/modalita_avanzata.png',
      isHovered: false
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

constructor(private service: BackgroundService)
  {
    this.service.changeBackground("register/schermata_registrazioneProva.png")
  }
}
