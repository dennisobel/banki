import { Component } from '@angular/core';
import { 
  App,
  IonicPage, 
  NavController, 
  NavParams,
  ViewController } from 'ionic-angular';


import { Socket } from 'ng-socket-io';
import { Storage } from '@ionic/storage';
import { HttpProvider } from "../../providers/http/http";
import { SocketProvider } from "../../providers/socket/socket";
import { resolve } from 'url';
import { SummaryPage } from '../summary/summary';
import { TreeError } from '@angular/compiler';

@IonicPage()
@Component({
  selector: 'page-enterpin',
  templateUrl: 'enterpin.html',
})
export class EnterpinPage {
  private nav;
  private pin:string="";
  private page2open:any;

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
    mno = this.navParams.get('data')    

    this.storage.get('memberData').then((member_data) => {
      // mno = member_data['MB.CUST.NO']

      let data:any = {
        password:this.pin,
        mno
      }
      
      console.log(data)

      this.http.submitPIN(data).then((data:any) => {
        this.nav = this.appCtrl.getRootNavById('n4')
        if(data.success === true) {
          return new Promise((resolve:any,reject:any) => {
            resolve(              
              this.nav.setRoot(SummaryPage,{data:member_data})
            )

            // let nav = this.appCtrl.getActiveNavs()[0]
            // nav.setRoot(SummaryPage,{data:member_data})
            // this.navCtrl.push(SummaryPage,{data:member_data});
            /*
            this.navCtrl.setRoot(SummaryPage).then(()=>{
              this.navCtrl.popToRoot().then(()=>{

              }).catch(err => {
                
              })
            }).catch(err => {

            })
            */
            // resolve(this.navParams.get('data'))
          }).then(() => {
            this.viewCtrl.dismiss()
          })
        } else {
          // logic for password fail
          console.log("password fail bro")
        }        
      })  
    })
  }

  handleBack() {
    console.log("handle delete")
    this.pin = this.pin.slice(0,-1);
  }


}
