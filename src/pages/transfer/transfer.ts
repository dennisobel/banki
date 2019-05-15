import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams } from 'ionic-angular';

import { SocketProvider } from "../../providers/socket/socket";
import { Socket } from 'ng-socket-io';
import { Storage } from '@ionic/storage';



@IonicPage()
@Component({
  selector: 'page-transfer',
  templateUrl: 'transfer.html',
})
export class TransferPage {
  fromAccount='account';
  toAccount='account';
   amount:number;
  show=false;
  result;
  constructor(
    private viewCtrl: ViewController,
    private navCtrl: NavController, 
    private navParams: NavParams,
    private socketHelper: SocketProvider,
    private socket: Socket,
    private storage: Storage) {
  }

  ionViewDidLoad(){
    this.socketHelper.getMemberAccounts()
  }
  
  // transform result
  showResult(){
    this.show=true;
    if(this.fromAccount != 'account'){
      if(this.toAccount != 'account'){
        if(this.amount==undefined){
          this.result='Please Enter Amount';
        }
        else{
          this.result='Transfer Successful';
        }
      }
      else{
        this.result='Please Select To Account';
      }
    }
    else{
      this.result='Please Select From Account';
    }
  }

  // logOut Function 
  logOut(){
    this.navCtrl.setRoot('WelcomePage');
  }

  onClose() {
    this.viewCtrl.dismiss()
  }

}  
