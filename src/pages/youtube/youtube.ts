import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ModalController } from 'ionic-angular';

//provider
import { YoutubeProvider } from './../../providers/youtube/youtube';

//native plugin
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

//youtube modal page
import { YoutubemodalPage } from './../youtubemodal/youtubemodal';
@IonicPage()
@Component({
  selector: 'page-youtube',
  templateUrl: 'youtube.html',
  providers: [YoutubeProvider]
})
export class YoutubePage {

  public videos = new Array();

  constructor(public navCtrl: NavController, public navParams: NavParams, public youtubedata: YoutubeProvider, private youtube: YoutubeVideoPlayer, public loadingCtrl: LoadingController, public modalCtrl: ModalController) {
    let loader = this.loadingCtrl.create({
      content: "Loading Videos...",
    });
    loader.present();

    this.youtubedata.getVideo().subscribe(videos => {
      // console.log('video', videos);
      this.videos = videos;
    })
    loader.dismiss();
  }

  startVideo(id: string) {
    console.log(id);
    this.youtube.openVideo(id);
  }

  presentModal() {
    let modal = this.modalCtrl.create(YoutubemodalPage);
    modal.present();
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad YoutubePage');
  // }

}
