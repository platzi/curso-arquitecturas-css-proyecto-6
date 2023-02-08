import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  @Output() newItemEvent = new EventEmitter<string | number>();

  passValueToButton(value: string | number) {
    this.newItemEvent.emit(value);
  }
}
