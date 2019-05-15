import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, ViewController, ToastController, NavParams } from 'ionic-angular';

import { SocketProvider } from "../../providers/socket/socket";
import { Socket } from 'ng-socket-io';
import { Storage } from '@ionic/storage';
import { GuaranteeviewPage } from '../guaranteeview/guaranteeview';
import { GuarantorviewPage } from '../guarantorview/guarantorview';

@IonicPage()
@Component({
  selector: 'page-statements',
  templateUrl: 'statements.html',
})
export class StatementsPage {
  private memberData:any = this.navParams.get('data');
  private mno:any = this.memberData['MB.CUST.NO'];

  constructor(
    private toastCtrl: ToastController,
    private viewCtrl: ViewController,
    private navCtrl: NavController, 
    private alertCtrl: AlertController,
    private navParams: NavParams,
    private socketHelper: SocketProvider,
    private socket: Socket,
    private storage: Storage) {
      
  }

  ionViewDidLoad() {
    this.presentToast("This messages will be sent to your registered email", true, "bottom")
  }

  handleEStatement(){    
    this.socketHelper.eStatement(this.mno).then(() => {
      this.socket.on('eStatementData',(data)=>{
        console.log('ESTATEMENT RESULTS: ', data)
        this.presentToast('Your estatement statement will be sent to your email inbox shortly',true,'middle')
      })
    })

  }

  handleGuarantorStatement(){    
    this.socketHelper.getGuarantors(this.mno).then(() => {
      this.socket.on('guarantorsResult',(data) => {
        console.log('GUARANTORS RESULT:', data)
        // this.presentToast('Your guarantors statement will be sent to your email inbox shortly',true,'middle')
        this.navCtrl.push(GuarantorviewPage,{data:data})
      })
    })
  }

  handleGuaranteeStatement(){
    this.socketHelper.getGuarantees(this.mno).then(() => {
      this.socket.on('guaranteesResult',(data) => {
        console.log('GUARANTEES RESULT: ', data);
        // this.presentToast('Your guarantees statement will be sent to your email inbox shortly',true,'middle')
        this.navCtrl.push(GuaranteeviewPage,{data:data})
      })
    })  
  }

  logOut(){
    this.navCtrl.setRoot('WelcomePage');
  }  

  onClose() {
    this.viewCtrl.dismiss()
  }

  presentToast(message,close,position) {
    let toast = this.toastCtrl.create({
      message: message,
      // duration: 3000,
      showCloseButton:close,
      position: position
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }     
 
}
 
/**
 
      this.socket.on('eStatementData',(data)=>{
        console.log(data)
        let alert = this.alertCtrl.create({
          title:"E-STATEMENT REQUEST",
          message:`${data.data}`,
          buttons:[
            {
              text:'Ok',
              role:'cancel',
              handler:() => {
                console.log('Cancel clicked');
              }              
            }
          ]
          
        })
        alert.present();
      })
 */