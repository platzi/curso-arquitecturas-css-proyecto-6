import { Component, Input } from '@angular/core';
import { SharePokemonDataService } from 'src/app/services/share-pokemon-data.service';
import { GetPokemonByIdService } from 'src/app/services/get-pokemon-by-id.service';

@Component({
  selector: 'app-search-pokemon-button',
  templateUrl: './search-pokemon-button.component.html',
  styleUrls: ['./search-pokemon-button.component.scss']
})
export class SearchPokemonButtonComponent {
  @Input() pokemonName: string | number = ''

  constructor(
    private getPokemonByIdService: GetPokemonByIdService,
    private sharePokemonDataService: SharePokemonDataService
  ) {}

  getPokemon(id: string | number) {
    this.getPokemonByIdService.getPokemonById(id).subscribe(data => {
      this.sharePokemonDataService.fillPokemonData(data)
    })
  }
}
