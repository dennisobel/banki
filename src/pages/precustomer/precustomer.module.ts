import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrecustomerPage } from './precustomer';

@NgModule({
  declarations: [
    PrecustomerPage,
  ],
  imports: [
    IonicPageModule.forChild(PrecustomerPage),
  ],
})
export class PrecustomerPageModule {}
