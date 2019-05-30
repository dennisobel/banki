webpackJsonp([29],{

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepositPageModule", function() { return DepositPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__deposit__ = __webpack_require__(394);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DepositPageModule = (function () {
    function DepositPageModule() {
    }
    return DepositPageModule;
}());
DepositPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__deposit__["a" /* DepositPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__deposit__["a" /* DepositPage */]),
        ],
    })
], DepositPageModule);

//# sourceMappingURL=deposit.module.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepositPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_socket_socket__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_http__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DepositPage = (function () {
    function DepositPage(viewCtrl, navCtrl, navParams, alertCtrl, socketHelper, loadingCtrl, httpHelper) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.socketHelper = socketHelper;
        this.loadingCtrl = loadingCtrl;
        this.httpHelper = httpHelper;
    }
    DepositPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DepositPage');
    };
    DepositPage.prototype.onSelectSelf = function () {
    };
    DepositPage.prototype.onSelectOther = function () {
    };
    DepositPage.prototype.handleContinue = function () {
        var _this = this;
        var paybill = 400444;
        var loading = this.loadingCtrl.create({
            content: 'Processing Deposit...',
            duration: 3000
        });
        loading.present();
        var alert = this.alertCtrl.create({
            title: "Confirm deposit of Ksh " + this.amount + " to account " + this.accountNumber,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log("canceled");
                    }
                },
                {
                    text: 'Ok',
                    handler: function () {
                        // handle deposit
                        /*
                        this.socketHelper.depositFromMpesa({accountNumber:this.accountNumber,amount:this.amount,paybill})
                        .then(() => {
                          
                        })
                        */
                        _this.httpHelper.depositFromMpesa({ accountNumber: _this.accountNumber, amount: _this.amount, paybill: paybill })
                            .then(function (data) {
                            console.log('DEPOSIT FROM MPESA HTTP REQUEST FEEDBACK', data);
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    DepositPage.prototype.logOut = function () {
        this.navCtrl.setRoot('WelcomePage');
    };
    DepositPage.prototype.onClose = function () {
        this.viewCtrl.dismiss();
    };
    return DepositPage;
}());
DepositPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-deposit',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/deposit/deposit.html"*/'\n<ion-header>\n  <!--\n  <ion-navbar hideBackButton>\n    <img  class="imagestyle" object-fit: cover height="70px"  width="470px" src="assets/images/header.jpg"/>     \n  </ion-navbar>\n  -->\n  <ion-navbar hideBackButton> \n    <!--\n    <ion-buttons start >\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="ios-menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end >\n      <button ion-button icon-only (click)="logOut()">\n        <ion-icon name="ios-log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n    -->\n    <img height="150px" width="470px" src="assets/images/deposittompesaheader.jpg"/>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <!--\n    <ion-list>\n      <ion-list-header>Send To Self Or Other</ion-list-header>\n\n      <ion-item>\n        <ion-label>Self/Other</ion-label>\n        <ion-select [(ngModel)]="loanType" placeholder="Select One">\n          <ion-option (ionSelect)="onSelectSelf()"  value="s" >SELF</ion-option>\n          <ion-option (ionSelect)="onSelectOther()"  value="o" >OTHER</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n    -->\n  <!--\n  <ion-list class="list" radio-group [(ngModel)]="sendTo">\n    <ion-row>\n      <ion-col col-6>\n        <ion-item>\n          <ion-label>SELF</ion-label>\n          <ion-radio color="dark" value="self" (click)="handleSelf()"></ion-radio>\n        </ion-item>      \n      </ion-col>\n      <ion-col col-6>\n        <ion-item>\n          <ion-label>OTHER</ion-label>\n          <ion-radio color="dark" value="other" (click)="handleOther()"></ion-radio>\n        </ion-item>      \n      </ion-col>\n    </ion-row>   \n  </ion-list>\n  -->    \n<div class="appForm">\n  <ion-item>\n    <ion-input placeholder="Account Number" style="border: 1px solid black; text-align:right; border-radius: 4px;" [(ngModel)]="accountNumber" type="text" id="account"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-input placeholder="Amount" style="border: 1px solid black; text-align:right; border-radius: 4px;" [(ngModel)]="amount" type="text" id="amount"></ion-input>\n  </ion-item> \n\n  <hr/>\n\n  <button color="faceColor" ion-button block (click)="handleContinue()">CONTINUE</button>\n</div>\n  <ion-fab left bottom>\n    <button ion-fab mini color="gold" (click)="onClose()"><ion-icon name="md-close"></ion-icon></button>\n  </ion-fab> \n</ion-content>\n\n\n'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/deposit/deposit.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_socket_socket__["a" /* SocketProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_http_http__["a" /* HttpProvider */]])
], DepositPage);

//# sourceMappingURL=deposit.js.map

/***/ })

});
//# sourceMappingURL=29.js.map