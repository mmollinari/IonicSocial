import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/Observable/of';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class DataService {
  feedList: any;
  constructor(public http: HttpClient, public storage: Storage) {
    this.http = http;
    this.feedList = [];
  }

  getFeedList(): Observable<any>{
    if(this.feedList.length == 0) {
      return of(this.storage.get('feedList')).pipe(
        tap( (res: any) => {
          if(res.feed == null) {
            Observable.throw(new Error());
          }
          else {
            this.feedList = res.feed;
          }
        }), 
        catchError(err => this.http.get("assets/data.json").pipe(
          tap( (res: any) => {
            this.feedList = res.feed;
            console.log(res)
          })
        )) 
      );
    }
    else {
      return of({ feed:this.feedList });
    }
    
  }
  
  addFeedToList(feed) {
      this.feedList.push(feed);
      this.saveFeedToList();
  }

  saveFeedToList() {
    this.storage.set('feedList', {"feed":this.feedList});
  }

} 