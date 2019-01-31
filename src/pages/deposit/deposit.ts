import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-deposit',
  templateUrl: 'deposit.html',
})
export class DepositPage { 
  private amount:any;
  private accountNumber:any;

  constructor(
    private navCtrl: NavController, 
    private navParams: NavParams,
    private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DepositPage');
  }

  handleContinue(){
    let alert = this.alertCtrl.create({
      title:`Confirm deposit of Ksh ${this.amount} to account ${this.accountNumber}`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: ()=>{
            console.log("canceled")
          }
        },
        {
          text: 'Ok',
          handler: ()=>{
            // handle deposit
          }
        }
      ]
    })

    alert.present()
  }

}
