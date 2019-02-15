webpackJsonp([5],{

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsDetailsPageModule", function() { return TransactionsDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transactions_details__ = __webpack_require__(377);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TransactionsDetailsPageModule = (function () {
    function TransactionsDetailsPageModule() {
    }
    return TransactionsDetailsPageModule;
}());
TransactionsDetailsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__transactions_details__["a" /* TransactionsDetailsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__transactions_details__["a" /* TransactionsDetailsPage */]),
        ],
    })
], TransactionsDetailsPageModule);

//# sourceMappingURL=transactions-details.module.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionsDetailsPage; });
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


var TransactionsDetailsPage = (function () {
    function TransactionsDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = [
            { col1: 'Amount', col2: 100000 },
            { col1: 'Transaction Date', col2: '15-8-2017' },
            { col1: 'Posting Date', col2: '12-8-2017' },
            { col1: 'Description', col2: 'ATM Withdrawal Street name ATM Withdrawal Street name' },
            { col1: 'Debit/Credit', col2: 'Debit' },
            { col1: 'Reference', col2: '02154860.15463' },
        ];
    }
    return TransactionsDetailsPage;
}());
TransactionsDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-transactions-details',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/transactions-details/transactions-details.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-buttons start >\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="ios-menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Transactions Details</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <!-- account name , number and currancy -->\n  <div class="acountTitle"> \n    <span>Account</span>\n\n    <p class="countNum">\n      123\n      <span>xxxxx</span>\n      12345\n    </p>\n\n    <span>33324 $</span>\n  </div>\n  <!-- Transaction Details -->\n  <div class="details">\n    <p class="myLabel">Transaction Details</p>\n    <ion-grid>\n      <ion-row *ngFor="let item of items">\n        <ion-col col-6 text-left>\n          <p>{{item.col1}}</p>\n        </ion-col>\n        <ion-col col-6 text-right>\n          <p> \n            <span *ngIf="item.col1==\'Amount\'">$</span>\n            {{item.col2}}</p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/transactions-details/transactions-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], TransactionsDetailsPage);

//# sourceMappingURL=transactions-details.js.map

/***/ })

});
//# sourceMappingURL=5.js.map