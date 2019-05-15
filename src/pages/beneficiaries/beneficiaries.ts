import { Component } from '@angular/core';
import { IonicPage, ViewController, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-beneficiaries',
  templateUrl: 'beneficiaries.html',
})
export class BeneficiariesPage {

  constructor(private viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
  }

  // goTo Function 
  goTo(page){
    this.navCtrl.push(page);
  }
  
  // logOut Function 
  logOut(){
    this.navCtrl.setRoot('WelcomePage');
  }

  onClose() {
    this.viewCtrl.dismiss()
  }
}
