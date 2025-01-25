import {Component} from '@angular/core';
import {BackgroundService} from '../../../../services/background.service';

@Component({
  selector: 'app-schermata-graduation',
  imports: [],
  templateUrl: './schermata-graduation.component.html',
  standalone: true,
  styleUrl: './schermata-graduation.component.css'
})
export class SchermataGraduationComponent {

  constructor(private bg: BackgroundService) {
    this.bg.changeBackground("graduation/graduation.png");
  }

}
