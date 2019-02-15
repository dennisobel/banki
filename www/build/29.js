webpackJsonp([29],{

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAccountPageModule", function() { return AddAccountPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_account__ = __webpack_require__(352);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddAccountPageModule = (function () {
    function AddAccountPageModule() {
    }
    return AddAccountPageModule;
}());
AddAccountPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__add_account__["a" /* AddAccountPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_account__["a" /* AddAccountPage */]),
        ],
    })
], AddAccountPageModule);

//# sourceMappingURL=add-account.module.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddAccountPage; });
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


var AddAccountPage = (function () {
    function AddAccountPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.show = false;
    }
    // go to another page function
    AddAccountPage.prototype.setRootFun = function (page) {
        this.navCtrl.setRoot(page);
    };
    // appear add Button function
    AddAccountPage.prototype.apperAddBtn = function () {
        this.show = true;
    };
    // Clear input for add new account
    AddAccountPage.prototype.newAdd = function () {
        this.nickName = '';
        this.accountNumber = '';
    };
    return AddAccountPage;
}());
AddAccountPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-add-account',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/add-account/add-account.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start >\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="ios-menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Add Account</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="appForm">\n    <ion-list>\n      <ion-list-header>\n          Add Account\n      </ion-list-header>\n\n      <!-- Add new Button -->\n      <button  block ion-item (click)="newAdd()" *ngIf="show == true">\n        <ion-icon item-right name="ios-add"></ion-icon>\n        Add / Pay New\n      </button> \n      \n      <!--  NickName Input -->\n      <ion-item>\n        <ion-label stacked>NickName</ion-label>\n        <ion-input type="text" [(ngModel)]="nickName" placeholder="Nick Name"></ion-input>\n      </ion-item> \n      <!-- Account Number Input -->\n      <ion-item>\n        <ion-label stacked>Account Number</ion-label>\n        <ion-input type="num" [(ngModel)]="accountNumber" placeholder="Beneficiary / Account Number"></ion-input>\n      </ion-item> \n    </ion-list> \n  </div>\n  <button ion-button block color="color2" (click)="apperAddBtn()">Save</button>\n  <button ion-button block color="color1" (click)="setRootFun(\'TransferPage\')">Save & Transfer</button>\n</ion-content>\n'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/add-account/add-account.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], AddAccountPage);

//# sourceMappingURL=add-account.js.map

/***/ })

});
//# sourceMappingURL=29.js.map