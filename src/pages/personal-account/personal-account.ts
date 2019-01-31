import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Socket } from 'ng-socket-io';
import { SocketProvider } from "../../providers/socket/socket";


@IonicPage()
@Component({
  selector: 'page-personal-account',
  templateUrl: 'personal-account.html',
})
export class PersonalAccountPage {
  private fosaArray:any[]=[];
  private fosaBal:any;
  private fosaAccNum:any;
  private mainSavArray:any[]=[]
  private mainSav:any;
  private mainSavAccNum:any;
  private accounts:any[]=[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private socketHelper: SocketProvider,
    private socket: Socket) {
  }

  ionViewDidLoad(){
    console.log("personal accs page loaded")
    this.socketHelper.balanceEnq()
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
  }



  
  // goTo Function 
  goTo(page){
    this.navCtrl.push(page);
  } 

    // logOut Function 
  logOut(){
    this.navCtrl.setRoot('WelcomePage');
  }
}
