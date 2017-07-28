import { SplashPage } from './../pages/splash/splash';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule, JsonpModule } from '@angular/http';

//native  plugins
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Network } from '@ionic-native/network';
import { EmailComposer } from '@ionic-native/email-composer';
import { IonicStorageModule } from '@ionic/storage';


//modal page
import { IgmodalPage } from './../pages/igmodal/igmodal';
import { YoutubemodalPage } from './../pages/youtubemodal/youtubemodal';
import { GithubmodalPage } from './../pages/githubmodal/githubmodal';


import { MyApp } from './app.component';

//pages
import { IntroPage } from './../pages/intro/intro';
import { InstagramPage } from './../pages/instagram/instagram';
import { YoutubePage } from './../pages/youtube/youtube';
import { GithubPage } from './../pages/github/github';
import { ContactPage } from './../pages/contact/contact';
import { PagetabsPage } from './../pages/pagetabs/pagetabs';
import { SeminarPage } from './../pages/seminar/seminar';
import { WorkPage } from './../pages/work/work';

//providers
import { YoutubeProvider } from '../providers/youtube/youtube';
import { IgProvider } from '../providers/ig/ig';
import { DataProvider } from '../providers/data/data';
import { GithubProvider } from '../providers/github/github';
import { ParallaxHeaderDirective } from '../directives/parallax-header/parallax-header';

//plugins
import { IonicImageViewerModule} from 'ionic-img-viewer';
@NgModule({
  declarations: [
    MyApp,
    InstagramPage,
    YoutubePage,
    IntroPage,
    GithubPage,
    ContactPage,
    PagetabsPage,
    YoutubemodalPage,
    IgmodalPage,
    GithubmodalPage,
    SeminarPage,
    WorkPage,
    SplashPage,
    ParallaxHeaderDirective,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    IonicModule.forRoot(MyApp),
    IonicImageViewerModule,
    IonicStorageModule.forRoot(),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    IntroPage,
    YoutubePage,
    InstagramPage,
    GithubPage,
    ContactPage,
    PagetabsPage,
    YoutubemodalPage,
    IgmodalPage,
    GithubmodalPage,
    SeminarPage,
    WorkPage,
    SplashPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    YoutubeProvider,
    YoutubeVideoPlayer,
    IgProvider,
    InAppBrowser,
    DataProvider,
    Network,
    GithubProvider,
    EmailComposer
    
  ]
})
export class AppModule { }
