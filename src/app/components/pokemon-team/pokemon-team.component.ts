import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';
import { SharePokemonInfoService } from 'src/app/services/share-pokemon-info.service';

@Component({
  selector: 'app-pokemon-team',
  templateUrl: './pokemon-team.component.html',
  styleUrls: ['./pokemon-team.component.scss']
})
export class PokemonTeamComponent implements OnInit {

  constructor(
    private sharePokemonInfoService: SharePokemonInfoService
  ) {}

  pokemonTeam: Pokemon[] = []

  ngOnInit() {
    this.sharePokemonInfoService.myTeam$.subscribe(pokemonArray => {
      if (pokemonArray[0]) {
        this.pokemonTeam.push(pokemonArray[pokemonArray.length - 1])
      }
    })
  }
}
