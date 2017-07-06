import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule, JsonpModule } from '@angular/http';

//native  plugins
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { InAppBrowser } from '@ionic-native/in-app-browser';

//modal page
import { IgmodalPage } from './../pages/igmodal/igmodal';
import { YoutubemodalPage } from './../pages/youtubemodal/youtubemodal';

import { MyApp } from './app.component';

//pages
import { IntroPage } from './../pages/intro/intro';
import { ContactMePage } from './../pages/contact-me/contact-me';
import { InstagramPage } from './../pages/instagram/instagram';
import { YoutubePage } from './../pages/youtube/youtube';
import { PagetabsPage } from './../pages/pagetabs/pagetabs';
import { SeminarPage } from './../pages/seminar/seminar';
import { WorkPage } from './../pages/work/work';

//providers
import { YoutubeProvider } from '../providers/youtube/youtube';
import { IgProvider } from '../providers/ig/ig';
import { DataProvider } from '../providers/data/data';

@NgModule({
  declarations: [
    MyApp,
    ContactMePage,
    InstagramPage,
    YoutubePage,
    IntroPage,
    PagetabsPage,
    YoutubemodalPage,
    IgmodalPage,
    SeminarPage,
    WorkPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    IntroPage,
    YoutubePage,
    InstagramPage,
    ContactMePage,
    PagetabsPage,
    YoutubemodalPage,
    IgmodalPage,
    SeminarPage,
    WorkPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    YoutubeProvider,
    YoutubeVideoPlayer,
    IgProvider,
    InAppBrowser,
    DataProvider
  ]
})
export class AppModule { }
