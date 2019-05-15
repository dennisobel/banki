import { Component } from '@angular/core';
import { 
  IonicPage, 
  NavController, 
  AlertController, 
  ViewController,
  NavParams, 
  PopoverController} from 'ionic-angular';
import { SocketProvider } from "../../providers/socket/socket";
import { Socket } from 'ng-socket-io';
import { PopoverPage } from "../popover/popover";
import { resolve } from 'dns';

// POPOVER EXPERIMENT
// import {  } from 'ionic/angular';
// import { PopoverComponent } from '../../component/popover/popover.component';

@IonicPage()
@Component({
  selector: 'page-loans',
  templateUrl: 'loans.html',
})
export class LoansPage {
  private loanType
  private amount:number
  private memberData:any = this.navParams.get('data');
  private mno:any = this.memberData['MB.CUST.NO'];
  private mloan:any;
  private fosa:any;
  private mloanAlert:any;
  private fosaAlert:any;
  private loanBals:any;

  constructor(
    private viewCtrl: ViewController,
    private popoverCtrl: PopoverController,
    private navCtrl: NavController, 
    private alertCtrl: AlertController,
    private socketHelper: SocketProvider,
    private socket: Socket,
    private navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoansPage');
    // this.presentPopover()
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
    let memberData:any = this.navParams.get('data');
    let mno:any = memberData['MB.CUST.NO'];
    
    // Check Loan Bal
    /*
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
          console.log(this.loanBals)
          this.loanBals.forEach((el:any) => {
            if(el[0].length <= 1) {
              this.loanBals = this.loanBals.splice(this.loanBals.indexOf(el),1)
            }else {
              
            }
          })
        }) 
      })
    })  
    */
    

    

    if(this.loanType == "f"){
      this.socketHelper.applyFosaAdvance({mno:this.mno,amount:this.amount}).then(() => {
        this.socket.on('applyFosaAdvanceResult',(data)=>{
          return new Promise((resolve,reject) => {
            resolve(
              this.fosa = data.split(',')
            )
          })
          .then(() => {
            console.log("FOSA ADV RES DATA", this.fosa);
          })

        })
      })
    }else if(this.loanType == "m"){
      this.socketHelper.applyMLoan({mno:this.mno,amount:this.amount}).then(() => {
        this.socket.on('applyMLoanResult',(data)=>{
          return new Promise((resolve,reject) => {
            resolve(
              this.mloan = data.split(';') 
            )
          })
          .then(() => {
            console.log(this.mloan)
            if(this.mloan.includes('Dear  you have an existing Mloan, Please pay first before requesting for Another Mloan.') === true) {
              let mloanAlert = this.alertCtrl.create({
                title: `You have an existing Mloan, Please repay first before requesting another`,
                buttons:[
                  {
                    text:'Repay',
                    handler: () => {

                    }
                  }
                ]
              })
              mloanAlert.present()
            }
          })            
        })
      })
    }
  }

  presentPopover() {
    let popover = this.popoverCtrl.create(PopoverPage,{},{cssClass: 'contact-popover'});
    popover.present({
      // ev: myEvent
    })
  }

  logOut(){
    this.navCtrl.setRoot('WelcomePage');
  }  

  onClose() {
    this.viewCtrl.dismiss()
  }



}
