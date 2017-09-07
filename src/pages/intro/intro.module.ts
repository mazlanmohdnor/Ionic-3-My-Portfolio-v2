import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IntroPage } from './intro';
import { ParallaxHeaderDirectiveModule } from './../../directives/parallax-header/parallax-header.module';


@NgModule({
  declarations: [
    IntroPage,
  ],
  imports: [
    IonicPageModule.forChild(IntroPage),
    ParallaxHeaderDirectiveModule
  ]
})
export class IntroPageModule {}
