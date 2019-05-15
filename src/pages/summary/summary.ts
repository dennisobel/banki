import { Component } from '@angular/core';
import { 
  // IonicPage, 
  NavController,
  NavParams, 
  AlertController,
  PopoverController } from 'ionic-angular';

// import { T24Provider } from "../../providers/t24/t24";
import { SocketProvider } from "../../providers/socket/socket";
import { Socket } from 'ng-socket-io';
import { Storage } from '@ionic/storage';
import { HttpProvider } from "../../providers/http/http";
import { LockPage } from '../lock/lock';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

// @IonicPage()
@Component({
  selector: 'page-summary',
  templateUrl: 'summary.html',
})


export class SummaryPage {
  private loanEligibility:any;
  private loanBals:any;
  private balanceArray:any;
  private filtered:any;
  private memberNo:any;
  private memberPhone:any;  
  private fosaArray:any[]=[];
  private fosaBal:any;
  private name:string;
  private mainSavArray:any[]=[]
  private mainSav:any;

  private fosarange=30;
  private mainsavrange=70;

	constructor(
    private popoverCtrl: PopoverController,
    private navCtrl: NavController,
    private socketHelper: SocketProvider,
    private http: HttpProvider,
    private socket: Socket,
    private storage: Storage,
    private alertCtrl: AlertController,
    // private t24: T24Provider,
    private navParams: NavParams){

      
  }

  ionViewWillLoad() {
    // this.navCtrl.setRoot(SummaryPage)
  }
 
  ionViewDidLoad(){
    console.log("reached summary")
    this.socket.on('connect',()=>{
    	var sessionid = this.socket.ioSocket.id;
    })    

    this.storage.get('memberData').then((data) => {
      console.log("MEMBER DATA:",data)
      this.name = data['MB.CUST.NAME..................'].toUpperCase()
      this.memberNo = data['MB.CUST.NO']
      this.memberPhone = data['MB.CELL.NO..']
      console.log(this.memberNo)

      // GET SAVINGS BALANCE
      this.socketHelper.balanceEnq(this.memberNo).then(() => {
        this.socket.on('balEnqData',(data:any) => {            
          if(data.data.length > 0) {
            return new Promise((resolve,reject) => {
              resolve(
                this.balanceArray = data.data.filter((el:any) => {
                  return !el.includes('VR')
                }).map((el:any)=>{
                    return Object.assign({},el.split(";"))
                })
              );                   
            })
            .then(() => {
              this.balanceArray.shift()           
            })
            .then((data)=>{
              console.log("DATA:",this.balanceArray) 
              this.filtered = this.balanceArray.filter((el) => {
                return el[3] > 0;
              })
  
              console.log("FILTERED ARRAY:",this.filtered);

              this.storage.set('SavingsBalance',{data:this.filtered})
  
              this.balanceArray.forEach((el:any) => {
                if(el[0].length <= 1) {
                  this.balanceArray.splice(this.balanceArray.indexOf(el),1)
                }else {
                  
                }              
              })
            })
          }        
  
          // PROCESS STRING this.balEnqData 
          console.log('BAL ARRAY: ',this.balanceArray);
        })
      })   

      
      // GET LOAN BALANCES
      this.socketHelper.loanBalances(this.memberNo).then(() => {
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

            this.storage.set('LoanBalance',{data:this.loanBals})
            console.log("LOAN BALS: ", this.loanBals)
          }) 
        })
      })


      // GET LOAN ELIGIBILITY
      this.socketHelper.loanEligibility(this.memberNo).then(() => {
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
            this.storage.set('LoanEligibility',{data:this.loanBals})
            console.log("LOAN ELIG: ", this.loanEligibility);            
          })
        })
      }) 
    })    
  }

  // goTo Function 
  goTo(page){
    this.presentPopover(LockPage,page)    
  }

  // logOut Function 
  logOut(){
    this.navCtrl.setRoot('WelcomePage');
  }

  presentPopover(page,pageToLoad) {
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
      {ev,data:pageToLoad},
      {cssClass: 'alertCustomCss',showBackdrop: true},
  )
    popover.present({
      // ev: myEvent
    })
  } 
}

/*
You hang around the barber shop long enough, soon enough you will get a hair cut.
To get something you never had, you have to do something you never did.
*/