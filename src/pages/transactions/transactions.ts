import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-transactions',
  templateUrl: 'transactions.html',
})
export class TransactionsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  items=[
    {date:'15-8-2017',cost:1000,address:'ATM Withdrawal 12 Street Name'},
    {date:'15-8-2017',cost:1000,address:'ATM Withdrawal 12 Street Name'},
    {date:'15-8-2017',cost:1000,address:'ATM Withdrawal 12 Street Name'},
    {date:'15-8-2017',cost:1000,address:'ATM Withdrawal 12 Street Name'},
  ]
  // goTo Function 
  goTo(page){
    this.navCtrl.push(page);
  }
}
