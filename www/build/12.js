webpackJsonp([12],{

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalAccountPageModule", function() { return PersonalAccountPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__personal_account__ = __webpack_require__(357);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PersonalAccountPageModule = (function () {
    function PersonalAccountPageModule() {
    }
    return PersonalAccountPageModule;
}());
PersonalAccountPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__personal_account__["a" /* PersonalAccountPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__personal_account__["a" /* PersonalAccountPage */]),
        ],
    })
], PersonalAccountPageModule);

//# sourceMappingURL=personal-account.module.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalAccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_socket_io__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_socket_socket__ = __webpack_require__(221);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PersonalAccountPage = (function () {
    function PersonalAccountPage(navCtrl, navParams, socketHelper, socket) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.socketHelper = socketHelper;
        this.socket = socket;
        this.fosaArray = [];
        this.mainSavArray = [];
        this.accounts = [];
    }
    PersonalAccountPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log("personal accs page loaded");
        this.socketHelper.balanceEnq();
        this.socket.on('balEnqData', function (data) {
            console.log("balEnqData:", data);
            _this.fosaArray = data.data[0];
            _this.fosaBal = _this.fosaArray[Object.keys(_this.fosaArray)[3]];
            _this.fosaAccNum = _this.fosaArray[Object.keys(_this.fosaArray)[2]];
            _this.mainSavArray = data.data[1];
            _this.mainSav = _this.mainSavArray[Object.keys(_this.mainSavArray)[3]];
            _this.mainSavAccNum = _this.mainSavArray[Object.keys(_this.mainSavArray)[2]];
            console.log("FOSA", _this.fosaBal);
            console.log("MAIN", _this.mainSav);
            console.log("FOSA NUM", _this.fosaAccNum);
            console.log("MAIN ACC NUM", _this.mainSavAccNum);
            _this.accounts = [
                {
                    name: 'FOSA',
                    accNumber: _this.fosaAccNum,
                    currency: _this.fosaBal
                },
                {
                    name: 'MAIN',
                    accNumber: _this.mainSavAccNum,
                    currency: _this.mainSav
                }
            ];
        });
    };
    // goTo Function 
    PersonalAccountPage.prototype.goTo = function (page) {
        this.navCtrl.push(page);
    };
    // logOut Function 
    PersonalAccountPage.prototype.logOut = function () {
        this.navCtrl.setRoot('WelcomePage');
    };
    return PersonalAccountPage;
}());
PersonalAccountPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-personal-account',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/personal-account/personal-account.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-buttons start >\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="ios-menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Personal Account</ion-title>\n    <ion-buttons end >\n      <button ion-button icon-only (click)="logOut()">\n        <ion-icon name="ios-log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content >\n  <p class="myTitle">Accounts</p>\n  <!-- account Name,account Number and currency -->\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6 col-md-4 col-lg-3 *ngFor="let item of accounts">\n        <div class="account" (click)="goTo(\'AccountDetailsPage\')">\n          <p>{{item.name}}</p>\n\n          <p class="countNum">\n            Acc Num:{{item.accNumber}}\n          </p>\n\n          <p>Ksh {{item.currency}}</p>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/personal-account/personal-account.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_socket_socket__["a" /* SocketProvider */],
        __WEBPACK_IMPORTED_MODULE_2_ng_socket_io__["Socket"]])
], PersonalAccountPage);

//# sourceMappingURL=personal-account.js.map

/***/ })

});
//# sourceMappingURL=12.js.map