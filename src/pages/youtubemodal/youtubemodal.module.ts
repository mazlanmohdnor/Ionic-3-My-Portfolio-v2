import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YoutubemodalPage } from './youtubemodal';

@NgModule({
  declarations: [
    YoutubemodalPage,
  ],
  imports: [
    IonicPageModule.forChild(YoutubemodalPage),
  ],
  exports: [
    YoutubemodalPage
  ]
})
export class YoutubemodalPageModule {}
