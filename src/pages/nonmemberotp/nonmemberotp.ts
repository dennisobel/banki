import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { PrecustomerPage } from '../precustomer/precustomer';



@IonicPage()
@Component({
  selector: 'page-nonmemberotp',
  templateUrl: 'nonmemberotp.html',
})
export class NonmemberotpPage {
  private data:any;
  private firstname:any;
  private surname:any;
  private othername:any;
  private gender:any;
  private idnumber:any;
  private phonenumber:any;
  private dob:any;

  constructor(
    private modalCtrl: ModalController,
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.data = this.navParams.get('data')
    this.firstname = this.data.firstname;
    this.surname = this.data.surname;
    this.othername = this.data.othername;
    this.gender = this.data.gender;
    this.idnumber = this.data.idnumber;
    this.phonenumber = this.data.phonenumber;
    this.dob = this.data.dob;
  }

  handleMNO(page) {
    let data = {
      firstname:this.firstname,
      surname:this.surname,
      othername:this.othername,
      gender:this.gender,
      idnumber:this.idnumber,
      phonenumber:this.phonenumber,
      dob:this.dob
    }
    let preCustomerModal = this.modalCtrl.create(page,data)
    preCustomerModal.present()

  }

}
