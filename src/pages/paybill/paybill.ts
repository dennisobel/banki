import { Component } from '@angular/core';
import { IonicPage, ViewController, NavController, LoadingController, AlertController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PaybillPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-paybill',
  templateUrl: 'paybill.html',
})
export class PaybillPage {
  private till:any;
  private amount:any;
  private account:any;

  constructor(private viewCtrl: ViewController, public navCtrl: NavController, private alertCtrl:AlertController, private loadingCtrl: LoadingController,  public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaybillPage');
  }

  handleContinue(){
    let loading = this.loadingCtrl.create({
        content: 'Processing...',
        duration: 20000
    });
    loading.present();     
    /*
    let alert = this.alertCtrl.create({
      title:"PROCESSING PAYBILL",
      buttons:[
        {
          text:"Ok",
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
