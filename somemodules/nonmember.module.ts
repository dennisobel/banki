import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NonmemberPage } from './nonmember';

@NgModule({
  declarations: [
    NonmemberPage,
  ],
  imports: [
    IonicPageModule.forChild(NonmemberPage),
  ],
})
export class NonmemberPageModule {}
