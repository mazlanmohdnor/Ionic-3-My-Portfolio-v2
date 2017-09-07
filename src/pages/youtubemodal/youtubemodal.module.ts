import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YoutubemodalPage } from './youtubemodal';
import { ParallaxHeaderDirectiveModule } from './../../directives/parallax-header/parallax-header.module';


@NgModule({
  declarations: [
    YoutubemodalPage,
  ],
  imports: [
    IonicPageModule.forChild(YoutubemodalPage),
    ParallaxHeaderDirectiveModule
  ],
  exports: [
    YoutubemodalPage
  ]
})
export class YoutubemodalPageModule {}
