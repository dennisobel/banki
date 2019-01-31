import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams } from 'ionic-angular';

import { SocketProvider } from "../../providers/socket/socket";
import { Socket } from 'ng-socket-io';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-statements',
  templateUrl: 'statements.html',
})
export class StatementsPage {

  constructor(
    private navCtrl: NavController, 
    private alertCtrl: AlertController,
    private navParams: NavParams,
    private socketHelper: SocketProvider,
    private socket: Socket,
    private storage: Storage) {
      this.socket.on('eStatementData',(data)=>{
        console.log(data)
        let alert = this.alertCtrl.create({
          title:"E-STATEMENT REQUEST",
          message:`${data.data}`,
          buttons:[
            {
              text:'Ok',
              role:'cancel',
              handler:() => {
                console.log('Cancel clicked');
              }              
            }
          ]
          
        })
        alert.present();
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatementsPage');
  }

  handleEStatement(){
    console.log("handle e-statement")
    this.socketHelper.eStatement()

  }
 
}
 