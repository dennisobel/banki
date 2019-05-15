import { Component } from '@angular/core';
import { 
  IonicPage, 
  NavController, 
  ViewController, 
  NavParams } from 'ionic-angular';

import { Socket } from 'ng-socket-io';
import { SocketProvider } from "../../providers/socket/socket";
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-transactions',
  templateUrl: 'transactions.html',
})
export class TransactionsPage {
  private details: any;
  private accountNum: any
  private mno:any;

  constructor(
    private socketHelper: SocketProvider,
    private storage: Storage,
    private socket: Socket,    
    public navCtrl: NavController, 
    private viewCtrl: ViewController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.details = this.navParams.get('data')
    this.accountNum = this.details.details.details[2]
    this.mno = this.details.mno;

    // get transactions and their details
    let data = {
      accountNum:this.accountNum,
      mno:this.mno
    }
    this.socketHelper.getTransactionDetails(data).then(()=>{
      // get transactions feedback
      this.socket.on('transactionData',(data) => {
        console.log("TRANSACTION DATA: ", data)
      })
    })
  }

  // goTo Function 
  goTo(page){
    this.navCtrl.push(page);
  }

  onClose() {
    this.viewCtrl.dismiss()
  }
}
