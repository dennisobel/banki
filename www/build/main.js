webpackJsonp([47],{

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummaryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_socket_socket__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_http_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lock_lock__ = __webpack_require__(183);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { T24Provider } from "../../providers/t24/t24";





// @IonicPage()
var SummaryPage = (function () {
    function SummaryPage(popoverCtrl, navCtrl, socketHelper, http, socket, storage, alertCtrl, 
        // private t24: T24Provider,
        navParams) {
        this.popoverCtrl = popoverCtrl;
        this.navCtrl = navCtrl;
        this.socketHelper = socketHelper;
        this.http = http;
        this.socket = socket;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.fosaArray = [];
        this.mainSavArray = [];
        this.fosarange = 30;
        this.mainsavrange = 70;
    }
    SummaryPage.prototype.ionViewWillLoad = function () {
        // this.navCtrl.setRoot(SummaryPage)
    };
    SummaryPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log("reached summary");
        this.socket.on('connect', function () {
            var sessionid = _this.socket.ioSocket.id;
        });
        this.storage.get('memberData').then(function (data) {
            console.log("MEMBER DATA:", data);
            _this.name = data['MB.CUST.NAME..................'].toUpperCase();
            _this.memberNo = data['MB.CUST.NO'];
            _this.memberPhone = data['MB.CELL.NO..'];
            console.log(_this.memberNo);
            // GET SAVINGS BALANCE
            _this.socketHelper.balanceEnq(_this.memberNo).then(function () {
                _this.socket.on('balEnqData', function (data) {
                    if (data.data.length > 0) {
                        return new Promise(function (resolve, reject) {
                            resolve(_this.balanceArray = data.data.filter(function (el) {
                                return !el.includes('VR');
                            }).map(function (el) {
                                return Object.assign({}, el.split(";"));
                            }));
                        })
                            .then(function () {
                            _this.balanceArray.shift();
                        })
                            .then(function (data) {
                            console.log("DATA:", _this.balanceArray);
                            _this.filtered = _this.balanceArray.filter(function (el) {
                                return el[3] > 0;
                            });
                            console.log("FILTERED ARRAY:", _this.filtered);
                            _this.storage.set('SavingsBalance', { data: _this.filtered });
                            _this.balanceArray.forEach(function (el) {
                                if (el[0].length <= 1) {
                                    _this.balanceArray.splice(_this.balanceArray.indexOf(el), 1);
                                }
                                else {
                                }
                            });
                        });
                    }
                    // PROCESS STRING this.balEnqData 
                    console.log('BAL ARRAY: ', _this.balanceArray);
                });
            });
            // GET LOAN BALANCES
            _this.socketHelper.loanBalances(_this.memberNo).then(function () {
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
                        _this.storage.set('LoanBalance', { data: _this.loanBals });
                        console.log("LOAN BALS: ", _this.loanBals);
                    });
                });
            });
            // GET LOAN ELIGIBILITY
            _this.socketHelper.loanEligibility(_this.memberNo).then(function () {
                _this.socket.on('loanEligibilityResult', function (data) {
                    console.log("LOAN ELIG:", data);
                    return new Promise(function (resolve, reject) {
                        resolve(
                        // this.dataSplitByComma = data.data.split(",")
                        // .split(':')[5].split('.')
                        _this.loanEligibility = data.split('"') /*[5]*/.filter(function (el) {
                            return !el.includes('VR') && el.includes('Loan');
                        })[0].split(':'));
                    }).then(function (data) {
                        var regex = /\,(?=\D)/;
                        // this.loanEligibility = this.loanEligibility[1].split(regex);
                        _this.loanEligibility = _this.loanEligibility[1].split(regex).map(function (el) {
                            return Object.assign({}, el.split("="));
                        });
                        _this.storage.set('LoanEligibility', { data: _this.loanBals });
                        console.log("LOAN ELIG: ", _this.loanEligibility);
                    });
                });
            });
        });
    };
    // goTo Function 
    SummaryPage.prototype.goTo = function (page) {
        this.presentPopover(__WEBPACK_IMPORTED_MODULE_6__lock_lock__["a" /* LockPage */], page);
    };
    // logOut Function 
    SummaryPage.prototype.logOut = function () {
        this.navCtrl.setRoot('WelcomePage');
    };
    SummaryPage.prototype.presentPopover = function (page, pageToLoad) {
        var ev = {
            target: {
                getBoundingClientRect: function () {
                    return {
                        top: '100', left: '100'
                    };
                }
            }
        };
        var popover = this.popoverCtrl.create(page, { ev: ev, data: pageToLoad }, { cssClass: 'alertCustomCss', showBackdrop: true });
        popover.present({});
    };
    return SummaryPage;
}());
SummaryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-summary',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/summary/summary.html"*/'<ion-header>\n  <ion-navbar hideBackButton>\n    <img  class="imagestyle" height="70px"  width="470px" src="assets/images/header.jpg"/>    \n    <ion-buttons start > \n      <button class="btn" ion-button show menuToggle>\n        <ion-icon name=menu></ion-icon>\n      </button>    \n    </ion-buttons>\n  </ion-navbar>  \n  <ion-navbar>\n    <ion-grid class="blanceGrid">\n    <ion-row>\n      <ion-col col-auto>\n        \n        <div class="avatarContent">\n          <img src="assets/img/obel.CR2"/>\n        </div>\n\n      </ion-col>\n      <ion-col col>\n        <div class="loginInfo">\n          <P><strong>{{name}}</strong></P>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n\n\n  <!-- most use -->\n  <div class="mostUse">\n    <!--<p class="myTitle">Our Services</p>-->\n\n    <ion-grid>\n    <ion-row>\n      <ion-col col-4>\n          <button block ion-button (click)="goTo(\'PersonalAccountPage\')">\n            <ion-img height="75" width="75" src="assets/icons/Savingsandbalances.png"></ion-img>\n            <p align="center">Savings Balances</p>\n          </button>        \n      </ion-col>\n\n        <ion-col col-4>\n          <button block ion-button (click)="goTo(\'LoanBalancesPage\')">\n            <ion-img height="75" width="75" src="assets/icons/Loansandbalances.png"></ion-img>\n            <p align="center">Loan Balances</p>\n          </button>        \n        </ion-col>   \n\n        <ion-col col-4>\n          <button block ion-button (click)="goTo(\'LoanEligibilityPage\')">\n            <ion-img height="75" width="75" src="assets/icons/Loanseligibility.png"></ion-img>\n            <p align="center">Request Loan</p>\n          </button>        \n        </ion-col>             \n    </ion-row>\n    <br>\n\n    <ion-row>\n        <ion-col col-4>\n          <button block ion-button (click)="goTo(\'StatementsPage\')">\n            <ion-img class="center" height="75" width="75" src="assets/icons/statements.png"></ion-img>\n            <p align="center">Statements</p>\n          </button>        \n        </ion-col> \n\n        <ion-col col-4>\n          <button block ion-button (click)="goTo(\'DividendsPage\')">\n            <ion-img height="75" width="75" src="assets/icons/dividends.jpg"></ion-img>\n            <p>Dividends</p>\n          </button>\n        </ion-col>   \n        \n\n        <ion-col col-4>\n          <button block ion-button (click)="goTo(\'DepositPage\')">\n            <ion-img height="75" width="75" src="assets/icons/deposittompesa.png"></ion-img>\n            <p align="center">Deposit From MPesa</p>\n          </button>\n        </ion-col>        \n\n             \n    </ion-row>\n\n    <br>\n    \n    <ion-row>\n\n        <ion-col col-4>\n          <button block ion-button (click)="goTo(\'PaybillPage\')">\n            <ion-img height="75" width="75" src="assets/icons/lipanampesa.png"></ion-img>\n            <p>Paybill</p>\n          </button>\n        </ion-col>  \n\n        <ion-col col-4>\n          <button block ion-button (click)="goTo(\'BuyGoodsPage\')">\n            <ion-img height="75" width="75" class="image" src="assets/icons/buygoods.png"></ion-img>\n            <p>Buy Goods</p>\n          </button>\n        </ion-col> \n\n        <ion-col col-4>\n          <button block ion-button (click)="goTo(\'BillmanagementPage\')">\n            <ion-img height="75" width="75" src="assets/icons/buyairtimeandtokens.png"></ion-img>\n            <p>Buy Tokens and Airtime</p>\n          </button>\n        </ion-col>                \n    </ion-row>\n\n    <br>\n\n    <ion-row>\n\n        <ion-col col-4>\n          <button block ion-button (click)="goTo(\'TransferPage\')">\n            <ion-img height="75" width="75" src="assets/icons/internaltransfer.png"></ion-img>\n            <p>Internal Funds Transfer</p>\n          </button>\n        </ion-col>  \n\n        <ion-col col-4>\n          <button block ion-button (click)="goTo(\'BanktransferPage\')">\n            <ion-img height="75" width="75" src="assets/icons/transfertobank.png"></ion-img>\n            <p>Bank Transfer</p>\n          </button>\n        </ion-col>  \n\n        \n        <ion-col col-4>\n          <button block ion-button (click)="goTo(\'SendmpesaPage\')">\n            <ion-img height="75" width="75" src="assets/icons/sendtompesa.png"></ion-img>\n            <p>Send To Mpesa</p>\n          </button>        \n        </ion-col>           \n\n                                  \n    </ion-row>\n\n    <br>\n\n    <ion-row>\n    <!--\n        <ion-col col-4>\n          <button block ion-button (click)="goTo(\'LoansPage\')">\n            <ion-img height="75" width="75" src="assets/icons/requestloan.png"></ion-img>\n            <p align="center">Request Loan</p>\n          </button>        \n        </ion-col> \n\n        <ion-col col-4>\n          <button block ion-button (click)="goTo(\'RepayLoansPage\')">\n            <ion-img height="75" width="75" src="assets/icons/Repayloan.png"></ion-img>\n            <p>Repay Loans</p>\n          </button>        \n        </ion-col>     \n    -->\n    </ion-row>\n\n    <!--\n      <ion-row>\n\n        <ion-col col-4>\n          <button block ion-button (click)="goTo(\'CurrencyConvertorPage\')">\n            <ion-img src="assets/icons/convert.png"></ion-img>\n            <p>Currency Converter</p>\n          </button>\n        </ion-col>\n        <ion-col col-4>\n          <button block ion-button (click)="goTo(\'BeneficiariesPage\')" >\n            <ion-img src="assets/icons/group.png"></ion-img>\n            <p>Benficiaries</p>\n          </button>\n        </ion-col>\n\n        <ion-col col-4>\n          <button block ion-button (click)="goTo(\'SettingPage\')">\n            <ion-img src="assets/icons/settings.png"></ion-img>\n            <p>Setting</p>\n          </button>\n        </ion-col>          \n\n      </ion-row>    \n\n      --> \n\n       \n    </ion-grid>\n\n  </div>  \n  \n</ion-content>\n'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/summary/summary.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_socket_socket__["a" /* SocketProvider */],
        __WEBPACK_IMPORTED_MODULE_5__providers_http_http__["a" /* HttpProvider */],
        __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__["Socket"],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], SummaryPage);

/*
You hang around the barber shop long enough, soon enough you will get a hair cut.
To get something you never had, you have to do something you never did.
*/ 
//# sourceMappingURL=summary.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MnopaspopPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MnopaspopPage = (function () {
    function MnopaspopPage(viewCtrl, http, navCtrl, navParams, popoverCtrl) {
        this.viewCtrl = viewCtrl;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
    }
    MnopaspopPage.prototype.handlePIN = function (page) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            resolve(_this.presentPopover(page, _this.mno));
        }).then(function () {
            _this.viewCtrl.dismiss();
        });
    };
    MnopaspopPage.prototype.presentPopover = function (page, data) {
        var ev = {
            target: {
                getBoundingClientRect: function () {
                    return {
                        top: '100', left: '100'
                    };
                }
            }
        };
        var popover = this.popoverCtrl.create(page, { ev: ev, data: data }, { cssClass: 'alertCustomCss', showBackdrop: true });
        popover.present({});
    };
    return MnopaspopPage;
}());
MnopaspopPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-mnopaspop',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/mnopaspop/mnopaspop.html"*/'<ion-header>\n  <ion-navbar hideBackButton>\n    <img  class="imagestyle" object-fit: cover height="70px"  width="470px" src="assets/images/entermnoheader.jpg"/>     \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="no-scroll">\n\n  <ion-item>    \n    <ion-input placeholder="Member Number" style="text-align:right; border-radius: 4px;" [(ngModel)]="mno" type="text"></ion-input>\n  </ion-item>\n\n  <button ion-button block color="gold" (click)="handlePIN(\'EnterpinPage\')">Next</button>\n  \n</ion-content>\n'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/mnopaspop/mnopaspop.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* PopoverController */]])
], MnopaspopPage);

//# sourceMappingURL=mnopaspop.js.map

/***/ }),

/***/ 126:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 126;

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/account-details/account-details.module": [
		338,
		46
	],
	"../pages/add-account/add-account.module": [
		348,
		37
	],
	"../pages/address-details/address-details.module": [
		349,
		36
	],
	"../pages/banktransfer/banktransfer.module": [
		350,
		35
	],
	"../pages/beneficiaries/beneficiaries.module": [
		351,
		34
	],
	"../pages/billmanagement/billmanagement.module": [
		352,
		33
	],
	"../pages/buy-goods/buy-goods.module": [
		353,
		32
	],
	"../pages/contact-us/contact-us.module": [
		354,
		31
	],
	"../pages/currency-convertor/currency-convertor.module": [
		355,
		30
	],
	"../pages/deposit/deposit.module": [
		356,
		29
	],
	"../pages/dividends/dividends.module": [
		344,
		28
	],
	"../pages/enterpin/enterpin.module": [
		337,
		27
	],
	"../pages/find-us/find-us.module": [
		357,
		26
	],
	"../pages/forgot-password/forgot-password.module": [
		358,
		25
	],
	"../pages/fosa/fosa.module": [
		359,
		24
	],
	"../pages/guaranteeview/guaranteeview.module": [
		347,
		45
	],
	"../pages/guarantorview/guarantorview.module": [
		346,
		44
	],
	"../pages/loan-balances/loan-balances.module": [
		360,
		23
	],
	"../pages/loan-eligibility/loan-eligibility.module": [
		361,
		22
	],
	"../pages/loanform/loanform.module": [
		345,
		43
	],
	"../pages/loanrequest/loanrequest.module": [
		362,
		21
	],
	"../pages/loans/loans.module": [
		363,
		20
	],
	"../pages/mnopaspop/mnopaspop.module": [
		333,
		42
	],
	"../pages/mnopop/mnopop.module": [
		334,
		19
	],
	"../pages/nonmember/nonmember.module": [
		343,
		18
	],
	"../pages/nonmemberotp/nonmemberotp.module": [
		342,
		41
	],
	"../pages/onboard/onboard.module": [
		339,
		17
	],
	"../pages/otppop/otppop.module": [
		336,
		16
	],
	"../pages/paybill/paybill.module": [
		364,
		15
	],
	"../pages/personal-account/personal-account.module": [
		365,
		14
	],
	"../pages/phonepopup/phonepopup.module": [
		335,
		40
	],
	"../pages/pinpop/pinpop.module": [
		366,
		13
	],
	"../pages/popover/popover.module": [
		331,
		39
	],
	"../pages/precustomer/precustomer.module": [
		341,
		0
	],
	"../pages/profile/profile.module": [
		367,
		12
	],
	"../pages/repay-loans/repay-loans.module": [
		368,
		11
	],
	"../pages/sendmpesa/sendmpesa.module": [
		369,
		10
	],
	"../pages/setting/setting.module": [
		370,
		9
	],
	"../pages/sign-in/sign-in.module": [
		371,
		8
	],
	"../pages/sign-up/sign-up.module": [
		340,
		7
	],
	"../pages/signuppop/signuppop.module": [
		332,
		38
	],
	"../pages/statements/statements.module": [
		372,
		6
	],
	"../pages/transactions-details/transactions-details.module": [
		374,
		5
	],
	"../pages/transactions/transactions.module": [
		373,
		4
	],
	"../pages/transfer/transfer.module": [
		375,
		3
	],
	"../pages/update-profile/update-profile.module": [
		376,
		2
	],
	"../pages/welcome/welcome.module": [
		377,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 168;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LockPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_socket_io__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_socket_socket__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__summary_summary__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// @IonicPage()
var LockPage = (function () {
    function LockPage(appCtrl, viewCtrl, socketHelper, http, socket, storage, navCtrl, navParams) {
        this.appCtrl = appCtrl;
        this.viewCtrl = viewCtrl;
        this.socketHelper = socketHelper;
        this.http = http;
        this.socket = socket;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pin = "";
    }
    LockPage.prototype.ionViewDidLoad = function () {
        this.page2open = this.navParams.get('page2open');
        console.log(this.page2open);
    };
    LockPage.prototype.handle = function (data) {
        // console.log("LOCK DATA: ",data)
        this.pin = this.pin + data;
        console.log(this.pin);
        // document.getElementById('pin').setAttribute("value",data)
        // let input = document.getElementById('pin').
    };
    LockPage.prototype.handleGo = function () {
        var _this = this;
        console.log("handle enter", this.pin);
        // check pass
        var mno;
        this.storage.get('memberData').then(function (member_data) {
            mno = member_data['MB.CUST.NO'];
            var data = {
                password: _this.pin,
                mno: mno
            };
            console.log(data);
            _this.nav = _this.appCtrl.getRootNavById('n4');
            if (_this.page2open == 'SummaryPage') {
                console.log("case Summary");
                _this.http.submitPassword({ password: _this.pin, mno: mno }).then(function (data) {
                    console.log("signup res", data);
                    if (data.success === true) {
                        // this.navCtrl.setRoot(SummaryPage)
                        // this.navCtrl.push(this.navParams.get('page2open'))
                        _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__summary_summary__["a" /* SummaryPage */], { data: member_data });
                    }
                });
            }
            else {
                console.log("case other");
                _this.http.submitPIN(data).then(function (data) {
                    if (data.success === true) {
                        return new Promise(function (resolve, reject) {
                            resolve(_this.navParams.get('data'));
                        }).then(function (page) {
                            _this.navCtrl.push(page, { data: member_data });
                        }).then(function () {
                            _this.viewCtrl.dismiss();
                        });
                    }
                    else {
                        // logic for password fail
                        console.log("password fail bro");
                    }
                });
            }
        });
    };
    LockPage.prototype.handleBack = function () {
        console.log("handle delete");
        this.pin = this.pin.slice(0, -1);
    };
    return LockPage;
}());
LockPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-lock',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/lock/lock.html"*/'<!--\n<ion-header>\n  <ion-navbar hideBackButton>\n    <img  class="imagestyle" object-fit: cover height="70px"  width="470px" src="assets/images/enterpno.jpg"/>     \n  </ion-navbar>\n</ion-header>\n-->\n\n<ion-content padding class="getstart no-scroll">\n  <div class="">\n    <h2 align="center" style="color:#ff812c">Enter PIN</h2>\n    <ion-item>\n      <ion-label floating></ion-label>\n      <ion-icon name="ios-lock-outline" item-left></ion-icon>\n      <ion-input style="color:#ff812c" [(ngModel)]="pin" type="password" id="pin" value=""></ion-input>\n    </ion-item>\n\n    <hr>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col col-4>\n          <button ion-button block clear color="color1" (click)="handle(1)" >1</button>\n        </ion-col>\n        <ion-col col-4>\n          <button ion-button block clear color="color1" (click)="handle(2)">2</button>\n        </ion-col>\n        <ion-col col-4>\n          <button ion-button block clear color="color1" (click)="handle(3)">3</button>\n        </ion-col>        \n      </ion-row>\n\n      <br>\n\n      <ion-row>\n        <ion-col col-4>\n          <button ion-button block clear color="color1" (click)="handle(4)">4</button>\n        </ion-col>\n        <ion-col col-4>\n          <button ion-button block clear color="color1" (click)="handle(5)">5</button>\n        </ion-col>\n        <ion-col col-4>\n          <button ion-button block clear color="color1" (click)="handle(6)">6</button>\n        </ion-col>        \n      </ion-row>     \n\n      <br>\n\n      <ion-row>\n        <ion-col col-4>\n          <button ion-button block clear color="color1" (click)="handle(7)">7</button>\n        </ion-col>\n        <ion-col col-4>\n          <button ion-button block clear color="color1" (click)="handle(8)">8</button>\n        </ion-col>\n        <ion-col col-4>\n          <button ion-button block clear color="color1" (click)="handle(9)">9</button>\n        </ion-col>        \n      </ion-row>  \n\n      <br>\n\n      <ion-row>\n        <ion-col col-4>\n          <button ion-button block clear color="resendBtn" (click)="handleBack()"><ion-icon name="arrow-back"></ion-icon></button>\n        </ion-col>           \n\n        <ion-col col-4>\n          <button ion-button block clear color="color1" (click)="handle(0)">0</button>\n        </ion-col>\n\n        <ion-col col-4>\n          <button ion-button block clear color="color1" (click)="handleGo()"><ion-icon name="md-checkmark-circle"></ion-icon></button>\n        </ion-col>        \n   \n      </ion-row>             \n    </ion-grid>\n    \n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/lock/lock.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_socket_socket__["a" /* SocketProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_http_http__["a" /* HttpProvider */],
        __WEBPACK_IMPORTED_MODULE_2_ng_socket_io__["Socket"],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], LockPage);

//# sourceMappingURL=lock.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoancategoryProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoancategoryProvider = (function () {
    function LoancategoryProvider() {
        console.log('Hello LoancategoryProvider Provider');
    }
    LoancategoryProvider.prototype.getCategories = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            resolve(_this.categories = [
                {
                    id: 3007,
                    description: "SaccoDev",
                    shortname: "SaccoDev"
                },
                {
                    id: 3008,
                    description: "SaccoExpress",
                    shortname: "SaccoExpress"
                },
                {
                    id: 3009,
                    description: "SaccoMicro",
                    shortname: "SaccoMicro"
                },
                {
                    id: 3010,
                    description: "SaccoSmart",
                    shortname: "SaccoSmart"
                },
                {
                    id: 3011,
                    description: "SaccoEducation",
                    shortname: "SaccoEducation"
                },
                {
                    id: 3012,
                    description: "SaccoSuper",
                    shortname: "SaccoSuper"
                },
                {
                    id: 3013,
                    description: "SaccoAsset",
                    shortname: "SaccoAsset"
                },
                {
                    id: 3021,
                    description: "KaribuLoan",
                    shortname: "KaribuLoan"
                },
                {
                    id: 3022,
                    description: "BoreshaLoan",
                    shortname: "BoreshaLoan"
                }
            ]);
        });
    };
    return LoancategoryProvider;
}());
LoancategoryProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], LoancategoryProvider);

//# sourceMappingURL=loancategory.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhonepopupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mnopaspop_mnopaspop__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PhonepopupPage = (function () {
    function PhonepopupPage(storage, http, navCtrl, navParams, viewCtrl, popoverCtrl) {
        this.storage = storage;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.popoverCtrl = popoverCtrl;
    }
    PhonepopupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PhonepopupPage');
    };
    PhonepopupPage.prototype.handleOTP = function (page) {
        var _this = this;
        console.log(this.phoneNumber);
        this.http.submitPhoneNumber({ phoneNumber: this.phoneNumber }).then(function (data) {
            _this.storage.set('memberData', data.memberData[0]).then(function () {
                if (data.memberExist == false) {
                    var memberName = data.memberData[0]['MB.CUST.NAME..................'];
                    // handle otp
                    _this.presentPopover(page, { data: memberName });
                }
                else if (data.memberExist == true) {
                    var memberNumber = data.memberData[0]['MB.CUST.NAME..................'];
                    // mnopass popover
                    _this.presentPopover(__WEBPACK_IMPORTED_MODULE_4__mnopaspop_mnopaspop__["a" /* MnopaspopPage */], { data: _this.phoneNumber });
                }
            }).then(function () {
                _this.viewCtrl.dismiss();
            });
        });
    };
    PhonepopupPage.prototype.presentPopover = function (page, data) {
        var ev = {
            target: {
                getBoundingClientRect: function () {
                    return {
                        top: '100', left: '100'
                    };
                }
            }
        };
        var popover = this.popoverCtrl.create(page, { ev: ev, data: data }, { cssClass: 'alertCustomCss', showBackdrop: true });
        popover.present({});
    };
    return PhonepopupPage;
}());
PhonepopupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-phonepopup',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/phonepopup/phonepopup.html"*/'\n<ion-header>\n  <ion-navbar hideBackButton>\n    <img  class="imagestyle" object-fit: cover height="70px"  width="470px" src="assets/images/phoneheader.jpg"/>     \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="no-scroll">\n\n  <ion-item>    \n    <ion-input placeholder="Phone Number" style="text-align:right; border-radius: 4px;" [(ngModel)]="phoneNumber" type="text"></ion-input>\n  </ion-item>\n\n  <button ion-button block color="gold" (click)="handleOTP(\'OtppopPage\')">Next</button>    \n  \n</ion-content>\n'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/phonepopup/phonepopup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* PopoverController */]])
], PhonepopupPage);

//# sourceMappingURL=phonepopup.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PopoverPage = (function () {
    function PopoverPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    PopoverPage.prototype.closePopover = function () {
        this.viewCtrl.dismiss();
    };
    PopoverPage.prototype.mloanPage = function () {
    };
    PopoverPage.prototype.fosaPage = function () {
    };
    return PopoverPage;
}());
PopoverPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-popover',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/popover/popover.html"*/'\n<ion-content padding>\n    <ion-list>\n      <ion-list-header>Which loan would you like to request?</ion-list-header>\n      <button ion-item (click)="fosaPage()">FOSA Advance</button>\n      <button ion-item (click)="mloanPage()">M-Loan</button>\n    </ion-list>\n\n    <button block outline (click)="closePopover()">Close</button>\n</ion-content>\n\n'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/popover/popover.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
], PopoverPage);

//# sourceMappingURL=popover.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccountDetailsPage = (function () {
    function AccountDetailsPage(viewCtrl, navCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = [
            { name: 'Product Type', date: 'Date Here' },
            { name: 'Account Relationship', date: 'Date Here' },
            { name: 'Account Restrictions', date: 'Date Here' },
            { name: 'Account Branch', date: 'Date Here' },
            { name: 'Account status', date: 'Date Here' },
            { name: 'Uncleared of funds', date: 'Date Here' },
            { name: 'Amount on hold', date: 'Date Here' },
            { name: 'Overdraft limit', date: 'Date Here' },
        ];
    }
    AccountDetailsPage.prototype.ionViewDidLoad = function () {
        this.details = this.navParams.get('data');
        console.log(this.details);
        this.title = this.details.details[0];
        this.accountNum = this.details.details[2];
        this.amount = this.details.details[3];
        this.status = this.details.details[5];
        this.branch = this.details.details[6];
        this.mno = this.details.mno;
        console.log("DETAILS: ", this.details);
    };
    // goTo Function 
    AccountDetailsPage.prototype.goTo = function (page) {
        this.navCtrl.push(page, { data: { details: this.details, mno: this.mno } });
    };
    AccountDetailsPage.prototype.onClose = function () {
        this.viewCtrl.dismiss();
    };
    return AccountDetailsPage;
}());
AccountDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-account-details',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/account-details/account-details.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start >\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="ios-menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>{{title}} <span>Ksh {{amount}}</span></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <!-- account name , number and currancy -->\n  \n  <div class="acountTitle"> \n    <span>Account</span>\n\n    <p class="countNum">\n      {{accountNum}} <span>Ksh {{amount}}</span>\n    </p>\n\n    \n  </div>\n  \n\n  <div class="details">\n    <p class="myLabel">Account Details</p>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-8 text-left>\n          <p>Product Type</p>\n        </ion-col>\n        <ion-col col-4 text-right>\n          <p>{{title}}</p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-8 text-left>\n          <p>Status</p>\n        </ion-col>\n        <ion-col col-4 text-right>\n          <p>{{status}}</p>\n        </ion-col>\n      </ion-row>   \n\n      <ion-row>\n        <ion-col col-8 text-left>\n          <p>Branch</p>\n        </ion-col>\n        <ion-col col-4 text-right>\n          <p>{{branch}}</p>\n        </ion-col>\n      </ion-row>         \n    </ion-grid>\n    <button ion-button block color="faceColor" (click)="goTo(\'TransactionsPage\')">Account Transactions</button>\n  </div>\n\n  <ion-fab left bottom>\n    <button ion-fab mini color="gold" (click)="onClose()"><ion-icon name="md-close"></ion-icon></button>\n  </ion-fab>    \n</ion-content>\n'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/account-details/account-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], AccountDetailsPage);

//# sourceMappingURL=account-details.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NonmemberotpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NonmemberotpPage = (function () {
    function NonmemberotpPage(modalCtrl, navCtrl, navParams) {
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NonmemberotpPage.prototype.ionViewDidLoad = function () {
        this.data = this.navParams.get('data');
        this.firstname = this.data.firstname;
        this.surname = this.data.surname;
        this.othername = this.data.othername;
        this.gender = this.data.gender;
        this.idnumber = this.data.idnumber;
        this.phonenumber = this.data.phonenumber;
        this.dob = this.data.dob;
    };
    NonmemberotpPage.prototype.handleMNO = function (page) {
        var data = {
            firstname: this.firstname,
            surname: this.surname,
            othername: this.othername,
            gender: this.gender,
            idnumber: this.idnumber,
            phonenumber: this.phonenumber,
            dob: this.dob
        };
        var preCustomerModal = this.modalCtrl.create(page, data);
        preCustomerModal.present();
    };
    return NonmemberotpPage;
}());
NonmemberotpPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-nonmemberotp',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/nonmemberotp/nonmemberotp.html"*/'<ion-header>\n  <ion-navbar hideBackButton>\n    <img  class="imagestyle" object-fit: cover height="70px"  width="470px" src="assets/images/enterotp.jpg"/>     \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="no-scroll">\n\n  <h5>\n    Welcome {{firstname}} {{surname}}, we have sent you a one time password, please enter it below.\n  </h5>\n  \n\n  <ion-item>    \n    <ion-input placeholder="OTP" style="text-align:right; border-radius: 4px;" [(ngModel)]="otp" type="text"></ion-input>\n  </ion-item>\n\n  <button ion-button block color="gold" (click)="handleMNO(\'PrecustomerPage\')">Next</button>\n  <br>\n  <button ion-button block outline color="gold" (click)="handleMNO(\'MnopopPage\')">Resend</button>\n  \n</ion-content>\n'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/nonmemberotp/nonmemberotp.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], NonmemberotpPage);

//# sourceMappingURL=nonmemberotp.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoanformPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_socket_socket__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_http_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_loancategory_loancategory__ = __webpack_require__(184);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoanformPage = (function () {
    function LoanformPage(socket, loanCategoryHelper, httpHelper, socketHelper, storage, toastCtrl, viewCtrl, navCtrl, navParams) {
        this.socket = socket;
        this.loanCategoryHelper = loanCategoryHelper;
        this.httpHelper = httpHelper;
        this.socketHelper = socketHelper;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.securityArray = [
            { security: "Guarantor", value: "Guarantor" },
            { security: "Self", value: "Self" },
            { security: "Deed", value: "Deed" }
        ];
        this.loanRequestData = {};
    }
    LoanformPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // memberdata
        this.storage.get('ID').then(function (data) {
            console.log("ID:", data);
            _this.httpHelper.singleUser(data).then(function (data) {
                console.log("SINGLE USER:", data);
                _this.loanRequestData = {
                    phoneNumber: data.user.phonenumber,
                    memberNumber: data.user.membernumber
                };
            });
        });
        // GET LOAN CATEGORIES
        this.loanCategoryHelper.getCategories().then(function (data) {
            _this.loanCategory = data;
            console.log("LOAN CATEGORIES:", _this.loanCategory);
        });
        console.log("LOAN CATEGORIES:", this.loanCategory);
        // GET LOAN DATA
        this.loanData = this.navParams.get('loanData');
        console.log("LOAN DATA:", this.loanData[0]);
        switch (this.loanData[0]) {
            case "DevelopmentLoan":
                this.loanRequestData.type = "SaccoDev";
                break;
            case "EducLoan":
                this.loanRequestData.type = "SaccoEducation";
                break;
            case "MicroLoan":
                this.loanRequestData.type = "SaccoMicro";
                break;
            case "ExpressLoan":
                this.loanRequestData.type = "SaccoExpress";
                break;
            case "SmartLifeLoan":
                this.loanRequestData.type = "SaccoSmart";
                break;
        }
        console.log("LOAN REQ DAT:", this.loanRequestData);
        this.storage.get('memberData').then(function (data) {
            _this.memberNo = data['MB.CUST.NO'];
            _this.memberPhone = data['MB.CELL.NO..'];
            _this.requestData = {
                memberNumber: _this.memberNo,
                memberPhone: _this.memberPhone
            };
            _this.loanRequestData.memberNumber = _this.memberNo;
            _this.loanRequestData.memberPhone = _this.memberPhone;
            console.log("MEMBER DATA:", _this.loanRequestData);
        });
        // get savings bal
        this.storage.get('SavingsBalance').then(function (data) {
            _this.savingsBalance = data.data;
            _this.mainSavings = _this.savingsBalance.filter(function (el) {
                return el[0] == 'MainSav';
            })[0];
            console.log("MAIN SAVINGS:", _this.mainSavings);
        });
        this.typeLimit = this.navParams.get('loanData');
        this.loanType = this.typeLimit[0];
        this.loanLimit = this.typeLimit[1];
    };
    LoanformPage.prototype.onTerm = function () {
        this.loanRequestData.term = this.loanTerm;
    };
    LoanformPage.prototype.onAmount = function (ev) {
        // CHECK IF LOAN AMOUNT EXCEEDS LOAN ELIGIBILITY
        console.log("AMOUNT:", this.amountValue);
        console.log("LOAN LIMIT:", this.loanLimit);
        var limit = parseInt(this.loanLimit.replace(/,/g, ''));
        console.log("LIMIT:", limit);
        if (this.amountValue > limit) {
            var toast = this.toastCtrl.create({
                // duration:3000,
                message: "Your requested amount exeeds your loan eligibility.",
                position: "middle",
                showCloseButton: true,
                closeButtonText: "Recify Amount"
            });
            toast.present();
        }
        console.log(ev.target.value);
        this.loanRequestData.amount = this.amountValue;
        var amount = this.amountValue;
        this.requestData = __assign({}, amount);
        // console.log("REQUESTED DATA:",this.requestData)
        // check if amount is less than 90% of savings and set to self
        var ninetyPercent = ((90 / 100) * parseInt(this.mainSavings[3]));
        // console.log(ninetyPercent)
        if (this.amountValue <= ninetyPercent) {
            console.log('self');
            // handle autoselect self
            // document.getElementById('sec').setAttribute("value","Self")
            this.security = 'Self';
        }
        else {
            this.security = '';
        }
    };
    LoanformPage.prototype.onGuarantors = function () {
        // let guarantors:any[]=[]
        // guarantors = this.guarantors.split(',')
        this.loanRequestData.guarantors = this.guarantors.split(',');
    };
    LoanformPage.prototype.onPurpose = function () {
        this.loanRequestData.purpose = this.loanPurpose;
    };
    LoanformPage.prototype.resize = function () {
        this.myInput.nativeElement.style.height = this.myInput.nativeElement.scrollHeight + 'px';
    };
    /*
    onAmount(ev){
      // console.log(ev.target.value)
      // this.amountValue = ev.target.value
      console.log(this.amountValue)
    }
    */
    LoanformPage.prototype.onClose = function () {
        this.viewCtrl.dismiss();
    };
    LoanformPage.prototype.onSelect = function (security) {
        console.log("SECURITY: ", security);
    };
    LoanformPage.prototype.loanSubmit = function () {
        var _this = this;
        console.log("LOAN SUBMIT DATA:", this.loanRequestData);
        // CHECK IF AMOUNT IS > LOAN ELIGIBILITY
        // CHECK IF LOAN AMOUNT EXCEEDS LOAN ELIGIBILITY
        if (this.amountValue > this.loanLimit) {
            var toast = this.toastCtrl.create({
                // duration:3000,
                message: "Your requested amount exeeds your loan eligibility.",
                position: "middle",
                showCloseButton: false,
                closeButtonText: "Rectify Amount"
            });
            toast.present();
        }
        else if (this.amountValue < this.loanLimit) {
            // CHECK IF SUM OF GUARANTORS' SAVINGS IS MORE THAN LOAN AMOUNT
            this.socketHelper.loanApplication(this.loanRequestData)
                .then(function () {
                _this.socket.on('loanApplicationFeedback', function (data) {
                    console.log("LOAN APPLICATION FEEDBACK:", data);
                });
            });
        }
    };
    return LoanformPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myInput'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], LoanformPage.prototype, "myInput", void 0);
LoanformPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-loanform',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/loanform/loanform.html"*/'\n<ion-header> \n  <ion-navbar hideBackButton>\n    <img height="150px" width="470px" src="assets/images/statementsheader.jpg"/>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding> \n  <h3>Your are eligible for a {{loanType}} worth {{loanLimit}}</h3>  \n\n  <ion-list>\n\n    <!--\n    <ion-item>\n      <ion-label stacked>Interest Rate</ion-label>\n      <ion-input placeholder="%" type="text"></ion-input>\n    </ion-item>\n    -->\n\n    <ion-item>\n      <ion-label stacked>Amount</ion-label>\n      <ion-input placeholder="Ksh" type="text" [(ngModel)]="amountValue" (keyup)="onAmount($event)"></ion-input> \n      <!-- (keyup.enter)="onAmount($event)" -->\n    </ion-item>\n\n    \n    <ion-item>\n      <ion-label stacked>Period in months</ion-label>\n      <ion-input placeholder="Months" type="text" [(ngModel)]="loanTerm" (keyup)="onTerm()"></ion-input>\n    </ion-item> \n  \n    <!--\n    <ion-item>\n      <ion-label stacked>Security</ion-label>\n        <ion-select [(ngModel)]="security">\n          <ion-option *ngFor="let data of securityArray" value="{{data.value}}" (ionSelect)="onSelect(data.value)" >{{data.security}}</ion-option>  \n        </ion-select>        \n    </ion-item> \n    -->\n\n    <ion-item>\n      <ion-label stacked>Enter Guarantors</ion-label>\n      <ion-input placeholder="12345, 56789" type="text" [(ngModel)]="guarantors" (keyup)="onGuarantors()"></ion-input>\n    </ion-item> \n\n      \n      <ion-label stacked>Loan Purpose</ion-label>\n        <textarea \n        (keyup)="onPurpose()"\n        rows="5" cols="33"\n        #myInput \n        id="txtarea" maxLength="500" \n        (keyup)="resize()" \n        [(ngModel)]="loanPurpose"></textarea>\n    \n\n  </ion-list>  \n\n  <button ion-button block color="faceColor" (click)="loanSubmit()">Submit Loan Request</button>\n\n  <ion-fab left bottom>\n    <button ion-fab mini color="gold" (click)="onClose()"><ion-icon name="md-close"></ion-icon></button>\n  </ion-fab> \n</ion-content>\n'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/loanform/loanform.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__["Socket"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__["Socket"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__providers_loancategory_loancategory__["a" /* LoancategoryProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_loancategory_loancategory__["a" /* LoancategoryProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__providers_http_http__["a" /* HttpProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_http_http__["a" /* HttpProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__providers_socket_socket__["a" /* SocketProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_socket_socket__["a" /* SocketProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]) === "function" && _k || Object])
], LoanformPage);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
//# sourceMappingURL=loanform.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuarantorviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
 * Generated class for the GuarantorviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GuarantorviewPage = (function () {
    function GuarantorviewPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    GuarantorviewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GuarantorviewPage');
    };
    return GuarantorviewPage;
}());
GuarantorviewPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-guarantorview',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/guarantorview/guarantorview.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Your Guarantors</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>Dennis Obel</ion-card-header>\n    <hr>\n    <ion-card-content>\n      <ion-list>\n        <ion-item>\n          <h4>Loan Product: Development Loan</h4>\n        </ion-item>\n        <hr>\n        <ion-item>\n          <h4>Loan Balance: Ksh 0.00</h4>\n        </ion-item>\n        <hr>\n        <ion-item>\n          <h4>Loan Arrears: Ksh 0.00</h4>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/guarantorview/guarantorview.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], GuarantorviewPage);

//# sourceMappingURL=guarantorview.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuaranteeviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
 * Generated class for the GuaranteeviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GuaranteeviewPage = (function () {
    function GuaranteeviewPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    GuaranteeviewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GuaranteeviewPage');
    };
    return GuaranteeviewPage;
}());
GuaranteeviewPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-guaranteeview',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/guaranteeview/guaranteeview.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Loans You Guarantee</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>Dennis Obel</ion-card-header>\n    <hr>\n    <ion-card-content>\n      <ion-list>\n        <ion-item>\n          <h4>Loan Product: Development Loan</h4>\n        </ion-item>\n        <hr>\n        <ion-item>\n          <h4>Loan Balance: Ksh 0.00</h4>\n        </ion-item>\n        <hr>\n        <ion-item>\n          <h4>Loan Arrears: Ksh 0.00</h4>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/guaranteeview/guaranteeview.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], GuaranteeviewPage);

//# sourceMappingURL=guaranteeview.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignuppopPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
 * Generated class for the SignuppopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignuppopPage = (function () {
    function SignuppopPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SignuppopPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignuppopPage');
    };
    return SignuppopPage;
}());
SignuppopPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-signuppop',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/signuppop/signuppop.html"*/'<!--\n  Generated template for the SignuppopPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>signuppop</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/signuppop/signuppop.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], SignuppopPage);

//# sourceMappingURL=signuppop.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(187);
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





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, storage) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.storage = storage;
        this.rootPage = 'WelcomePage';
        this.animateVarible = false;
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Our Services', component: 'SummaryPage', icon: 'banki-summary' },
            // { title: 'Savings and Balances', component: 'PersonalAccountPage',icon:'banki-user' },
            // { title: 'Benficiariers', component: 'BeneficiariesPage',icon:'banki-exchange' },
            { title: 'Setting', component: 'SettingPage', icon: 'banki-setting' },
            { title: 'Profile', component: 'ProfilePage', icon: 'banki-user-1' },
            // { title: 'Currancy Converter', component: 'CurrencyConvertorPage',icon:'banki-converter' },
            // { title: 'Internal Transfer', component: 'TransferPage',icon:'banki-transfer' },
            { title: 'Find us', component: 'FindUsPage', icon: 'banki-location' },
            { title: 'Contact us', component: 'ContactUsPage', icon: 'banki-phone' },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        var loginData;
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.storage.get('loginData').then(function (data) {
            console.log("side menu data:", data);
            loginData = data;
        });
        this.nav.setRoot(page, loginData);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/app/app.html"*/'<ion-menu [content]="content" swipeEnabled="false" type="overlay">\n  <ion-content>\n    <ion-list>\n      <ion-item menuClose  *ngFor="let p of pages" (click)="openPage(p.component)">\n        <ion-icon class="{{p.icon}}" item-left></ion-icon>\n        {{p.title}}\n      </ion-item>\n    </ion-list>\n  </ion-content>\n  <ion-footer>\n    <button ion-button clear menuClose (click)="openPage(\'WelcomePage\')">Log out</button>\n  </ion-footer>\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content  [class.animateApp]="animateVarible==true" swipeBackEnabled="false"></ion-nav> '/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(255);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_t24_t24__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_http_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_socket_socket__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_popover_popover__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_lock_lock__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_signuppop_signuppop__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_phonepopup_phonepopup__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_mnopaspop_mnopaspop__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_account_details_account_details__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_nonmemberotp_nonmemberotp__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_summary_summary__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_loanform_loanform__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_guarantorview_guarantorview__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_guaranteeview_guaranteeview__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ng_socket_io__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_loancategory_loancategory__ = __webpack_require__(184);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var socketConfig = { url: 'http://localhost:3000/', options: {
        autoConnect: true,
    } };
var config = {
    backButtonText: '',
    backButtonIcon: 'ios-arrow-round-back',
    iconMode: 'ios',
    mode: 'ios',
    modalEnter: 'modal-slide-in',
    modalLeave: 'modal-slide-out',
    pageTransition: 'ios',
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_12__pages_popover_popover__["a" /* PopoverPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_lock_lock__["a" /* LockPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_signuppop_signuppop__["a" /* SignuppopPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_phonepopup_phonepopup__["a" /* PhonepopupPage */],
            // MnopopPage,
            // EnterpinPage,
            __WEBPACK_IMPORTED_MODULE_16__pages_mnopaspop_mnopaspop__["a" /* MnopaspopPage */],
            // OtppopPage
            __WEBPACK_IMPORTED_MODULE_19__pages_summary_summary__["a" /* SummaryPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_account_details_account_details__["a" /* AccountDetailsPage */],
            // NonmemberPage,
            __WEBPACK_IMPORTED_MODULE_18__pages_nonmemberotp_nonmemberotp__["a" /* NonmemberotpPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_loanform_loanform__["a" /* LoanformPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_guarantorview_guarantorview__["a" /* GuarantorviewPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_guaranteeview_guaranteeview__["a" /* GuaranteeviewPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], config, {
                links: [
                    { loadChildren: '../pages/popover/popover.module#PopoverPageModule', name: 'PopoverPage', segment: 'popover', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signuppop/signuppop.module#SignuppopPageModule', name: 'SignuppopPage', segment: 'signuppop', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/mnopaspop/mnopaspop.module#MnopaspopPageModule', name: 'MnopaspopPage', segment: 'mnopaspop', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/mnopop/mnopop.module#MnopopPageModule', name: 'MnopopPage', segment: 'mnopop', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/phonepopup/phonepopup.module#PhonepopupPageModule', name: 'PhonepopupPage', segment: 'phonepopup', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/otppop/otppop.module#OtppopPageModule', name: 'OtppopPage', segment: 'otppop', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/enterpin/enterpin.module#EnterpinPageModule', name: 'EnterpinPage', segment: 'enterpin', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/account-details/account-details.module#AccountDetailsPageModule', name: 'AccountDetailsPage', segment: 'account-details', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/onboard/onboard.module#OnboardPageModule', name: 'OnboardPage', segment: 'onboard', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/sign-up/sign-up.module#SignUpPageModule', name: 'SignUpPage', segment: 'sign-up', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/precustomer/precustomer.module#PrecustomerPageModule', name: 'PrecustomerPage', segment: 'precustomer', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/nonmemberotp/nonmemberotp.module#NonmemberotpPageModule', name: 'NonmemberotpPage', segment: 'nonmemberotp', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/nonmember/nonmember.module#NonmemberPageModule', name: 'NonmemberPage', segment: 'nonmember', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/dividends/dividends.module#DividendsPageModule', name: 'DividendsPage', segment: 'dividends', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/loanform/loanform.module#LoanformPageModule', name: 'LoanformPage', segment: 'loanform', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/guarantorview/guarantorview.module#GuarantorviewPageModule', name: 'GuarantorviewPage', segment: 'guarantorview', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/guaranteeview/guaranteeview.module#GuaranteeviewPageModule', name: 'GuaranteeviewPage', segment: 'guaranteeview', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/add-account/add-account.module#AddAccountPageModule', name: 'AddAccountPage', segment: 'add-account', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/address-details/address-details.module#AddressDetailsPageModule', name: 'AddressDetailsPage', segment: 'address-details', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/banktransfer/banktransfer.module#BanktransferPageModule', name: 'BanktransferPage', segment: 'banktransfer', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/beneficiaries/beneficiaries.module#BeneficiariesPageModule', name: 'BeneficiariesPage', segment: 'beneficiaries', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/billmanagement/billmanagement.module#BillmanagementPageModule', name: 'BillmanagementPage', segment: 'billmanagement', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/buy-goods/buy-goods.module#BuyGoodsPageModule', name: 'BuyGoodsPage', segment: 'buy-goods', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/contact-us/contact-us.module#ContactUsPageModule', name: 'ContactUsPage', segment: 'contact-us', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/currency-convertor/currency-convertor.module#CurrencyConvertorPageModule', name: 'CurrencyConvertorPage', segment: 'currency-convertor', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/deposit/deposit.module#DepositPageModule', name: 'DepositPage', segment: 'deposit', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/find-us/find-us.module#FindUsPageModule', name: 'FindUsPage', segment: 'find-us', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/forgot-password/forgot-password.module#ForgotPasswordPageModule', name: 'ForgotPasswordPage', segment: 'forgot-password', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/fosa/fosa.module#FosaPageModule', name: 'FosaPage', segment: 'fosa', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/loan-balances/loan-balances.module#LoanBalancesPageModule', name: 'LoanBalancesPage', segment: 'loan-balances', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/loan-eligibility/loan-eligibility.module#LoanEligibilityPageModule', name: 'LoanEligibilityPage', segment: 'loan-eligibility', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/loanrequest/loanrequest.module#LoanrequestPageModule', name: 'LoanrequestPage', segment: 'loanrequest', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/loans/loans.module#LoansPageModule', name: 'LoansPage', segment: 'loans', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/paybill/paybill.module#PaybillPageModule', name: 'PaybillPage', segment: 'paybill', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/personal-account/personal-account.module#PersonalAccountPageModule', name: 'PersonalAccountPage', segment: 'personal-account', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/pinpop/pinpop.module#PinpopPageModule', name: 'PinpopPage', segment: 'pinpop', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/repay-loans/repay-loans.module#RepayLoansPageModule', name: 'RepayLoansPage', segment: 'repay-loans', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/sendmpesa/sendmpesa.module#SendmpesaPageModule', name: 'SendmpesaPage', segment: 'sendmpesa', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/setting/setting.module#SettingPageModule', name: 'SettingPage', segment: 'setting', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/sign-in/sign-in.module#SignInPageModule', name: 'SignInPage', segment: 'sign-in', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/statements/statements.module#StatementsPageModule', name: 'StatementsPage', segment: 'statements', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/transactions/transactions.module#TransactionsPageModule', name: 'TransactionsPage', segment: 'transactions', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/transactions-details/transactions-details.module#TransactionsDetailsPageModule', name: 'TransactionsDetailsPage', segment: 'transactions-details', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/transfer/transfer.module#TransferPageModule', name: 'TransferPage', segment: 'transfer', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/update-profile/update-profile.module#UpdateProfilePageModule', name: 'UpdateProfilePage', segment: 'update-profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_23_ng_socket_io__["SocketIoModule"].forRoot(socketConfig),
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_12__pages_popover_popover__["a" /* PopoverPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_lock_lock__["a" /* LockPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_signuppop_signuppop__["a" /* SignuppopPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_phonepopup_phonepopup__["a" /* PhonepopupPage */],
            // MnopopPage,
            // EnterpinPage,
            __WEBPACK_IMPORTED_MODULE_16__pages_mnopaspop_mnopaspop__["a" /* MnopaspopPage */],
            // OtppopPage
            __WEBPACK_IMPORTED_MODULE_19__pages_summary_summary__["a" /* SummaryPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_account_details_account_details__["a" /* AccountDetailsPage */],
            // NonmemberPage,
            __WEBPACK_IMPORTED_MODULE_18__pages_nonmemberotp_nonmemberotp__["a" /* NonmemberotpPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_loanform_loanform__["a" /* LoanformPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_guarantorview_guarantorview__["a" /* GuarantorviewPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_guaranteeview_guaranteeview__["a" /* GuaranteeviewPage */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_9__providers_t24_t24__["a" /* T24Provider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_11__providers_socket_socket__["a" /* SocketProvider */],
            __WEBPACK_IMPORTED_MODULE_24__providers_loancategory_loancategory__["a" /* LoancategoryProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 302:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(19);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HttpProvider = (function () {
    function HttpProvider(http, storage) {
        this.http = http;
        this.storage = storage;
        this.offline = {
            joinSaccoURL: "http://localhost:3000/joinsacco",
            verifyUserURL: "http://localhost:3000/verifyuser",
            passCodeURL: "http://localhost:3000/passcode",
            loginURL: "http://localhost:3000/login",
            logoutURL: "http://localhost:3000/logout",
            getUserURL: "http://localhost:3000/getuser",
            singleUserURL: "http://localhost:3000/singleUser/",
            protectedURL: "http://localhost:3000/protected",
            submitPhoneNumberURL: "http://localhost:3000/submitPhoneNumber",
            submitOtpURL: "http://localhost:3000/submitOtp",
            submitMnoURL: "http://localhost:3000/submitMno",
            submitPassword: "http://localhost:3000/submitPassword",
            submitLogin: "http://localhost:3000/submitLogin",
            submitPINURL: "http://localhost:3000/submitPIN",
            mpesaURL: "http://localhost:3000/depositFromMpesa",
            imageURL: "http://localhost:3000/imageupload"
        };
    }
    HttpProvider.prototype.joinSacco = function (data) {
        var _this = this;
        console.log(data);
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
            headers.append("Accept", "application/json");
            headers.append("Content-Type", "application/json");
            // store data in local storage
            _this.storage.set('signupData', data)
                .then(function () { });
            _this.http.post(_this.offline.joinSaccoURL, data, { headers: headers })
                .subscribe(function (res) {
                var data = res.json();
                _this.token = data.token;
                _this.user = data.user;
                _this.storage.set('token', data.token);
                _this.storage.set('user', data.user);
                resolve(data);
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    HttpProvider.prototype.verifyUser = function (data) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append("Accept", "application/json");
        headers.append("Content-Type", "application/json");
        // fetch signup data from local storage
        this.storage.get('signupData')
            .then(function (val) {
            var body = __assign({}, data, val);
            console.log(body);
            _this.http.post(_this.offline.verifyUserURL, body, { headers: headers })
                .subscribe(function (res) {
                console.log(res.json);
            });
        });
    };
    HttpProvider.prototype.passCode = function (data) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append("Accept", "application/json");
        headers.append("Content-Type", "application/json");
        // fetch signup data from local storage
        this.storage.get('signupData')
            .then(function (val) {
            var body = __assign({}, data, val);
            _this.http.post(_this.offline.passCodeURL, body, { headers: headers })
                .subscribe(function (res) {
                console.log(res.json);
            });
        });
    };
    HttpProvider.prototype.login = function (data) {
        var _this = this;
        console.log("inside login, send this login data to server:", data);
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
            headers.append("Accept", "application/json");
            headers.append("Content-Type", "application/json");
            // store data in local storage
            // .then((res)=>{
            _this.http.post(_this.offline.loginURL, data, { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                console.log("res:", res);
                _this.storage.set('loginData', data);
                resolve(res);
            });
            // })      
            // fetch signup data from local storage
            /*
            this.storage.get('loginData')
                .then((val)=>{
                    let body = {
                        ...data,
                        ...val
                    }
                    
                    this.http.post(this.offline.loginURL,body,{headers})
                        .map((res)=>res.json())
                        .subscribe(res => {
                            // let data = res.json
                            console.log(res)
                            resolve(res)
                            // this.token = data.token;
      
                        })
                })      */
        });
    };
    HttpProvider.prototype.checkAuthentication = function () {
        var _this = this;
        console.log("inside checkAuth");
        return new Promise(function (resolve, reject) {
            // Load token if exists
            _this.storage.get('token').then(function (value) {
                _this.token = value;
                var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
                headers.append('Authorization', _this.token);
                _this.http.get(_this.offline.protectedURL, { headers: headers })
                    .subscribe(function (res) {
                    resolve(res);
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    HttpProvider.prototype.logout = function () {
        var _this = this;
        // this.storage.set('token', '');
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.offline.logoutURL)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    HttpProvider.prototype.getuser = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.offline.getUserURL)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    HttpProvider.prototype.submitPhoneNumber = function (phoneNumber) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
            headers.append("Accept", "application/json");
            headers.append("Content-Type", "application/json");
            _this.http.post(_this.offline.submitPhoneNumberURL, phoneNumber, { headers: headers })
                .subscribe(function (res) {
                console.log('RES: ', res.json());
                _this.storage.set('ID', res.json().docs._id);
                resolve(res.json());
            });
        });
    };
    HttpProvider.prototype.singleUser = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.offline.singleUserURL + id)
                .subscribe(function (res) {
                console.log("SINGLE USER:", res.json());
                resolve(res.json());
            });
        });
    };
    HttpProvider.prototype.submitOTP = function (otp) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
            headers.append("Accept", "application/json");
            headers.append("Content-Type", "application/json");
            _this.http.post(_this.offline.submitOtpURL, otp, { headers: headers })
                .subscribe(function (res) {
                console.log("OTP RES: ", res.json());
                resolve(res.json());
            });
        });
    };
    HttpProvider.prototype.submitMNO = function (mno) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
            headers.append("Accept", "application/json");
            headers.append("Content-Type", "application/json");
            _this.http.post(_this.offline.submitMnoURL, mno, { headers: headers })
                .subscribe(function (res) {
                console.log("MNO RES: ", res.json());
                resolve(res.json());
            });
        });
    };
    HttpProvider.prototype.submitPassword = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
            headers.append("Accept", "application/json");
            headers.append("Content-Type", "application/json");
            _this.http.post(_this.offline.submitPassword, data, { headers: headers })
                .subscribe(function (res) {
                console.log("MNO RES: ", res.json());
                resolve(res.json());
            });
        });
    };
    HttpProvider.prototype.submitLogin = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
            headers.append("Accept", "application/json");
            headers.append("Content-Type", "application/json");
            _this.http.post(_this.offline.submitLogin, data, { headers: headers })
                .subscribe(function (res) {
                console.log("LOGIN RES: ", res.json());
                resolve(res.json());
            });
        });
    };
    HttpProvider.prototype.submitPIN = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
            headers.append("Accept", "application/json");
            headers.append("Content-Type", "application/json");
            _this.http.post(_this.offline.submitPINURL, data, { headers: headers })
                .subscribe(function (res) {
                console.log("PIN RES: ", res.json());
                resolve(res.json());
            });
        });
    };
    HttpProvider.prototype.depositFromMpesa = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
            headers.append("Accept", "application/json");
            headers.append("Content-Type", "application/json");
            _this.http.post(_this.offline.mpesaURL, data, { headers: headers })
                .subscribe(function (res) {
                console.log("PIN RES: ", res.json());
                resolve(res.json());
            });
        });
    };
    HttpProvider.prototype.uploadImage = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
            headers.append("Accept", "application/json");
            headers.append("Content-Type", "application/json");
            _this.http.post(_this.offline.imageURL, data, { headers: headers })
                .subscribe(function (res) {
                console.log("PIN RES: ", res.json());
                resolve(res.json());
            });
        });
    };
    return HttpProvider;
}());
HttpProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
], HttpProvider);

//# sourceMappingURL=http.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return T24Provider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(19);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var T24Provider = (function () {
    function T24Provider(http, storage) {
        this.http = http;
        this.storage = storage;
        this.offline = {
            balanceEnquiry: "http://localhost:3000/balanceEnquiry",
        };
    }
    T24Provider.prototype.balanceEnquiry = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
            headers.append("Accept", "application/json");
            headers.append("Content-Type", "application/json");
            _this.storage.get('loginData')
                .then(function (val) {
                var body = __assign({}, val);
                _this.http.post(_this.offline.balanceEnquiry, body, { headers: headers })
                    .subscribe(function (res) {
                    console.log(res.json);
                    resolve(res.json());
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    return T24Provider;
}());
T24Provider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
], T24Provider);

//# sourceMappingURL=t24.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_socket_io__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(19);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SocketProvider = (function () {
    // SOCKET CONNECTION AND LOCAL STORAGE SETUP 
    function SocketProvider(socket, storage) {
        this.socket = socket;
        this.storage = storage;
    }
    SocketProvider.prototype.onConnect = function () {
        var _this = this;
        this.socket.on('connect', function () {
            var sessionid = _this.socket.ioSocket.id;
            console.log("socket id is: ", sessionid);
        });
    };
    SocketProvider.prototype.onVerified = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    SocketProvider.prototype.onDisconnect = function () {
        this.socket.on('disconnect', function () {
            console.log("connection lost");
        });
    };
    // Oauth
    SocketProvider.prototype.joinApp = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            resolve(_this.socket.emit('joinApp', data));
        });
    };
    SocketProvider.prototype.signIn = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            resolve(_this.socket.emit('signIn', data));
        });
    };
    SocketProvider.prototype.signUp = function (data) {
        this.socket.emit('signUp', data);
    };
    // Enquiries
    SocketProvider.prototype.balanceEnq = function (data) {
        // this.storage.get('loginData')
        // .then(res=>{
        //   let body = {
        //     ...res
        //   }  
        var _this = this;
        //   return body
        // })
        // .then((res)=>{
        //   // this.storage.set("login",(res.data))
        //   this.socket.emit("balanceEnq",res)
        //   console.log("heree come res of balenq",res)
        // })
        /*
        return new Promise((resolve,reject)=>{
          resolve(this.socket.emit("balanceEnq",data))
        })
        */
        //  this.socket.emit("balanceEnq",data)
        return new Promise(function (resolve, reject) {
            resolve(_this.socket.emit("balanceEnq", data));
        });
    };
    SocketProvider.prototype.getAccounts = function (data) {
        this.socket.emit('memberAccounts', data);
    };
    SocketProvider.prototype.miniStatEnq = function (data) {
        this.socket.emit('miniStatEnq', data);
    };
    SocketProvider.prototype.fullStatEnq = function (data) {
        this.socket.emit('fullStatEnq', data);
    };
    // Loans
    // Get loan balances
    SocketProvider.prototype.getLoanBal = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            resolve(_this.socket.emit('getLoanBal'));
        });
    };
    // Apply Loan
    SocketProvider.prototype.applyMLoan = function (data) {
        var _this = this;
        console.log("mloan data: ", data);
        return new Promise(function (resolve, reject) {
            resolve(_this.socket.emit('applyMLoan', data));
        });
    };
    SocketProvider.prototype.applyFosaAdvance = function (data) {
        var _this = this;
        console.log("fosa data: ", data);
        return new Promise(function (resolve, reject) {
            resolve(_this.socket.emit('applyFosaAdvance', data));
        });
    };
    // Pay Loan
    SocketProvider.prototype.payLoan = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            resolve(_this.socket.emit('payLoan', data));
        });
    };
    // Funds Transfer
    // Get Account Balances
    SocketProvider.prototype.accountBalances = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            resolve(_this.socket.emit('accountBalances'));
        });
    };
    SocketProvider.prototype.internalFundsTransfer = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            resolve(_this.socket.emit('internalFundsTransfer', data));
        });
    };
    SocketProvider.prototype.mpesaFundsTransfer = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            resolve(_this.socket.emit('mpesaFundsTransfer', data));
        });
    };
    SocketProvider.prototype.bankFundsTransfer = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            resolve(_this.socket.emit('bankFundsTransfer', data));
        });
    };
    // Utilities and bills
    SocketProvider.prototype.airtimePurchase = function (data) {
        var _this = this;
        this.storage.get('loginData')
            .then(function (res) {
            var body = __assign({ data: data }, res);
            console.log(body);
            return body;
        })
            .then(function (res) {
            console.log("airtime purchase res:", res);
            _this.socket.emit("airtimePurchase", res);
        });
    };
    SocketProvider.prototype.kopaAirtime = function (data) {
        var _this = this;
        console.log("Inside Kopa Airtime");
        this.storage.get('loginData')
            .then(function (res) {
            var body = __assign({ data: data }, res);
            console.log(body);
            return body;
        })
            .then(function (res) {
            console.log("airtime loan res:", res);
            _this.socket.emit("kopaAirtime", res);
        });
    };
    SocketProvider.prototype.tokenPurchase = function (data) {
        var _this = this;
        this.storage.get('loginData')
            .then(function (res) {
            var body = __assign({ data: data }, res);
            console.log(body);
            return body;
        })
            .then(function (res) {
            console.log("token purchase res:", res);
            _this.socket.emit("tokenPurchase", res);
        });
    };
    SocketProvider.prototype.eStatement = function (data) {
        var _this = this;
        /*
        this.storage.get('loginData')
        .then(res=>{
          let body = {
            ...res
          }
          console.log("LOGIN DATA IN E-STAT",body)
          return body
          
        })
        .then((res)=>{
          console.log("e-stat:",res)
          this.socket.emit("estatement",res)
        })
        */
        return new Promise(function (resolve, reject) {
            resolve(_this.socket.emit('estatement', data));
        });
    };
    // Guarantees/Guarantors
    SocketProvider.prototype.getGuarantors = function (data) {
        var _this = this;
        /*
        this.storage.get('loginData')
        .then(res=>{
          let body = {
            ...res
          }
          console.log(body)
          return body
          
        })
        .then((res)=>{
          console.log("GUARANTORS:",res)
          this.socket.emit("guarantors",res)
        })
        */
        return new Promise(function (resolve, reject) {
            resolve(_this.socket.emit('guarantors', data));
        });
    };
    SocketProvider.prototype.getGuarantees = function (data) {
        /*
        this.storage.get('loginData')
        .then(res=>{
          let body = {
            ...res
          }
          console.log(body)
          return body
          
        })
        .then((res)=>{
          console.log("GUARANTEES:",res)
          this.socket.emit("guarantees",res)
        })
        */
        var _this = this;
        return new Promise(function (resolve, reject) {
            resolve(_this.socket.emit('guarantees', data));
        });
    };
    SocketProvider.prototype.loanEligibility = function (data) {
        // this.storage.get('loginData')
        // .then(res=>{
        var _this = this;
        //   console.log(res)
        //   return res
        // })
        // .then((res)=>{
        //   console.log("loan eligibility:",res)
        //   this.socket.emit("loanEligibility",res)
        // }) 
        return new Promise(function (resolve, reject) {
            resolve(_this.socket.emit("loanEligibility", data));
        });
    };
    SocketProvider.prototype.loanBalances = function (data) {
        var _this = this;
        console.log("navparams data: ", data);
        // this.storage.get('loginData')
        // .then(res=>{
        //   console.log(res)
        //   return res
        // })
        // .then((res)=>{
        //   console.log("loan balances:",res)
        //   this.socket.emit("loanBalances",res)
        // })     
        return new Promise(function (resolve, reject) {
            resolve(_this.socket.emit("loanBalances", data));
        });
    };
    SocketProvider.prototype.loanApplication = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            resolve(_this.socket.emit("loanApplication", data));
        });
    };
    SocketProvider.prototype.depositFromMpesa = function (data) {
        var _this = this;
        console.log("DEPOSIT TO MPESA DATA: ", data);
        return new Promise(function (resolve, reject) {
            resolve(_this.socket.emit('depositFromMpesa', data));
        });
    };
    SocketProvider.prototype.getMemberAccounts = function () {
        var _this = this;
        this.storage.get('loginData')
            .then(function (res) {
            var body = __assign({}, res);
            console.log(body);
            return body;
        })
            .then(function (res) {
            console.log("MEMBERACCOUNTS:", res);
            _this.socket.emit("memberAccounts", res);
        });
    };
    SocketProvider.prototype.getTransactionDetails = function (data) {
        var _this = this;
        console.log("TRANSACTION DATA:", data);
        return new Promise(function (resolve, reject) {
            resolve(_this.socket.emit('transaction', data));
        });
    };
    SocketProvider.prototype.postNonMember = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // work on ofs
            resolve(_this.socket.emit('nonmemberreg', data));
        });
    };
    return SocketProvider;
}());
SocketProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng_socket_io__["Socket"],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], SocketProvider);

//# sourceMappingURL=socket.js.map

/***/ })

},[237]);
//# sourceMappingURL=main.js.map