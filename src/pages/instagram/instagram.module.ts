import { IonicImageViewerModule } from 'ionic-img-viewer';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InstagramPage } from './instagram';

@NgModule({
  declarations: [
    InstagramPage,
  ],
  imports: [
    IonicPageModule.forChild(InstagramPage),
    IonicImageViewerModule
  ],
  exports: [
    InstagramPage
  ]
})
export class InstagramPageModule {}
