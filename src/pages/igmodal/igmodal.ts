import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, IonicPage } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-igmodal',
  templateUrl: 'igmodal.html',
})
export class IgmodalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IgmodalPage');
  }
  
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
