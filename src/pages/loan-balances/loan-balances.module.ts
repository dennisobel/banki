import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoanBalancesPage } from './loan-balances';

@NgModule({
  declarations: [
    LoanBalancesPage,
  ],
  imports: [
    IonicPageModule.forChild(LoanBalancesPage),
  ],
})
export class LoanBalancesPageModule {}
