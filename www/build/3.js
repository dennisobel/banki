webpackJsonp([3],{

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferPageModule", function() { return TransferPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transfer__ = __webpack_require__(413);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TransferPageModule = (function () {
    function TransferPageModule() {
    }
    return TransferPageModule;
}());
TransferPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__transfer__["a" /* TransferPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__transfer__["a" /* TransferPage */]),
        ],
    })
], TransferPageModule);

//# sourceMappingURL=transfer.module.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransferPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_socket_socket__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TransferPage = (function () {
    function TransferPage(viewCtrl, navCtrl, navParams, socketHelper, socket, storage) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.socketHelper = socketHelper;
        this.socket = socket;
        this.storage = storage;
        this.fromAccount = 'account';
        this.toAccount = 'account';
        this.show = false;
    }
    TransferPage.prototype.ionViewDidLoad = function () {
        this.socketHelper.getMemberAccounts();
    };
    // transform result
    TransferPage.prototype.showResult = function () {
        this.show = true;
        if (this.fromAccount != 'account') {
            if (this.toAccount != 'account') {
                if (this.amount == undefined) {
                    this.result = 'Please Enter Amount';
                }
                else {
                    this.result = 'Transfer Successful';
                }
            }
            else {
                this.result = 'Please Select To Account';
            }
        }
        else {
            this.result = 'Please Select From Account';
        }
    };
    // logOut Function 
    TransferPage.prototype.logOut = function () {
        this.navCtrl.setRoot('WelcomePage');
    };
    TransferPage.prototype.onClose = function () {
        this.viewCtrl.dismiss();
    };
    return TransferPage;
}());
TransferPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-transfer',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/transfer/transfer.html"*/'\n<ion-header>\n  <!--\n  <ion-navbar hideBackButton>\n    <img  class="imagestyle" object-fit: cover height="70px"  width="470px" src="assets/images/header.jpg"/>     \n  </ion-navbar>\n  -->\n  <ion-navbar hideBackButton>\n    <!--\n    <ion-buttons start >\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="ios-menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end >\n      <button ion-button icon-only (click)="logOut()">\n        <ion-icon name="ios-log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n    -->\n    <img height="150px" width="470px" src="assets/images/internaltransferheader.jpg"/>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="appForm">\n    <ion-list>\n      <ion-list-header>\n          Transfer\n      </ion-list-header>\n      <!-- Accoun-From Select -->\n      <ion-item >\n        <ion-label stacked>From</ion-label>\n          <ion-select   [(ngModel)]="fromAccount">\n             <ion-option value="account" *ngIf="fromAccount ==\'account\'">account</ion-option> \n             <ion-option value="account1" >126535837567</ion-option> \n             <ion-option value="account2" >989726517221</ion-option> \n             <ion-option value="account3" >987890265622</ion-option> \n          </ion-select>\n      </ion-item>\n      <!-- Account-To Select -->\n      <ion-item >\n        <ion-label stacked>To</ion-label>\n          <ion-select   [(ngModel)]="toAccount">\n             <ion-option value="account" *ngIf="toAccount ==\'account\'" >account</ion-option> \n             <ion-option value="account1" >56535435882</ion-option> \n             <ion-option value="account2" >87663223321</ion-option> \n             <ion-option value="account3" >987545r27725</ion-option> \n          </ion-select>\n      </ion-item>\n        <!-- amount Input -->\n      <ion-item>\n        <ion-input placeholder="Amount" style="border: 1px solid black; text-align:right; border-radius: 4px;" type="num" [(ngModel)]="amount" placeholder="Amount"></ion-input>\n      </ion-item> \n    </ion-list> \n  </div>\n  <button ion-button block color="faceColor" (click)="showResult()">Continue</button>\n  <p class="result" *ngIf="show == true">{{result}}</p>\n\n  <ion-fab left bottom>\n    <button ion-fab mini color="gold" (click)="onClose()"><ion-icon name="md-close"></ion-icon></button>\n  </ion-fab>   \n</ion-content>\n\n'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/transfer/transfer.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_socket_socket__["a" /* SocketProvider */],
        __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__["Socket"],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
], TransferPage);

//# sourceMappingURL=transfer.js.map

/***/ })

});
//# sourceMappingURL=3.js.map