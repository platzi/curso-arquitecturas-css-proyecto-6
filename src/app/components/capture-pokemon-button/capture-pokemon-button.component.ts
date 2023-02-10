import { Component, Input } from '@angular/core';
import { SharePokemonInfoService } from 'src/app/services/share-pokemon-info.service'
import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-capture-pokemon-button',
  templateUrl: './capture-pokemon-button.component.html',
  styleUrls: ['./capture-pokemon-button.component.scss']
})
export class CapturePokemonButtonComponent {

  constructor(
    private sharePokemonInfoService: SharePokemonInfoService,
  ) {}

  randomNumber = 0

  tryAgainMessage = ''
  tryAgainError = false

  @Input() myNewPokemon: Pokemon = {
    id: '',
    name: '',
    sprites: {
      front_default: ''
    },
    types: []
  }

  tryToCapturePokemon(myNewPokemon: Pokemon) {
    this.randomNumber = Number(Math.random().toFixed(2)) * 100

    if (this.randomNumber % 2 === 0) {
      this.sharePokemonInfoService.capturePokemon(myNewPokemon)
      this.tryAgainMessage = 'You captured the pokemon!'
    } else {
      this.tryAgainMessage = 'Oh no! The pokemon broke out of the pokeball! Try again!'
    }
    this.tryAgainError = true

    setTimeout(() => {
      this.tryAgainError = false
    }, 3000)
  }
}
