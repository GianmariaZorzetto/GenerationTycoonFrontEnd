import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioLoopService {

  private audio: HTMLAudioElement | null = null;

  constructor() {}

  /**
   * Carica e riproduce una canzone in loop
   * @param url URL del file audio
   */
  playLoop(): void {
    if (this.audio) {
      this.stop(); // Ferma l'audio precedente, se esiste
    }

    this.audio = new Audio(`colonna_sonora/colonna_sonora.mp3`);
    this.audio.loop = true; // Imposta il loop continuo
    this.audio.volume = 0.1; // Imposta il volume (da 0.0 a 1.0)
    this.audio.play().catch((error) => {
      console.error('Errore durante la riproduzione dell’audio:', error);
    });
  }

  /**
   * Ferma la riproduzione
   */
  stop(): void {
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
      this.audio = null;
    }
  }

  /**
   * Cambia il volume
   * @param volume Valore tra 0.0 e 1.0
   */
  setVolume(volume: number): void {
    if (this.audio) {
      this.audio.volume = Math.min(Math.max(volume, 0), 1);
    }
  }

}
