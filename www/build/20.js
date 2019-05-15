webpackJsonp([20],{

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoansPageModule", function() { return LoansPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loans__ = __webpack_require__(401);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__loans__["a" /* LoansPage */]),
        ],
    })
], LoansPageModule);

//# sourceMappingURL=loans.module.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoansPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_socket_socket__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__popover_popover__ = __webpack_require__(228);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// POPOVER EXPERIMENT
// import {  } from 'ionic/angular';
// import { PopoverComponent } from '../../component/popover/popover.component';
var LoansPage = (function () {
    function LoansPage(viewCtrl, popoverCtrl, navCtrl, alertCtrl, socketHelper, socket, navParams) {
        this.viewCtrl = viewCtrl;
        this.popoverCtrl = popoverCtrl;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.socketHelper = socketHelper;
        this.socket = socket;
        this.navParams = navParams;
        this.memberData = this.navParams.get('data');
        this.mno = this.memberData['MB.CUST.NO'];
    }
    LoansPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoansPage');
        // this.presentPopover()
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
        var _this = this;
        var memberData = this.navParams.get('data');
        var mno = memberData['MB.CUST.NO'];
        // Check Loan Bal
        /*
        this.socketHelper.loanBalances(mno).then(() => {
          this.socket.on('loanBalanceResult',(data)=>{
            // console.log("LOAN BALANCE DATA:",data.data)
    
            return new Promise((resolve,reject) => {
              resolve(
                // this.dataSplitByComma = data.data.split(",")
                this.loanBals = data.data.split(",").filter((el:any) => {
                  return !el.includes('VR')
                }).map((el:any)=>{
                    return Object.assign({},el.split(";"))
                })
              )
            }).then(() => {
              this.loanBals.shift()
            }).then(() => {
              console.log(this.loanBals)
              this.loanBals.forEach((el:any) => {
                if(el[0].length <= 1) {
                  this.loanBals = this.loanBals.splice(this.loanBals.indexOf(el),1)
                }else {
                  
                }
              })
            })
          })
        })
        */
        if (this.loanType == "f") {
            this.socketHelper.applyFosaAdvance({ mno: this.mno, amount: this.amount }).then(function () {
                _this.socket.on('applyFosaAdvanceResult', function (data) {
                    return new Promise(function (resolve, reject) {
                        resolve(_this.fosa = data.split(','));
                    })
                        .then(function () {
                        console.log("FOSA ADV RES DATA", _this.fosa);
                    });
                });
            });
        }
        else if (this.loanType == "m") {
            this.socketHelper.applyMLoan({ mno: this.mno, amount: this.amount }).then(function () {
                _this.socket.on('applyMLoanResult', function (data) {
                    return new Promise(function (resolve, reject) {
                        resolve(_this.mloan = data.split(';'));
                    })
                        .then(function () {
                        console.log(_this.mloan);
                        if (_this.mloan.includes('Dear  you have an existing Mloan, Please pay first before requesting for Another Mloan.') === true) {
                            var mloanAlert = _this.alertCtrl.create({
                                title: "You have an existing Mloan, Please repay first before requesting another",
                                buttons: [
                                    {
                                        text: 'Repay',
                                        handler: function () {
                                        }
                                    }
                                ]
                            });
                            mloanAlert.present();
                        }
                    });
                });
            });
        }
    };
    LoansPage.prototype.presentPopover = function () {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_4__popover_popover__["a" /* PopoverPage */], {}, { cssClass: 'contact-popover' });
        popover.present({});
    };
    LoansPage.prototype.logOut = function () {
        this.navCtrl.setRoot('WelcomePage');
    };
    LoansPage.prototype.onClose = function () {
        this.viewCtrl.dismiss();
    };
    return LoansPage;
}());
LoansPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-loans',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/loans/loans.html"*/'\n<ion-header>\n  <!--\n  <ion-navbar hideBackButton>\n    <img  class="imagestyle" object-fit: cover height="70px"  width="470px" src="assets/images/header.jpg"/>     \n  </ion-navbar>\n  -->\n  <ion-navbar>\n    <!--\n    <ion-buttons start >\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="ios-menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end >\n      <button ion-button icon-only (click)="logOut()">\n        <ion-icon name="ios-log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n    -->\n    <img height="70px" width="470px" src="assets/images/requestloanheader.jpg"/>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-list>\n      <ion-list-header>Loan Type</ion-list-header>\n      <ion-item>\n        <!--<ion-label>Loan</ion-label>-->\n        <ion-select [(ngModel)]="loanType" placeholder="Select One">\n          <ion-option (ionSelect)="onSelectF()"  value="f" (click)="handleFosa()">FOSA</ion-option>\n          <ion-option (ionSelect)="onSelectM()"  value="m" (click)="handleMLoan()">M-LOAN</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n\n  <ion-list class="list" radio-group [(ngModel)]="sendTo">\n  <!--\n    <ion-row>\n      <ion-col col-6>\n        <ion-item>\n          <ion-label>FOSA ADV</ion-label>\n          <ion-radio color="dark" value="self" (click)="handleFosa()"></ion-radio>\n        </ion-item>      \n      </ion-col>\n      <ion-col col-6>\n        <ion-item>\n          <ion-label>M-LOAN</ion-label>\n          <ion-radio color="dark" value="other" (click)="handleMLoan()"></ion-radio>\n        </ion-item>      \n      </ion-col>\n    </ion-row>   \n    -->\n\n  <ion-item>\n    <ion-input placeholder="Amount" style="border: 1px solid black; text-align:right; border-radius: 2px;" [(ngModel)]="amount" type="text" id="amount"></ion-input>\n  </ion-item>      \n  </ion-list>\n\n\n  <hr/>\n<!--\n  <button ion-button icon-only (click)="presentPopover($event)">\n    <ion-icon name="more"></ion-icon>\n  </button>\n-->\n\n  <button color="color2" ion-button block (click)="handleContinue()">CONTINUE</button>\n\n  <ion-fab left bottom>\n    <button ion-fab mini color="gold" (click)="onClose()"><ion-icon name="md-close"></ion-icon></button>\n  </ion-fab> \n</ion-content>\n\n'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/loans/loans.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_socket_socket__["a" /* SocketProvider */],
        __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__["Socket"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], LoansPage);

//# sourceMappingURL=loans.js.map

/***/ })

});
//# sourceMappingURL=20.js.map