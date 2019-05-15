import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',
})
export class PopoverPage {

  constructor(public viewCtrl: ViewController) {}

  closePopover() {
    this.viewCtrl.dismiss();
  }

  mloanPage() {

  }

  fosaPage() {
    
  }

}
