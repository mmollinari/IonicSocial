import { Component } from '@angular/core';

import { CommentPage } from '../comment/comment';
import { EventPage } from '../event/event';
import { FeedPage } from '../feed/feed';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabFeedRoot = FeedPage;
  tab2Root = CommentPage;
  tab3Root = EventPage;

  constructor() {

  }
}
