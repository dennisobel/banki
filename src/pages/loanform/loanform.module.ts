import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoanformPage } from './loanform';

@NgModule({
  declarations: [
    LoanformPage,
  ],
  imports: [
    IonicPageModule.forChild(LoanformPage),
  ],
})
export class LoanformPageModule {}
