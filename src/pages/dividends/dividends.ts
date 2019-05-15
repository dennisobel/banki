import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-dividends',
  templateUrl: 'dividends.html',
})
export class DividendsPage {

  constructor(
    private viewCtrl: ViewController,
    private navCtrl: NavController, 
    private navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DividendsPage');
  }

  onClose() {
    this.viewCtrl.dismiss()
  }

}
