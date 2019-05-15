import { Component } from '@angular/core';
import { 
  App,
  // IonicPage, 
  NavController, 
  NavParams,
  ViewController } from 'ionic-angular';


import { Socket } from 'ng-socket-io';
import { Storage } from '@ionic/storage';
import { HttpProvider } from "../../providers/http/http";
import { SocketProvider } from "../../providers/socket/socket";
import { resolve } from 'url';
import { SummaryPage } from '../summary/summary';

// @IonicPage()
@Component({
  selector: 'page-lock',
  templateUrl: 'lock.html',
})
export class LockPage {

  private pin:string="";
  private page2open:any;
  private nav:any;

  constructor(
    private appCtrl: App,
    private viewCtrl: ViewController,
    private socketHelper: SocketProvider,
    private http: HttpProvider,
    private socket: Socket,
    private storage: Storage,
    private navCtrl: NavController, 
    private navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.page2open = this.navParams.get('page2open');
    console.log(this.page2open)
  }

  handle(data) {
    // console.log("LOCK DATA: ",data)
    this.pin = this.pin + data;
    console.log(this.pin)
    // document.getElementById('pin').setAttribute("value",data)
    // let input = document.getElementById('pin').
  }

  handleGo() {
    console.log("handle enter",this.pin)
    // check pass
    let mno:any;

    this.storage.get('memberData').then((member_data) => {
      mno = member_data['MB.CUST.NO']

      let data:any = {
        password:this.pin,
        mno
      }
      
      console.log(data)

      this.nav = this.appCtrl.getRootNavById('n4')

      if(this.page2open == 'SummaryPage'){
        
        console.log("case Summary")
        this.http.submitPassword({password:this.pin,mno:mno}).then((data:any) => {
          console.log("signup res",data)
          if(data.success === true) {
            // this.navCtrl.setRoot(SummaryPage)
            // this.navCtrl.push(this.navParams.get('page2open'))
            this.nav.setRoot(SummaryPage,{data:member_data})
          }
        })
      } else {
        console.log("case other")
        this.http.submitPIN(data).then((data:any) => {
          if(data.success === true) {
            return new Promise((resolve,reject) => {
              resolve(this.navParams.get('data'))
            }).then((page:any) => {
              this.navCtrl.push(page,{data:member_data});
            }).then(() => {
              this.viewCtrl.dismiss()
            })
          } else {
            // logic for password fail
            console.log("password fail bro")
          }        
        })
      }


    })
  }

  handleBack() {
    console.log("handle delete")
    this.pin = this.pin.slice(0,-1);
  }

}
