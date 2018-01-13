import { Component } from '@angular/core';

import { CommentPage } from '../comment/comment';
import { ContactPage } from '../contact/contact';
import { FeedPage } from '../feed/feed';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabFeedRoot = FeedPage;
  tab2Root = CommentPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
