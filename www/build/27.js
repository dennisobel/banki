webpackJsonp([27],{

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BanktransferPageModule", function() { return BanktransferPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__banktransfer__ = __webpack_require__(354);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BanktransferPageModule = (function () {
    function BanktransferPageModule() {
    }
    return BanktransferPageModule;
}());
BanktransferPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__banktransfer__["a" /* BanktransferPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__banktransfer__["a" /* BanktransferPage */]),
        ],
    })
], BanktransferPageModule);

//# sourceMappingURL=banktransfer.module.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BanktransferPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the BanktransferPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BanktransferPage = (function () {
    function BanktransferPage(navCtrl, navParams, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
    }
    BanktransferPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BanktransferPage');
    };
    BanktransferPage.prototype.handleContinue = function () {
        var loading = this.loadingCtrl.create({
            content: 'Processing Bank Transfer...',
            duration: 3000
        });
        loading.present();
        /*
        let alert = this.alertCtrl.create({
          title: "SUCCESFULLY PROCESSED BANK TRANSFER",
          buttons:[
            {
              text:"OK",
              role:"cancel",
              handler:()=>{
                console.log("canceled")
              }
            }
          ]
        })
    
        alert.present()*/
    };
    BanktransferPage.prototype.logOut = function () {
        this.navCtrl.setRoot('WelcomePage');
    };
    return BanktransferPage;
}());
BanktransferPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-banktransfer',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/banktransfer/banktransfer.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start >\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="ios-menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Bank Transfer</ion-title>\n    <ion-buttons end >\n      <button ion-button icon-only (click)="logOut()">\n        <ion-icon name="ios-log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="appForm">\n    <ion-list>\n      <ion-list-header>Select Bank</ion-list-header>\n\n      <ion-item>\n        <ion-label>Bank</ion-label>\n        <ion-select [(ngModel)]="bank" placeholder="Select One">\n          <ion-option value="ABC">African Banking Corporation Limited</ion-option>\n          <ion-option value="BOA">Bank of Africa Kenya Limited</ion-option>\n          <ion-option value="BOB">Bank of Baroda (K) Limited</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n\n    <ion-item>\n      <ion-input placeholder="Amount" style="border: 1px solid black; text-align:right; border-radius: 4px;" [(ngModel)]="amount" type="text" id="amount"></ion-input>\n    </ion-item>  \n    \n    <hr/>\n\n    <button color="color2" ion-button block (click)="handleContinue()">CONTINUE</button>  \n  </div>  \n</ion-content>\n'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/banktransfer/banktransfer.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], BanktransferPage);

//# sourceMappingURL=banktransfer.js.map

/***/ })

});
//# sourceMappingURL=27.js.map