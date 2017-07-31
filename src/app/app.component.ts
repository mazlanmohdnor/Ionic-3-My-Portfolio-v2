import { Storage } from '@ionic/storage';
import { SplashPage } from './../pages/splash/splash';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PagetabsPage } from './../pages/pagetabs/pagetabs';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // rootPage: any = SplashPage;
  rootPage: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public storage:Storage) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      statusBar.overlaysWebView(true);
      statusBar.backgroundColorByHexString("#FE686A");
      splashScreen.hide();

      this.storage.get('intro-done').then(done => {
        if (!done) {
          this.storage.set('intro-done', true);
          this.rootPage = SplashPage;
        } else {
          this.rootPage = PagetabsPage;
        }
      });


    });
  }
}

