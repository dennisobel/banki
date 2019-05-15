import { Component } from '@angular/core';
import { 
  IonicPage, 
  NavController, 
  NavParams,
  ViewController,
  PopoverController } from 'ionic-angular';

import { HttpProvider } from "../../providers/http/http";      
import { SummaryPage } from '../summary/summary';
import { resolve } from 'dns';

@IonicPage()
@Component({
  selector: 'page-mnopaspop',
  templateUrl: 'mnopaspop.html',
})
export class MnopaspopPage {
  private mno:any;

  constructor(
    private viewCtrl: ViewController,
    private http: HttpProvider,
    private navCtrl: NavController, 
    private navParams: NavParams,
    private popoverCtrl: PopoverController) {
  }

  handlePIN(page) {
    return new Promise((resolve:any,reject:any)=>{
      resolve(
        this.presentPopover(page,this.mno)
      )
    }).then(()=>{
      this.viewCtrl.dismiss()
    })
    
  }

  presentPopover(page,data) {
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
      {ev,data},
      {cssClass: 'alertCustomCss',showBackdrop: true},
  )
    popover.present({
      // ev: myEvent
    })
  }

}