import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {

  @Input()
    label: string = 'Search';

  @Output()
    searchEvent: EventEmitter<string> = new EventEmitter();

  @Output()
    randomEvent: EventEmitter<string> = new EventEmitter();

  searchInput: string = '';

  constructor() { }

  onSearch() {
    this.searchEvent.emit(this.searchInput);
  }

  onRandom() {
    this.randomEvent.emit(this.searchInput);
  }
}
