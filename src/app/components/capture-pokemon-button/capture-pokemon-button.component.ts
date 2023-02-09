import { Component } from '@angular/core';

@Component({
  selector: 'app-capture-pokemon-button',
  templateUrl: './capture-pokemon-button.component.html',
  styleUrls: ['./capture-pokemon-button.component.scss']
})
export class CapturePokemonButtonComponent {

  randomNumber = 0

  tryToCaptyrePokemon() {
    this.randomNumber = Number(Math.random().toFixed(2)) * 100
    console.log(this.randomNumber)
    if (this.randomNumber % 2 === 0) {
      console.log('you catched it!')
    }
  }
}
