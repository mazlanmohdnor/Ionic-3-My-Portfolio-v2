import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-work',
  templateUrl: 'work.html',
})
export class WorkPage {
  public info: {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.info = this.navParams.get('info');
  }



}
