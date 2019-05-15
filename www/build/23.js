webpackJsonp([23],{

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanBalancesPageModule", function() { return LoanBalancesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loan_balances__ = __webpack_require__(398);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoanBalancesPageModule = (function () {
    function LoanBalancesPageModule() {
    }
    return LoanBalancesPageModule;
}());
LoanBalancesPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__loan_balances__["a" /* LoanBalancesPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__loan_balances__["a" /* LoanBalancesPage */]),
        ],
    })
], LoanBalancesPageModule);

//# sourceMappingURL=loan-balances.module.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoanBalancesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_socket_socket__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__ = __webpack_require__(37);
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




var LoanBalancesPage = (function () {
    function LoanBalancesPage(viewCtrl, toastCtrl, navCtrl, alertCtrl, navParams, socketHelper, socket) {
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.socketHelper = socketHelper;
        this.socket = socket;
    }
    LoanBalancesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.presentToast('Clock on loan item to repay loan', true, 'middle');
        var memberData = this.navParams.get('data');
        var mno = memberData['MB.CUST.NO'];
        // GET LOAN BALANCES
        this.socketHelper.loanBalances(mno).then(function () {
            _this.socket.on('loanBalanceResult', function (data) {
                // console.log("LOAN BALANCE DATA:",data.data)
                return new Promise(function (resolve, reject) {
                    resolve(
                    // this.dataSplitByComma = data.data.split(",")
                    _this.loanBals = data.data.split(",").filter(function (el) {
                        return !el.includes('VR');
                    }).map(function (el) {
                        return Object.assign({}, el.split(";"));
                    }));
                }).then(function () {
                    _this.loanBals.shift();
                }).then(function () {
                    _this.loanBals.forEach(function (el) {
                        if (el[0].length <= 1) {
                            _this.loanBals.splice(_this.loanBals.indexOf(el), 1);
                        }
                        else {
                        }
                    });
                    console.log("LOAN BALS: ", _this.loanBals);
                });
            });
        });
    };
    LoanBalancesPage.prototype.presentToast = function (message, close, position) {
        var toast = this.toastCtrl.create({
            message: message,
            // duration: 3000,
            showCloseButton: close,
            position: position
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    LoanBalancesPage.prototype.handleRepay = function (data) {
        var _this = this;
        // console.log("LOAN REPAY DATA: ",data)
        var repayAlert = this.alertCtrl.create({
            title: data[0] + " Repayment",
            message: "Repay " + data[0] + " loan worth " + data[2],
            buttons: [
                {
                    text: 'Repay',
                    handler: function (data) {
                        console.log("Handle STK Push");
                        _this.presentToast("Processing repayment", true, 'middle');
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        repayAlert.present();
    };
    LoanBalancesPage.prototype.handleBalances = function () {
        console.log("LOAN BAL NAVPARAMS DATA:", this.navParams.get('data'));
        this.socketHelper.loanBalances(this.navParams.get('data'));
    };
    LoanBalancesPage.prototype.logOut = function () {
        this.navCtrl.setRoot('WelcomePage');
    };
    LoanBalancesPage.prototype.onClose = function () {
        this.viewCtrl.dismiss();
    };
    return LoanBalancesPage;
}());
LoanBalancesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-loan-balances',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/loan-balances/loan-balances.html"*/'\n<ion-header>\n  <!--\n  <ion-navbar hideBackButton>\n    <img  class="imagestyle" object-fit: cover height="70px"  width="470px" src="assets/images/header.jpg"/>     \n  </ion-navbar>\n  -->\n  <ion-navbar hideBackButton>\n    <!--\n    <ion-buttons start >\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="ios-menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end >\n      <button ion-button icon-only (click)="logOut()">\n        <ion-icon name="ios-log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n    -->\n    <img height="150px" width="470px" src="assets/images/loansandbalancesheader.jpg"/>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <p class="myTitle">Loan Balances</p>\n  \n  <ion-grid>\n    <ion-row>\n      <ion-col col-6 col-md-4 col-lg-3 *ngFor="let item of loanBals">\n        <div class="account" (click)="handleRepay(item)">\n          <p style="color:#247e01;">{{item[0]}}</p>\n\n          <p class="countNum">\n            Ksh:{{item[2]}}\n          </p>\n          <!--<button ion-button block small color="faceColor" (click)="handleRepay(item)">Repay</button>-->\n        </div>\n        \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-fab left bottom>\n    <button ion-fab mini color="gold" (click)="onClose()"><ion-icon name="md-close"></ion-icon></button>\n  </ion-fab>   \n</ion-content>\n'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/loan-balances/loan-balances.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_socket_socket__["a" /* SocketProvider */],
        __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__["Socket"]])
], LoanBalancesPage);

/*
this.socket.on('loanBalanceResult',(data)=>{
  console.log("LOAN BALANCE DATA:",data)

  let alert = this.alertCtrl.create({
    title:"LOAN BALANCE ENQUIRY",
    message:data.data,
    buttons:[
      {
        text:"OK",
        role:"cancel"
      }
    ]
  })

  alert.present()
})

*/ 
//# sourceMappingURL=loan-balances.js.map

/***/ })

});
//# sourceMappingURL=23.js.map