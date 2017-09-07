import { GithubmodalPage } from './githubmodal';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParallaxHeaderDirectiveModule } from './../../directives/parallax-header/parallax-header.module';


@NgModule({
    declarations: [
        GithubmodalPage,
    ],
    imports: [
        IonicPageModule.forChild(GithubmodalPage),
        ParallaxHeaderDirectiveModule
    ],
    exports: [
        GithubmodalPage
    ]
})
export class GithubPageModule { }
