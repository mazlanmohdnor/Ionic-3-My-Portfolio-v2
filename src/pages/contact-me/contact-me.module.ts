import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactMePage } from './contact-me';

@NgModule({
  declarations: [
    ContactMePage,
  ],
  imports: [
    IonicPageModule.forChild(ContactMePage),
  ],
  exports: [
    ContactMePage
  ]
})
export class ContactMePageModule {}
