import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Socket } from 'ng-socket-io';
import { SocketProvider } from "../../providers/socket/socket";
import { LoancategoryProvider } from '../../providers/loancategory/loancategory';

@IonicPage()
@Component({
  selector: 'page-loanform',
  templateUrl: 'loanform.html',
})
export class LoanformPage {
  private loanCategory:any;
  private loanData:any;
  private amountValue:any;
  private savingsBalance:any;
  private filtered:any;
  private filteredTwo:any;
  private balArr:any;
  private balanceArray:any;
  private security: any;
  private typeLimit: any;
  private loanType:any;
  private loanLimit:any;
  private amount: any;
  private requestData: any;
  private memberNo:any;
  private memberPhone:any;
  private mainSavings:any;
  private securityArray:any[] = [
    {security:"Guarantor", value:"Guarantor"},
    {security:"Self", value:"Self"},
    {security:"Deed", value:"Deed"}
  ];

  constructor(
    private socket: Socket,
    private loanCategoryHelper: LoancategoryProvider,
    private socketHelper: SocketProvider,
    private storage: Storage,
    private viewCtrl: ViewController,
    private navCtrl: NavController, 
    private navParams: NavParams) {
  }

  ionViewDidLoad() {
    // GET LOAN CATEGORIES
    this.loanCategoryHelper.getCategories().then(data => {
      this.loanCategory = data;
      console.log("LOAN CATEGORIES:",this.loanCategory)
    })
    console.log("LOAN CATEGORIES:",this.loanCategory)
    // GET LOAN DATA
    this.loanData = this.navParams.get('loanData')
    console.log("LOAN DATA:",this.loanData)

    // memberdata
    this.storage.get('memberData').then((data)=>{      
      this.memberNo = data['MB.CUST.NO']
      this.memberPhone = data['MB.CELL.NO..']

      this.requestData = {
        memberNumber:this.memberNo,
        memberPhone:this.memberPhone
      }
    })

    // get savings bal
    this.storage.get('SavingsBalance').then(data => {      
      this.savingsBalance = data.data;

      this.mainSavings = this.savingsBalance.filter(el => {
        return el[0] == 'MainSav'
      })[0]           
    })    

    this.typeLimit = this.navParams.get('loanData');
    this.loanType = this.typeLimit[0]
    this.loanLimit = this.typeLimit[1]    
  }

  
  onAmount(ev) {
    console.log(ev.target.value)
    let amount = this.amountValue
    this.requestData = {...amount}
    // console.log("REQUESTED DATA:",this.requestData)

    // check if amount is less than 90% of savings and set to self
    let ninetyPercent = ((90/100)*parseInt(this.mainSavings[3]))
    // console.log(ninetyPercent)
    if(this.amountValue <= ninetyPercent){
      console.log('self')
      // handle autoselect self
      // document.getElementById('sec').setAttribute("value","Self")
      this.security = 'Self';
    } else {
      this.security = '';
    }

  }

  
  /*
  onAmount(ev){
    // console.log(ev.target.value)
    // this.amountValue = ev.target.value
    console.log(this.amountValue)
  }
  */

  onClose() {
    this.viewCtrl.dismiss();
  }

  onSelect(security){
    console.log("SECURITY: ",security)
  }
}
