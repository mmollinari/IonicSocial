import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { Calendar } from '@ionic-native/calendar';
import { MyApp } from './app.component';

import { CommentPage } from '../pages/comment/comment';
import { EventPage } from '../pages/event/event';
import { EventDetailPage } from '../pages/event-detail/event-detail';
import { FeedDetailPage } from '../pages/feed-detail/feed-detail';
import { FeedPage } from '../pages/feed/feed';
import { TabsPage } from '../pages/tabs/tabs';
import { DataService } from '../service/data.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { FirebaseProvider } from '../service/firebase';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';

const firebaseConfig = {
  apiKey: "AIzaSyCI4R9PWUqV8rCovvSG-xDsRSf0NAI2goU",
  authDomain: "ionicsocial-e0cdc.firebaseapp.com",
  databaseURL: "https://ionicsocial-e0cdc.firebaseio.com",
  projectId: "ionicsocial-e0cdc",
  storageBucket: "ionicsocial-e0cdc.appspot.com",
  messagingSenderId: "255177853631"
};

@NgModule({
  declarations: [
    MyApp,
    CommentPage,
    EventPage,
    EventDetailPage,
    FeedDetailPage,
    FeedPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CommentPage,
    EventPage,
    EventDetailPage,
    FeedDetailPage,
    FeedPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DataService,
    Calendar,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider
  ]
})
export class AppModule {}
