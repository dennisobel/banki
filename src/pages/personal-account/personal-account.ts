import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ViewController } from 'ionic-angular';
import { Socket } from 'ng-socket-io';
import { SocketProvider } from "../../providers/socket/socket";
import { Storage } from '@ionic/storage';
import { resolve } from 'path';
import { IfObservable } from 'rxjs/observable/IfObservable';
import { ELEMENT_PROBE_PROVIDERS } from '@angular/platform-browser/src/dom/debug/ng_probe';
import { AccountDetailsPage } from '../account-details/account-details';


@IonicPage()
@Component({
  selector: 'page-personal-account',
  templateUrl: 'personal-account.html',
})
export class PersonalAccountPage {
  private filtered:any;
  private balEnqData:any;
  private fosaArray:any[]=[];
  private fosaBal:any;
  private fosaAccNum:any;
  private mainSavArray:any[]=[]
  private mainSav:any;
  private mainSavAccNum:any;
  private accounts:any[]=[];
  private balanceArray:any[]=[];
  private commaRemoved:any[]=[];
  private amount:any;
  private mno:any;

  constructor(
    private viewCtrl: ViewController,
    private toastCtrl: ToastController,
    private navCtrl: NavController, 
    private navParams: NavParams,
    private socketHelper: SocketProvider,
    private storage: Storage,
    private socket: Socket) {
  }

  ionViewDidLoad(){
    this.presentToast()
    // Fetch Member Data
    let memberData:any = this.navParams.get('data');
    this.mno = memberData['MB.CUST.NO'];
    console.log("PERSONAL ACCOUNTS MEMBER DATA: ",memberData);

    // GET MEMBER ACCOUNTS
    // this.socketHelper.getAccounts(mno)

    // GET ACCOUNT BALANCES
    this.socketHelper.balanceEnq(this.mno).then(() => {
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

            this.balanceArray.forEach((el:any) => {
              if(el[0].length <= 1) {
                this.balanceArray.splice(this.balanceArray.indexOf(el),1)
              }else {
                
              }
              
            })
            

            // console.log(this.balanceArray[0])

            // console.log(this.balanceArray[0][0])
            
            // console.log('BAL ARRAY: ',this.balanceArray);
            
            // this.amount = this.balanceArray[this.balanceArray.length-1][3].substr(0,substrLoc2);
          })
        }

    

        

        // PROCESS STRING this.balEnqData 
        console.log('BAL ARRAY: ',this.balanceArray);
      })
    })
  }


// AccountDetailsPage
  
  // goTo Function 
  goTo(item){
    this.navCtrl.push(AccountDetailsPage,{data:{details:item,mno:this.mno}});
  } 

    // logOut Function 
  logOut(){
    this.navCtrl.setRoot('WelcomePage');
  }

  remove_character(str_to_remove, str) {
    let reg = new RegExp(str_to_remove)
    return str.replace(reg, '')
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Click item to view more details...',
      // duration: 3000,
      showCloseButton:true,
      position: 'middle'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }  

  onClose() {
    this.viewCtrl.dismiss()
  }
}


    // Fetch member data
    /*
    this.storage.get('memberData').then((data) => {
      console.log('MEMBER DATA: ', data);
      this.socketHelper.balanceEnq(data)
    })
    console.log("personal accs page loaded")
    */
    // this.socketHelper.balanceEnq()
    // this.socketHelper.balanceEnq(this.navParams.get('data'))

    /*
    this.socket.on('balEnqData',(data)=>{
      console.log("balEnqData:",data)
      this.fosaArray = data.data[0]
      this.fosaBal = this.fosaArray[Object.keys(this.fosaArray)[3]]
      this.fosaAccNum = this.fosaArray[Object.keys(this.fosaArray)[2]]
      this.mainSavArray = data.data[1]
      this.mainSav = this.mainSavArray[Object.keys(this.mainSavArray)[3]]
      this.mainSavAccNum = this.mainSavArray[Object.keys(this.mainSavArray)[2]]
      console.log("FOSA",this.fosaBal)
      console.log("MAIN",this.mainSav)
      console.log("FOSA NUM",this.fosaAccNum)
      console.log("MAIN ACC NUM",this.mainSavAccNum)

      this.accounts=[
        {
          name:'FOSA',
          accNumber:this.fosaAccNum,
          currency:this.fosaBal
        },
        {
          name:'MAIN',
          accNumber:this.mainSavAccNum,
          currency:this.mainSav
        }
      ]
    })
    */