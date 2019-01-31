webpackJsonp([0],{

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPageModule", function() { return SignInPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_in__ = __webpack_require__(361);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignInPageModule = (function () {
    function SignInPageModule() {
    }
    return SignInPageModule;
}());
SignInPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__sign_in__["a" /* SignInPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sign_in__["a" /* SignInPage */]),
        ],
    })
], SignInPageModule);

//# sourceMappingURL=sign-in.module.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummaryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_socket_socket__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(43);
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
            console.log("socket id is: ", sessionid);
        });
        this.http.getuser().then(function (res) {
            console.log("HTTP RESULTS:", res);
        });
        // this.socket.emit("balanceEnq",{data:"james"})
        this.socketHelper.balanceEnq();
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
        this.navCtrl.setRoot(page);
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
        selector: 'page-summary',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/summary/summary.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start >\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="ios-menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Summary</ion-title>\n    <ion-buttons end >\n      <button ion-button icon-only (click)="logOut()">\n        <ion-icon name="ios-log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <!-- balance and login information  -->\n  <ion-grid class="blanceGrid">\n    <ion-row>\n      <ion-col col-auto>\n        <div class="avatarContent">\n          <img src="assets/img/profile.png"/>\n          <div>\n            <p>Ksh {{fosaBal}}</p>\n            <ion-item>\n              <ion-range disabled="true" [(ngModel)]="fosarange"  ></ion-range>\n            </ion-item>\n            <span>FOSA Balance</span>\n          </div>\n        </div>\n      </ion-col>\n      <ion-col col>\n        <div class="loginInfo">\n          <h5>Welcome</h5>\n          <p>{{name}}</p>\n          <p class="myLabel">Last Successful Login</p>\n          <p>\n            <span>Dec 2018</span>\n            -\n            <span>5:30:28 PM</span>\n          </p>\n\n           <p class="myLabel">Last Failed Login</p>\n          <p>\n            <span>Aug 2017</span>\n            -\n            <span>5:30:28 AM</span>\n          </p>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- graphs container -->\n  <!--\n  <ion-list class="graphs">\n    <ion-list-header>\n      Click on the graphs to view more details\n    </ion-list-header>\n\n      <ion-item>\n        <p>Main Savings</p>\n        <div class="container">\n          <ion-item>\n            <ion-range disabled="true" [(ngModel)]="mainsavrange"  ></ion-range> \n          </ion-item>\n            <p>\n              <span>Main Savings</span>\n              <span>Ksh {{mainSav}}</span>\n            </p>\n        </div>\n      </ion-item>\n     \n  </ion-list>\n  -->\n\n  <!-- most use -->\n  <div class="mostUse">\n    <p class="myTitle">Most Use</p>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-3>\n          <button block ion-button (click)="goTo(\'TransferPage\')">\n            <ion-img src="assets/icon/transfer.svg"></ion-img>\n            <p>Funds Transfer</p>\n          </button>\n        </ion-col>\n        <ion-col col-3>\n          <button block ion-button (click)="goTo(\'CurrencyConvertorPage\')">\n            <ion-img src="assets/icon/convert.svg"></ion-img>\n            <p>Currency Converter</p>\n          </button>\n        </ion-col>\n        <ion-col col-3>\n          <button block ion-button (click)="goTo(\'BeneficiariesPage\')" >\n            <ion-img src="assets/icon/group.svg"></ion-img>\n            <p>Benficiaries</p>\n          </button>\n        </ion-col>\n        <ion-col col-3>\n          <button block ion-button (click)="goTo(\'SettingPage\')">\n            <ion-img src="assets/icon/settings.svg"></ion-img>\n            <p>Setting</p>\n          </button>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-3>\n          <button block ion-button (click)="goTo(\'BillmanagementPage\')">\n            <ion-img src="assets/icon/payment.svg"></ion-img>\n            <p>Utilities And Bills</p>\n          </button>\n        </ion-col>\n        <ion-col col-3>\n          <button block ion-button (click)="goTo(\'BanktransferPage\')">\n            <ion-img src="assets/icon/transfer-money.svg"></ion-img>\n            <p>Bank Transfer</p>\n          </button>\n        </ion-col>\n        <ion-col col-3>\n          <button block ion-button (click)="goTo(\'DepositPage\')">\n            <ion-img src="assets/icon/wallet.svg"></ion-img>\n            <p>Deposit</p>\n          </button>\n        </ion-col>  \n        <ion-col col-3>\n          <button block ion-button (click)="goTo(\'SendmpesaPage\')">\n            <ion-img src="assets/icon/documents.svg"></ion-img>\n            <p>Send Mpesa</p>\n          </button>        \n        </ion-col>  \n      </ion-row>\n      <ion-row>\n        <ion-col col-3>\n          <button block ion-button (click)="goTo(\'StatementsPage\')">\n            <ion-img src="assets/icon/documents.svg"></ion-img>\n            <p>Statements</p>\n          </button>        \n        </ion-col> \n        <ion-col col-3>\n          <button block ion-button (click)="goTo(\'LoansPage\')">\n            <ion-img src="assets/icon/loan.svg"></ion-img>\n            <p>Loans</p>\n          </button>        \n        </ion-col>               \n      </ion-row>      \n    </ion-grid>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/summary/summary.html"*/,
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

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__summary_summary__ = __webpack_require__(344);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignInPage = (function () {
    function SignInPage(navCtrl, modalCtrl, alertCtrl, loadingCtrl, http, navParams) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.navParams = navParams;
    }
    SignInPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.showLoader();
        //Check if already authenticated
        this.http.checkAuthentication()
            .then(function (res) {
            console.log("already authorized");
            _this.loading.dismiss();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__summary_summary__["a" /* SummaryPage */]);
        } /*,(err)=>{
          this.loading.dismiss()
          let alert = this.alertCtrl.create({
            title:"CONNECTION ERROR",
            message:"Check internet connection and retry.",
            buttons:[
              {
                text:'Ok',
                role:'cancel',
                handler:() => {
                  console.log('Cancel clicked');
                }
              },
              
            ]
          })
    
          alert.present()
        }*/)
            .catch(function (err) {
            console.log(err);
            _this.loading.dismiss();
            var alert = _this.alertCtrl.create({
                title: "CONNECTION ERROR",
                message: "Check internet connection and retry.",
                buttons: [
                    {
                        text: 'Ok',
                        role: 'cancel',
                        handler: function () {
                            console.log('Cancel clicked');
                        }
                    },
                ]
            });
            alert.present();
        });
    };
    SignInPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Authenticating...'
        });
        this.loading.present();
    };
    SignInPage.prototype.doLogin = function (page) {
        var _this = this;
        var data = {
            passcode: this.password,
            membernumber: this.membernumber
        };
        this.http.login(data).then(function (val) {
            // console.log(val)
            if (val.success === true) {
                _this.navCtrl.setRoot(page);
            }
        });
    };
    // Call Forgot Password Modal
    SignInPage.prototype.presentModal = function (modalPage) {
        var modal = this.modalCtrl.create(modalPage);
        modal.present();
    };
    return SignInPage;
}());
SignInPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-sign-in',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/sign-in/sign-in.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>SIGN IN</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <div class="appForm">\n    <ion-list>\n      <!-- Email input -->\n      \n      <ion-item>\n        <ion-label floating>Member Number</ion-label>\n        <ion-icon name="ios-mail-outline" item-left></ion-icon>\n        <ion-input [(ngModel)]="membernumber" type="text"></ion-input>\n      </ion-item>\n      <!-- password input -->\n      <ion-item>\n        <ion-label floating>P.I.N</ion-label>\n        <ion-icon name="ios-lock-outline" item-left></ion-icon>\n        <ion-input [(ngModel)]="password" type="password"></ion-input>\n      </ion-item>\n    </ion-list>\n  </div>\n  <button ion-button block color="color2" (click)="doLogin(\'SummaryPage\')">Sign in</button>\n  <p float-right (click)=" presentModal(\'ForgotPasswordPage\')">Forgot Password ?</p>\n</ion-content>\n'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/sign-in/sign-in.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], SignInPage);

//# sourceMappingURL=sign-in.js.map

/***/ })

});
//# sourceMappingURL=0.js.map