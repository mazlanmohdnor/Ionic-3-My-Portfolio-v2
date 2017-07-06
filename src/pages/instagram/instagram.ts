import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ModalController } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';

//ig modal page
import { IgmodalPage } from './../igmodal/igmodal';

//IgProvider
import { IgProvider } from './../../providers/ig/ig';

@IonicPage()
@Component({
  selector: 'page-instagram',
  templateUrl: 'instagram.html',
  providers: [IgProvider]
})
export class InstagramPage {

  public images = new Array();

  constructor(public navCtrl: NavController, public navParams: NavParams, public igData: IgProvider, public loadingCtrl: LoadingController, public modalCtrl: ModalController, private iab: InAppBrowser) {
    let loader = this.loadingCtrl.create({
      content: "Loading Images...",
    });
    loader.present();

    this.igData.getImage().subscribe(images => {
      // console.log(dateparse + month + fullYear);
      this.images = images;
    })
    loader.dismiss();

  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad InstagramPage');
  // }

  //show modal
  presentModal() {
    let modal = this.modalCtrl.create(IgmodalPage);
    modal.present();
  }

  launchIG() {
    return this.iab.create('https://www.instagram.com/mazlannnn', '_blank', { location: 'no', toolbar: 'no' });

  }
}
