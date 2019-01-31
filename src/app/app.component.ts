import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'WelcomePage';

  pages: Array<{title: string, component: any,icon:any}>;
  public animateVarible:boolean=false;
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Summary', component: 'SummaryPage',icon:'banki-summary' },
      { title: 'Personal Accounts', component: 'PersonalAccountPage',icon:'banki-user' },
      { title: 'Benficiariers', component: 'BeneficiariesPage',icon:'banki-exchange' },
      { title: 'Setting', component: 'SettingPage',icon:'banki-setting' },
      { title: 'Profile', component: 'ProfilePage',icon:'banki-user-1' },
      { title: 'Currancy Converter', component: 'CurrencyConvertorPage',icon:'banki-converter' },
      { title: 'Transfer Payment', component: 'TransferPage',icon:'banki-transfer' },
      { title: 'Find us', component: 'FindUsPage',icon:'banki-location' },
      { title: 'Contact us', component: 'ContactUsPage',icon:'banki-phone' },

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page);
  }
}
