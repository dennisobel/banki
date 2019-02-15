import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams } from 'ionic-angular';
import { SocketProvider } from "../../providers/socket/socket";
import { Socket } from 'ng-socket-io';


@IonicPage() 
@Component({
  selector: 'page-loan-eligibility',
  templateUrl: 'loan-eligibility.html',
})
export class LoanEligibilityPage {
  

  constructor(
    private navCtrl: NavController, 
    private alertCtrl: AlertController,
    private navParams: NavParams,
    private socketHelper: SocketProvider,
    private socket: Socket) {

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

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoanEligibilityPage');
  }

  handleEligibility(){
    console.log("LOAN ELIG NAVPARAMS:",this.navParams.get('data'))
    this.socketHelper.loanEligibility(this.navParams.get('data'))
  }

  logOut(){
    this.navCtrl.setRoot('WelcomePage');
  }  

}
