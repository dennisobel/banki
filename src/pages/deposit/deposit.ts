import { Component } from '@angular/core';
import { IonicPage, ViewController, NavController, AlertController, LoadingController, NavParams } from 'ionic-angular';
import { SocketProvider } from "../../providers/socket/socket";
import { HttpProvider } from "../../providers/http/http"



@IonicPage()
@Component({
  selector: 'page-deposit',
  templateUrl: 'deposit.html',
})
export class DepositPage { 
  private amount:number;
  private accountNumber:number;

  constructor(
    private viewCtrl: ViewController,
    private navCtrl: NavController, 
    private navParams: NavParams,
    private alertCtrl: AlertController,
    private socketHelper: SocketProvider,
    private loadingCtrl: LoadingController,
    private httpHelper: HttpProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DepositPage');
  }

  onSelectSelf(){

  }

  onSelectOther(){

  }

  handleContinue(){
    const paybill:any = 400444;
    let loading = this.loadingCtrl.create({
        content: 'Processing Deposit...',
        duration: 3000
    });
    loading.present();   
  
  
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
            /*
            this.socketHelper.depositFromMpesa({accountNumber:this.accountNumber,amount:this.amount,paybill})
            .then(() => {
              
            })
            */

            this.httpHelper.depositFromMpesa({accountNumber:this.accountNumber,amount:this.amount,paybill})
            .then((data:any) => {
              console.log('DEPOSIT FROM MPESA HTTP REQUEST FEEDBACK',data)
            })
          }
        }
      ]
    })

    alert.present() 
  }

  logOut(){
    this.navCtrl.setRoot('WelcomePage');
  }  

  onClose() {
    this.viewCtrl.dismiss()
  }

}
