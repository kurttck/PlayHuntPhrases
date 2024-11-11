import { Component } from '@angular/core';
import { PhraseComponent } from './phrase/phrase.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PhraseComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'PlayHunt Phrases';
}
