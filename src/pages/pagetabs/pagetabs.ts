import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//tabs page
import { ContactPage } from './../contact/contact';
import { GithubPage } from './../github/github';
import { InstagramPage } from './../instagram/instagram';
import { YoutubePage } from './../youtube/youtube';
import { IntroPage } from './../intro/intro';

@Component({
  selector: 'page-pagetabs',
  templateUrl: 'pagetabs.html'
})
// @IonicPage()
export class PagetabsPage {

  introRoot = IntroPage;
  youtubeRoot = YoutubePage;
  instagramRoot = InstagramPage;
  githubRoot = GithubPage;
  contactRoot = ContactPage;

  // page1: any = IntroPage;
  // page2: any = YoutubePage;
  // page3: any = InstagramPage;
  // page4: any = GithubPage;
  // page5: any = ContactMePage;

  constructor(public navCtrl: NavController) { }

}
