import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WorkPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkPage');
  }

}
