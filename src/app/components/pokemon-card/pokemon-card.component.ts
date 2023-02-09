import { Component, OnInit } from '@angular/core';
import { SharePokemonDataService } from 'src/app/services/share-pokemon-data.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {
  constructor(
    private sharePokemonDataService: SharePokemonDataService
  ) {}

  catchPokemonButtonText = "Try to catch Pokemon"

  pokemonName = ''
  pokemonSprite = ''
  pokemonTypes: string[] = []

  ngOnInit() {
    this.sharePokemonDataService.pokemon$.subscribe(pokemon => {
      this.pokemonName = pokemon.name
      this.pokemonSprite = pokemon.sprites.front_default
      pokemon.types.map(value => {
        this.pokemonTypes.push(value.type.name)
      })
    })
  }
}
