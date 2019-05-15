import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController, AlertController, LoadingController } from 'ionic-angular';
import { resolve } from 'url';
import { SignUpPage } from '../sign-up/sign-up';

@IonicPage()
@Component({
  selector: 'page-precustomer',
  templateUrl: 'precustomer.html',
})
export class PrecustomerPage {
  private amount:any;

  constructor(
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private navCtrl: NavController, 
    private navParams: NavParams,
    private viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    this.presentToast('Please make an initial payment of 1500/- to activate your account',true,'middle')
  }

  handleContinue() {
    const amount = 1500

    let firstPayAlert = this.alertCtrl.create({
      title: `About to deposit ${amount} for account activation`,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            // post amount
            /*
            let loading = this.loadingCtrl.create({
              content: 'Processing...',
              duration: 5000
            });
            loading.present(); 
            */
           this.presentLoader('Processing',5000).then(()=>{
             this.alertCtrl.create({
              title:'Account Opened',
              buttons: [
                {
                  text:'Member Area',
                  handler: ()=>{
                    this.navCtrl.setRoot(SignUpPage)
                  }
                }
              ]
             }).present()
           })            
          }
        },
        {
          text:'Cancel',
          role:'cancel',
        }
      ]
    })

    firstPayAlert.present()

  }

  onClose() {
    this.viewCtrl.dismiss()
  }

  presentToast(message,close,position) {
    let toast = this.toastCtrl.create({
      message: message,
      // duration: 3000,
      showCloseButton:close,
      position: position
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }   
  
  presentLoader(message,duration) {
    let loading = this.loadingCtrl.create({
      content: message,
      duration: duration
    });
    return new Promise((resolve,reject) => {
      resolve(
        loading.present()       
      )
    })
  }
}
