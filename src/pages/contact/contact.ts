import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

// native emailcomposer
import { EmailComposer } from '@ionic-native/email-composer';

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private emailComposer: EmailComposer) {
  }

  sendEmail() {
    this.emailComposer.addAlias('gmail', 'com.google.android.gm');
    this.emailComposer.open({
      app: 'gmail',
      to: 'lan.psis@gmail.com',
      subject: 'Hi from ionic',
      body: 'Sending greeting from my app using gmail',
      isHtml: true
    });
  }
}