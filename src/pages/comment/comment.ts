import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as moment from 'moment';
import 'moment/locale/fr';
import { DataService } from '../../service/data.service';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-comment',
  templateUrl: 'comment.html'
})
export class CommentPage {
  feedLength;
  feed;
  form;
  constructor(public navCtrl: NavController, public dataService: DataService, public alertCtrl: AlertController) {
    this.feed = {};
    this.feedLength = 0;
    dataService.getFeedList().subscribe(data => 
    {
      this.feed = data.feed[0];
      this.feedLength = data.feed.length;
    }); 
    this.form = {
        title: "",
        url: "",
        description: ""
    };
  }

  formatFromNowDate(strDate) {
    if (typeof strDate == "undefined" || strDate == "")
        return "";
    else
        return moment(strDate, 'DD/MM/YYYY HH:mm:ss').fromNow();
  };


  addArticle(form) {
    if(form.title != "" && form.description != "") {
      var newFeed = {
          id_feed: this.feedLength,
          user_img: "https://ionicframework.com/img/docs/mcfly.jpg",
          user_firstname: "Marc",
          user_lastname: "Mollinari",
          date_publication: moment().format('DD/MM/YYYY HH:mm:ss'),
          title: form.title,
          description: form.description,
          img: form.url,
          nb_comment: 0
      }
      this.dataService.addFeedToList(newFeed);
    // feeds.save();
    let alert = this.alertCtrl.create({
      title: 'Félicitation',
      subTitle: 'Vous avez publié un nouvel article',  
      buttons: [
        {
          text: 'ok',
          handler: () => {
            this.form = {
                       title: "",
                       url: "",
                       description: ""
                   };
          }
        }
      ]
    });
    alert.present();
    }
  }

}
