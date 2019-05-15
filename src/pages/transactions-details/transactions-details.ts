import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams } from 'ionic-angular';
import { createOfflineCompileUrlResolver } from '@angular/compiler';


@IonicPage()
@Component({
  selector: 'page-transactions-details',
  templateUrl: 'transactions-details.html',
})
export class TransactionsDetailsPage {

  constructor(public navCtrl: NavController, private viewCtrl: ViewController, public navParams: NavParams) {
  }

  items=[
    {col1:'Amount', col2:100000},
    {col1:'Transaction Date', col2:'15-8-2017'},
    {col1:'Posting Date', col2:'12-8-2017'},
    {col1:'Description', col2:'ATM Withdrawal Street name ATM Withdrawal Street name'},
    {col1:'Debit/Credit', col2:'Debit'},
    {col1:'Reference', col2:'02154860.15463'},
  ]

  onClose(){
    this.viewCtrl.dismiss()
  }
}
