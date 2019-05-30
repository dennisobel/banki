import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, ViewController, ToastController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Socket } from 'ng-socket-io';
import { SocketProvider } from "../../providers/socket/socket";
import { HttpProvider } from "../../providers/http/http";
import { LoancategoryProvider } from '../../providers/loancategory/loancategory';


@IonicPage()
@Component({
  selector: 'page-loanform',
  templateUrl: 'loanform.html',
})
export class LoanformPage {
  @ViewChild('myInput') myInput: ElementRef;

  private loanCategory:any;
  private guarantors:any;
  private loanPurpose:any;
  private loanData:any;
  private loanTerm:any;
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
  private loanRequestData:any = {};

  constructor(
    private socket: Socket,
    private loanCategoryHelper: LoancategoryProvider,
    private httpHelper: HttpProvider,
    private socketHelper: SocketProvider,
    private storage: Storage,
    private toastCtrl: ToastController,
    private viewCtrl: ViewController,
    private navCtrl: NavController, 
    private navParams: NavParams) {
  }

  ionViewDidLoad() {
    // memberdata
    this.storage.get('ID').then((data) => {
      console.log("ID:",data)

      this.httpHelper.singleUser(data).then((data:any)=>{
        console.log("SINGLE USER:",data)
        this.loanRequestData = {
          phoneNumber: data.user.phonenumber,
          memberNumber: data.user.membernumber
        }
      })
    })

    // GET LOAN CATEGORIES
    this.loanCategoryHelper.getCategories().then(data => {
      this.loanCategory = data;
      console.log("LOAN CATEGORIES:",this.loanCategory)
    })
    console.log("LOAN CATEGORIES:",this.loanCategory)
    // GET LOAN DATA
    this.loanData = this.navParams.get('loanData')
    console.log("LOAN DATA:",this.loanData[0])

    switch(this.loanData[0]){
      case "DevelopmentLoan":
        this.loanRequestData.type = "SaccoDev";
        break;

      case "EducLoan":
        this.loanRequestData.type = "SaccoEducation";
        break;

      case "MicroLoan":
        this.loanRequestData.type = "SaccoMicro";
        break; 
        
      case "ExpressLoan":
        this.loanRequestData.type = "SaccoExpress";
        break;        
        
      case "SmartLifeLoan":
        this.loanRequestData.type = "SaccoSmart";
        break;  
        
      // default:
        // break;
    }

    console.log("LOAN REQ DAT:",this.loanRequestData)
    
    this.storage.get('memberData').then((data)=>{      
      this.memberNo = data['MB.CUST.NO']
      this.memberPhone = data['MB.CELL.NO..']

      this.requestData = {
        memberNumber:this.memberNo,
        memberPhone:this.memberPhone
      }

      this.loanRequestData.memberNumber = this.memberNo
      this.loanRequestData.memberPhone = this.memberPhone
      
      console.log("MEMBER DATA:", this.loanRequestData)
    })

    

    // get savings bal
    this.storage.get('SavingsBalance').then(data => {      
      this.savingsBalance = data.data;

      this.mainSavings = this.savingsBalance.filter(el => {
        return el[0] == 'MainSav'
      })[0]    
      
      console.log("MAIN SAVINGS:",this.mainSavings)
    })   
    
    

    this.typeLimit = this.navParams.get('loanData');
    this.loanType = this.typeLimit[0]
    this.loanLimit = this.typeLimit[1]    
  }

  onTerm(){
    this.loanRequestData.term = this.loanTerm
  }

  
  onAmount(ev) {
    // CHECK IF LOAN AMOUNT EXCEEDS LOAN ELIGIBILITY
    console.log("AMOUNT:",this.amountValue);
    console.log("LOAN LIMIT:",this.loanLimit);

    let limit = parseInt(this.loanLimit.replace(/,/g, ''))

    console.log("LIMIT:",limit)

    if(this.amountValue > limit){
      let toast = this.toastCtrl.create({
          // duration:3000,
          message:"Your requested amount exeeds your loan eligibility.",
          position:"middle",
          showCloseButton:true,
          closeButtonText: "Recify Amount"
      })

      toast.present()
    }

    console.log(ev.target.value)
    this.loanRequestData.amount = this.amountValue
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

  onGuarantors(){
    // let guarantors:any[]=[]
    // guarantors = this.guarantors.split(',')
    this.loanRequestData.guarantors = this.guarantors.split(',')
  }

  onPurpose(){
    this.loanRequestData.purpose = this.loanPurpose;
  }

  resize(){
    this.myInput.nativeElement.style.height = this.myInput.nativeElement.scrollHeight + 'px';
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

  loanSubmit(){
    console.log("LOAN SUBMIT DATA:",this.loanRequestData)
    // CHECK IF AMOUNT IS > LOAN ELIGIBILITY

    // CHECK IF LOAN AMOUNT EXCEEDS LOAN ELIGIBILITY
    if(this.amountValue > this.loanLimit){
      let toast = this.toastCtrl.create({
          // duration:3000,
          message:"Your requested amount exeeds your loan eligibility.",
          position:"middle",
          showCloseButton:false,
          closeButtonText: "Rectify Amount"
      })

      toast.present()
    }else if(this.amountValue < this.loanLimit){
      // CHECK IF SUM OF GUARANTORS' SAVINGS IS MORE THAN LOAN AMOUNT
      this.socketHelper.loanApplication(this.loanRequestData)
      .then(()=>{
        this.socket.on('loanApplicationFeedback',(data)=>{
          console.log("LOAN APPLICATION FEEDBACK:",data)
        })
      })
    
    }
  }
}
