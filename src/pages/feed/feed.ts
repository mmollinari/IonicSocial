import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FeedDetailPage } from '../feed-detail/feed-detail';
import { DataService } from '../../service/data.service';
import * as moment from 'moment';
import 'moment/locale/fr';

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html'
})
export class FeedPage {

  feedList: any;
  constructor(public navCtrl: NavController, public dataService: DataService) {
    moment.locale('fr');
    this.feedList = []; 
  }

  ionViewDidLoad() {
    this.dataService.getFeedList().subscribe(data => 
      {
        this.feedList = data.feed;
        this.feedList.sort(function (a, b) {
          return moment(b.date_publication, 'DD/MM/YYYY HH:mm:ss').valueOf() - moment(a.date_publication, 'DD/MM/YYYY HH:mm:ss').valueOf();
        });
      }); 
  }

  formatFromNowDate(strDate) {
    if (typeof strDate == "undefined" || strDate == "")
        return "";
    else
        return moment(strDate, 'DD/MM/YYYY HH:mm:ss').fromNow();
  };

  goToFeed(feed) {
    this.navCtrl.push(FeedDetailPage, { feed: feed });
  };

}
