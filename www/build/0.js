webpackJsonp([0],{

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrecustomerPageModule", function() { return PrecustomerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__precustomer__ = __webpack_require__(383);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PrecustomerPageModule = (function () {
    function PrecustomerPageModule() {
    }
    return PrecustomerPageModule;
}());
PrecustomerPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__precustomer__["a" /* PrecustomerPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__precustomer__["a" /* PrecustomerPage */]),
        ],
    })
], PrecustomerPageModule);

//# sourceMappingURL=precustomer.module.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__phonepopup_phonepopup__ = __webpack_require__(227);
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

// Page

var SignUpPage = (function () {
    function SignUpPage(popoverCtrl, navCtrl, toastCtrl, alertCtrl, loadingCtrl, navParams, http, storage) {
        this.popoverCtrl = popoverCtrl;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.http = http;
        this.storage = storage;
        this.terms = false;
    }
    SignUpPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.presentPopover(__WEBPACK_IMPORTED_MODULE_4__phonepopup_phonepopup__["a" /* PhonepopupPage */]);
        var phoneNoAlert = this.alertCtrl.create({
            title: 'GET STARTED',
            subTitle: 'Enter Your Phone Number',
            inputs: [
                {
                    name: 'phoneNumber',
                    type: 'text',
                    placeholder: '254712345678'
                }
            ],
            buttons: [
                {
                    text: 'Next',
                    handler: function (phoneNumber) {
                        var phone_number = phoneNumber;
                        console.log(phoneNumber);
                        _this.http.submitPhoneNumber(phoneNumber).then(function (data) {
                            // store locally
                            _this.storage.set('memberData', data.memberData[0]);
                            if (data.memberExist == false) {
                                var memberName_1 = data.memberData[0]['MB.CUST.NAME..................'];
                                var OTPAlert = _this.alertCtrl.create({
                                    title: "Welcome " + memberName_1,
                                    subTitle: 'We have sent you a One Time Password. Please enter it below.',
                                    inputs: [
                                        {
                                            name: 'otp',
                                            type: 'text',
                                            placeholder: 'One Time Password'
                                        }
                                    ],
                                    buttons: [
                                        {
                                            text: 'Next',
                                            handler: function (otpData) {
                                                _this.http.submitOTP(otpData)
                                                    .then(function (data) {
                                                    if (data.verified == true) {
                                                        var mnoAlert = _this.alertCtrl.create({
                                                            title: 'Enter Your SACCO Member Number',
                                                            inputs: [
                                                                {
                                                                    name: 'mno',
                                                                    type: 'text',
                                                                    placeholder: 'Member Number',
                                                                }
                                                            ],
                                                            buttons: [
                                                                {
                                                                    text: 'Next',
                                                                    handler: function (mno) {
                                                                        // compare mno to existing one.
                                                                        _this.http.submitMNO(mno)
                                                                            .then(function (data) {
                                                                            if (data.verified === true) {
                                                                                // proceed to pin
                                                                                var pinAlert = _this.alertCtrl.create({
                                                                                    title: 'Enter a memorable password',
                                                                                    inputs: [
                                                                                        {
                                                                                            name: 'password',
                                                                                            type: 'password',
                                                                                            placeholder: 'password'
                                                                                        }
                                                                                    ],
                                                                                    buttons: [
                                                                                        {
                                                                                            text: 'Next',
                                                                                            handler: function (password) {
                                                                                                _this.http.submitPassword({ password: password, mno: mno })
                                                                                                    .then(function (data) {
                                                                                                    console.log('PASSWORD FEEDBACK: ', data);
                                                                                                    if (data.success === true) {
                                                                                                        // proceed
                                                                                                        var welcomeAlert = _this.alertCtrl.create({
                                                                                                            title: "Welcome " + memberName_1,
                                                                                                            buttons: [
                                                                                                                {
                                                                                                                    text: 'Proceed',
                                                                                                                    handler: function () {
                                                                                                                        // navigate to home
                                                                                                                        _this.navCtrl.push('SummaryPage');
                                                                                                                    }
                                                                                                                }
                                                                                                            ]
                                                                                                        });
                                                                                                        welcomeAlert.present();
                                                                                                    }
                                                                                                });
                                                                                            }
                                                                                        }
                                                                                    ]
                                                                                });
                                                                                pinAlert.present();
                                                                            }
                                                                            else if (data.verified === null || data.verified === false) {
                                                                                // mno dont exist logic
                                                                                var mnoErrorAlert = _this.alertCtrl.create({
                                                                                    title: 'This member number does not exist.',
                                                                                    buttons: [
                                                                                        {
                                                                                            text: 'Retry',
                                                                                            handler: function () {
                                                                                                _this.ionViewDidLoad();
                                                                                            }
                                                                                        }
                                                                                    ]
                                                                                });
                                                                                mnoErrorAlert.present();
                                                                            }
                                                                        });
                                                                    }
                                                                }
                                                            ]
                                                        });
                                                        mnoAlert.present();
                                                    }
                                                    else if (data.verified == false) {
                                                        console.log('resend otp');
                                                        // Resend OTP Logic
                                                    }
                                                });
                                            }
                                        }
                                    ]
                                });
                                OTPAlert.present();
                            }
                            else if (data.memberExist == true) {
                                var memberNumber = data.memberData[0]['MB.CUST.NAME..................'];
                                var userExistAlert = _this.alertCtrl.create({
                                    title: "Welcome " + memberNumber + ". Please enter your member number and password to proceed",
                                    inputs: [
                                        {
                                            name: 'mno',
                                            type: 'text',
                                            placeholder: 'Member Number'
                                        },
                                        {
                                            name: 'password',
                                            type: 'password',
                                            placeholder: 'Password'
                                        }
                                    ],
                                    buttons: [
                                        {
                                            text: 'Login',
                                            handler: function (_a) {
                                                var password = _a.password, mno = _a.mno, phoneNumber = _a.phoneNumber;
                                                _this.http.submitLogin({ password: password, mno: mno, phoneNumber: phone_number.phoneNumber })
                                                    .then(function (data) {
                                                    console.log('SUBMIT LOGIN RES: ', data);
                                                    if (data.success === true) {
                                                        _this.navCtrl.push('SummaryPage');
                                                    }
                                                });
                                            }
                                        },
                                        {
                                            text: 'Cancel',
                                            role: 'cancel',
                                            handler: function () {
                                                console.log("On Cancel Join Sacco");
                                            }
                                        }
                                    ]
                                });
                                userExistAlert.present();
                            }
                        });
                    }
                }
            ]
        });
        // phoneNoAlert.present();
    };
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
    SignUpPage.prototype.presentPopover = function (page) {
        var ev = {
            target: {
                getBoundingClientRect: function () {
                    return {
                        top: '100', left: '100'
                    };
                }
            }
        };
        var popover = this.popoverCtrl.create(page, { ev: ev }, { cssClass: 'alertCustomCss', showBackdrop: true });
        popover.present({});
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
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-sign-up',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/sign-up/sign-up.html"*/'<!--\n<ion-header>\n  <ion-navbar>\n    <ion-title>ONBOARDING</ion-title>\n  </ion-navbar>\n</ion-header>\n-->\n<ion-content padding class="getstart no-scroll">\n  <!--\n  <div class="appForm">\n    <ion-list>\n      \n      <ion-item>\n        <ion-icon name="person"></ion-icon>\n        <ion-input placeholder="Member Number" style="text-align:right; border-radius: 4px;" [(ngModel)]="member_number" type="number"></ion-input>\n      </ion-item>\n      \n      <ion-item>\n        <ion-icon name="person"></ion-icon>\n        <ion-input placeholder="ID Number" style="text-align:right; border-radius: 4px;" [(ngModel)]="id_number" type="number"></ion-input>\n      </ion-item>\n\n      \n      <ion-item>\n        <ion-icon name="call"></ion-icon>\n				<ion-input placeholder="Phone Number" style="text-align:right; border-radius: 4px;" [(ngModel)]="phone_number" type="number"></ion-input>\n      </ion-item>\n\n  \n    </ion-list>\n  </div>\n  <br/>\n  <div>\n  <br/>\n    <ion-item>\n      <ion-label \n      color="primarytext" \n      style="font-size: 1.2rem;"><strong>Agree to our <a href><u>Terms</u></a> & <a href><u>Conditions</u></a></strong></ion-label>\n\n      <ion-checkbox color="primarytext" [(ngModel)]="terms" (ionChange)="updateTerms()"></ion-checkbox>\n    </ion-item>	    \n  </div>\n\n  <div>\n  <br/>\n    \n    <button ion-button block color="color2" (click)="doLogin(\'SummaryPage\')">Sign Up</button>\n  </div>  \n  -->\n  \n</ion-content>\n'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/sign-up/sign-up.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_http_http__["a" /* HttpProvider */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], SignUpPage);

//# sourceMappingURL=sign-up.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrecustomerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_up_sign_up__ = __webpack_require__(378);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PrecustomerPage = (function () {
    function PrecustomerPage(loadingCtrl, alertCtrl, toastCtrl, navCtrl, navParams, viewCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    PrecustomerPage.prototype.ionViewDidLoad = function () {
        this.presentToast('Please make an initial payment of 1500/- to activate your account', true, 'middle');
    };
    PrecustomerPage.prototype.handleContinue = function () {
        var _this = this;
        var amount = 1500;
        var firstPayAlert = this.alertCtrl.create({
            title: "About to deposit " + amount + " for account activation",
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                        // post amount
                        /*
                        let loading = this.loadingCtrl.create({
                          content: 'Processing...',
                          duration: 5000
                        });
                        loading.present();
                        */
                        _this.presentLoader('Processing', 5000).then(function () {
                            _this.alertCtrl.create({
                                title: 'Account Opened',
                                buttons: [
                                    {
                                        text: 'Member Area',
                                        handler: function () {
                                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__sign_up_sign_up__["a" /* SignUpPage */]);
                                        }
                                    }
                                ]
                            }).present();
                        });
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                }
            ]
        });
        firstPayAlert.present();
    };
    PrecustomerPage.prototype.onClose = function () {
        this.viewCtrl.dismiss();
    };
    PrecustomerPage.prototype.presentToast = function (message, close, position) {
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
    PrecustomerPage.prototype.presentLoader = function (message, duration) {
        var loading = this.loadingCtrl.create({
            content: message,
            duration: duration
        });
        return new Promise(function (resolve, reject) {
            resolve(loading.present());
        });
    };
    return PrecustomerPage;
}());
PrecustomerPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-precustomer',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/precustomer/precustomer.html"*/'<ion-header>\n  <ion-toolbar color="faceColor">      \n    <ion-title text-center>Please Pay Initial Fee</ion-title>       \n  </ion-toolbar> \n</ion-header>\n<ion-content padding>\n<div class="appForm">\n  <!--\n  <ion-list>\n    <ion-item>      \n      <ion-input placeholder="Amount" style="border: 1px solid black; text-align:right; border-radius: 4px;" [(ngModel)]="amount" type="text" id="till"></ion-input>\n    </ion-item>                 \n  </ion-list> \n  -->  \n\n  <hr>\n\n  <button color="color2" ion-button block (click)="handleContinue()">Pay 1500/-</button>\n  </div>\n\n\n  <ion-fab left bottom>\n    <button ion-fab mini color="gold" (click)="onClose()"><ion-icon name="md-close"></ion-icon></button>\n  </ion-fab>   \n</ion-content>\n'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/precustomer/precustomer.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
], PrecustomerPage);

//# sourceMappingURL=precustomer.js.map

/***/ })

});
//# sourceMappingURL=0.js.map