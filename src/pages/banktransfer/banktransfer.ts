import { Component } from '@angular/core';
import { IonicPage, ViewController, NavController, LoadingController, AlertController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BanktransferPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-banktransfer',
  templateUrl: 'banktransfer.html',
})
export class BanktransferPage {

  constructor(
    private viewCtrl: ViewController,
    public navCtrl: NavController, 
    public navParams: NavParams,
    private loadingCtrl: LoadingController, 
    private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BanktransferPage');
  }

  handleContinue(){
    let loading = this.loadingCtrl.create({
        content: 'Processing...',
        duration: 20000
    });
    loading.present();    
    /*
    let alert = this.alertCtrl.create({
      title: "SUCCESFULLY PROCESSED BANK TRANSFER",
      buttons:[
        {
          text:"OK",
          role:"cancel",
          handler:()=>{
            console.log("canceled")
          }
        }
      ]
    })

    alert.present()*/
    
  }

  logOut(){
    this.navCtrl.setRoot('WelcomePage');
  }  

  onClose() {
    this.viewCtrl.dismiss()
  }

}
