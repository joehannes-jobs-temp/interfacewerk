import { Component, OnInit } from '@angular/core';
// import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api';

import { FeedStoreService } from '../../services/feed-store.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  items: MenuItem[];

  constructor(private feedStoreService: FeedStoreService) {}

  ngOnInit() {
    this.getFeedItems();
  }

  getFeedItems(): void {
    this.feedStoreService.newsFeeds.subscribe(feeds => {
      this.reset();
      feeds.map((feed: NewsFeed) => {
        this.items.push({
          label: feed.name,
          routerLink: ['/savedFilter/:123']
        });
      });
    });
  }

  private reset() {
    this.items = [{ icon: 'fa-home', routerLink: ['/home'] }];
  }
}
