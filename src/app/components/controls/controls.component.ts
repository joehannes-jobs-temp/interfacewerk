import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { NewsApiService } from '../../services/news-api.service';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {
  @Output() search = new EventEmitter<string>();
  sources: NewsAPI.Source[];
  selectedSources: NewsAPI.Source[] = [];

  constructor(private newsApiService: NewsApiService) {}

  ngOnInit() {
    const that = this;
    this.newsApiService.pending.subscribe({
      next() {},
      error() {},  // this.growlMsg(e),
      complete(sources: NewsAPI.Source[]) { that.sources = sources; },
    });
  }
}
