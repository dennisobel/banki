webpackJsonp([10],{

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendmpesaPageModule", function() { return SendmpesaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sendmpesa__ = __webpack_require__(407);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SendmpesaPageModule = (function () {
    function SendmpesaPageModule() {
    }
    return SendmpesaPageModule;
}());
SendmpesaPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__sendmpesa__["a" /* SendmpesaPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sendmpesa__["a" /* SendmpesaPage */]),
        ],
    })
], SendmpesaPageModule);

//# sourceMappingURL=sendmpesa.module.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendmpesaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_http__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SendmpesaPage = (function () {
    function SendmpesaPage(viewCtrl, navCtrl, alertCtrl, loadingCtrl, httpHelper, navParams, storage) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.httpHelper = httpHelper;
        this.navParams = navParams;
        this.storage = storage;
    }
    SendmpesaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SendmpesaPage');
    };
    SendmpesaPage.prototype.onSelectSelf = function () {
        var _this = this;
        this.storage.get('loginData').then(function (res) {
            console.log(res);
            _this.httpHelper.getuser(res.membernumber).then(function (data) {
                console.log("USER:", data);
            });
            return res;
        }).then(function (res) {
            /*(<HTMLInputElement>document.getElementById('phone')).value = res.data.phonenumber
            console.log((<HTMLInputElement>document.getElementById('phone')).value)  */
        });
    };
    SendmpesaPage.prototype.onSelectOther = function () {
        var alert = this.alertCtrl.create({
            title: "Choose Other Number",
            inputs: [
                {
                    type: 'radio',
                    label: '0713318756',
                    value: '0713318756'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log("canceled");
                    }
                },
                {
                    text: "Ok",
                    handler: function (data) {
                        /*
                        (<HTMLInputElement>document.getElementById('phone')).value = data
                        console.log((<HTMLInputElement>document.getElementById('phone')).value)
                        */
                    }
                }
            ]
        });
        alert.present();
    };
    SendmpesaPage.prototype.handleContinue = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Processing Send To MPesa Payment...',
            duration: 3000
        });
        loading.present();
        var alert = this.alertCtrl.create({
            title: "Confirm M-PESA Transaction",
            message: "\n        <p>To: " + document.getElementById('phone').value + "</p>\n        <p>Amount: Ksh " + this.amount + "</p>\n        <p>Transaction Fee: Ksh 14.00</p>\n      ",
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log("canceled");
                    }
                },
                {
                    text: 'Ok',
                    handler: function () {
                        console.log(document.getElementById('phone').value);
                        console.log("" + _this.amount);
                        // send to server 
                    }
                }
            ]
        });
        alert.present();
    };
    SendmpesaPage.prototype.logOut = function () {
        this.navCtrl.setRoot('WelcomePage');
    };
    SendmpesaPage.prototype.onClose = function () {
        this.viewCtrl.dismiss();
    };
    return SendmpesaPage;
}());
SendmpesaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-sendmpesa',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/sendmpesa/sendmpesa.html"*/'\n<ion-header>\n  <!--\n  <ion-navbar hideBackButton>\n    <img  class="imagestyle" object-fit: cover height="70px"  width="470px" src="assets/images/header.jpg"/>     \n  </ion-navbar>\n  -->\n  <ion-navbar hideBackButton>\n    <!--\n    <ion-buttons start >\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="ios-menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end >\n      <button ion-button icon-only (click)="logOut()">\n        <ion-icon name="ios-log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n    -->\n    <img height="150px" width="470px" src="assets/images/sendtompesaheader.jpg"/>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="appForm">\n    <ion-list>\n      <ion-list-header>Send To Self Or Other</ion-list-header>\n\n      <ion-item>\n        <ion-label>Self/Other</ion-label>\n        <ion-select [(ngModel)]="loanType" placeholder="Select One">\n          <ion-option (ionSelect)="onSelectSelf()"  value="s" >SELF</ion-option>\n          <ion-option (ionSelect)="onSelectOther()"  value="o" >OTHER</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n  <!--<ion-list class="list" radio-group [(ngModel)]="sendTo">-->\n  <!--\n    <ion-row>\n      <ion-col col-6>\n        <ion-item>\n          <ion-label>SELF</ion-label>\n          <ion-radio color="dark" value="self" (click)="handleSelf()"></ion-radio>\n        </ion-item>      \n      </ion-col>\n      <ion-col col-6>\n        <ion-item>\n          <ion-label>OTHER</ion-label>\n          <ion-radio color="dark" value="other" (click)="handleOther()"></ion-radio>\n        </ion-item>      \n      </ion-col>\n    </ion-row>   \n    -->\n\n  <ion-item>\n    <ion-input placeholder="Phone Number" style="border: 1px solid black; text-align:right; border-radius: 4px;" [(ngModel)]="phone" type="text" id="account"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-input placeholder="Amount" style="border: 1px solid black; text-align:right; border-radius: 4px;" [(ngModel)]="amount" type="text" id="amount"></ion-input>\n  </ion-item> \n\n  <hr/>\n\n  <button color="faceColor" ion-button block (click)="handleContinue()">CONTINUE</button>\n\n  </div>\n\n\n  <ion-fab left bottom>\n    <button ion-fab mini color="gold" (click)="onClose()"><ion-icon name="md-close"></ion-icon></button>\n  </ion-fab>   \n</ion-content>\n'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/sendmpesa/sendmpesa.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_http_http__["a" /* HttpProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], SendmpesaPage);

//# sourceMappingURL=sendmpesa.js.map

/***/ })

});
//# sourceMappingURL=10.js.map