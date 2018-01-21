import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  feedList: any;
  constructor(public http: Http, public storage: Storage) {
    this.http = http;
    this.feedList = [];
  }

  getFeedList(): Promise<any> {    
    return new Promise((resolve, reject) => {
      if(this.feedList.length == 0) {
        this.storage.get('feedList').then((data) => {
            this.feedList = data;
            if(this.feedList == null) {
              this.http.get("assets/data.json").map(res => res.json()).subscribe(data => {
                this.feedList = data;
                resolve(this.feedList);
              }, (error) => {
                console.log("erreur lors de la récupération",error);
                resolve("error");
              });
            }
            else {
              resolve(this.feedList); 
            }
        });
      } else {
        resolve(this.feedList); 
      }
    });
  }
  
  addFeedToList(feed) {
      this.feedList.push(feed);
      this.saveFeedToList();
  }

  saveFeedToList() {
    this.storage.set('feedList', this.feedList);
  }

}