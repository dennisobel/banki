import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RepayLoansPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-repay-loans',
  templateUrl: 'repay-loans.html',
})
export class RepayLoansPage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RepayLoansPage');
  }
  handleContinue(){
    let alert = this.alertCtrl.create({
      title:"PROCESSING LOAN REPAY",
      buttons:[
        {
          text:"OK",
          role:"cancel",
          handler: ()=>{
            console.log("canceled")
          }
        }
      ]
    })
  }

  logOut(){
    this.navCtrl.setRoot('WelcomePage');
  }  

}
