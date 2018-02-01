import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/Observable/of';
import { tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/fromPromise';

@Injectable()
export class DataService {
  feedList: any;
  constructor(public http: HttpClient, public storage: Storage) {
    this.http = http;
    this.feedList = [];
  }

  getFeedList(): Observable<any>{
    if(this.feedList.length == 0) {
      return Observable.fromPromise(this.storage.get('feedList')).mergeMap( (val: any) => {
          if(val == null || val.feed == null) {
            return this.http.get("assets/data.json").pipe(
              tap( (res: any) => {
                this.feedList = res.feed;
              })
            );
          }
          else {
            this.feedList = val.feed;
            return of({ feed:this.feedList });
          }
        });
    }
    else {
      return of({ feed:this.feedList });
    }
    
  }

  getFeedList2(): Observable<any>{ 
    if(this.feedList == null) {
      return this.http.get("assset/data.json").pipe(
        tap( res => {
          this.feedList = res.feedList;
        })
      );
    }
    else  {
      return of({feed: this.feedList});
    }
  }
  
  addFeedToList(feed) {
      this.feedList.push(feed);
      this.saveFeedToList();
  }

  saveFeedToList() {
    this.storage.set('feedList', {"feed": this.feedList});
  }

} 