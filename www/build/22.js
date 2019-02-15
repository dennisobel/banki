webpackJsonp([22],{

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyConvertorPageModule", function() { return CurrencyConvertorPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__currency_convertor__ = __webpack_require__(359);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CurrencyConvertorPageModule = (function () {
    function CurrencyConvertorPageModule() {
    }
    return CurrencyConvertorPageModule;
}());
CurrencyConvertorPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__currency_convertor__["a" /* CurrencyConvertorPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__currency_convertor__["a" /* CurrencyConvertorPage */]),
        ],
    })
], CurrencyConvertorPageModule);

//# sourceMappingURL=currency-convertor.module.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyConvertorPage; });
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


var CurrencyConvertorPage = (function () {
    function CurrencyConvertorPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fromCountry = 'usa';
        this.fromImg = 'assets/img/usa.png';
        this.toCountry = 'cad';
        this.toImg = 'assets/img/cad.png';
        this.show = false;
    }
    // change img in select item
    CurrencyConvertorPage.prototype.change = function () {
        this.fromImg = 'assets/img/' + this.fromCountry + '.png';
        this.toImg = 'assets/img/' + this.toCountry + '.png';
    };
    // show convert result
    CurrencyConvertorPage.prototype.showResult = function () {
        this.show = true;
        console.log(this.amount);
        if (this.amount == undefined) {
            this.result = 'Please Enter Amount';
        }
        else {
            this.result = 2000 + '$';
        }
    };
    // logOut Function 
    CurrencyConvertorPage.prototype.logOut = function () {
        this.navCtrl.setRoot('WelcomePage');
    };
    return CurrencyConvertorPage;
}());
CurrencyConvertorPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-currency-convertor',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/currency-convertor/currency-convertor.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start >\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="ios-menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Currency Convertor</ion-title>\n    <ion-buttons end >\n      <button ion-button icon-only (click)="logOut()">\n        <ion-icon name="ios-log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <div class="appForm">\n    <ion-list>\n      <ion-list-header>\n          Convertor\n      </ion-list-header>\n        <!-- input to write amount that you want to convert -->\n      <ion-item>\n        <ion-label stacked>Amount</ion-label>\n        <ion-input type="num" [(ngModel)]="amount" placeholder="Type here"></ion-input>\n      </ion-item> \n      <!-- Account-From Select -->\n      <ion-item class="selectHasImg">\n        <ion-label stacked>From</ion-label>\n          <ion-select (ionChange)="change()" [ngStyle]="{\'background-image\':\'url(\' + fromImg + \')\'}"  \n                      [(ngModel)]="fromCountry">\n            <ion-option value="usa" >USA</ion-option> \n            <ion-option value="cad" >CAD</ion-option> \n          </ion-select>\n      </ion-item>\n      <!-- Account-To Select -->\n      <ion-item class="selectHasImg">\n        <ion-label stacked>To</ion-label>\n          <ion-select (ionChange)="change()" [ngStyle]="{\'background-image\':\'url(\' + toImg + \')\'}"  \n                      [(ngModel)]="toCountry">\n            <ion-option value="usa" >USA</ion-option> \n            <ion-option value="cad" >CAD</ion-option> \n          </ion-select>\n      </ion-item>\n    </ion-list> \n  </div>\n  <!-- button to show convert result -->\n  <button ion-button block clear (click)="showResult()">Result Here</button>\n  <p class="result" *ngIf="show == true">{{result}}</p>\n</ion-content>\n\n'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/currency-convertor/currency-convertor.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], CurrencyConvertorPage);

//# sourceMappingURL=currency-convertor.js.map

/***/ })

});
//# sourceMappingURL=22.js.map