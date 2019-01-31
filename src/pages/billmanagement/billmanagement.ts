import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { SocketProvider } from "../../providers/socket/socket";
import { Socket } from 'ng-socket-io';

@IonicPage()
@Component({
  selector: 'page-billmanagement',
  templateUrl: 'billmanagement.html',
})
export class BillmanagementPage {

  private fosaArray:any[]=[];
  private fosaBal:any;
  private name:any;
  private mainSavArray:any[]=[]
  private mainSav:any;  

  constructor(
    private storage: Storage,
    private socketHelper: SocketProvider,
    private socket: Socket,
    private navCtrl: NavController, 
    private alertCtrl: AlertController,
    private navParams: NavParams) {

      this.socket.on('airtimePurchaseData',(data)=>{
        console.log(data)
        let alert = this.alertCtrl.create({
          title:"AIRTIME PURCHASE FEEDBACK",
          message:data.data,
          buttons:[
            {
              text:'Ok',
              role:'Ok',
              handler:data => {
                console.log('Cancel clicked');
              }          
            },
            
          ]
        })
        alert.present()
      })


      this.socket.on('tokenPurchaseData',(data)=>{
        console.log(data)
        let alert = this.alertCtrl.create({
          title:"TOKEN PURCHASE FEEDBACK",
          message:data.data,
          buttons:[
            {
              text:'Ok',
              role:'Ok',
              handler:data => {
                console.log('Cancel clicked');
              }          
            },
            
          ]
        })
        alert.present()
      })      
  }

  bills=[
    {name:'Airtime',component:''},
    {name:'Electricity',component:''}
  ]

  ionViewDidLoad() {
    console.log('ionViewDidLoad BillmanagementPage ...');

    this.socket.on('balEnqData',(data)=>{
      console.log("balEnqData:",data)
      
      this.fosaArray = data.data[0]
      
      this.fosaBal = this.fosaArray[Object.keys(this.fosaArray)[3]]
      this.mainSavArray = data.data[1]
      this.mainSav = this.mainSavArray[Object.keys(this.mainSavArray)[3]]
      this.name = this.mainSavArray[Object.keys(this.mainSavArray)[1]]
      console.log(this.fosaBal, ":",this.mainSav)
    })    

    
  }

  handlePurchase(item){
    console.log(item)
    let alert = this.alertCtrl.create({
      title:`${item} purchase:`,
      inputs:[
        {
          name:'amount',
          placeholder:'Amount',
          type:'number'
        }
      ],
      buttons:[
        {
          text:'Cancel',
          role:'cancel',
          handler:data => {
            console.log('Cancel clicked');
          }          
        },
        {
          text:'Buy',
          handler:data => {
            if(item === 'Airtime'){
              this.socketHelper.airtimePurchase(data.amount)
            }else if(item === 'Electricity'){
              this.socketHelper.tokenPurchase(data.amount)
            }            
          } 
        },
        {
          text:'Kopa',
          handler:data => {
            if(item === 'Airtime'){
              console.log("kopa credo coming soon")
            }else if(item === 'Electricity'){
              console.log("kopa token coming soon")
            }            
          } 
        }        
      ]
    })

    alert.present()
  }

}

/*
"1427FT18318TNXFW/OFS190280351666183.01/1,TRANSACTION.TYPE=ACAI:1:1,DEBIT.ACCT.NO=01030469011:1:1,CURRENCY.MKT.DR=1:1:1,DEBIT.CURRENCY=KES:1:1,DEBIT.AMOUNT=10.00:1:1,DEBIT.VALUE.DATE=20181114:1:1,DEBIT.THEIR.REF=Airtime Payment:1:1,CREDIT.THEIR.REF=Airtime Payment:1:1,CREDIT.ACCT.NO=KES1130600010001:1:1,CURRENCY.MKT.CR=1:1:1,CREDIT.CURRENCY=KES:1:1,CREDIT.VALUE.DATE=20181114:1:1,PROCESSING.DATE=20181114:1:1,ORDERING.BANK=KBS:1:1,CHARGE.COM.DISPLAY=NO:1:1,COMMISSION.CODE=DEBIT PLUS CHARGES:1:1,CHARGE.CODE=DEBIT PLUS CHARGES:1:1,PROFIT.CENTRE.CUST=30469:1:1,RETURN.TO.DEPT=NO:1:1,FED.FUNDS=NO:1:1,POSITION.TYPE=TR:1:1,MB.MEMBER.NO=30469:1:1,MB.MESSAGE=;Dear MWAKESI, your request for Airtime Payment of 10.00 has been processed successfully.;:1:1,AMOUNT.DEBITED=KES10.00:1:1,AMOUNT.CREDITED=KES10.00:1:1,CREDIT.COMP.CODE=KE0010001:1:1,DEBIT.COMP.CODE=KE0010001:1:1,LOC.AMT.DEBITED=10.00:1:1,LOC.AMT.CREDITED=10.00:1:1,CUST.GROUP.LEVEL=99:1:1,DEBIT.CUSTOMER=30469:1:1,DR.ADVICE.REQD.Y.N=N:1:1,CR.ADVICE.REQD.Y.N=N:1:1,CHARGED.CUSTOMER=30469:1:1,TOT.REC.COMM=0:1:1,TOT.REC.COMM.LCL=0:1:1,TOT.REC.CHG=0:1:1,TOT.REC.CHG.LCL=0:1:1,RATE.FIXING=NO:1:1,TOT.REC.CHG.CRCCY=0:1:1,TOT.SND.CHG.CRCCY=0.00:1:1,AUTH.DATE=20181114:1:1,STMT.NOS=186560351666183.02:1:1,STMT.NOS=1-2:2:1,CURR.NO=1:1:1,INPUTTER=3516_MOBILE__OFS_KBSBANK:1:1,DATE.TIME=1901281823:1:1,AUTHORISER=3516_MOBILE_OFS_KBSBANK:1:1,CO.CODE=KE0010001:1:1,DEPT.CODE=1:1:1|000|$$"
*/