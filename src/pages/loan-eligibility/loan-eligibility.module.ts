import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoanEligibilityPage } from './loan-eligibility';

@NgModule({
  declarations: [
    LoanEligibilityPage,
  ],
  imports: [
    IonicPageModule.forChild(LoanEligibilityPage),
  ],
})
export class LoanEligibilityPageModule {}
