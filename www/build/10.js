webpackJsonp([10],{

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendmpesaPageModule", function() { return SendmpesaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sendmpesa__ = __webpack_require__(359);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sendmpesa__["a" /* SendmpesaPage */]),
        ],
    })
], SendmpesaPageModule);

//# sourceMappingURL=sendmpesa.module.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendmpesaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(43);
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
    function SendmpesaPage(navCtrl, alertCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.storage = storage;
    }
    SendmpesaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SendmpesaPage');
    };
    SendmpesaPage.prototype.handleSelf = function () {
        this.storage.get('loginData').then(function (res) {
            return res;
        }).then(function (res) {
            document.getElementById('phone').value = res.data.phonenumber;
            console.log(document.getElementById('phone').value);
        });
    };
    SendmpesaPage.prototype.handleOther = function () {
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
                        document.getElementById('phone').value = data;
                        console.log(document.getElementById('phone').value);
                    }
                }
            ]
        });
        alert.present();
    };
    SendmpesaPage.prototype.handleContinue = function () {
        var _this = this;
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
    return SendmpesaPage;
}());
SendmpesaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-sendmpesa',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/sendmpesa/sendmpesa.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start >\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="ios-menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Send Mpesa</ion-title>\n    <ion-buttons end >\n      <button ion-button icon-only (click)="logOut()">\n        <ion-icon name="ios-log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list class="list" radio-group [(ngModel)]="sendTo">\n    <ion-row>\n      <ion-col col-6>\n        <ion-item>\n          <ion-label>SELF</ion-label>\n          <ion-radio color="dark" value="self" (click)="handleSelf()"></ion-radio>\n        </ion-item>      \n      </ion-col>\n      <ion-col col-6>\n        <ion-item>\n          <ion-label>OTHER</ion-label>\n          <ion-radio color="dark" value="other" (click)="handleOther()"></ion-radio>\n        </ion-item>      \n      </ion-col>\n    </ion-row>   \n\n  <ion-item>\n    <ion-label floating>Phone Number</ion-label>\n    <ion-input [(ngModel)]="phoneNumber" type="text" id="phone"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Amount</ion-label>\n    <ion-input [(ngModel)]="amount" type="text" id="amount"></ion-input>\n  </ion-item>      \n  </ion-list>\n\n\n  <hr/>\n\n  <button color="color2" ion-button round (click)="handleContinue()">CONTINUE</button>\n</ion-content>\n'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/sendmpesa/sendmpesa.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], SendmpesaPage);

//# sourceMappingURL=sendmpesa.js.map

/***/ })

});
//# sourceMappingURL=10.js.map