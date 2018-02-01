import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { FirebaseProvider } from '../../service/firebase';
import { EventDetailPage } from '../event-detail/event-detail';


@Component({
  selector: 'page-event',
  templateUrl: 'event.html'
})
export class EventPage {

  eventList
  constructor(public navCtrl: NavController, public fireBaseProvider: FirebaseProvider, public modalCtrl: ModalController) {
    this.fireBaseProvider.getEventItems().subscribe( data => {
      this.eventList = data;
    })
  }

  presentEventModal(event) {
    let eventModal = this.modalCtrl.create(EventDetailPage, { event: event });
    eventModal.present();
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
