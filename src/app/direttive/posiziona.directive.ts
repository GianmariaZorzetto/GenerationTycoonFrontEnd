import { Directive, ElementRef, Renderer2, Input, OnInit, OnDestroy } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[posizione]'
})
export class PosizionaDirective implements OnInit, OnDestroy {
  @Input() y: number = 0;   // Valore di default, se vuoi
  @Input() x: number = 0;  // Valore di default, se vuoi
  @Input() w: number = 0;   // Valore di default, se vuoi
  @Input() h: number = 0;
  @Input() centroMassa: boolean = false;
  @Input() autore: string = "D";
  vostreDimensioni = {
    "M":[2560,1270],
    "F":[1915,945],
    "D":[1904,911],
    "R":[1535,695]
  };
  //w 353
  //h 309

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // Impostiamo la posizione iniziale
    this.setPosition();

    // Quando la finestra viene ridimensionata, ricalcoliamo la posizione
    window.addEventListener('resize', this.onResize);
  }

  // Rimuoviamo l'event listener per evitare memory leak
  ngOnDestroy() {
    window.removeEventListener('resize', this.onResize);
  }

  // Gestisce l'evento di resize
  private onResize = () => {
    this.setPosition();
  }

  // Imposta gli stili CSS in base ai valori di top e left
  private setPosition()
  {
    let vw = window.innerWidth;
    let vh = window.innerHeight;

    console.log("vw",vw);
    console.log("vh",vh);
    // @ts-ignore
    let percW = this.x/this.vostreDimensioni[this.autore][0];
    // @ts-ignore
    let percH = this.y/this.vostreDimensioni[this.autore][1];
    console.log("percW",percW);
    console.log("percH",percH);
    let newLeft = vw*percW;
    let newTop = vh*percH;
    console.log("newLeft",newLeft);
    console.log("newTop",newTop);
    this.renderer.setStyle(this.el.nativeElement, 'position', 'absolute');
    if(this.centroMassa)
      this.renderer.setStyle(this.el.nativeElement, 'transform', 'translate(-50%, -50%)');

    this.renderer.setStyle(this.el.nativeElement, 'top', `${newTop}px`);
    this.renderer.setStyle(this.el.nativeElement, 'left', `${newLeft}px`);

    this.renderer.setStyle(this.el.nativeElement, 'width', `${this.w}px`);
    this.renderer.setStyle(this.el.nativeElement, 'height', `${this.h}px`);
  }

}
