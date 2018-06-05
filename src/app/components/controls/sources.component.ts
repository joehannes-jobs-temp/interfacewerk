import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sources-dropdown',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.scss']
})
export class SourcesComponent {
  @Input() sources: NewsAPI.Source[];
  @Output() search = new EventEmitter<NewsAPI.Source[]>();
  selectedSources: NewsAPI.Source[] = [];

  constructor() {}

  onSubmit() {
    this.search.emit(this.selectedSources);
  }
}
