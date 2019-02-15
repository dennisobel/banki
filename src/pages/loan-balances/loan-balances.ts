import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams } from 'ionic-angular';
import { SocketProvider } from "../../providers/socket/socket";
import { Socket } from 'ng-socket-io';

@IonicPage()
@Component({
  selector: 'page-loan-balances',
  templateUrl: 'loan-balances.html',
})
export class LoanBalancesPage {

  constructor(    
    private navCtrl: NavController, 
    private alertCtrl:AlertController,
    private navParams: NavParams,
    private socketHelper: SocketProvider,
    private socket: Socket) {

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
  }

  ionViewDidLoad() {
    
  }

  handleBalances(){
    console.log("LOAN BAL NAVPARAMS DATA:",this.navParams.get('data'))
    this.socketHelper.loanBalances(this.navParams.get('data'))
  }

  logOut(){
    this.navCtrl.setRoot('WelcomePage');
  }  

}
