import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar';
import * as moment from 'moment';

@Component({
  selector: 'page-event-detail',
  templateUrl: 'event-detail.html'
})
export class EventDetailPage {

  event;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public viewCtrl: ViewController, public calendar: Calendar) {
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
    this.calendar.createEventInteractively(this.event.title, this.event.address, "", moment(this.event.date, 'DD/MM/YYYY HH:mm:ss').toDate())
    .then(
      (msg) => { 
        alert.present(); 
      },
      (err) => { console.log(err); }
    );
    
    
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
