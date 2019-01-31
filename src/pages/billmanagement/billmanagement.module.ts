import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BillmanagementPage } from './billmanagement';

@NgModule({
  declarations: [
    BillmanagementPage,
  ],
  imports: [
    IonicPageModule.forChild(BillmanagementPage),
  ],
})
export class BillmanagementPageModule {}
