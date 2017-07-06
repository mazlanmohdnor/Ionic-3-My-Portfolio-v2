import { Injectable } from '@angular/core';
import { Http, Jsonp } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class IgProvider {

  constructor(public http: Http, public jsonp: Jsonp) {
    console.log('Hello IgProvider Provider');
  }

  getImage() {
    return this.jsonp.request('https://api.instagram.com/v1/users/1264443022/media/recent?access_token=1264443022.8a65687.c668e25296cb47619e03021971fe5cb7&callback=JSONP_CALLBACK&count=50', { method: 'get' })
      .map(res => res.json())
      .map(res => res.data);
  }

}
