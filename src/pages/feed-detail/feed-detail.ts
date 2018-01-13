import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as moment from 'moment';
import 'moment/locale/fr';

@Component({
  selector: 'page-feed-detail',
  templateUrl: 'feed-detail.html'
})
export class FeedDetailPage {

  feed;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.feed = navParams.get('feed');
  }

  formatFromNowDate(strDate) {
    if (typeof strDate == "undefined" || strDate == "")
        return "";
    else
        return moment(strDate, 'DD/MM/YYYY HH:mm:ss').fromNow();
  };

}
