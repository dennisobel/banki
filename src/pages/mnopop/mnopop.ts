import { Component } from '@angular/core';
import { 
  IonicPage, 
  NavController, 
  NavParams,
  ViewController,
  PopoverController } from 'ionic-angular';

import { HttpProvider } from "../../providers/http/http";      
import { SummaryPage } from '../summary/summary';

@IonicPage()
@Component({
  selector: 'page-mnopop',
  templateUrl: 'mnopop.html',
})
export class MnopopPage {
  private mno:any;

  constructor(
    private viewCtrl: ViewController,
    private http: HttpProvider,
    private navCtrl: NavController, 
    private navParams: NavParams,
    private popoverCtrl: PopoverController) {
  }


  handlePIN(page,page2open) {

    // Submit MNO
    this.http.submitMNO({mno:this.mno}).then((data:any) => {
      if(data.verified === true) {
        this.presentPopover(page,page2open,null);
      } else {
        // mno dont exist
      }

    }).then(()=>{
      this.viewCtrl.dismiss()
    })
  
  
  }

  presentPopover(page,page2open,data) {
    let ev = {
      target : {
        getBoundingClientRect : () => {
          return {
            top: '100', left:'100'
          };
        }
      }
    };
    let popover = this.popoverCtrl.create(
      page,
      {ev,page2open,data},
      {cssClass: 'alertCustomCss',showBackdrop: true},
  )
    popover.present({
      // ev: myEvent
    })
  }


}
