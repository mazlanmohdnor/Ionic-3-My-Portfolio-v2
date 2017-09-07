import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IgmodalPage } from './igmodal';
import { ParallaxHeaderDirectiveModule } from './../../directives/parallax-header/parallax-header.module';


@NgModule({
  declarations: [
    IgmodalPage,
  ],
  imports: [
    IonicPageModule.forChild(IgmodalPage),
    ParallaxHeaderDirectiveModule
  ],
  exports: [
    IgmodalPage
  ]
})
export class IgmodalPageModule {}
