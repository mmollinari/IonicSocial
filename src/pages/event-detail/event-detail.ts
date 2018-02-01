import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-event-detail',
  templateUrl: 'event-detail.html'
})
export class EventDetailPage {

  event;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public viewCtrl: ViewController) {
    this.event = navParams.get('event');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  addToCalendar() {
    let alert = this.alertCtrl.create({
      title: 'Félicitation',
      subTitle: 'Vous avez ajouté un événement à votre calendrier',  
      buttons: [{ text: 'ok'}]
    });
    alert.present();
  }

  getIcon(type) {
    var iconName = "ionic";
    switch(type) {
      case "foot":
        iconName = "football"
        break; 
      case "hand":
        iconName = "basketball"
        break; 
      case "rugby":
        iconName = "american-football"
        break; 
    }
    return iconName;
  }
  
}
