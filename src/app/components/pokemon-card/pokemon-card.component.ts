import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
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

  pokemonName = ''
  pokemonSprite = ''
  pokemonTypes: string[] = []

  myNewPokemon: Pokemon = {
    id: '',
    name: '',
    sprites: {
      front_default: ''
    },
    types: []
  }

  ngOnInit() {
    this.sharePokemonDataService.pokemon$.subscribe(pokemon => {
      this.pokemonName = pokemon.name
      this.pokemonSprite = pokemon.sprites.front_default
      this.emptyTypesArray();
      pokemon.types.map(value => {
        this.pokemonTypes.push(value.type.name);
      })
      this.myNewPokemon = pokemon
    })
  }

  emptyTypesArray(): string[] {
    while (this.pokemonTypes.length > 0) {
      this.pokemonTypes.pop()
    }
    return this.pokemonTypes
  }
}
