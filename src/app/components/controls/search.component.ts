import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Input() searchVal: string;
  @Output() search = new EventEmitter<string>();

  constructor() {}

  onSubmit() {
    if (this.searchVal.length < 3) { return; }
    this.search.emit(this.searchVal);
  }
}
