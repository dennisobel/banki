webpackJsonp([16],{

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoansPageModule", function() { return LoansPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loans__ = __webpack_require__(365);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoansPageModule = (function () {
    function LoansPageModule() {
    }
    return LoansPageModule;
}());
LoansPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__loans__["a" /* LoansPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__loans__["a" /* LoansPage */]),
        ],
    })
], LoansPageModule);

//# sourceMappingURL=loans.module.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoansPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_socket_socket__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng_socket_io__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoansPage = (function () {
    function LoansPage(navCtrl, alertCtrl, socketHelper, socket, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.socketHelper = socketHelper;
        this.socket = socket;
        this.navParams = navParams;
        this.socket.on('applyFosaAdvanceResult', function (data) {
            console.log("FOSA ADV RES DATA", data);
            var alert = _this.alertCtrl.create({
                title: "FOSA ADVANCE REQUEST STATUS",
                message: data.data,
                buttons: [
                    {
                        text: "OK",
                        role: "cancel"
                    }
                ]
            });
            alert.present();
        });
        this.socket.on('applyMLoanResult', function (data) {
            console.log("M-LOAN RES DATA", data);
            var alert = _this.alertCtrl.create({
                title: "M-LOAN REQUEST STATUS",
                message: data.data,
                buttons: [
                    {
                        text: "OK",
                        role: "cancel"
                    }
                ]
            });
            alert.present();
        });
    }
    LoansPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoansPage');
    };
    LoansPage.prototype.handleFosa = function () {
        this.loanType = "FOSA";
        console.log("fosa");
    };
    LoansPage.prototype.onSelectF = function () {
        this.loanType = "FOSA";
        console.log("fosa");
    };
    LoansPage.prototype.onSelectM = function () {
        this.loanType = "MLOAN";
        console.log("mloan");
    };
    LoansPage.prototype.handleMLoan = function () {
        this.loanType = "MLOAN";
        console.log("mloan");
    };
    LoansPage.prototype.handleContinue = function () {
        console.log(this.loanType);
        if (this.loanType == "f") {
            this.socketHelper.applyFosaAdvance({ data: this.navParams.get('data'), amount: this.amount });
        }
        else if (this.loanType == "m") {
            this.socketHelper.applyMLoan({ data: this.navParams.get('data'), amount: this.amount });
        }
    };
    LoansPage.prototype.logOut = function () {
        this.navCtrl.setRoot('WelcomePage');
    };
    return LoansPage;
}());
LoansPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-loans',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/loans/loans.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start >\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="ios-menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Loans</ion-title>\n    <ion-buttons end >\n      <button ion-button icon-only (click)="logOut()">\n        <ion-icon name="ios-log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-list>\n      <ion-list-header>Select Loan</ion-list-header>\n\n      <ion-item>\n        <ion-label>Loan</ion-label>\n        <ion-select [(ngModel)]="loanType" placeholder="Select One">\n          <ion-option (ionSelect)="onSelectF()"  value="f" (click)="handleFosa()">FOSA</ion-option>\n          <ion-option (ionSelect)="onSelectM()"  value="m" (click)="handleMLoan()">M-LOAN</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n\n  <ion-list class="list" radio-group [(ngModel)]="sendTo">\n  <!--\n    <ion-row>\n      <ion-col col-6>\n        <ion-item>\n          <ion-label>FOSA ADV</ion-label>\n          <ion-radio color="dark" value="self" (click)="handleFosa()"></ion-radio>\n        </ion-item>      \n      </ion-col>\n      <ion-col col-6>\n        <ion-item>\n          <ion-label>M-LOAN</ion-label>\n          <ion-radio color="dark" value="other" (click)="handleMLoan()"></ion-radio>\n        </ion-item>      \n      </ion-col>\n    </ion-row>   \n    -->\n\n  <ion-item>\n    <ion-input placeholder="Amount" style="border: 1px solid black; text-align:right; border-radius: 4px;" [(ngModel)]="amount" type="text" id="amount"></ion-input>\n  </ion-item>      \n  </ion-list>\n\n\n  <hr/>\n\n  <button color="color2" ion-button block (click)="handleContinue()">CONTINUE</button>\n</ion-content>\n\n'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/loans/loans.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_socket_socket__["a" /* SocketProvider */],
        __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__["Socket"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], LoansPage);

//# sourceMappingURL=loans.js.map

/***/ })

});
//# sourceMappingURL=16.js.map