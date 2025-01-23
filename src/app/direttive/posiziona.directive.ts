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
  @Input() autore: string = "R";
  private asr =2;
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
  // Imposta gli stili CSS (posizione e dimensioni) in base ai valori di x, y, w, h
  private setPosition() {
    const vw = window.innerWidth; // Larghezza viewport
    const vh = window.innerHeight; // Altezza viewport

    const winAsr = vw / vh; // Rapporto d'aspetto della viewport
    let hoff = 0; // Offset verticale
    let woff = 0; // Offset orizzontale

    // Calcolo degli offset per le barre nere
    if (winAsr > this.asr) {
      // Barre nere laterali
      const fullWidth = vh * this.asr; // Larghezza dell'immagine a piena altezza
      woff = (vw - fullWidth) / 2; // Offset laterale
    } else {
      // Barre nere sopra e sotto
      const fullHeight = vw / this.asr; // Altezza dell'immagine a piena larghezza
      hoff = (vh - fullHeight) / 2; // Offset verticale
    }

    // Calcolo delle percentuali della posizione rispetto alla dimensione dell'immagine originale
    // @ts-ignore
    const percW = this.x / this.vostreDimensioni[this.autore][0];
    // @ts-ignore
    const percH = this.y / this.vostreDimensioni[this.autore][1];

    // Posizioni ricavate dalle percentuali
    const newLeft = (vw - 2 * woff) * percW + woff;
    const newTop = (vh - 2 * hoff) * percH + hoff;

    // Impostazione degli stili CSS
    this.renderer.setStyle(this.el.nativeElement, 'position', 'absolute');
    if (this.centroMassa) {
      this.renderer.setStyle(this.el.nativeElement, 'transform', 'translate(-50%, -50%)');
    }

    this.renderer.setStyle(this.el.nativeElement, 'top', `${newTop}px`);
    this.renderer.setStyle(this.el.nativeElement, 'left', `${newLeft}px`);

    // Impostazione delle dimensioni
    this.renderer.setStyle(this.el.nativeElement, 'width', `${this.w}px`);
    this.renderer.setStyle(this.el.nativeElement, 'height', `${this.h}px`);
  }


}
