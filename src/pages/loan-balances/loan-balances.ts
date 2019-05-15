import { Component } from '@angular/core';
import { 
  IonicPage, 
  NavController,
  ViewController, 
  AlertController, 
  NavParams,
  ToastController } from 'ionic-angular';
import { SocketProvider } from "../../providers/socket/socket";
import { Socket } from 'ng-socket-io';
import { resolve } from 'path';

@IonicPage()
@Component({
  selector: 'page-loan-balances',
  templateUrl: 'loan-balances.html',
})
export class LoanBalancesPage {
  private dataSplitByComma:any;
  private loanBals:any;
  private mappedBals:any;

  constructor(    
    private viewCtrl: ViewController,
    private toastCtrl: ToastController,
    private navCtrl: NavController, 
    private alertCtrl:AlertController,
    private navParams: NavParams,
    private socketHelper: SocketProvider,
    private socket: Socket) {

  }

  ionViewDidLoad() {
    this.presentToast('Clock on loan item to repay loan',true,'middle')
    let memberData:any = this.navParams.get('data');
    let mno:any = memberData['MB.CUST.NO'];

    // GET LOAN BALANCES
    this.socketHelper.loanBalances(mno).then(() => {
      this.socket.on('loanBalanceResult',(data)=>{
        // console.log("LOAN BALANCE DATA:",data.data)

        return new Promise((resolve,reject) => {
          resolve(
            // this.dataSplitByComma = data.data.split(",")
            this.loanBals = data.data.split(",").filter((el:any) => {
              return !el.includes('VR')
            }).map((el:any)=>{
                return Object.assign({},el.split(";"))
            })
          )
        }).then(() => {
          this.loanBals.shift()           
        }).then(() => {
          this.loanBals.forEach((el:any) => {
            if(el[0].length <= 1) {
              this.loanBals.splice(this.loanBals.indexOf(el),1)
            }else {
              
            }
          })
          console.log("LOAN BALS: ", this.loanBals)
        }) 
      })
    })
    
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

  handleRepay(data) {
    // console.log("LOAN REPAY DATA: ",data)
    let repayAlert = this.alertCtrl.create({
      title: `${data[0]} Repayment`,
      message:`Repay ${data[0]} loan worth ${data[2]}`,
      buttons:[
        {
          text: 'Repay',
          handler: (data) => {
            console.log("Handle STK Push")
            this.presentToast(`Processing repayment`, true, 'middle')
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }        
      ]
    })

    repayAlert.present();

  }

  handleBalances(){
    console.log("LOAN BAL NAVPARAMS DATA:",this.navParams.get('data'))
    this.socketHelper.loanBalances(this.navParams.get('data'))
  }

  logOut(){
    this.navCtrl.setRoot('WelcomePage');
  }  

  onClose() {
    this.viewCtrl.dismiss()
  }

}

      /*
      this.socket.on('loanBalanceResult',(data)=>{
        console.log("LOAN BALANCE DATA:",data)

        let alert = this.alertCtrl.create({
          title:"LOAN BALANCE ENQUIRY",
          message:data.data,
          buttons:[
            {
              text:"OK",
              role:"cancel"
            }
          ]
        })

        alert.present()
      })

      */