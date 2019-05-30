webpackJsonp([8],{

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPageModule", function() { return SignInPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_in__ = __webpack_require__(409);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sign_in__["a" /* SignInPage */]),
        ],
    })
], SignInPageModule);

//# sourceMappingURL=sign-in.module.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__summary_summary__ = __webpack_require__(116);
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
        }, function (err) {
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
        })
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
        console.log("Inside Login...");
        var data = {
            passcode: this.password,
            membernumber: this.membernumber
        };
        this.navCtrl.setRoot(page, { data: data });
        this.http.login(data).then(function (val) {
            console.log("Login Values: ", val);
            _this.loading.dismiss();
            if (val.success === true) {
                _this.navCtrl.setRoot(page, { data: data });
            }
        });
    };
    // Call Forgot Password Modal
    SignInPage.prototype.presentModal = function (modalPage) {
        var modal = this.modalCtrl.create(modalPage);
        modal.present();
    };
    SignInPage.prototype.doUnlock = function (page) {
        var modal = this.modalCtrl.create(page);
        modal.present();
    };
    return SignInPage;
}());
SignInPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-sign-in',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/sign-in/sign-in.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>SIGN IN</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <div class="appForm">\n    <ion-list>\n      <!-- Email input -->\n      \n      <ion-item>        \n        <ion-icon name="ios-mail-outline" item-left></ion-icon>\n        <ion-input placeholder="Member Number" style="text-align:right; border-radius: 4px;" [(ngModel)]="membernumber" type="text"></ion-input>\n      </ion-item>\n      <!-- password input -->\n      <ion-item>\n        <ion-icon name="ios-lock-outline" item-left></ion-icon>\n        <ion-input placeholder="P.I.N Number" style="text-align:right; border-radius: 4px;" [(ngModel)]="password" type="password"></ion-input>\n      </ion-item>\n    </ion-list>\n  </div>\n  <!--<button ion-button block color="color2" (click)="doUnlock(\'LockPage\')">UNLOCK APP (Feature Under Construction)</button>-->\n  <br>\n  <button ion-button block color="color2" (click)="doLogin(\'SummaryPage\')">Sign in</button>\n  <p float-right (click)=" presentModal(\'ForgotPasswordPage\')">Forgot Password ?</p>\n\n</ion-content>\n'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/sign-in/sign-in.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], SignInPage);

//# sourceMappingURL=sign-in.js.map

/***/ })

});
//# sourceMappingURL=8.js.map