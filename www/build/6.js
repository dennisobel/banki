webpackJsonp([6],{

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryPageModule", function() { return SummaryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__summary__ = __webpack_require__(350);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SummaryPageModule = (function () {
    function SummaryPageModule() {
    }
    return SummaryPageModule;
}());
SummaryPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__summary__["a" /* SummaryPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__summary__["a" /* SummaryPage */]),
        ],
    })
], SummaryPageModule);

//# sourceMappingURL=summary.module.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummaryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_socket_socket__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_http_http__ = __webpack_require__(222);
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




var SummaryPage = (function () {
    function SummaryPage(navCtrl, socketHelper, http, socket, storage, 
        // private t24: T24Provider,
        navParams) {
        this.navCtrl = navCtrl;
        this.socketHelper = socketHelper;
        this.http = http;
        this.socket = socket;
        this.storage = storage;
        this.navParams = navParams;
        this.fosaArray = [];
        this.mainSavArray = [];
        this.fosarange = 30;
        this.mainsavrange = 70;
    }
    SummaryPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log("reached summary");
        this.socket.on('connect', function () {
            var sessionid = _this.socket.ioSocket.id;
            // console.log("socket id is: ",sessionid)    
        });
        this.storage.get('loginData').then(function (data) {
            console.log("LOGIN DATA:", data);
            // console.log("NAV PARAMS DATA:",this.navParams.get('data'))
            var loginData;
            _this.socketHelper.balanceEnq(data);
            // this.socketHelper.balanceEnq(this.navParams.get('data')||data).then(()=>{
            //   this.storage.set('access',this.navParams.get('data'))
            // })
        });
        // this.socket.emit("balanceEnq",{data:"james"})
        // this.socketHelper.balanceEnq(this.navParams.get('data'))
        // this.socketHelper.balanceEnq(this.loginData)
        // this.t24.balanceEnquiry()
        this.socket.on('balEnqData', function (data) {
            console.log("balEnqData:", data);
            _this.fosaArray = data.data[0];
            _this.fosaBal = _this.fosaArray[Object.keys(_this.fosaArray)[3]];
            _this.mainSavArray = data.data[1];
            _this.mainSav = _this.mainSavArray[Object.keys(_this.mainSavArray)[3]];
            _this.name = _this.mainSavArray[Object.keys(_this.mainSavArray)[1]];
            console.log(_this.fosaBal / (_this.fosaBal + _this.mainSav));
            _this.fosarange = (_this.fosaBal / (_this.fosaBal + _this.mainSav)) * (100);
            _this.mainsavrange = (_this.mainSav / (_this.fosaBal + _this.mainSav)) * (100);
            console.log("FOSA RANGE:", _this.fosarange);
        });
    };
    // goTo Function 
    SummaryPage.prototype.goTo = function (page) {
        this.navCtrl.setRoot(page, { data: this.navParams.get('data') });
    };
    // logOut Function 
    SummaryPage.prototype.logOut = function () {
        this.navCtrl.setRoot('WelcomePage');
    };
    return SummaryPage;
}());
SummaryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-summary',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/summary/summary.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start >\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="ios-menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Summary</ion-title>\n    <ion-buttons end >\n      <button ion-button icon-only (click)="logOut()">\n        <ion-icon name="ios-log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <!-- balance and login information  -->\n  <ion-grid class="blanceGrid">\n    <ion-row>\n      <ion-col col-auto>\n        <div class="avatarContent">\n          <img src="assets/img/profile.png"/>\n          <div>\n            <h5>Ksh {{fosaBal}}</h5>\n            <ion-item>\n              <ion-range disabled="true" [(ngModel)]="fosarange"  ></ion-range>\n            </ion-item>\n            <span>FOSA Balance</span>\n          </div>\n        </div>\n      </ion-col>\n      \n      <ion-col col>\n        <div class="loginInfo">\n          <h3>Welcome</h3>\n          <h2>{{name}}</h2>\n          <!--\n          <p class="myLabel">Last Successful Login</p>\n          <p>\n            <span>Dec 2018</span>\n            -\n            <span>5:30:28 PM</span>\n          </p>\n\n           <p class="myLabel">Last Failed Login</p>\n          <p>\n            <span>Aug 2017</span>\n            -\n            <span>5:30:28 AM</span>\n          </p>\n          -->\n        </div>\n      </ion-col>\n      \n    </ion-row>\n  </ion-grid>\n\n  <!-- graphs container -->\n  <!--\n  <ion-list class="graphs">\n    <ion-list-header>\n      Click on the graphs to view more details\n    </ion-list-header>\n\n      <ion-item>\n        <p>Main Savings</p>\n        <div class="container">\n          <ion-item>\n            <ion-range disabled="true" [(ngModel)]="mainsavrange"  ></ion-range> \n          </ion-item>\n            <p>\n              <span>Main Savings</span>\n              <span>Ksh {{mainSav}}</span>\n            </p>\n        </div>\n      </ion-item>\n     \n  </ion-list>\n  -->\n\n  <!-- most use -->\n  <div class="mostUse">\n    <p class="myTitle">Our Services</p>\n    <hr>\n    <br>\n    <ion-grid>\n    <ion-row>\n      <ion-col col-4>\n          <button block ion-button (click)="goTo(\'PersonalAccountPage\')">\n            <ion-img height="80" width="80" src="assets/reicons/savingsandbalances.png"></ion-img>\n            <p>Savings Balances</p>\n          </button>        \n      </ion-col>\n\n        <ion-col col-4>\n          <button block ion-button (click)="goTo(\'LoanBalancesPage\')">\n            <ion-img height="80" width="80" src="assets/reicons/loansandbalances.png"></ion-img>\n            <p>Loan Balances</p>\n          </button>        \n        </ion-col>   \n\n        <ion-col col-4>\n          <button block ion-button (click)="goTo(\'LoanEligibilityPage\')">\n            <ion-img height="80" width="80" src="assets/reicons/loanseligibility.png"></ion-img>\n            <p>Loan Eligibility</p>\n          </button>        \n        </ion-col>             \n    </ion-row>\n    <br>\n\n    <ion-row>\n        <ion-col col-4>\n          <button block ion-button (click)="goTo(\'StatementsPage\')">\n            <ion-img height="80" width="80" src="assets/reicons/Statements.png"></ion-img>\n            <p>Statements</p>\n          </button>        \n        </ion-col> \n\n        <ion-col col-4>\n          <button block ion-button (click)="goTo(\'LoansPage\')">\n            <ion-img height="80" width="80" src="assets/reicons/requestloan.png"></ion-img>\n            <p>Request Loan</p>\n          </button>        \n        </ion-col>   \n\n        <ion-col col-4>\n          <button block ion-button (click)="goTo(\'RepayLoansPage\')">\n            <ion-img height="80" width="80" src="assets/reicons/repayloan.png"></ion-img>\n            <p>Repay Loans</p>\n          </button>        \n        </ion-col>               \n    </ion-row>\n\n    <br>\n\n    <ion-row>\n        <ion-col col-4>\n          <button block ion-button (click)="goTo(\'DepositPage\')">\n            <ion-img height="80" width="80" src="assets/reicons/depositfrommpesa.png"></ion-img>\n            <p>Deposit From MPesa</p>\n          </button>\n        </ion-col>   \n\n        <ion-col col-4>\n          <button block ion-button (click)="goTo(\'SendmpesaPage\')">\n            <ion-img height="80" width="80" src="assets/reicons/sendtompesa.png"></ion-img>\n            <p>Send To Mpesa</p>\n          </button>        \n        </ion-col>    \n\n        <ion-col col-4>\n          <button block ion-button (click)="goTo(\'BillmanagementPage\')">\n            <ion-img height="80" width="80" src="assets/reicons/buyairtimeandtokens.png"></ion-img>\n            <p>Buy Tokens and Airtime</p>\n          </button>\n        </ion-col>                \n    </ion-row>\n\n    <br>\n\n    <ion-row>\n        <ion-col col-4>\n          <button block ion-button (click)="goTo(\'PaybillPage\')">\n            <ion-img height="80" width="80" src="assets/reicons/paybill.png"></ion-img>\n            <p>Paybill</p>\n          </button>\n        </ion-col>  \n\n        <ion-col col-4>\n          <button block ion-button (click)="goTo(\'BuyGoodsPage\')">\n            <ion-img height="80" width="80" class="image" src="assets/reicons/buygoods.png"></ion-img>\n            <p>Buy Goods</p>\n          </button>\n        </ion-col> \n\n        <ion-col col-4>\n          <button block ion-button (click)="goTo(\'TransferPage\')">\n            <ion-img height="80" width="80" src="assets/reicons/internaltransfer.png"></ion-img>\n            <p>Internal Funds Transfer</p>\n          </button>\n        </ion-col>                    \n    </ion-row>\n\n    <br>\n\n    <ion-row>\n        <ion-col col-4>\n          <button block ion-button (click)="goTo(\'BanktransferPage\')">\n            <ion-img height="80" width="80" src="assets/reicons/transfertobank.png"></ion-img>\n            <p>Bank Transfer</p>\n          </button>\n        </ion-col>    \n    </ion-row>\n\n    <!--\n      <ion-row>\n\n        <ion-col col-4>\n          <button block ion-button (click)="goTo(\'CurrencyConvertorPage\')">\n            <ion-img src="assets/icon/convert.png"></ion-img>\n            <p>Currency Converter</p>\n          </button>\n        </ion-col>\n        <ion-col col-4>\n          <button block ion-button (click)="goTo(\'BeneficiariesPage\')" >\n            <ion-img src="assets/icon/group.png"></ion-img>\n            <p>Benficiaries</p>\n          </button>\n        </ion-col>\n\n        <ion-col col-4>\n          <button block ion-button (click)="goTo(\'SettingPage\')">\n            <ion-img src="assets/icon/settings.png"></ion-img>\n            <p>Setting</p>\n          </button>\n        </ion-col>          \n\n      </ion-row>     \n\n    -->       \n    </ion-grid>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/summary/summary.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_socket_socket__["a" /* SocketProvider */],
        __WEBPACK_IMPORTED_MODULE_5__providers_http_http__["a" /* HttpProvider */],
        __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__["Socket"],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], SummaryPage);

/*You hang around the barber shop long enough, soon enough you
will get a hair cut

To get something you never had, you have to do something you never did*/ 
//# sourceMappingURL=summary.js.map

/***/ })

});
//# sourceMappingURL=6.js.map