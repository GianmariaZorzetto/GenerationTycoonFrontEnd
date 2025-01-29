import {Component, OnInit} from '@angular/core';
import {BackgroundService} from '../../../../services/background.service';
import {RouterLink} from '@angular/router';
import {PosizionaDirective} from '../../direttive/posiziona.directive';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-schermata-boom',
  imports: [
    RouterLink,
    PosizionaDirective,
    NgIf
  ],
  templateUrl: './schermata-boom.component.html',
  standalone: true,
  styleUrl: './schermata-boom.component.css'
})
export class SchermataBoomComponent implements OnInit {
  image: string = "";
  value: number = 0;
  imageWithoutChat: boolean = false;
  imageWithChat: boolean = false
  flag: boolean = false;

  constructor(private bg: BackgroundService) {
    this.bg.changeBackground(this.image)
  }

  randomNumberAndImage() {
    this.value = Math.floor(Math.random() * 10) + 1;

    if (this.value % 2 === 0) {
      this.image = "boom/schermata_boom1_Final.png"; // da sostituire con textbox
      this.imageWithoutChat = true;
      this.imageWithChat = false;
      this.flag = false;
    } else {
      this.image = "boom/schermata_boom2_Final.png";
      this.imageWithoutChat = false;
      this.imageWithChat = true;
      this.flag = true;
    }
    this.bg.changeBackground(this.image)
  }

  ngOnInit(): void {
    this.randomNumberAndImage()
  }
}
