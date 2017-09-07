import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PagetabsPage } from './pagetabs';

@NgModule({
  declarations: [
    PagetabsPage,
  ],
  imports: [
    IonicPageModule.forChild(PagetabsPage),
  ]
})
export class PagetabsPageModule {}
