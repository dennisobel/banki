import { Component } from '@angular/core';
import { 
  IonicPage, 
  NavController, 
  NavParams,
  ViewController,
  PopoverController } from 'ionic-angular';

  import { HttpProvider } from "../../providers/http/http";    

@IonicPage()
@Component({
  selector: 'page-otppop',
  templateUrl: 'otppop.html',
})
export class OtppopPage {
  private otp:any;
  private name:any
  

  constructor(
      private viewCtrl: ViewController,
      private http: HttpProvider,
      private navCtrl: NavController, 
      private navParams: NavParams,
      private popoverCtrl: PopoverController
    ){
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OtppopPage');
    this.name = this.navParams.get('data').data;
    console.log(this.name)
  }

  handleMNO(page) {
    // Submit OTP

    this.http.submitOTP({otp:this.otp}).then((data: any) => {
      if(data.verified == true) {
        // Handle MNO PopOver
        this.presentPopover(page)
      } else {
        // handle wrong otp
      }
    }).then(()=>{
      this.viewCtrl.dismiss()
    })
    
    this.presentPopover(page);
  }


  presentPopover(page) {
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
      {ev},
      {cssClass: 'alertCustomCss',showBackdrop: true},
  )
    popover.present({
      // ev: myEvent
    })
  }  

}
