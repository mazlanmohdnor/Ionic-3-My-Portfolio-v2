import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ModalController, ToastController, IonicPage } from 'ionic-angular';

//provider
import { YoutubeProvider } from './../../providers/youtube/youtube';

//native plugin
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { Network } from '@ionic-native/network';

//youtube modal page
@IonicPage()
@Component({
  selector: 'page-youtube',
  templateUrl: 'youtube.html',
  providers: [YoutubeProvider]
})
export class YoutubePage {

  public videos = new Array();
  public loader = this.loadingCtrl.create({
    content: "Loading Videos...",
  });

  noCon: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public youtubedata: YoutubeProvider, private youtube: YoutubeVideoPlayer, public loadingCtrl: LoadingController, public modalCtrl: ModalController, private network:Network, private toast: ToastController) {
    this.loader.present();
    this.doRefresh(0);
  }

  doRefresh(refresher) {
    this.youtubedata.getVideo().subscribe(
      videos => {
        this.videos = videos;
      },
      //handle error  
      (err) => {
        this.toast.create({
          message: `You are offline, please check your internet connection`,
          showCloseButton: true,
          closeButtonText: 'Ok'
        }).present();
        this.loader.dismiss();
        this.noCon = true;
      },
      () => {
        this.loader.dismiss();
      }
    )
    setTimeout(() => {
      if (refresher != 0)
        refresher.complete();
    }, 2000);
  }

  startVideo(id: string) {
    this.youtube.openVideo(id);
  }

  presentModal() {
    let modal = this.modalCtrl.create('YoutubemodalPage');
    modal.present();
  }

  displayNetworkUpdate(connectionState: string) {
    this.toast.create({
      message: `You are now ${connectionState}`,
      showCloseButton: true,
      closeButtonText: 'Ok'
    }).present();
  }

  ionViewDidEnter() {
    this.network.onConnect().subscribe(data => {
      console.log(data)
      this.displayNetworkUpdate(data.type);
    }, error => console.error(error));

    this.network.onDisconnect().subscribe(data => {
      console.log(data)
      this.displayNetworkUpdate(data.type);
    }, error => console.error(error));
  }
}
