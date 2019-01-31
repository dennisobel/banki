webpackJsonp([3],{

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferPageModule", function() { return TransferPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transfer__ = __webpack_require__(366);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__transfer__["a" /* TransferPage */]),
        ],
    })
], TransferPageModule);

//# sourceMappingURL=transfer.module.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransferPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_socket_socket__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(43);
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
    function TransferPage(navCtrl, navParams, socketHelper, socket, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.socketHelper = socketHelper;
        this.socket = socket;
        this.storage = storage;
        this.fromAccount = 'account';
        this.toAccount = 'account';
        this.show = false;
    }
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
    return TransferPage;
}());
TransferPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-transfer',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/transfer/transfer.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start >\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="ios-menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Transfer / Payment </ion-title>\n    <ion-buttons end >\n      <button ion-button icon-only (click)="logOut()">\n        <ion-icon name="ios-log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <div class="appForm">\n    <ion-list>\n      <ion-list-header>\n          Transfer\n      </ion-list-header>\n      <!-- Accoun-From Select -->\n      <ion-item >\n        <ion-label stacked>From</ion-label>\n          <ion-select   [(ngModel)]="fromAccount">\n             <ion-option value="account" *ngIf="fromAccount ==\'account\'">account</ion-option> \n             <ion-option value="account1" >126535837567</ion-option> \n             <ion-option value="account2" >989726517221</ion-option> \n             <ion-option value="account3" >987890265622</ion-option> \n          </ion-select>\n      </ion-item>\n      <!-- Account-To Select -->\n      <ion-item >\n        <ion-label stacked>To</ion-label>\n          <ion-select   [(ngModel)]="toAccount">\n             <ion-option value="account" *ngIf="toAccount ==\'account\'" >account</ion-option> \n             <ion-option value="account1" >56535435882</ion-option> \n             <ion-option value="account2" >87663223321</ion-option> \n             <ion-option value="account3" >987545r27725</ion-option> \n          </ion-select>\n      </ion-item>\n        <!-- amount Input -->\n      <ion-item>\n        <ion-label stacked>Amount</ion-label>\n        <ion-input type="num" [(ngModel)]="amount" placeholder="Type here"></ion-input>\n      </ion-item> \n    </ion-list> \n  </div>\n  <button ion-button block color="color2" (click)="showResult()">Continue</button>\n  <p class="result" *ngIf="show == true">{{result}}</p>\n</ion-content>\n\n'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/transfer/transfer.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_socket_socket__["a" /* SocketProvider */],
        __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__["Socket"],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
], TransferPage);

//# sourceMappingURL=transfer.js.map

/***/ })

});
//# sourceMappingURL=3.js.map