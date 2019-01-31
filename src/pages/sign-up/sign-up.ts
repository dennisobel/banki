import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController, LoadingController } from 'ionic-angular';

// Providers
import { HttpProvider } from "../../providers/http/http";

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})

export class SignUpPage {
  private member_number: any;
  private id_number: any;
  private phone_number: any;
  private terms: boolean = false;
  private loading: any;

	constructor(
		private navCtrl: NavController,
		private toastCtrl: ToastController,
		private alertCtrl: AlertController,
		private loadingCtrl: LoadingController, 
    private navParams: NavParams,
    private http: HttpProvider) {
	}

  // set root page 
  doLogin(page) {
    let signUpData = {
      idnumber:this.id_number,
      membernumber:this.member_number,
      phonenumber:this.phone_number
    }

    if(this.terms == false){
      let termsCondAlert = this.alertCtrl.create({
        title:"Please agree to the terms and conditions",
				buttons:[
					{
						text:"OK",
					}
				]
      })
      termsCondAlert.present()
    }else{
      this.http.joinSacco(signUpData)
      .then(result => {
        this.navCtrl.setRoot(page);
      },(err)=>{

      })

			let accountcreatedalert = this.alertCtrl.create({
				title:"ALMOST DONE",
				message:"You will receive a verification code shortly. Enter it here.",
				inputs:[
					{
						name:"otp",
						placeholder:"Enter Verification Code Here"
					}				
				],				
				buttons:[
					{
						text:"Submit",
						handler:(data)=>{
							this.http.verifyUser(data)
							// .subscribe(res => console.log(res))
							// this.navCtrl.push(SigninPage)
							let passAlert = this.alertCtrl.create({
								title:"PASSCODE",
								message:"Account has been verified. Now enter a memorable 4-digit passcode.",
								inputs:[
									{
										name:"passcode",
										placeholder:"Passcode"
									}						
								],
								buttons:[
									{
										text:"Submit",
										handler: (data) => {
											this.http.passCode(data)
											console.log(data)
											this.navCtrl.push(page)
										}
									}
								],
								cssClass:'alertCustomCss'
							})
	
							
	
							passAlert.present()
	
							
	
						}
					}
				],
				cssClass:'alertCustomCss'
			})
			accountcreatedalert.present()
    }
    
  }

  onVerification(){
		let message = "Verification code will be sent to you via SMS"
		let duration = 3000
		let position = 'top'

		this.presentToast(message,duration,position)
  }
  
  	//toast
	presentToast(message,duration,position) {
	  let toast = this.toastCtrl.create({
	    message: message,
	    duration: duration,
	    position: position
	  });

	  toast.onDidDismiss(() => {
	    console.log('Dismissed toast');
	  });

	  toast.present();
  }
  
	updateTerms(){
		if(this.id_number === '' ||  this.phone_number === ''){
			let validationAlert = this.alertCtrl.create({
				title:"Please check form for empty fields",
				buttons:[
					{
						text:"OK"
					}
				],
				cssClass:'alertCustomCss'
			})

			validationAlert.present()
		}else{
			console.log("Terms new state:" + this.terms);
		}
		
  }  
  
  showLoader(){
 
    this.loading = this.loadingCtrl.create({
        content: 'Authenticating...'
    });

    this.loading.present();

}   

} 
