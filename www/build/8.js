webpackJsonp([8],{

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPageModule", function() { return SignUpPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_up__ = __webpack_require__(374);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignUpPageModule = (function () {
    function SignUpPageModule() {
    }
    return SignUpPageModule;
}());
SignUpPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__sign_up__["a" /* SignUpPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sign_up__["a" /* SignUpPage */]),
        ],
    })
], SignUpPageModule);

//# sourceMappingURL=sign-up.module.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(222);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Providers

var SignUpPage = (function () {
    function SignUpPage(navCtrl, toastCtrl, alertCtrl, loadingCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.http = http;
        this.terms = false;
    }
    // set root page 
    SignUpPage.prototype.doLogin = function (page) {
        var _this = this;
        var signUpData = {
            idnumber: this.id_number,
            membernumber: this.member_number,
            phonenumber: this.phone_number
        };
        if (this.terms == false) {
            var termsCondAlert = this.alertCtrl.create({
                title: "Please agree to the terms and conditions",
                buttons: [
                    {
                        text: "OK",
                    }
                ]
            });
            termsCondAlert.present();
        }
        else {
            this.http.joinSacco(signUpData)
                .then(function (result) {
                _this.navCtrl.setRoot(page);
            }, function (err) {
            });
            var accountcreatedalert = this.alertCtrl.create({
                title: "ALMOST DONE",
                message: "You will receive a verification code shortly. Enter it here.",
                inputs: [
                    {
                        name: "otp",
                        placeholder: "Enter Verification Code Here"
                    }
                ],
                buttons: [
                    {
                        text: "Submit",
                        handler: function (data) {
                            _this.http.verifyUser(data);
                            // .subscribe(res => console.log(res))
                            // this.navCtrl.push(SigninPage)
                            var passAlert = _this.alertCtrl.create({
                                title: "PASSCODE",
                                message: "Account has been verified. Now enter a memorable 4-digit passcode.",
                                inputs: [
                                    {
                                        name: "passcode",
                                        placeholder: "Passcode"
                                    }
                                ],
                                buttons: [
                                    {
                                        text: "Submit",
                                        handler: function (data) {
                                            _this.http.passCode(data);
                                            console.log(data);
                                            _this.navCtrl.push(page);
                                        }
                                    }
                                ],
                                cssClass: 'alertCustomCss'
                            });
                            passAlert.present();
                        }
                    }
                ],
                cssClass: 'alertCustomCss'
            });
            accountcreatedalert.present();
        }
    };
    SignUpPage.prototype.onVerification = function () {
        var message = "Verification code will be sent to you via SMS";
        var duration = 3000;
        var position = 'top';
        this.presentToast(message, duration, position);
    };
    //toast
    SignUpPage.prototype.presentToast = function (message, duration, position) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: duration,
            position: position
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    SignUpPage.prototype.updateTerms = function () {
        if (this.id_number === '' || this.phone_number === '') {
            var validationAlert = this.alertCtrl.create({
                title: "Please check form for empty fields",
                buttons: [
                    {
                        text: "OK"
                    }
                ],
                cssClass: 'alertCustomCss'
            });
            validationAlert.present();
        }
        else {
            console.log("Terms new state:" + this.terms);
        }
    };
    SignUpPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Authenticating...'
        });
        this.loading.present();
    };
    return SignUpPage;
}());
SignUpPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-sign-up',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/sign-up/sign-up.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>SIGN ME UP</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <div class="appForm">\n    <ion-list>\n      <!-- Member No input -->\n      <ion-item>\n        <ion-icon name="person"></ion-icon>\n        <ion-input placeholder="Member Number" style="border: 1px solid black; text-align:right; border-radius: 4px;" [(ngModel)]="member_number" type="number"></ion-input>\n      </ion-item>\n      <!-- ID input -->\n      <ion-item>\n        <ion-icon name="person"></ion-icon>\n        <ion-input placeholder="ID Number" style="border: 1px solid black; text-align:right; border-radius: 4px;" [(ngModel)]="id_number" type="number"></ion-input>\n      </ion-item>\n\n      <!-- Phone Number input -->\n      <ion-item>\n        <ion-icon name="call"></ion-icon>\n				<ion-input placeholder="Phone Number" style="border: 1px solid black; text-align:right; border-radius: 4px;" [(ngModel)]="phone_number" type="number"></ion-input>\n      </ion-item>\n\n      <!-- password input -->\n      <!--\n      <ion-item>\n        <ion-label floating>Set P.I.N</ion-label>\n        <ion-icon name="ios-lock-outline" item-left></ion-icon>\n        <ion-input type="password"></ion-input>\n      </ion-item>  -->    \n    </ion-list>\n  </div>\n  <br/>\n  <div>\n  <br/>\n    <ion-item>\n      <ion-label \n      color="primarytext" \n      style="font-size: 1.2rem;"><strong>Agree to our <a href><u>Terms</u></a> & <a href><u>Conditions</u></a></strong></ion-label>\n\n      <ion-checkbox color="primarytext" [(ngModel)]="terms" (ionChange)="updateTerms()"></ion-checkbox>\n    </ion-item>	    \n  </div>\n\n  <div>\n  <br/>\n    <!--<button ion-button block color="color2" (click)="doCancel()">Sign in</button>-->\n    <button ion-button block color="color2" (click)="doLogin(\'SummaryPage\')">Sign Up</button>\n  </div>  \n  <!--<button ion-button block color="color2" (click)="doLogin(\'SummaryPage\')">Sign up</button>-->\n</ion-content>\n'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/sign-up/sign-up.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */]])
], SignUpPage);

//# sourceMappingURL=sign-up.js.map

/***/ })

});
//# sourceMappingURL=8.js.map