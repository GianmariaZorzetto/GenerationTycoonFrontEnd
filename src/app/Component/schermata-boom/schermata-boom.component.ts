import {Component, OnInit} from '@angular/core';
import {BackgroundService} from '../../../../services/background.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-schermata-boom',
  imports: [
    RouterLink
  ],
  templateUrl: './schermata-boom.component.html',
  styleUrl: './schermata-boom.component.css'
})
export class SchermataBoomComponent implements OnInit
{
  image: string = "";
  value: number = 0;
  imageWithChat: boolean = false;

  constructor(private bg:BackgroundService)
  {
    this.bg.changeBackground(this.image)
  }

  randomNumberAndImage()
  {
    this.value = Math.floor(Math.random() * 10) + 1;

    this.image = (this.value % 2 === 0) ? this.image = "boom/schermata_Boom1.png" : this.image = "boom/schermata_Boom2.png";
    this.bg.changeBackground(this.image)
  }

  ngOnInit(): void
  {
    this.randomNumberAndImage()
  }
}
