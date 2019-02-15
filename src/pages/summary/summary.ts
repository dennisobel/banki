import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// import { T24Provider } from "../../providers/t24/t24";
import { SocketProvider } from "../../providers/socket/socket";
import { Socket } from 'ng-socket-io';
import { Storage } from '@ionic/storage';
import { HttpProvider } from "../../providers/http/http";

@IonicPage()
@Component({
  selector: 'page-summary',
  templateUrl: 'summary.html',
})

export class SummaryPage {
  private fosaArray:any[]=[];
  private fosaBal:any;
  private name:any;
  private mainSavArray:any[]=[]
  private mainSav:any;

  private fosarange=30;
  private mainsavrange=70;

	constructor(
    private navCtrl: NavController,
    private socketHelper: SocketProvider,
    private http: HttpProvider,
    private socket: Socket,
    private storage: Storage,
    // private t24: T24Provider,
    private navParams: NavParams){

      
  }
 
  ionViewDidLoad(){
    console.log("reached summary")
    this.socket.on('connect',()=>{
    	var sessionid = this.socket.ioSocket.id;
      // console.log("socket id is: ",sessionid)    
    })
        
    this.storage.get('loginData').then(data=>{
      console.log("LOGIN DATA:",data)
      // console.log("NAV PARAMS DATA:",this.navParams.get('data'))

      let loginData:any;

      
      this.socketHelper.balanceEnq(data)
      // this.socketHelper.balanceEnq(this.navParams.get('data')||data).then(()=>{
      //   this.storage.set('access',this.navParams.get('data'))
      // })
      
    })

         

    // this.socket.emit("balanceEnq",{data:"james"})
    // this.socketHelper.balanceEnq(this.navParams.get('data'))
    // this.socketHelper.balanceEnq(this.loginData)
    // this.t24.balanceEnquiry()
    
      this.socket.on('balEnqData',(data)=>{
        console.log("balEnqData:",data)
        
        this.fosaArray = data.data[0]
        
        this.fosaBal = this.fosaArray[Object.keys(this.fosaArray)[3]]
        this.mainSavArray = data.data[1]
        this.mainSav = this.mainSavArray[Object.keys(this.mainSavArray)[3]]
        this.name = this.mainSavArray[Object.keys(this.mainSavArray)[1]]
        console.log(this.fosaBal/(this.fosaBal+this.mainSav))
        this.fosarange = (this.fosaBal/(this.fosaBal+this.mainSav))*(100)
        this.mainsavrange = (this.mainSav/(this.fosaBal+this.mainSav))*(100)

        console.log("FOSA RANGE:",this.fosarange)
      })

  }

  // goTo Function 
  goTo(page){
    this.navCtrl.setRoot(page,{data:this.navParams.get('data')});
  }
  // logOut Function 
  logOut(){
    this.navCtrl.setRoot('WelcomePage');
  }
} 

/*You hang around the barber shop long enough, soon enough you
will get a hair cut

To get something you never had, you have to do something you never did*/