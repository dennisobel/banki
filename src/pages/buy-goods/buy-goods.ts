import { Component } from '@angular/core';
import { IonicPage, ViewController, NavController, AlertController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BuyGoodsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buy-goods',
  templateUrl: 'buy-goods.html',
})
export class BuyGoodsPage {
  private amount:any;
  private till:any;

  constructor(private viewCtrl: ViewController, public navCtrl: NavController, private alertCtrl:AlertController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyGoodsPage');
  }

  handleContinue(){
    let alert = this.alertCtrl.create({
      title:"PROCESSING BUY GOODS",
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

    alert.present()
  }

  logOut(){
    this.navCtrl.setRoot('WelcomePage');
  }  

  onClose() {
    this.viewCtrl.dismiss()
  }

}
