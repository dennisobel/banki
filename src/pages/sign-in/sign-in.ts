import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController, LoadingController } from 'ionic-angular';

import { HttpProvider } from "../../providers/http/http";
import {SummaryPage} from "../summary/summary"

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {
  private password:any;
  private membernumber:any;
  private loading: any;

	constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController, 
    private loadingCtrl: LoadingController, 
    private http: HttpProvider,
    private navParams: NavParams) {
  }
  

  ionViewDidLoad(){
    this.showLoader()
    //Check if already authenticated
    
    this.http.checkAuthentication()
    .then((res)=>{
      console.log("already authorized")
      this.loading.dismiss();
      this.navCtrl.setRoot(SummaryPage)
    },(err)=>{
      this.loading.dismiss()
      let alert = this.alertCtrl.create({
        title:"CONNECTION ERROR",
        message:"Check internet connection and retry.",
        buttons:[
          {
            text:'Ok',
            role:'cancel',
            handler:() => {
              console.log('Cancel clicked');
            }          
          },
          
        ]        
      })

      // alert.present()
    })
    .catch((err)=>{
      console.log(err)
      this.loading.dismiss()
      let alert = this.alertCtrl.create({
        title:"CONNECTION ERROR",
        message:"Check internet connection and retry.",
        buttons:[
          {
            text:'Ok',
            role:'cancel',
            handler:() => {
              console.log('Cancel clicked');
            }          
          },
          
        ]        
      })

      // alert.present()      
    })
    
  }

  showLoader(){ 
    this.loading = this.loadingCtrl.create({
        content: 'Authenticating...'
        
    });
    this.loading.present();
  } 

  doLogin(page) {
    console.log("Inside Login...")
    
    
    let data = {
      passcode:this.password,
      membernumber:this.membernumber
    }

    this.http.login(data).then((val:any)=>{
      console.log("Login Values: ",val)
      this.loading.dismiss()
      if(val.success === true){
        this.navCtrl.setRoot(page,{data:data});
      }
    })
    
  }


  // Call Forgot Password Modal
  presentModal(modalPage) {
    let modal = this.modalCtrl.create(modalPage);
    modal.present(); 
  }

  doUnlock(page){
    let modal = this.modalCtrl.create(page)
    modal.present()
  }

}
