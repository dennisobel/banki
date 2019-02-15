import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams } from 'ionic-angular';
import { SocketProvider } from "../../providers/socket/socket";
import { Socket } from 'ng-socket-io';

@IonicPage()
@Component({
  selector: 'page-loans',
  templateUrl: 'loans.html',
})
export class LoansPage {
  private loanType
  private amount:number

  constructor(
    private navCtrl: NavController, 
    private alertCtrl: AlertController,
    private socketHelper: SocketProvider,
    private socket: Socket,
    private navParams: NavParams) {

      this.socket.on('applyFosaAdvanceResult',(data)=>{
        console.log("FOSA ADV RES DATA",data)

        let alert = this.alertCtrl.create({
          title:"FOSA ADVANCE REQUEST STATUS",
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

      this.socket.on('applyMLoanResult',(data)=>{
        console.log("M-LOAN RES DATA",data)

        let alert = this.alertCtrl.create({
          title:"M-LOAN REQUEST STATUS",
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
    console.log('ionViewDidLoad LoansPage');
  }

  handleFosa(){
    this.loanType = "FOSA"
    console.log("fosa")
  }

  onSelectF(){
    this.loanType = "FOSA"
    console.log("fosa")
  }

  onSelectM(){
    this.loanType = "MLOAN"
    console.log("mloan")
  }  

  handleMLoan(){
    this.loanType = "MLOAN"
    console.log("mloan")
  }

  handleContinue(){
    console.log(this.loanType)
    if(this.loanType == "f"){
      this.socketHelper.applyFosaAdvance({data:this.navParams.get('data'),amount:this.amount})
    }else if(this.loanType == "m"){
      this.socketHelper.applyMLoan({data:this.navParams.get('data'),amount:this.amount})
    }
  }

  logOut(){
    this.navCtrl.setRoot('WelcomePage');
  }  

}
