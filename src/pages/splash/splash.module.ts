import { SplashPage } from './splash';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [
        SplashPage,
    ],
    imports: [
        IonicPageModule.forChild(SplashPage),
    ],
    exports: [
        SplashPage
    ]
})
export class SplashPageModule { }
