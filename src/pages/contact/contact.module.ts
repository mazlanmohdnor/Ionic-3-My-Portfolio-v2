import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactPage } from './contact';
import { ParallaxHeaderDirectiveModule } from './../../directives/parallax-header/parallax-header.module';


@NgModule({
  declarations: [
    ContactPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactPage),
    ParallaxHeaderDirectiveModule
  ],
  exports: [
    ContactPage
  ]
})
export class ContactPageModule {}
