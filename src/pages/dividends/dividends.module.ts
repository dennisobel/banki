import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DividendsPage } from './dividends';

@NgModule({
  declarations: [
    DividendsPage,
  ],
  imports: [
    IonicPageModule.forChild(DividendsPage),
  ],
})
export class DividendsPageModule {}
