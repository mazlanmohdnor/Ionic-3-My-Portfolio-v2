import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DataProvider {

  constructor(public http: Http) {
    console.log('Hello DataProvider Provider');
  }

  getData() {
    return this.http.get('https://rawgit.com/mazlanmohdnor/myresumev2/master/src/assets/data.json')
      .map(res => res.json());
  }

}
