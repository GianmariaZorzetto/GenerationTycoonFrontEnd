import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackgroundService {
  private renderer: Renderer2;

  constructor(private rendererFactory: RendererFactory2) {
    // Creiamo un Renderer partendo dalla factory
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  /**
   * Imposta lo sfondo del body su un’immagine
   * @param imageName Nome del file immagine (ad esempio 'immagine.svg')
   */
  changeBackground(imageName: string): void {
    // In questo esempio, supponiamo che i file siano in /sfondi_schermate/
    this.renderer.setStyle(document.getElementById("sfondo"), 'background-image', `url('/sfondi_schermate/${imageName}')`);
    // Se vuoi anche rimuovere altri stili o cambiarli, puoi farlo qui
  }
}
