import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@Component({
  selector: 'page-pagetabs',
  templateUrl: 'pagetabs.html'
})
@IonicPage()
export class PagetabsPage {

  introRoot = 'IntroPage';
  youtubeRoot = 'YoutubePage';
  instagramRoot = 'InstagramPage';
  githubRoot = 'GithubPage';
  contactRoot = 'ContactPage';


  constructor(public navCtrl: NavController) { }

}
