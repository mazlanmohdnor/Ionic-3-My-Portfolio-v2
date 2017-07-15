import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ModalController, ToastController } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';

//ig modal page
import { IgmodalPage } from './../igmodal/igmodal';

//IgProvider
import { IgProvider } from './../../providers/ig/ig';

// @IonicPage()
@Component({
  selector: 'page-instagram',
  templateUrl: 'instagram.html',
  providers: [IgProvider]
})
export class InstagramPage {

  public images = new Array();
  public loader = this.loadingCtrl.create({
    content: "Loading Images...",
  });
  constructor(public navCtrl: NavController, public navParams: NavParams, public igData: IgProvider, public loadingCtrl: LoadingController, public modalCtrl: ModalController, private iab: InAppBrowser, private toast: ToastController) {

    this.loader.present();
    this.doRefresh(0);

  }

  doRefresh(refresher) {
    this.igData.getImage().subscribe(images => {
      // console.log(dateparse + month + fullYear);
      this.images = images;
    },
      //handle error  
      (err) => {
        this.toast.create({
          message: `You are offline, please check your internet connection`,
          showCloseButton: true,
          closeButtonText: 'Ok'
        }).present();
      },
      () => {
        this.loader.dismiss();

      })

    setTimeout(() => {
      if (refresher != 0)
        refresher.complete();
    }, 2000);

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
    return this.iab.create('https://www.instagram.com/mazlannnn');

  }
}
