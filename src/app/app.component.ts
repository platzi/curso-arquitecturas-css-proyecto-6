import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pokemon-team';

  pokemonSearchTerm: string | number = ''

  convertToLowerCase(event: string) {
    this.pokemonSearchTerm = event.toLowerCase();
  }
}
