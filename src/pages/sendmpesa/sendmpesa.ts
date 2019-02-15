import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, LoadingController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpProvider } from "../../providers/http/http"

@IonicPage()
@Component({
  selector: 'page-sendmpesa',
  templateUrl: 'sendmpesa.html',
})
export class SendmpesaPage {

  private sendTo:any;
  private phoneNumber:any 
  private amount:any

  constructor(
    private navCtrl: NavController, 
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private httpHelper: HttpProvider,
    private navParams: NavParams,
    private storage: Storage) {
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad SendmpesaPage');
  }

  onSelectSelf(){


    this.storage.get('loginData').then(res=>{  
      console.log(res)

      this.httpHelper.getuser(res.membernumber).then(data=>{
        console.log("USER:",data)
      })

      return res
    }).then((res)=>{
      
      /*(<HTMLInputElement>document.getElementById('phone')).value = res.data.phonenumber  
      console.log((<HTMLInputElement>document.getElementById('phone')).value)  */
    })
  }

  onSelectOther(){
    let alert = this.alertCtrl.create({
      title: "Choose Other Number",
      inputs: [
        {
          type:'radio',
          label:'0713318756',
          value:'0713318756'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler:()=>{
            console.log("canceled")
          }
        },
        {
          text: "Ok",
          handler: data => {
            /*
            (<HTMLInputElement>document.getElementById('phone')).value = data  
            console.log((<HTMLInputElement>document.getElementById('phone')).value)
            */
          }
        }
      ]
    })

    alert.present()
  }

  handleContinue(){
    let loading = this.loadingCtrl.create({
        content: 'Processing Send To MPesa Payment...',
        duration: 3000
    });
    loading.present();      

    
    let alert = this.alertCtrl.create({
      title:"Confirm M-PESA Transaction",
      message: `
        <p>To: ${(<HTMLInputElement>document.getElementById('phone')).value}</p>
        <p>Amount: Ksh ${this.amount}</p>
        <p>Transaction Fee: Ksh 14.00</p>
      `,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: ()=> {
            console.log("canceled")
          }
        },
        {
          text: 'Ok',
          handler: ()=>{
            console.log((<HTMLInputElement>document.getElementById('phone')).value)
            console.log(`${this.amount}`)

            // send to server 
          }
        }
      ]

    })

    alert.present() 
  }

  logOut(){
    this.navCtrl.setRoot('WelcomePage');
  }  

}
