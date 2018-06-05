import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NewsApiService {
  sources: NewsAPI.Source[];
  sourceResult: NewsAPI.SourceResult;
  pending = Observable.create(this.init.bind(this));
  initialized = false;

  constructor(private http: HttpClient) {
    const that = this;
    this.pending.subscribe({
      next() { that.noop(); },
      error(e) { console.log(e); },
      complete() { that.initialized = true; console.log(that.sources); },
    });
  }

  getSources(): Observable<NewsAPI.SourceResult> {
    return this.http.get<NewsAPI.SourceResult>('https://newsapi.org/v2/sources', {
      params: {
        apiKey: environment.apiKey
      }
    });
  }

  getNews(options: {
    page: number
    pageSize: number
    sortBy?: 'relevancy' | 'popularity' | 'publishedAt'
    q: string
    sources: string[]
  }) {
    return this.http.get<NewsAPI.NewsResult>('https://newsapi.org/v2/everything', {
      params: {
        page: String(options.page),
        pageSize: String(options.pageSize),
        sortBy: options.sortBy ? String(options.sortBy) : '',
        q: encodeURIComponent(options.q),
        sources: options.sources.join(','),
        apiKey: environment.apiKey
      }
    });
  }

  private init(observer) {
    let bailOut = false;
    const { error, complete } = observer;
    const unsubscribe = (): void => { bailOut = true; };
    const fetchSources = (): void => {
      this.getSources().subscribe(
        result => {
          this.sourceResult = <NewsAPI.SourceResult>result;
          this.sources = this.sourceResult.sources.map(s => ({ id: s.id, name: s.name }) );
          complete(this.sources);
        },
        httpError => {
          error(httpError);
          if (!bailOut) { setTimeout(fetchSources, 3000); }
        }
      );
    };

    if (this.initialized) {
      complete(this.sources);
    } else {
      this.sources = <NewsAPI.Source[]>JSON.parse(localStorage.getItem('newsFeedsSources') || '[]');
      if (this.sources.length === 0) {
        fetchSources();
      } else {
        complete(this.sources);
      }
    }
    return { unsubscribe };
  }

  private noop(): void {}
}
