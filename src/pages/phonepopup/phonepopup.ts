import { Component } from '@angular/core';
import { 
  IonicPage, 
  NavController, 
  NavParams,
  ViewController,
  PopoverController } from 'ionic-angular';

import { HttpProvider } from "../../providers/http/http";  
import { Storage } from '@ionic/storage';
import { MnopaspopPage } from '../mnopaspop/mnopaspop';
import { MnopopPage } from '../mnopop/mnopop';

@IonicPage()
@Component({
  selector: 'page-phonepopup',
  templateUrl: 'phonepopup.html',
})
export class PhonepopupPage {
  private phoneNumber:any;

  constructor(
    private storage: Storage,
    private http: HttpProvider,
    private navCtrl: NavController, 
    private navParams: NavParams,
    private viewCtrl: ViewController,
    private popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhonepopupPage');
  }
  

  handleOTP(page) {
    console.log(this.phoneNumber)
    this.http.submitPhoneNumber({phoneNumber:this.phoneNumber}).then((data:any) => {
      this.storage.set('memberData',data.memberData[0]).then(() => {
        if(data.memberExist == false) {
          let memberName = data.memberData[0]['MB.CUST.NAME..................']

          // handle otp
          this.presentPopover(page,{data:memberName});
        } else if(data.memberExist == true) {
          let memberNumber = data.memberData[0]['MB.CUST.NAME..................']

          // mnopass popover
          this.presentPopover(MnopaspopPage,{data:this.phoneNumber})
        }
      }).then(()=>{
        this.viewCtrl.dismiss()
      })
    })    
  }

  presentPopover(page,data) {
    let ev = {
      target : {
        getBoundingClientRect : () => {
          return {
            top: '100', left:'100'
          };
        }
      }
    };
    let popover = this.popoverCtrl.create(
      page,
      {ev,data},
      {cssClass: 'alertCustomCss',showBackdrop: true},
  )
    popover.present({
      // ev: myEvent
    })
  }


}
