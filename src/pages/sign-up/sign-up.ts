import { Component } from '@angular/core';
import { 
	IonicPage, 
	NavController, 
	NavParams, 
	ToastController, 
	AlertController, 
	LoadingController,
	PopoverController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

// Providers
import { HttpProvider } from "../../providers/http/http";
import { OnboardPage } from '../onboard/onboard';

// Page
import { PhonepopupPage } from '../phonepopup/phonepopup';

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
		private popoverCtrl: PopoverController,
		private navCtrl: NavController,
		private toastCtrl: ToastController,
		private alertCtrl: AlertController,
		private loadingCtrl: LoadingController, 
	  private navParams: NavParams,
		private http: HttpProvider,
		private storage: Storage) {
	}

	ionViewDidLoad() {
		this.presentPopover(PhonepopupPage);
		
		let phoneNoAlert = this.alertCtrl.create({
			title: 'GET STARTED',
			subTitle: 'Enter Your Phone Number',
			inputs: [
				{
					name: 'phoneNumber',
					type: 'text',
					placeholder: '254712345678'
				}
			],
			buttons: [
				{
					text: 'Next',
					handler: (phoneNumber) => {	
						let phone_number:any = phoneNumber;			
						console.log(phoneNumber)		
						this.http.submitPhoneNumber(phoneNumber).then((data: any) => {	
							// store locally
							this.storage.set('memberData',data.memberData[0])
							if(data.memberExist == false) {
								let memberName = data.memberData[0]['MB.CUST.NAME..................']
								let OTPAlert = this.alertCtrl.create({
									title: `Welcome ${memberName}`,
									subTitle: 'We have sent you a One Time Password. Please enter it below.',
									inputs: [
										{
											name: 'otp',
											type: 'text',
											placeholder: 'One Time Password'
										}
									],
									buttons: [
										{
											text: 'Next',
											handler: (otpData) => {
												this.http.submitOTP(otpData)
												.then((data: any) => {
													if(data.verified == true) {
														let mnoAlert = this.alertCtrl.create({
															title: 'Enter Your SACCO Member Number',
															inputs:[
																{
																	name: 'mno',
																	type: 'text',
																	placeholder: 'Member Number',
																}
															],
															buttons:[
																{
																	text: 'Next',
																	handler: (mno) => {
																		// compare mno to existing one.
																		this.http.submitMNO(mno)
																		.then((data:any) => {
																			if(data.verified === true) {
																				// proceed to pin
																				let pinAlert = this.alertCtrl.create({
																					title: 'Enter a memorable password',
																					inputs: [
																						{
																							name: 'password',
																							type: 'password',
																							placeholder: 'password'
																						}
																					],
																					buttons: [
																						{
																							text: 'Next',
																							handler: (password) => {
																								this.http.submitPassword({password,mno})
																								.then((data:any) => {
																									console.log('PASSWORD FEEDBACK: ',data)
																									if(data.success === true) {
																										// proceed
																										let welcomeAlert = this.alertCtrl.create({
																											title: `Welcome ${memberName}`,
																											buttons: [
																												{
																													text: 'Proceed',
																													handler: () => {
																														// navigate to home
																														this.navCtrl.push('SummaryPage')
																													}
																												}
																											]
																										})
																										welcomeAlert.present()
																									}
																								})
																							}
																						}
																					]
																				})

																				pinAlert.present()
																			} else if(data.verified === null || data.verified === false) {
																				// mno dont exist logic
																				let mnoErrorAlert = this.alertCtrl.create({
																					title: 'This member number does not exist.',
																					buttons: [
																						{
																							text: 'Retry',
																							handler: () => {
																								this.ionViewDidLoad()
																							}
																						}
																					]
																				})

																				mnoErrorAlert.present();
																			}
																		})
																	}
																}
															]
														})

														mnoAlert.present()
													} else if(data.verified == false) {
														console.log('resend otp')
														// Resend OTP Logic
													}
												})
											}
										}
									]
								})
								OTPAlert.present()
							} else if(data.memberExist == true) {
								let memberNumber = data.memberData[0]['MB.CUST.NAME..................']
								let userExistAlert = this.alertCtrl.create({
									title: `Welcome ${memberNumber}. Please enter your member number and password to proceed`,
									inputs: [
										{
											name: 'mno',
											type: 'text',
											placeholder: 'Member Number'
										},										
										{
											name: 'password',
											type: 'password',
											placeholder: 'Password'
										}
									],
									buttons: [
										{
											text: 'Login',
											handler: ({password,mno,phoneNumber}) => {
												this.http.submitLogin({password,mno,phoneNumber:phone_number.phoneNumber})
												.then((data:any) => {
													console.log('SUBMIT LOGIN RES: ',data);
													if(data.success === true) {
														this.navCtrl.push('SummaryPage')
													}
												})
											}
										},
										{
											text: 'Cancel',
											role: 'cancel',
											handler: () => {
												console.log("On Cancel Join Sacco")
											}
										}
									]
								})

								userExistAlert.present();
							}							

						})
					}
				}
			]
		});

		// phoneNoAlert.present();
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


						