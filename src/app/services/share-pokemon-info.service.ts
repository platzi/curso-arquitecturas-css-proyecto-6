import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class SharePokemonInfoService {

  constructor() { }

  private myPokemonTeam: Pokemon[] = [];
  private myTeam = new BehaviorSubject<Pokemon[]>([]);

  myTeam$ = this.myTeam.asObservable();

  capturePokemon(pokemon: Pokemon) {
    this.myPokemonTeam.push(pokemon);
    this.myTeam.next(this.myPokemonTeam);
  }

  getTotalPokemon() {
    return this.myPokemonTeam.length;
  }

}
