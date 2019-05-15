import { Component } from '@angular/core';
import { IonicPage, ViewController, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-account-details',
  templateUrl: 'account-details.html',
})
export class AccountDetailsPage {
  private details:any
  private title:any
  private accountNum:any
  private amount:any
  private status:any
  private branch:any
  private mno:any;

  constructor(
    private viewCtrl: ViewController, 
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.details = this.navParams.get('data')
    console.log(this.details)
    
    this.title = this.details.details[0]
    this.accountNum = this.details.details[2]
    this.amount = this.details.details[3]
    this.status = this.details.details[5]
    this.branch = this.details.details[6]

    this.mno = this.details.mno;

    console.log("DETAILS: ", this.details)
  }

  items=[
    {name:'Product Type', date:'Date Here'},
    {name:'Account Relationship', date:'Date Here'},
    {name:'Account Restrictions', date:'Date Here'},
    {name:'Account Branch', date:'Date Here'},
    {name:'Account status', date:'Date Here'},
    {name:'Uncleared of funds', date:'Date Here'},
    {name:'Amount on hold', date:'Date Here'},
    {name:'Overdraft limit', date:'Date Here'},
  ]
  // goTo Function 
  goTo(page){
    this.navCtrl.push(page,{data:{details:this.details,mno:this.mno}});
  }

  onClose() {
    this.viewCtrl.dismiss()
  }

}
  