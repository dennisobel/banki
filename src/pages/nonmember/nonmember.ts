import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, ToastController } from 'ionic-angular';
import { SocketProvider } from "../../providers/socket/socket";
import { Socket } from 'ng-socket-io';
import { Storage } from '@ionic/storage';
import { NonmemberotpPage } from '../nonmemberotp/nonmemberotp';

@IonicPage()
@Component({
  selector: 'page-nonmember',
  templateUrl: 'nonmember.html',
})

export class NonmemberPage {

  private firstname:any;
  private surname:any;
  private othername:any;
  private gender:any;
  private idnumber:any;
  private phonenumber:any;
  private dob:any;

  constructor(
    private socketHelper: SocketProvider,
    private socket: Socket,
    private storage: Storage,
    private toastCtrl: ToastController,
    private navCtrl: NavController, 
    private navParams: NavParams,
    private popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    
  }

  handleContinue() {
    let data = {
      firstname:this.firstname,
      surname:this.surname,
      othername:this.othername,
      gender:this.gender,
      idnumber:this.idnumber,
      phonenumber:this.phonenumber,
      dob:this.dob
    }

    this.socketHelper.postNonMember(data).then(() => {
      setTimeout(() => {
        this.presentToast('Your data has been submited for verification',false,'bottom')
      },1000)
    }).then(() =>{
      setTimeout(()=>{
        this.presentToast('Your data has been verified and a one time password has been sent to your number',false,'bottom')
      },5000)
    }).then(()=>{
      setTimeout(() => {
        this.presentPopover(NonmemberotpPage,data)
      },10000)
      
    })

  }

  presentToast(message,close,position) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      showCloseButton:close,
      position: position
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
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
