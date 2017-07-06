import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { ContactMePage } from './../contact-me/contact-me';
import { InstagramPage } from './../instagram/instagram';
import { YoutubePage } from './../youtube/youtube';
import { IntroPage } from './../intro/intro';

@Component({
  selector: 'page-pagetabs',
  templateUrl: 'pagetabs.html'
})
@IonicPage()
export class PagetabsPage {

  introRoot = IntroPage;
  youtubeRoot = YoutubePage;
  instagramRoot = InstagramPage;
  contactMeRoot = ContactMePage;


  constructor(public navCtrl: NavController) { }

}
