import { Component } from '@angular/core';
import { IonicPage, NavController ,ViewController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-update-profile',
  templateUrl: 'update-profile.html',
})
export class UpdateProfilePage {
  fullName='Adam Nicolas Taylor Smith';
  country='england';
  city='liverpool';
  phone=12345343543;
  email='Adam_Nicolas@gmail.com';
  constructor(public navCtrl: NavController,public viewCtrl: ViewController) {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  onClose() {
    this.viewCtrl.dismiss()
  }


}
