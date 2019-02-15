webpackJsonp([11],{

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepayLoansPageModule", function() { return RepayLoansPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__repay_loans__ = __webpack_require__(370);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RepayLoansPageModule = (function () {
    function RepayLoansPageModule() {
    }
    return RepayLoansPageModule;
}());
RepayLoansPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__repay_loans__["a" /* RepayLoansPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__repay_loans__["a" /* RepayLoansPage */]),
        ],
    })
], RepayLoansPageModule);

//# sourceMappingURL=repay-loans.module.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepayLoansPage; });
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
 * Generated class for the RepayLoansPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RepayLoansPage = (function () {
    function RepayLoansPage(navCtrl, alertCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
    }
    RepayLoansPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RepayLoansPage');
    };
    RepayLoansPage.prototype.handleContinue = function () {
        var alert = this.alertCtrl.create({
            title: "PROCESSING LOAN REPAY",
            buttons: [
                {
                    text: "OK",
                    role: "cancel",
                    handler: function () {
                        console.log("canceled");
                    }
                }
            ]
        });
    };
    RepayLoansPage.prototype.logOut = function () {
        this.navCtrl.setRoot('WelcomePage');
    };
    return RepayLoansPage;
}());
RepayLoansPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-repay-loans',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/repay-loans/repay-loans.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start >\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="ios-menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Repay Loans</ion-title>\n    <ion-buttons end >\n      <button ion-button icon-only (click)="logOut()">\n        <ion-icon name="ios-log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="appForm">\n    <ion-list>\n      <ion-list-header>Select Loan</ion-list-header>\n\n      <ion-item>\n        <ion-label>Loan</ion-label>\n        <ion-select [(ngModel)]="loanType" placeholder="Select One">\n          <ion-option value="f">FOSA</ion-option>\n          <ion-option value="m">M-LOAN</ion-option>\n          <ion-option value="E">Education Loan</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n\n    <ion-item>\n      <ion-input placeholder="Amount" style="border: 1px solid black; text-align:right; border-radius: 4px;" [(ngModel)]="amount" type="text" id="amount"></ion-input>\n    </ion-item>  \n\n    <hr/>\n\n    <button color="color2" ion-button block (click)="handleContinue()">CONTINUE</button> \n  </div>   \n</ion-content>\n'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/repay-loans/repay-loans.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], RepayLoansPage);

//# sourceMappingURL=repay-loans.js.map

/***/ })

});
//# sourceMappingURL=11.js.map