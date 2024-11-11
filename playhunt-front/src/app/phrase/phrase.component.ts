import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-phrase',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './phrase.component.html',
})
export class PhraseComponent {
  phrase: string = '';
  game = '';
  character = '';
  image = '';

  constructor(private api: ApiService) {
    this.getPhrase();
  }

  getPhrase() {
    //const random = Math.floor(Math.random() * 10) + 1;

    this.api.get('games/phrases').subscribe({
      next: (data) => {
        console.log('Datos recibidos', data);

        this.phrase = data.phrase;
        this.game = data.game;
        this.character = data.character;
        this.image = data.img;

        console.log('Nombre:', this.game);
        console.log('Imagen:', this.image);
      },

      error: (error) => {
        console.error('Error al hacer a solicitud:', error);
      },
      complete: () => {
        console.log('La solicitud ha sido completada');
      },
    });
  }
}
