import { Component } from '@angular/core';
import { 
  IonicPage,
  ViewController,
  NavController, 
  AlertController, 
  ModalController,
  NavParams,
  ToastController } from 'ionic-angular';
import { SocketProvider } from "../../providers/socket/socket";
import { Socket } from 'ng-socket-io';
import { Storage } from '@ionic/storage';
import { resolve } from 'dns';
import { LoanformPage } from '../loanform/loanform';

@IonicPage() 
@Component({
  selector: 'page-loan-eligibility',
  templateUrl: 'loan-eligibility.html',
})

export class LoanEligibilityPage {
  private loanEligibility:any;

  constructor(
    private modalCtrl: ModalController,
    private viewCtrl: ViewController,
    private toastCtrl: ToastController,
    private navCtrl: NavController, 
    private alertCtrl: AlertController,
    private navParams: NavParams,
    private socketHelper: SocketProvider,
    private socket: Socket,
    private storage: Storage) {


  }

  ionViewDidLoad() {
    this.presentToast('Click loan item to apply for loan',true,'middle')
    let memberData:any = this.navParams.get('data');
    let mno:any = memberData['MB.CUST.NO'];

    // GET LOAN ELIG DATA
    this.socketHelper.loanEligibility(mno).then(() => {
      this.socket.on('loanEligibilityResult',(data) => {
        console.log("LOAN ELIG:", data)

        return new Promise((resolve,reject) => {
          resolve(
            // this.dataSplitByComma = data.data.split(",")
            // .split(':')[5].split('.')
            this.loanEligibility = data.split('"')/*[5]*/.filter((el:any) => {
              return !el.includes('VR') && el.includes('Loan')
            })[0].split(':')
          )
        }).then((data) => {
          let regex = /\,(?=\D)/;
          // this.loanEligibility = this.loanEligibility[1].split(regex);
          this.loanEligibility = this.loanEligibility[1].split(regex).map((el)=>{
            return Object.assign({},el.split("="))
          })

          console.log("LOAN ELIG: ", this.loanEligibility);
          // .split('=')
          /*
          let stringWithoutSpaces = this.loanEligibility.trim()
          console.log(stringWithoutSpaces)
          let dictionaryWithValues = stringWithoutSpaces.split('0')
          console.log(dictionaryWithValues)
          */
          /*
          
          this.loanEligibility.forEach((el:any) => {
            if(el[0].length <= 1) {
              this.loanEligibility.splice(this.loanEligibility.indexOf(el),1)
            }else {
              
            }
          })
          */

          
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
 
  handleApply(data){
    console.log(data)
    let applyAlert = this.alertCtrl.create({
      title: `${data[0]} application`,
      message:`Apply ${data[0]}`,
      buttons:[
        {
          text: 'Apply',
          handler: () => {
            console.log("LoanForm Data:",data)
            // this.presentToast(`Processing loan application`, true, 'middle')
            let loanForm = this.modalCtrl.create(LoanformPage,{loanData:data})
            loanForm.present()            
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    })

    applyAlert.present();
  }


  logOut(){
    this.navCtrl.setRoot('WelcomePage');
  }  

  onClose() {
    this.viewCtrl.dismiss()
  }

}


/*

      this.socket.on('loanEligibilityResult',(data)=>{
        console.log("LOAN ELIG:", data)

        


        let alert = this.alertCtrl.create({
          title: 'ELIGIBLE FOR THE FOLLOWING LOANS',

          message: data,

          buttons:[
            {
              text:"OK",
              role:'cancel'
            }
          ]


        })

        alert.present()
      })
*/