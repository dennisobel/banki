import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { T24Provider } from '../providers/t24/t24';
import { HttpProvider } from '../providers/http/http';
import { SocketProvider } from '../providers/socket/socket';

import { PopoverPage } from '../pages/popover/popover';
import { LockPage } from '../pages/lock/lock';
import { SignuppopPage } from '../pages/signuppop/signuppop';
import { PhonepopupPage } from '../pages/phonepopup/phonepopup';
import { MnopopPage } from '../pages/mnopop/mnopop';
import { MnopaspopPage } from '../pages/mnopaspop/mnopaspop';
import { OtppopPage } from '../pages/otppop/otppop';
import { EnterpinPage } from '../pages/enterpin/enterpin';
import { AccountDetailsPage } from '../pages/account-details/account-details';
import { NonmemberPage } from '../pages/nonmember/nonmember';
import { PrecustomerPage } from '../pages/precustomer/precustomer';
import { NonmemberotpPage } from '../pages/nonmemberotp/nonmemberotp';
import { SummaryPage } from '../pages/summary/summary';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { DividendsPage } from '../pages/dividends/dividends';
import { LoanformPage } from '../pages/loanform/loanform';
import { GuarantorviewPage } from '../pages/guarantorview/guarantorview';
import { GuaranteeviewPage } from '../pages/guaranteeview/guaranteeview';

import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
import { LoancategoryProvider } from '../providers/loancategory/loancategory';

const socketConfig: SocketIoConfig = { url: 'http://localhost:3000/', options: {
  autoConnect: true,
}};

var config = {
      backButtonText: '',
      backButtonIcon: 'ios-arrow-round-back',
      iconMode: 'ios',
      mode:'ios',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      pageTransition: 'ios',
    };
@NgModule({
  declarations: [
    MyApp,
    PopoverPage,
    LockPage,
    SignuppopPage,
    PhonepopupPage,
    // MnopopPage,
    // EnterpinPage,
    MnopaspopPage,
    // OtppopPage
    SummaryPage,
    AccountDetailsPage,
    // NonmemberPage,
    NonmemberotpPage,
    LoanformPage,
    GuarantorviewPage,
    GuaranteeviewPage,
    // SignUpPage,
    // DividendsPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp,config),
    SocketIoModule.forRoot(socketConfig),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PopoverPage,
    LockPage,
    SignuppopPage,
    PhonepopupPage,
    // MnopopPage,
    // EnterpinPage,
    MnopaspopPage,
    // OtppopPage
    SummaryPage,
    AccountDetailsPage,
    // NonmemberPage,
    NonmemberotpPage,
    LoanformPage,
    GuarantorviewPage,
    GuaranteeviewPage,    
    // SignUpPage,
    // DividendsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    T24Provider,
    HttpProvider,
    SocketProvider,
    LoancategoryProvider
  ]
})
export class AppModule {}
