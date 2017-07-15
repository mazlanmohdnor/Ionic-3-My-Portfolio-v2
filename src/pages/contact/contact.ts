import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// native emailcomposer
import { EmailComposer } from '@ionic-native/email-composer';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
  message: string;
  url: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private emailComposer: EmailComposer, private socialSharing: SocialSharing) {


  }

  sendEmail() {
    let options = {
      to: 'lan.psis@gmail.com',
      cc: 'erika@mustermann.de',
      bcc: ['john@doe.com', 'jane@doe.com'],

      subject: 'Cordova Icons',
      body: 'How are you? Nice greetings from Leipzig',
      isHtml: true
    };

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