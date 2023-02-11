import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class SharePokemonDataService {
  private myPokemon: Pokemon = {
    id: '',
    name: '',
    sprites: { front_default: ''},
    types: []
  }

  private pokemon = new BehaviorSubject<Pokemon>(this.myPokemon);

  pokemon$ = this.pokemon.asObservable();

  fillPokemonData(pokemon: Pokemon) {
    this.pokemon.next(pokemon);
  }
}
