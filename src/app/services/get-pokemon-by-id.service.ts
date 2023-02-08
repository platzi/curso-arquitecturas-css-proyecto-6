import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class GetPokemonByIdService {

  constructor(private http: HttpClient) { }

  pokemonBaseUrl = 'https://pokeapi.co/api/v2/pokemon/'

  getPokemonById(id: number | string) {
    return this.http.get<Pokemon>(`${this.pokemonBaseUrl}${id}`);
  }
}
