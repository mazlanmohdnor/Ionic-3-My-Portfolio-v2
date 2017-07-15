import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataProvider {

  constructor(public http: Http) {
    console.log('Hello DataProvider Provider');
  }

  getData() {
    // return this.http.get('https://rawgit.com/mazlanmohdnor/myresumev2/master/src/assets/data.json')
    return this.http.get('assets/data.json')
      .map(res => res.json());
  }

}
