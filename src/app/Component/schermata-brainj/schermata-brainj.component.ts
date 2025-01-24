import {Component, HostListener} from '@angular/core';
import {BackgroundService} from '../../../../services/background.service';
import {PosizionaDirective} from '../../direttive/posiziona.directive';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-schermata-brainj',
  imports: [
    PosizionaDirective,
    RouterLink
  ],
  templateUrl: './schermata-brainj.component.html',
  styleUrl: './schermata-brainj.component.css'
})
export class SchermataBrainjComponent
{
  outputData: string = "";

  mockAnswer: string = "10\n"

  constructor(private bg: BackgroundService)
  {
    this.bg.changeBackground("brainj/brainj_theme_final.png")
  }

  @HostListener('window:message', ['$event'])
  onMessage(event: MessageEvent<any>)
  {
    if(event.origin === 'https://onecompiler.com/api/code/exec') {
      console.log("L'output dell'Iframe é: ", event.data.result?.output);

      this.outputData = event.data.result?.output;
      console.log(this.outputData)

      this.checkAnswer()
    }
  }

  checkAnswer()
  {
    if (this.outputData === this.mockAnswer)
    {
      console.log("GIUSTO")
    } else {
      console.log("NON FUNZIA")
    }
  }
}
