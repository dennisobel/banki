webpackJsonp([2],{

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alerts_alerts__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chat_chat__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__buyminutes_buyminutes__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__buyelectricity_buyelectricity__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_fabtoggle_fabtoggle__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_sockethelper_sockethelper__ = __webpack_require__(16);
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










var BuyPage = /** @class */ (function () {
    function BuyPage(navCtrl, navParams, formBuilder, modalCtrl, alertCtrl, socketHelper, fabToggleProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.socketHelper = socketHelper;
        this.fabToggleProvider = fabToggleProvider;
        this.hstry = "Token";
        this.toggleFab = false;
        this.tokenhistory = [];
        this.airtimehistory = [];
        this.services = [];
        this.paybill = [];
        this.other_or_me = [];
        this.contact = [];
        this.payvia = [];
        this.provider = [];
        this.utilsformgroup = this.formBuilder.group({
            u_service: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            u_me_or_other: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            u_contact: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            u_amount: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            u_meter_number: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            u_pay_via: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            u_provider: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        });
    }
    BuyPage.prototype.ionViewDidLoad = function () {
        //payvia
        // this.payvia = [
        // 	{
        // 		name:"FOSA Account",
        // 		value:"fosa_account"
        // 	},
        // 	{
        // 		name:"Token Loan ",
        // 		value:"tokenloan"
        // 	}
        // ]
        //provider
        this.provider = [
            {
                name: "Airtel",
                value: "airtel"
            },
            {
                name: "Safaricom",
                value: "safaricom"
            }
        ];
        //token history
        this.tokenhistory = [
            {
                tokens: "200",
                account: "123654789",
                amount: "5000.00",
                day: "1/2/2018",
                time: "3.56 P.M"
            },
            {
                tokens: "150",
                account: "987456321",
                amount: "4000.00",
                day: "2/1/2018",
                time: "2.42 A.M"
            },
            {
                tokens: "100",
                account: "456987123",
                amount: "3000.00",
                day: "8/4/2018",
                time: "1.25 A.M"
            },
        ];
        //airtime history
        this.airtimehistory = [
            {
                account: "123654789",
                amount: "500.00",
                day: "1/2/2018",
                time: "3.56 P.M"
            },
            {
                account: "987456321",
                amount: "400.00",
                day: "2/1/2018",
                time: "2.42 A.M"
            },
            {
                account: "456987123",
                amount: "300.00",
                day: "8/4/2018",
                time: "1.25 A.M"
            },
        ];
        //services
        this.services = [
            {
                name: "Buy Electricity Tokens",
                value: "buy_electricity_tokens"
            },
            {
                name: "Buy Airtime",
                value: "buy_airtime"
            }
        ];
        this.other_or_me = [
            {
                option: "Other",
                value: "other"
            },
            {
                option: "Me",
                value: "me"
            }
        ];
        this.contact = [
            {
                name: "Dennis Obel",
                mobile: "0713318756"
            },
            {
                name: "Shem Ogembo",
                mobile: "0727677068"
            },
        ];
    };
    //handle events
    BuyPage.prototype.onAlert = function () {
        var notifications = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__alerts_alerts__["a" /* AlertsPage */]);
        notifications.present();
    };
    BuyPage.prototype.onChat = function () {
        var notifications = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__chat_chat__["a" /* ChatPage */]);
        notifications.present();
    };
    BuyPage.prototype.onElectricity = function () {
        var notifications = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__buyelectricity_buyelectricity__["a" /* BuyelectricityPage */]);
        notifications.present();
    };
    BuyPage.prototype.onMinutes = function () {
        var notifications = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__buyminutes_buyminutes__["a" /* BuyminutesPage */]);
        notifications.present();
    };
    BuyPage.prototype.onToggleFab = function () {
        this.toggleFab = !this.toggleFab;
        this.fabToggleProvider.toggleFab(this.toggleFab);
    };
    BuyPage.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.utilsformgroup.value.u_pay_via);
        //calculate repayment amt
        var rate;
        var amount;
        var processing_fee;
        var amount_to_reimburse;
        if (this.chosenservice == "buy_airtime") {
            rate = 0.07;
            amount = this.utilsformgroup.value.u_amount;
            processing_fee = 22;
            amount_to_reimburse = this.reimburse(rate, amount, processing_fee);
            console.log(amount_to_reimburse);
        }
        else if (this.chosenservice == "buy_electricity_tokens") {
            rate = 0.05;
            amount = this.utilsformgroup.value.u_amount;
            processing_fee = 0;
            amount_to_reimburse = this.reimburse(rate, amount, processing_fee);
            console.log(amount_to_reimburse);
        }
        var user = {
            phoneNumber: 254727677068,
            memberNumber: 123456789
        };
        var data = {};
        var buyAlert = this.alertCtrl.create({
            title: "Confirm",
            message: this.utilsformgroup.value.u_service + " :\n\t\t\t\t\tKsh " + this.utilsformgroup.value.u_amount + " :\n\t\t\t\t\tVia " + this.utilsformgroup.value.u_pay_via + ".\n\t\t\t\t\tAmount to reimburse is " + amount_to_reimburse,
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Confirm',
                    handler: function () {
                        if (_this.chosenservice === 'buy_airtime'
                            && _this.chosen_me_or_other === 'other') {
                            data = __assign({}, user, { service: _this.utilsformgroup.value.u_service, meOther: _this.utilsformgroup.value.u_me_or_other, contact: _this.utilsformgroup.value.u_contact, amount: _this.utilsformgroup.value.u_amount, payVia: _this.utilsformgroup.value.u_pay_via });
                        }
                        else if (_this.chosenservice === 'buy_airtime'
                            && _this.chosen_me_or_other === 'me') {
                            data = __assign({}, user, { service: _this.utilsformgroup.value.u_service, meOther: _this.utilsformgroup.value.u_me_or_other, amount: _this.utilsformgroup.value.u_amount, payVia: _this.utilsformgroup.value.u_pay_via });
                        }
                        else if (_this.chosenservice === 'buy_electricity_tokens') {
                            data = __assign({}, user, { service: _this.utilsformgroup.value.u_service, amount: _this.utilsformgroup.value.u_amount, meterNumber: _this.utilsformgroup.value.u_meter_number, payVia: _this.utilsformgroup.value.u_pay_via });
                        }
                        _this.socketHelper.utilsAndBills(data);
                        console.log(data);
                        console.log('Agree clicked');
                    }
                }
            ],
            cssClass: "alertCustomCss"
        });
        buyAlert.present();
    };
    BuyPage.prototype.reimburse = function (rate, amount, processing_fee) {
        var amt_to_rmb;
        var rt = rate;
        var amt = parseInt(amount);
        var pr_fee = processing_fee;
        amt_to_rmb = (rt * amt) + pr_fee + amt;
        return amt_to_rmb;
    };
    BuyPage.prototype.onSelectService = function () {
        this.chosenservice = this.utilsformgroup.value.u_service;
        /*new technique*/
        if (this.chosenservice == "buy_airtime") {
            this.me_or_other_field = true;
            this.add_amount_field = false;
            // this.add_contact_field = false
            this.add_button_field = false;
            this.meter_number_field = false;
            // this.pay_via_field = false
            // this.provider_field = true
            this.utilsformgroup["controls"]["u_me_or_other"].reset();
            this.utilsformgroup["controls"]["u_amount"].reset();
            this.utilsformgroup["controls"]["u_pay_via"].reset();
            this.utilsformgroup["controls"]["u_provider"].reset();
            console.log(this.pay_via_field);
            if (this.pay_via_field) {
                this.pay_via_field = false;
            }
            //set payvia
            this.payvia = [
                {
                    name: "FOSA Account",
                    value: "fosaaccount"
                },
                {
                    name: "Kopa Credit",
                    value: "kopacredit"
                }
            ];
        }
        else if (this.chosenservice == "buy_electricity_tokens") {
            if (!this.add_amount_field) {
                this.add_amount_field = true;
            }
            // this.add_amount_field = true;
            this.me_or_other_field = false;
            this.add_contact_field = false;
            this.add_button_field = false;
            this.meter_number_field = false;
            this.pay_via_field = false;
            this.provider_field = false;
            this.utilsformgroup["controls"]["u_amount"].reset();
            this.utilsformgroup["controls"]["u_meter_number"].reset();
            this.utilsformgroup["controls"]["u_pay_via"].reset();
            document.getElementById("amount").style.marginTop = '-50px';
            this.payvia = [
                {
                    name: "FOSA Account",
                    value: "fosaaccount"
                },
                {
                    name: "Token Loan",
                    value: "tokenloan"
                }
            ];
        }
    };
    BuyPage.prototype.onSelectMeOrOther = function () {
        this.chosen_me_or_other = this.utilsformgroup.value.u_me_or_other;
        if (this.chosen_me_or_other == "me") {
            if (!this.add_amount_field) {
                this.add_amount_field = true;
            }
            this.add_contact_field = false;
            this.add_button_field = false;
            this.pay_via_field = false;
            // this.utilsformgroup["controls"]["u_me_or_other"].reset();
            this.utilsformgroup["controls"]["u_pay_via"].reset();
            this.utilsformgroup["controls"]["u_amount"].reset();
        }
        else if (this.chosen_me_or_other == "other") {
            console.log(this.add_contact_field);
            if (!this.add_contact_field || this.add_contact_field == null) {
                this.add_contact_field = true;
            }
            console.log(this.add_contact_field);
            if (this.add_button_field == true) {
                this.add_button_field = false;
            }
            if (this.pay_via_field == true) {
                this.add_button_field = false;
            }
            // this.add_button_field = false
            // this.pay_via_field = false
            this.utilsformgroup["controls"]["u_amount"].reset();
            this.utilsformgroup["controls"]["u_contact"].reset();
            this.utilsformgroup["controls"]["u_pay_via"].reset();
            console.log(this.add_contact_field);
            document.getElementById("amount").style.marginTop = '20px';
        }
    };
    BuyPage.prototype.onSelectProvider = function () {
        this.chosen_provider = this.utilsformgroup.value.u_provider;
        this.me_or_other_field = true;
    };
    BuyPage.prototype.onSelectContact = function () {
        // this.add_contact_field = true
        console.log(this.add_contact_field);
        this.add_amount_field = true;
        console.log(this.add_contact_field);
    };
    BuyPage.prototype.onAmountKeyPress = function () {
        if (this.chosenservice == "buy_airtime") {
            // this.add_button_field = true
            this.pay_via_field = true;
        }
        else if (this.chosenservice == "buy_electricity_tokens") {
            this.meter_number_field = true;
            // this.pay_via_field = true
        }
    };
    BuyPage.prototype.onMeterKeyPress = function () {
        // this.add_button_field = true
        if (this.chosenservice == "buy_airtime") {
        }
        else if (this.chosenservice == "buy_electricity_tokens") {
            this.pay_via_field = true;
        }
    };
    BuyPage.prototype.onSelectPayVia = function () {
        this.add_button_field = true;
    };
    BuyPage.prototype.onHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
    };
    BuyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-buy',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/buy/buy.html"*/'<ion-header>\n  <ion-navbar hideBackButton>\n    <button ion-button show menuToggle>\n      <ion-icon name=menu></ion-icon>\n    </button>\n    <ion-title>KBSACCO: Utilities & Bills</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="overaltheme">\n	<div id="body">\n	<form [formGroup]="utilsformgroup" (ngSubmit)="onSubmit()">\n		<ion-item>\n      <ion-label\n        text-left\n        style="font-size: 1.4rem;"\n        color="primarytext"><strong>Choose Service:</strong></ion-label>\n			<ion-select\n        interface="action-sheet"\n        okText="Okay"\n        cancelText="Dismiss"\n        style="font-size: 1.4rem; color:#7B1FA2;"\n        formControlName="u_service"\n        ngDefaultControl>\n          <ion-option\n            class="curves"\n            *ngFor="let data of services"\n            okText="Okay"\n            cancelText="Dismiss"\n            [value]="data.value"\n            (ionSelect)="onSelectService(data.name)">{{data.name}}</ion-option>\n			</ion-select>\n		</ion-item>\n		<br>\n		<ion-item *ngIf="provider_field == true">\n      <ion-label\n        text-left\n        style="font-size: 1.4rem;"\n        color="primarytext"><strong>Select Provider:</strong></ion-label>\n          <ion-select\n            interface="action-sheet"\n            okText="Okay"\n            cancelText="Dismiss"\n            style="font-size: 1.4rem; color:#7B1FA2;"\n            formControlName="u_provider"\n            ngDefaultControl>\n              <ion-option\n                class="curves"\n                *ngFor="let data of provider"\n                okText="Okay"\n                cancelText="Dismiss"\n                [value]="data.value"\n                (ionSelect)="onSelectProvider(data.name)">{{data.name}}</ion-option>\n          </ion-select>\n		</ion-item>\n		<br>\n		<ion-item *ngIf="me_or_other_field == true">\n      <ion-label\n        text-left\n        style="font-size: 1.4rem;"\n        color="primarytext"><strong>Buy for me or other?:</strong></ion-label>\n          <ion-select\n            interface="action-sheet"\n            okText="Okay"\n            cancelText="Dismiss"\n            style="font-size: 1.4rem; color:#7B1FA2;"\n            formControlName="u_me_or_other"\n            ngDefaultControl>\n            <ion-option\n              class="curves"\n              *ngFor="let data of other_or_me"\n              okText="Okay"\n              cancelText="Dismiss"\n              color="accent"\n              [value]="data.value"\n              (ionSelect)="onSelectMeOrOther(data.option)">{{data.option}}</ion-option>\n          </ion-select>\n		</ion-item>\n		<br>\n		<ion-item *ngIf="add_contact_field == true || utilsformgroup.value.u_me_or_other == \'other\'">\n      <ion-label\n        text-left\n        style="font-size: 1.4rem;"\n        color="primarytext"><strong>Choose Contact:</strong></ion-label>\n        <ion-select\n          interface="action-sheet"\n          okText="Okay"\n          cancelText="Dismiss"\n          style="font-size: 1.4rem; color:#7B1FA2;"\n          formControlName="u_contact"\n          ngDefaultControl>\n            <ion-option\n            class="curves"\n            *ngFor="let data of contact"\n            okText="Okay"\n            cancelText="Dismiss"\n            color="accent"\n            [value]="data.number"\n            (ionSelect)="onSelectContact(data.option)">{{data.name}} : {{data.mobile}}</ion-option>\n          </ion-select>\n		</ion-item>\n		<br>\n		<div id="amount">\n	        <ion-item *ngIf="add_amount_field == true || chosen_me_or_other == \'me\'">\n	        	<ion-input (ionChange)="onAmountKeyPress()" style="font-size: 1.4rem; color:#7B1FA2;"  formControlName="u_amount" placeholder="Amount" type="text"></ion-input>\n			</ion-item>\n		</div>\n\n		<br>\n        <ion-item *ngIf="meter_number_field == true">\n        	<ion-input (ionChange)="onMeterKeyPress()" style="font-size: 1.4rem; color:#7B1FA2;"  formControlName="u_meter_number" placeholder="Meter Number" type="text"></ion-input>\n		</ion-item>\n		<br>\n		<ion-item *ngIf="pay_via_field == true">\n			<ion-label text-left style="font-size: 1.4rem;" color="primarytext"><strong>Pay Through:</strong></ion-label>\n			<ion-select\n			interface="action-sheet"\n			okText="Okay"\n			cancelText="Dismiss"\n			style="font-size: 1.4rem; color:#7B1FA2;"\n			formControlName="u_pay_via"\n			ngDefaultControl>\n				<ion-option\n				class="curves"\n				*ngFor="let data of payvia"\n				okText="Okay"\n				cancelText="Dismiss"\n				color="accent"\n				[value]="data.value"\n				(ionSelect)="onSelectPayVia(data.name)">{{data.name}}</ion-option>\n			</ion-select>\n		</ion-item>\n		<br>\n        <ion-item *ngIf="add_button_field == true">\n			<button  type="submit" style="float: center; font-size: 1.2rem;" ion-button block outline color="darkprimarycolor">SEND</button>\n		</ion-item>\n	</form>\n\n\n	</div>\n	<ion-fab center bottom>\n	<button [(ngModel)]="toggleFab" (click)="onToggleFab()" class="footer title-bar" ion-fab color="lightprimarycolor" ngDefaultControl>\n	  <ion-icon name="add"></ion-icon>\n	</button>\n	<ion-fab-list side="right">\n	  <button (click)="onAlert()" class="footer title-bar" ion-fab color="lightprimarycolor">\n	    <ion-icon name="md-notifications"></ion-icon>\n	    <div class="label">Alert</div>\n	  </button>\n	</ion-fab-list>\n	<ion-fab-list side="left">\n	  <button class="footer title-bar" ion-fab (click)="onChat()">\n	    <ion-icon name="md-text"></ion-icon>\n	    <div class="label">Chat</div>\n	  </button>\n	</ion-fab-list>\n<!-- 	<ion-fab-list side="left">\n	  <button menuToggle class="footer title-bar" ion-fab color="lightprimarycolor">\n	    <ion-icon name="menu"></ion-icon>\n	    <div class="label">Menu</div>\n	  </button>\n	</ion-fab-list>  -->\n	</ion-fab>\n\n    <ion-fab right top edge>\n      <button [(ngModel)]="toggleFab" (click)="onHome()" class="footer title-bar" ion-fab color="lightprimarycolor" ngDefaultControl>\n        <ion-icon name="md-home"></ion-icon>\n      </button>\n    </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/buy/buy.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_9__providers_sockethelper_sockethelper__["a" /* SocketHelperProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_fabtoggle_fabtoggle__["a" /* FabtoggleProvider */]])
    ], BuyPage);
    return BuyPage;
}());

// TODO: clearFields(){}
//# sourceMappingURL=buy.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signin_signin__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__info_info__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__joinapp_joinapp__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_http__ = __webpack_require__(557);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var StartPage = /** @class */ (function () {
    function StartPage(navCtrl, http, modalCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.languages = [];
        this.slides = [];
    }
    StartPage.prototype.ionViewDidLoad = function () {
        // Sample this
        this.http.get('http://ionic.io', {}, {})
            .then(function (data) {
            console.log("works");
        })
            .catch(function (error) {
            console.log("not works");
        });
        // eof sample
        this.languages = ["English", "French"];
        this.slides = [
            {
                description: "WELCOME TO KENYA BANKERS SACCO Where we help you save your money and finance your projects."
            },
            {
                description: "Take our LOW interest loans, DEVELOPMENT LOAN, EDUCATION LOAN, EMERGENCY LOAN, Whichever loan you want...."
            }
        ];
    };
    // event handling
    StartPage.prototype.onSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
    };
    StartPage.prototype.onSignin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signin_signin__["a" /* SigninPage */]);
    };
    StartPage.prototype.onJoinApp = function () {
        // console.log("join app")
        // this.socketHelper.joinApp()
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__joinapp_joinapp__["a" /* JoinAppPage */]);
    };
    StartPage.prototype.onInfo = function () {
        console.log("grrrr");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__info_info__["a" /* InfoPage */]);
        // let info = this.modalCtrl.create(InfoPage)
        // info.present();
    };
    StartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-start',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/start/start.html"*/'<ion-content class="no-scroll overaltheme" padding>\n<!-- 	<div>\n		<ion-row>\n			<ion-col col-3>\n				<ion-label style="font-size: 1.4rem" color="darkprimarycolor"><strong>Language:</strong></ion-label>\n			</ion-col>\n			<ion-col col-6>\n				<ion-select style="font-size: 1.1rem" interface="action-sheet" [(ngModel)]="language">\n					<ion-option\n					*ngFor="let data of languages"\n					okText="Okay"\n					cancelText="Dismiss">{{data}}</ion-option>\n				</ion-select>\n			</ion-col>\n		</ion-row>\n	</div> -->\n\n	<div text-center>\n		<!-- <img class="logo" src="assets/imgs/kbsacco.png"> -->\n	</div>\n\n	<br>\n\n\n	<main>\n	<div class="marker"></div>\n	<h1>K</h1>\n	<h1 class="r">B</h1>\n	<h1 class="e1">S</h1>\n	<h1 class="s1">A</h1>\n	<h1 class="s2">C</h1>\n	<h1 class="e2">C</h1>\n	<h1>O</h1>\n	</main>\n\n	<br><br>\n\n	<div text-center>\n		<ion-slides autoplay="5000" loop="true" speed="500">\n			<ion-slide *ngFor="let slide of slides">\n				<p class="slide" [innerHTML]="slide.description"></p>\n			</ion-slide>\n		</ion-slides>\n	</div>\n\n	<br><br><br><br><br><br><br>\n	<!--\n	<div text-center>\n		<ion-badge\n		(click)="onInfo()"\n		color="darkprimarycolor"\n		style="font-size: 1.3rem;"><strong><u>Why join Kenya Bankers Sacco</u></strong></ion-badge>\n	</div>\n	-->\n\n	<!--<br><hr>-->\n\n	<div>\n    <button  style="font-size: 1.2rem;" ion-button outline block color="darkprimarycolor" (click)="onSignup()">JOIN SACCO - (Create Account)</button><br>\n    <!--<button  style="font-size: 1.2rem;" ion-button outline block color="darkprimarycolor" (click)="onJoinApp()">JOIN M-BANKING - (Sacco Members)</button><br>-->\n	<button  style="font-size: 1.2rem;" ion-button outline block color="darkprimarycolor" (click)="onSignin()">SIGNIN</button>\n	</div>\n	<br><br><hr>\n\n	<div text-center>\n		<ion-badge\n		(click)="onInfo()"\n		color="darkprimarycolor"\n		style="font-size: 1.1rem;"><strong>By using this app, you agree with the <u>terms and conditions.</u></strong></ion-badge>\n	</div>\n\n<!-- 	<div text-center>\n		<button\n		(click)="onInfo()"\n		text-wrap\n		ion-button\n		block\n		full\n		outline\n		color="darkprimarycolor"\n		style="font-size: 1.1rem;"><strong>By using this app, you agree with the <u>terms and conditions.</u></strong></button>\n	</div>	 -->\n</ion-content>\n'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/start/start.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_native_http__["a" /* HTTP */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_native_http__["a" /* HTTP */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _d || Object])
    ], StartPage);
    return StartPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=start.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_page_transitions__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InfoPage = /** @class */ (function () {
    function InfoPage(navCtrl, navParams, viewCtrl, nativePageTransitions) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.nativePageTransitions = nativePageTransitions;
        this.info = "terms";
    }
    InfoPage.prototype.ionViewDidLoad = function () { };
    //handle events
    InfoPage.prototype.dismiss = function () {
        /**Animate*/
        var options = {
            direction: 'up',
            duration: 400
        };
        this.nativePageTransitions.flip(options);
        /**End Animation*/
        this.viewCtrl.dismiss();
    };
    InfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-info',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/info/info.html"*/'<ion-header>\n  <ion-navbar hideBackButton>\n    <!-- <button ion-button show menuToggle>\n      <ion-icon name=menu></ion-icon>\n    </button> -->\n    <ion-title>Info</ion-title>\n\n	<ion-toolbar text-center>\n		<ion-segment [(ngModel)]="info" style="font-size:1.0rem;" color="dark">\n			<ion-segment-button value="terms" style=" font-style: bold;">Terms</ion-segment-button>\n			<ion-segment-button value="whyjoin" style=" font-style: bold;">Why Join</ion-segment-button>\n		</ion-segment>\n	</ion-toolbar>    \n  </ion-navbar> \n</ion-header>\n\n<ion-content padding>\n\n\n	<div [ngSwitch]="info">\n		<div *ngSwitchCase="\'terms\'">\n			<p>Terms</p>\n		</div>\n\n		<div *ngSwitchCase="\'whyjoin\'">\n			<p>Why Join</p>\n		</div>		\n	</div>\n	<ion-fab top right edge>\n		<button class="title-bar" ion-fab mini color="secondarytext" (click)="dismiss()"><ion-icon name="md-close"></ion-icon></button>\n	</ion-fab> \n</ion-content>\n'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/info/info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_page_transitions__["a" /* NativePageTransitions */]])
    ], InfoPage);
    return InfoPage;
}());

//# sourceMappingURL=info.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alerts_alerts__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chat_chat__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__transferbank_transferbank__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__transferkbs_transferkbs__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__transfermpesa_transfermpesa__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_chart_js__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_fabtoggle_fabtoggle__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_sockethelper_sockethelper__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var AccountsPage = /** @class */ (function () {
    // private kbsaccoformgroup: FormGroup
    // private mpesaformgroup: FormGroup
    // private bankformgroup: FormGroup
    function AccountsPage(navCtrl, navParams, formBuilder, alertCtrl, modalCtrl, socketHelper, fabToggleProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.socketHelper = socketHelper;
        this.fabToggleProvider = fabToggleProvider;
        this.accountbtns = "kbsacco";
        this.accounts = [];
        this.contacts = [];
        this.banks = [];
        this.history = [];
        this.toggleFab = false;
        /*
        //Implemented elsewhere
        //kbsacco
        this.kbsaccoformgroup = this.formBuilder.group({
            k_amount:["",Validators.required],
            k_accountnumber:["",Validators.required]
        })

        //mpesa
        this.mpesaformgroup = this.formBuilder.group({
            m_amount:["",Validators.required],
            m_contact:["",Validators.required]
        })

        //bank
        this.bankformgroup = this.formBuilder.group({
            b_amount:["",Validators.required],
            b_accountnumber:["",Validators.required]			,
            b_bank:["",Validators.required]
        })
        */
    }
    AccountsPage.prototype.ionViewDidLoad = function () {
        // load account balances
        this.socketHelper
            .accountBalances()
            .then(function (res) {
        });
        this.history = [
            {
                name: "James Kimani",
                account: "123654789",
                amount: "5000.00",
                day: "1/2/2018",
                time: "3.56 P.M"
            },
            {
                name: "Victoria Bamboo",
                account: "987456321",
                amount: "4000.00",
                day: "2/1/2018",
                time: "2.42 A.M"
            },
            {
                name: "Davis Obonyo",
                account: "456987123",
                amount: "3000.00",
                day: "8/4/2018",
                time: "1.25 A.M"
            },
        ];
        this.accounts = [
            {
                name: "Dennis Obel",
                accountnumber: "123456789"
            },
            {
                name: "Shem Ogembo",
                accountnumber: "987654321"
            }
        ];
        //contact list
        this.contacts = [
            {
                name: "Brian Abuto",
                phonenumber: "0727677068"
            },
            {
                name: "Risper Kemunto",
                phonenumber: "0713318756"
            },
            {
                name: "Charles Mwamba",
                phonenumber: "07214956"
            },
        ];
        //banks list
        this.banks = ["K.C.B", "CO-OP BANK", "I&M BANK", "FAULU BANK", "EQUITY BANK"];
        //doughnut graph
        this.doughnutChart = new __WEBPACK_IMPORTED_MODULE_9_chart_js__["Chart"](this.doughnutCanvas.nativeElement, {
            type: 'doughnut',
            data: {
                labels: ["Checking", "Savings", "Visa"],
                datasets: [{
                        label: 'Amount',
                        data: [3000, 1000, 2000],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        hoverBackgroundColor: [
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56",
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56"
                        ],
                        borderWidth: 1
                    }]
            },
            options: {
                legend: {
                    labels: {
                        fontColor: "black",
                        fontSize: 12
                    }
                }
            }
        });
        //bar graph
        this.barChart = new __WEBPACK_IMPORTED_MODULE_9_chart_js__["Chart"](this.barCanvas.nativeElement, {
            type: "bar",
            data: {
                labels: ["Checking", "Savings", "Visa"],
                datasets: [{
                        label: 'Amount',
                        data: [2000, 3000, 1000],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
            },
            options: {
                legend: {
                    labels: {
                        fontColor: "black",
                        fontSize: 12
                    }
                },
                scales: {
                    xAxes: [
                        {
                            stacked: true,
                            gridLines: {
                                display: false,
                            },
                            ticks: {
                                fontColor: "black",
                                fontSize: 12
                            },
                        }
                    ],
                    yAxes: [
                        {
                            stacked: true,
                            gridLines: {
                                display: false,
                            },
                            ticks: {
                                beginAtZero: true,
                                fontColor: "black",
                                fontSize: 12
                            },
                        }
                    ],
                }
            }
        });
        //line graph
        this.lineChart = new __WEBPACK_IMPORTED_MODULE_9_chart_js__["Chart"](this.lineCanvas.nativeElement, {
            type: 'line',
            data: {
                labels: ["Checking", "Savings", "Visa"],
                datasets: [
                    {
                        label: "Amount",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [2000, 3000, 1000],
                        spanGaps: false,
                    }
                ]
            },
            options: {
                legend: {
                    labels: {
                        fontColor: "black",
                        fontSize: 12
                    }
                },
                scales: {
                    xAxes: [
                        {
                            stacked: true,
                            gridLines: {
                                display: false,
                            },
                            ticks: {
                                fontColor: "black",
                                fontSize: 12
                            },
                        }
                    ],
                    yAxes: [
                        {
                            stacked: true,
                            gridLines: {
                                display: false,
                            },
                            ticks: {
                                beginAtZero: true,
                                fontColor: "black",
                                fontSize: 12
                            },
                        }
                    ],
                }
            }
        });
    };
    /*
    //Implemented Elsewhere
    onkbsacco(){
        console.log(this.kbsaccoformgroup.value)

        let payAlert = this.alertCtrl.create({
            title:"Confirm",
            message:`You are about to transfer Ksh ${this.kbsaccoformgroup.value.k_amount} to account ${this.kbsaccoformgroup.value.k_accountnumber}.`,
            buttons: [
                {
                  text: 'Disagree',
                  handler: () => {
                    console.log('Disagree clicked');
                  }
                },
                {
                  text: 'Agree',
                  handler: () => {
                    console.log('Agree clicked');
                  }
                }
            ],
            cssClass:'alertCustomCss'
        })

        payAlert.present()
    }

    onmpesa(){
        console.log(this.mpesaformgroup.value)

        let payAlert = this.alertCtrl.create({
            title:"Confirm",
            message:`You are about to transfer Ksh ${this.mpesaformgroup.value.m_amount} to mobile number ${this.mpesaformgroup.value.m_contact}.`,
            buttons: [
                {
                  text: 'Disagree',
                  handler: () => {
                    console.log('Disagree clicked');
                  }
                },
                {
                  text: 'Agree',
                  handler: () => {
                    console.log('Agree clicked');
                  }
                }
            ],
            cssClass:'alertCustomCss'
        })

        payAlert.present()
    }

    onbank(){
        console.log(this.bankformgroup.value)

        let payAlert = this.alertCtrl.create({
            title:"Confirm",
            message:`You are about to transfer Ksh ${this.bankformgroup.value.b_amount} to account number ${this.bankformgroup.value.b_accountnumber} at ${this.bankformgroup.value.b_bank}.`,
            buttons: [
                {
                  text: 'Disagree',
                  handler: () => {
                    console.log('Disagree clicked');
                  }
                },
                {
                  text: 'Agree',
                  handler: () => {
                    console.log('Agree clicked');
                  }
                }
            ],
            cssClass:'alertCustomCss'
        })

        payAlert.present()
    }
    */
    //
    //handle events
    AccountsPage.prototype.onAlert = function () {
        var notifications = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__alerts_alerts__["a" /* AlertsPage */]);
        notifications.present();
    };
    AccountsPage.prototype.onChat = function () {
        var notifications = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__chat_chat__["a" /* ChatPage */]);
        notifications.present();
    };
    AccountsPage.prototype.onToggleFab = function () {
        this.toggleFab = !this.toggleFab;
        this.fabToggleProvider.toggleFab(this.toggleFab);
    };
    AccountsPage.prototype.onInternal = function () {
        var bankModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__transferkbs_transferkbs__["a" /* TransferkbsPage */]);
        bankModal.present();
    };
    AccountsPage.prototype.onBankTransfer = function () {
        var bankModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__transferbank_transferbank__["a" /* TransferbankPage */]);
        bankModal.present();
    };
    AccountsPage.prototype.onMpesaTransfer = function () {
        var bankModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__transfermpesa_transfermpesa__["a" /* TransfermpesaPage */]);
        bankModal.present();
    };
    AccountsPage.prototype.onHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('barCanvas'),
        __metadata("design:type", Object)
    ], AccountsPage.prototype, "barCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('doughnutCanvas'),
        __metadata("design:type", Object)
    ], AccountsPage.prototype, "doughnutCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('lineCanvas'),
        __metadata("design:type", Object)
    ], AccountsPage.prototype, "lineCanvas", void 0);
    AccountsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-accounts',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/accounts/accounts.html"*/'<ion-header>\n  <ion-navbar hideBackButton>\n    <button ion-button show menuToggle>\n      <ion-icon name=menu></ion-icon>\n    </button>\n    <ion-title>KBSACCO: Funds Transfer</ion-title>\n  </ion-navbar> \n</ion-header>\n\n<ion-content padding class="overaltheme">\n  <div id="body">\n  <div text-center class="curves chart">\n    <ion-slides pager autoplay="3000" speed="500">\n\n      <ion-slide>\n        <div>\n            <ion-label style="font-size: 1.5rem; color: #ede7f6"><strong>Accounts</strong></ion-label>\n            <div>\n              <canvas #barCanvas></canvas>\n            </div>\n        </div>        \n      </ion-slide>    \n\n      <ion-slide>\n        <div>\n            <ion-label style="font-size: 1.5rem; color: #ede7f6"><strong>Accounts</strong></ion-label>\n            <div>\n              <canvas #doughnutCanvas></canvas>\n            </div>\n        </div>        \n      </ion-slide>        \n\n      <ion-slide>\n        <div>\n            <ion-label style="font-size: 1.5rem; color: #ede7f6"><strong>Accounts</strong></ion-label>\n            <div>\n              <canvas #lineCanvas></canvas>\n            </div>\n        </div>        \n      </ion-slide>  \n\n    </ion-slides>\n  </div>\n\n  <br>\n\n  <div text-center id="otherloanops">       \n    <button \n    (click)="onInternal()"\n    class="otheropsbtn text-transform"\n    style="color: #ede7f6" \n    color="lightprimarycolor" \n    ion-button \n    outline \n    block>Internal Funds Transfer\n    </button>       \n\n    <button \n    (click)="onMpesaTransfer()"\n    class="otheropsbtn text-transform"\n    style="color: #ede7f6" \n    color="lightprimarycolor" \n    ion-button \n    outline \n    block>M-Pesa Funds Transfer\n    </button>\n\n    <button \n    (click)="onBankTransfer()"\n    class="otheropsbtn text-transform"\n    style="color: #ede7f6" \n    color="lightprimarycolor" \n    ion-button \n    outline \n    block>Bank Funds Transfer\n    </button>\n  </div>\n\n</div>\n\n  <ion-fab center bottom>\n    <button [(ngModel)]="toggleFab" (click)="onToggleFab()" class="footer title-bar" ion-fab color="lightprimarycolor" ngDefaultControl>\n      <ion-icon name="add"></ion-icon>\n    </button>\n    <ion-fab-list side="right">\n      <button (click)="onAlert()" class="footer title-bar" ion-fab color="lightprimarycolor">\n        <ion-icon name="md-notifications"></ion-icon>\n        <div class="label">Alert</div>\n      </button>\n    </ion-fab-list>\n    <ion-fab-list side="left">\n      <button class="footer title-bar" ion-fab (click)="onChat()">\n        <ion-icon name="md-text"></ion-icon>\n        <div class="label">Chat</div>\n      </button>\n    </ion-fab-list>      \n<!--     <ion-fab-list side="left">\n      <button menuToggle class="footer title-bar" ion-fab color="lightprimarycolor">\n        <ion-icon name="menu"></ion-icon>\n        <div class="label">Menu</div>\n      </button>\n    </ion-fab-list>   -->  \n  </ion-fab>    	\n\n    <ion-fab right top edge>\n      <button [(ngModel)]="toggleFab" (click)="onHome()" class="footer title-bar" ion-fab color="lightprimarycolor" ngDefaultControl>\n        <ion-icon name="md-home"></ion-icon>\n      </button>     \n    </ion-fab>  		\n</ion-content>\n'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/accounts/accounts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_11__providers_sockethelper_sockethelper__["a" /* SocketHelperProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_fabtoggle_fabtoggle__["a" /* FabtoggleProvider */]])
    ], AccountsPage);
    return AccountsPage;
}());

//# sourceMappingURL=accounts.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoansPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alerts_alerts__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_chat__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loanapply_loanapply__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__loanpay_loanpay__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__guarantees_guarantees__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_chart_js__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_fabtoggle_fabtoggle__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_sockethelper_sockethelper__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var LoansPage = /** @class */ (function () {
    function LoansPage(navCtrl, navParams, modalCtrl, socketHelper, fabToggleProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.socketHelper = socketHelper;
        this.fabToggleProvider = fabToggleProvider;
        this.qualifyfor = [];
        this.pendingloans = [];
        this.pending = [];
        this.toggleFab = false;
        this.loanBalances = [];
    }
    LoansPage.prototype.ionViewDidEnter = function () {
        // this.hiddenbtn = document.getElementById("otherloanops")
        // this.hiddenbtn.style.display = "none";
    };
    LoansPage.prototype.ionViewDidLoad = function () {
        // load loan balances
        this.socketHelper
            .getLoanBal()
            .then(function (res) {
        });
        //loans qualified for
        this.qualifyfor = [
            {
                amount: "50000",
                type: "M-Loan"
            },
            {
                amount: "100000",
                type: "Micro Loan"
            },
            {
                amount: "1000000",
                type: "Development Loan"
            },
            {
                amount: "700000",
                type: "Education Loan"
            },
            {
                amount: "400000",
                type: "Express Loan"
            },
            {
                amount: "30000",
                type: "FOSA Loan"
            }
        ];
        //pending loans
        this.pending = [
            {
                type: "FOSA",
                datetaken: "01/01/2018",
                datedue: "01/01/2019",
                amounttaken: "120000",
                amountpaid: "40000",
                balance: "80000",
                thismonthpaidstatus: "paid"
            },
            {
                type: "M-Loan",
                datetaken: "01/04/2018",
                datedue: "01/09/2018",
                amounttaken: "20000",
                amountpaid: "5000",
                balance: "15000",
                thismonthpaidstatus: "paid"
            }
        ];
        var graph = {};
        var lbls = [];
        var paid = [];
        var bal = [];
        for (var i = 0; i < this.pending.length; i++) {
            lbls.push(this.pending[i].type);
            paid.push(this.pending[i].amountpaid);
            bal.push(this.pending[i].balance);
            graph.type = "bar",
                graph.data = {
                    labels: lbls,
                    datasets: [
                        {
                            type: "bar",
                            label: "Paid",
                            data: paid,
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255,99,132,1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
                            ],
                            borderWidth: 1
                        },
                        {
                            type: "bar",
                            label: "Balance",
                            data: bal,
                            backgroundColor: [
                                'rgba(255,99,132,1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                            borderWidth: 1
                        }
                    ]
                },
                graph.options = {
                    legend: {
                        fontColor: "black",
                        labels: {
                            fontColor: "black",
                            fontSize: 12
                        },
                        label: {
                            fontColor: "black",
                            fontSize: 12
                        }
                    },
                    scales: {
                        xAxes: [
                            {
                                stacked: true,
                                gridLines: {
                                    display: false,
                                },
                                ticks: {
                                    fontColor: "black",
                                    fontSize: 12
                                },
                            }
                        ],
                        yAxes: [
                            {
                                stacked: true,
                                gridLines: {
                                    display: false,
                                },
                                ticks: {
                                    fontColor: "black",
                                    fontSize: 12
                                },
                            }
                        ],
                    }
                };
        }
        console.log(graph);
        this.barChart = new __WEBPACK_IMPORTED_MODULE_8_chart_js__["Chart"](this.barCanvas.nativeElement, graph);
    };
    //handle events
    LoansPage.prototype.onAlert = function () {
        var notifications = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__alerts_alerts__["a" /* AlertsPage */]);
        notifications.present();
    };
    LoansPage.prototype.onChat = function () {
        var notifications = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__chat_chat__["a" /* ChatPage */]);
        notifications.present();
    };
    LoansPage.prototype.onApply = function () {
        var notifications = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__loanapply_loanapply__["a" /* LoanapplyPage */]);
        notifications.present();
    };
    LoansPage.prototype.onPay = function () {
        var notifications = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__loanpay_loanpay__["a" /* LoanpayPage */]);
        notifications.present();
    };
    LoansPage.prototype.onGuarantees = function () {
        var notifications = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__guarantees_guarantees__["a" /* GuaranteesPage */]);
        notifications.present();
    };
    LoansPage.prototype.onToggleFab = function () {
        this.toggleFab = !this.toggleFab;
        this.fabToggleProvider.toggleFab(this.toggleFab);
        // if(this.toggleFab == true){
        // 	console.log("block")
        // 	this.hiddenbtn.style.display = "block";
        // }else{
        // 	console.log("none")
        // 	this.hiddenbtn.style.display = "none";
        // }
        // let newbtns = `
        // 	<button
        // 	(click)="onApply()"
        //        class="otheropsbtn"
        // 	style="color: #ede7f6"
        // 	color="lightprimarycolor"
        // 	ion-button
        // 	outline
        // 	block>APPLY
        // 	</button>
        // 	<button
        // 	(click)="onPay()"
        //        class="otheropsbtn"
        // 	style="color: #ede7f6"
        // 	color="lightprimarycolor"
        // 	ion-button
        // 	outline
        // 	block>PAY
        // 	</button>
        // 	<button
        // 	(click)="onGuarantees()"
        //        class="otheropsbtn"
        // 	style="color: #ede7f6"
        // 	color="lightprimarycolor"
        // 	ion-button
        // 	outline
        // 	block>GUARANTEES
        // 	</button>
        // `
        // this.hiddenbtn.innerHTML = newbtns
    };
    LoansPage.prototype.onHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('barCanvas'),
        __metadata("design:type", Object)
    ], LoansPage.prototype, "barCanvas", void 0);
    LoansPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-loans',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/loans/loans.html"*/'<ion-header>\n  <ion-navbar hideBackButton>\n    <button ion-button show menuToggle>\n      <ion-icon name=menu></ion-icon>\n    </button>\n    <ion-title>KBSACCO : Loans</ion-title>\n  </ion-navbar> \n</ion-header>\n\n<ion-content padding class="overaltheme">\n    <div id="body">\n	<!-- Pending Loan Graphs -->\n	<ion-label color="iconsandtext"><strong>Loan Status</strong></ion-label>\n    <div class="chart">\n      <canvas height="295" #barCanvas></canvas>\n    </div>\n\n    <br><br>\n    <!-- Other Loan Ops -->\n    <div text-center id="otherloanops">    		\n		<button \n		(click)="onApply()"\n        class="otheropsbtn text-transform" \n		style="color: #ede7f6" \n		color="lightprimarycolor" \n		ion-button \n		outline \n		block>Apply Loan\n		</button>    		\n	\n		<button \n		(click)="onPay()"\n        class="otheropsbtn text-transform"\n		style="color: #ede7f6" \n		color="lightprimarycolor" \n		ion-button \n		outline \n		block>Pay Loan\n		</button>\n	\n		<button \n		(click)="onGuarantees()"\n        class="otheropsbtn text-transform"\n		style="color: #ede7f6" \n		color="lightprimarycolor" \n		ion-button \n		outline \n		block>Guarantees / Guarantors\n		</button>\n    </div>\n\n    <br>\n\n	<!-- Qualifies for -->\n	<div text-center class="title-bar curves">\n	<ion-row>\n	  <ion-col col-6>\n	    <ion-label color="iconsandtext"><strong>Loans Qualified For</strong></ion-label>\n	  </ion-col>\n	  <ion-col col-6>\n<!-- 	    <button style="float: center; font-size: 1.0rem;" ion-button outline icon-only small color="primarytext">\n	      <ion-icon name="more"></ion-icon>\n	    </button> -->          \n	  </ion-col>\n	</ion-row>\n\n	<ion-list>\n	  <ion-item *ngFor="let data of qualifyfor">\n	    <ion-row>\n	      <ion-col col-6>\n	        <p class="slide"><strong>{{data.type}}</strong></p>\n	      </ion-col>\n	      <ion-col col-6>\n	        <p class="slide">Kshs: {{data.amount}}</p>\n	      </ion-col>\n	    </ion-row>\n	  </ion-item>       \n	</ion-list> \n	</div>\n    </div>\n    \n    <ion-fab center bottom>\n    <button [(ngModel)]="toggleFab" (click)="onToggleFab()" class="footer title-bar" ion-fab color="lightprimarycolor" ngDefaultControl>\n      <ion-icon name="add"></ion-icon>\n    </button>\n    <ion-fab-list side="right">\n      <button (click)="onAlert()" class="footer title-bar" ion-fab color="lightprimarycolor">\n        <ion-icon name="md-notifications"></ion-icon>\n        <div class="label">Alert</div>\n      </button>\n    </ion-fab-list>\n    <ion-fab-list side="left">\n      <button class="footer title-bar" ion-fab (click)="onChat()">\n        <ion-icon name="md-text"></ion-icon>\n        <div class="label">Chat</div>\n      </button>\n    </ion-fab-list>      \n<!--     <ion-fab-list side="left">\n      <button menuToggle class="footer title-bar" ion-fab color="lightprimarycolor">\n        <ion-icon name="menu"></ion-icon>\n        <div class="label">Menu</div>\n      </button>\n    </ion-fab-list>  -->   \n    </ion-fab>  \n\n    <ion-fab right top edge>\n	    <button [(ngModel)]="toggleFab" (click)="onHome()" class="footer title-bar" ion-fab color="lightprimarycolor" ngDefaultControl>\n	      <ion-icon name="md-home"></ion-icon>\n	    </button>    	\n    </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/loans/loans.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_10__providers_sockethelper_sockethelper__["a" /* SocketHelperProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_fabtoggle_fabtoggle__["a" /* FabtoggleProvider */]])
    ], LoansPage);
    return LoansPage;
}());

//# sourceMappingURL=loans.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PricingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alerts_alerts__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_chat__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sendmoneypricing_sendmoneypricing__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__paybillspricing_paybillspricing__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__buyairtimepricing_buyairtimepricing__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__accountpricing_accountpricing__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__loanpricing_loanpricing__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_fabtoggle_fabtoggle__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var PricingPage = /** @class */ (function () {
    function PricingPage(navCtrl, modalCtrl, navParams, fabToggleProvider) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.fabToggleProvider = fabToggleProvider;
        this.toggleFab = false;
        this.pricecatalogue = [];
    }
    PricingPage.prototype.ionViewDidLoad = function () { };
    //handle events
    PricingPage.prototype.onAlert = function () {
        var notifications = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__alerts_alerts__["a" /* AlertsPage */]);
        notifications.present();
    };
    PricingPage.prototype.onChat = function () {
        var notifications = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__chat_chat__["a" /* ChatPage */]);
        notifications.present();
    };
    PricingPage.prototype.onToggleFab = function () {
        this.toggleFab = !this.toggleFab;
        this.fabToggleProvider.toggleFab(this.toggleFab);
    };
    PricingPage.prototype.onAccount = function () {
        var notifications = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__accountpricing_accountpricing__["a" /* AccountpricingPage */]);
        notifications.present();
    };
    PricingPage.prototype.onSendMoney = function () {
        var notifications = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__sendmoneypricing_sendmoneypricing__["a" /* SendmoneypricingPage */]);
        notifications.present();
    };
    PricingPage.prototype.onPayBills = function () {
        var notifications = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__paybillspricing_paybillspricing__["a" /* PaybillspricingPage */]);
        notifications.present();
    };
    PricingPage.prototype.onBuyAirtime = function () {
        var notifications = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__buyairtimepricing_buyairtimepricing__["a" /* BuyairtimepricingPage */]);
        notifications.present();
    };
    PricingPage.prototype.onLoans = function () {
        var loanpricing = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__loanpricing_loanpricing__["a" /* LoanpricingPage */]);
        loanpricing.present();
    };
    PricingPage.prototype.onHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    PricingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-pricing',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/pricing/pricing.html"*/'<ion-header>\n  <ion-navbar hideBackButton>\n    <button ion-button show menuToggle>\n      <ion-icon name=menu></ion-icon>\n    </button>\n    <ion-title>KBSACCO: Pricing</ion-title>\n  </ion-navbar> \n</ion-header>\n\n<ion-content padding class="overaltheme">\n	<div id="body">\n		<div text-center id="otherloanops">     \n		<br> \n		<button \n		(click)="onAccount()"\n		class="otheropsbtn text-transform"\n		style="color: #ede7f6" \n		color="lightprimarycolor" \n		ion-button \n		outline \n		block>Balance Enquiry & Statement Charges\n		</button>   \n\n		<button \n		(click)="onSendMoney()"\n		class="otheropsbtn text-transform"\n		style="color: #ede7f6" \n		color="lightprimarycolor" \n		ion-button \n		outline \n		block>Fund Transfer Charges\n		</button>       \n\n		<button \n		(click)="onPayBills()"\n		class="otheropsbtn text-transform"\n		style="color: #ede7f6" \n		color="lightprimarycolor" \n		ion-button \n		outline \n		block>Utilities Transaction Charges\n		</button>\n\n		<button \n		(click)="onLoans()"\n		class="otheropsbtn text-transform"\n		style="color: #ede7f6" \n		color="lightprimarycolor" \n		ion-button \n		outline \n		block>Loan Interest Rates & Charges\n		</button>\n		</div>			\n	</div>\n\n	<ion-fab center bottom>\n	<button [(ngModel)]="toggleFab" (click)="onToggleFab()" class="footer title-bar" ion-fab color="lightprimarycolor" ngDefaultControl>\n	  <ion-icon name="add"></ion-icon>\n	</button>\n	<ion-fab-list side="right">\n	  <button (click)="onAlert()" class="footer title-bar" ion-fab color="lightprimarycolor">\n	    <ion-icon name="md-notifications"></ion-icon>\n	    <div class="label">Alert</div>\n	  </button>\n	</ion-fab-list>\n	<ion-fab-list side="left">\n	  <button class="footer title-bar" ion-fab (click)="onChat()">\n	    <ion-icon name="md-text"></ion-icon>\n	    <div class="label">Chat</div>\n	  </button>\n	</ion-fab-list>      \n<!-- 	<ion-fab-list side="left">\n	  <button menuToggle class="footer title-bar" ion-fab color="lightprimarycolor">\n	    <ion-icon name="menu"></ion-icon>\n	    <div class="label">Menu</div>\n	  </button>\n	</ion-fab-list>  -->   \n	</ion-fab> \n\n    <ion-fab right top edge>\n      <button [(ngModel)]="toggleFab" (click)="onHome()" class="footer title-bar" ion-fab color="lightprimarycolor" ngDefaultControl>\n        <ion-icon name="md-home"></ion-icon>\n      </button>     \n    </ion-fab>  	\n</ion-content>\n'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/pricing/pricing.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_10__providers_fabtoggle_fabtoggle__["a" /* FabtoggleProvider */]])
    ], PricingPage);
    return PricingPage;
}());

//# sourceMappingURL=pricing.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnquiriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alerts_alerts__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_chat__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__balanceenquiry_balanceenquiry__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ministatementenquiry_ministatementenquiry__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__fullstatementenquiry_fullstatementenquiry__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_page_transitions__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_fabtoggle_fabtoggle__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var EnquiriesPage = /** @class */ (function () {
    function EnquiriesPage(navCtrl, modalCtrl, viewCtrl, fabToggleProvider, nativePageTransitions) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.fabToggleProvider = fabToggleProvider;
        this.nativePageTransitions = nativePageTransitions;
        this.toggleFab = false;
    }
    EnquiriesPage.prototype.ionViewDidLoad = function () { };
    //handle events
    EnquiriesPage.prototype.onAlert = function () {
        var notifications = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__alerts_alerts__["a" /* AlertsPage */]);
        notifications.present();
    };
    EnquiriesPage.prototype.onChat = function () {
        var notifications = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__chat_chat__["a" /* ChatPage */]);
        notifications.present();
    };
    EnquiriesPage.prototype.onToggleFab = function () {
        this.toggleFab = !this.toggleFab;
        this.fabToggleProvider.toggleFab(this.toggleFab);
    };
    EnquiriesPage.prototype.onHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    EnquiriesPage.prototype.handleBalanceEnquiry = function () {
        var balEnq = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__balanceenquiry_balanceenquiry__["a" /* BalanceenquiryPage */]);
        balEnq.present();
    };
    EnquiriesPage.prototype.handleMiniStatement = function () {
        var miniEnq = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__ministatementenquiry_ministatementenquiry__["a" /* MinistatementenquiryPage */]);
        miniEnq.present();
    };
    EnquiriesPage.prototype.handleFullStatement = function () {
        var fullEnq = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__fullstatementenquiry_fullstatementenquiry__["a" /* FullstatementenquiryPage */]);
        fullEnq.present();
    };
    EnquiriesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-enquiries',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/enquiries/enquiries.html"*/'<ion-header>\n	<ion-navbar hideBackButton>\n		<button ion-button show menuToggle>\n			<ion-icon name=menu></ion-icon>\n		</button>\n		<ion-title>KBSACCO: Enquiries</ion-title>\n	</ion-navbar> \n</ion-header>\n<ion-content padding class="overaltheme">\n	<div id="body">\n			<div text-center id="otherloanops">       \n				<button \n				(click)="handleBalanceEnquiry()"\n				class="otheropsbtn text-transform"\n				style="color: #ede7f6" \n				color="lightprimarycolor" \n				ion-button \n				outline \n				block>Balance Enquiry\n				</button>       \n		\n				<button \n				(click)="handleMiniStatement()"\n				class="otheropsbtn text-transform"\n				style="color: #ede7f6" \n				color="lightprimarycolor" \n				ion-button \n				outline \n				block>Mini Statement\n				</button>\n		\n				<button \n				(click)="handleFullStatement()"\n				class="otheropsbtn text-transform"\n				style="color: #ede7f6" \n				color="lightprimarycolor" \n				ion-button \n				outline \n				block>Full Statement\n				</button>\n			</div>		\n	</div>\n	<ion-fab center bottom>\n	<button [(ngModel)]="toggleFab" (click)="onToggleFab()" class="footer title-bar" ion-fab color="lightprimarycolor" ngDefaultControl>\n	  <ion-icon name="add"></ion-icon>\n	</button>\n	<ion-fab-list side="right">\n	  <button (click)="onAlert()" class="footer title-bar" ion-fab color="lightprimarycolor">\n	    <ion-icon name="md-notifications"></ion-icon>\n	    <div class="label">Alert</div>\n	  </button>\n	</ion-fab-list>\n	<ion-fab-list side="left">\n	  <button class="footer title-bar" ion-fab (click)="onChat()">\n	    <ion-icon name="md-text"></ion-icon>\n	    <div class="label">Chat</div>\n	  </button>\n	</ion-fab-list>      \n	</ion-fab> \n\n	<ion-fab right top edge>\n      <button [(ngModel)]="toggleFab" (click)="onHome()" class="footer title-bar" ion-fab color="lightprimarycolor" ngDefaultControl>\n        <ion-icon name="md-home"></ion-icon>\n      </button>     \n    </ion-fab>  \n</ion-content>\n'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/enquiries/enquiries.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_9__providers_fabtoggle_fabtoggle__["a" /* FabtoggleProvider */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_page_transitions__["a" /* NativePageTransitions */]])
    ], EnquiriesPage);
    return EnquiriesPage;
}());

//# sourceMappingURL=enquiries.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alerts_alerts__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_chat__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_fabtoggle_fabtoggle__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, modalCtrl, navParams, fabToggleProvider, http) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.fabToggleProvider = fabToggleProvider;
        this.http = http;
        this.toggleFab = false;
    }
    AboutPage.prototype.ionViewWillEnter = function () {
        this.initializeMap();
        this.getMarkers();
    };
    //handle events
    AboutPage.prototype.onAlert = function () {
        var notifications = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__alerts_alerts__["a" /* AlertsPage */]);
        notifications.present();
    };
    AboutPage.prototype.onChat = function () {
        var notifications = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__chat_chat__["a" /* ChatPage */]);
        notifications.present();
    };
    AboutPage.prototype.onToggleFab = function () {
        this.toggleFab = !this.toggleFab;
        this.fabToggleProvider.toggleFab(this.toggleFab);
    };
    AboutPage.prototype.onCall = function () {
        console.log("calling kbsacco");
    };
    //Handle Map
    AboutPage.prototype.initializeMap = function () {
        var latLng = new google.maps.LatLng(-1.2938871, 36.807509);
        var mapOptions = {
            center: latLng,
            disableDefault: true,
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    };
    AboutPage.prototype.getMarkers = function () {
        var _this = this;
        this.http.get("assets/data/location.json")
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.addMarkersToMap(data);
            console.log(data);
        });
    };
    AboutPage.prototype.addMarkersToMap = function (location) {
        for (var _i = 0, location_1 = location; _i < location_1.length; _i++) {
            var loc = location_1[_i];
            var position = new google.maps.LatLng(loc.latitude, loc.longitude);
            var locMarker = new google.maps.Marker({ position: position, title: loc.title });
            locMarker.setMap(this.map);
        }
    };
    AboutPage.prototype.onHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('mapcontainer'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], AboutPage.prototype, "mapElement", void 0);
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-about',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/about/about.html"*/'<ion-content class=" no-scroll overaltheme">\n	<div id="body">\n		<div #mapcontainer id="map"></div>\n	</div>\n\n\n\n	<ion-fab center bottom>\n	<button [(ngModel)]="toggleFab" (click)="onToggleFab()" class="footer title-bar" ion-fab color="lightprimarycolor" ngDefaultControl>\n	  <ion-icon name="add"></ion-icon>\n	</button>\n	<ion-fab-list side="right">\n	  <button (click)="onAlert()" class="footer title-bar" ion-fab color="lightprimarycolor">\n	    <ion-icon name="md-notifications"></ion-icon>\n	    <div class="label">Alert</div>\n	  </button>\n	</ion-fab-list>\n	<ion-fab-list side="left">\n	  <button class="footer title-bar" ion-fab (click)="onChat()">\n	    <ion-icon name="md-text"></ion-icon>\n	    <div class="label">Chat</div>\n	  </button>\n	</ion-fab-list>      \n	<ion-fab-list side="top">\n	  <button (click)="onHome()" class="footer title-bar" ion-fab color="lightprimarycolor">\n	    <ion-icon name="md-home"></ion-icon>\n	    <div class="label">Home</div>\n	  </button>\n	</ion-fab-list>    \n	</ion-fab> \n\n	<ion-fab left bottom>\n		<button (click)="onCall()" class="footer title-bar" ion-fab color="lightprimarycolor" ngDefaultControl>\n		  <ion-icon name="md-call"></ion-icon>\n		</button>		\n	</ion-fab>\n\n	<ion-fab mini center top>\n	  <button menuToggle class="footer title-bar" ion-fab mini color="lightprimarycolor">\n	    <ion-icon name="menu"></ion-icon>\n	    <!-- <div class="label">Menu</div> -->\n	  </button>	\n	</ion-fab>	\n</ion-content>\n'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/about/about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__providers_fabtoggle_fabtoggle__["a" /* FabtoggleProvider */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaybillspricingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_page_transitions__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaybillspricingPage = /** @class */ (function () {
    function PaybillspricingPage(navCtrl, viewCtrl, navParams, nativePageTransitions) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.nativePageTransitions = nativePageTransitions;
    }
    PaybillspricingPage.prototype.ionViewDidLoad = function () { };
    //handle events
    PaybillspricingPage.prototype.dismiss = function () {
        /**Animate*/
        var options = {
            direction: 'up',
            duration: 400
        };
        this.nativePageTransitions.flip(options);
        /**End Animation*/
        this.viewCtrl.dismiss();
    };
    PaybillspricingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-paybillspricing',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/paybillspricing/paybillspricing.html"*/'<ion-header>\n  <ion-toolbar text-center>\n  	Pay Bills Pricing\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n	<div id="body">\n		<div text-center id="otherloanops">      \n			<div\n			class="otheropsbtn text-transform"\n			style="color: #ede7f6" \n			color="lightprimarycolor">\n			<p>Buy Token</p>\n			<p>Ksh 22.00</p>\n			</div>   \n			<br>\n			<div\n			class="otheropsbtn text-transform"\n			style="color: #ede7f6" \n			color="lightprimarycolor">\n			<p>Airtime</p>\n			<p>FREE</p>\n			</div>   									\n		</div>			\n	</div>\n\n	<ion-fab top right edge>\n		<button class="title-bar" ion-fab mini color="secondarytext" (click)="dismiss()"><ion-icon name="md-close"></ion-icon></button>\n	</ion-fab>\n</ion-content>\n'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/paybillspricing/paybillspricing.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_page_transitions__["a" /* NativePageTransitions */]])
    ], PaybillspricingPage);
    return PaybillspricingPage;
}());

//# sourceMappingURL=paybillspricing.js.map

/***/ }),

/***/ 147:
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
webpackEmptyAsyncContext.id = 147;

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketHelperProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_socket_io__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng_socket_io__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { rejects } from 'assert';
var SocketHelperProvider = /** @class */ (function () {
    function SocketHelperProvider(socket) {
        this.socket = socket;
    }
    SocketHelperProvider.prototype.onConnect = function () {
        this.socket.on('connect', function () {
            console.log("socket open");
        });
    };
    SocketHelperProvider.prototype.onVerified = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    SocketHelperProvider.prototype.onDisconnect = function () {
        this.socket.on('disconnect', function () {
            console.log("connection lost");
        });
    };
    // Oauth
    SocketHelperProvider.prototype.joinApp = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            resolve(_this.socket.emit('joinApp', data));
        });
    };
    SocketHelperProvider.prototype.signIn = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            resolve(_this.socket.emit('signIn', data));
        });
    };
    SocketHelperProvider.prototype.signUp = function (data) {
        this.socket.emit('signUp', data);
    };
    // Enquiries
    SocketHelperProvider.prototype.balanceEnq = function (data) {
        this.socket.emit('balanceEnq', data);
    };
    SocketHelperProvider.prototype.miniStatEnq = function (data) {
        this.socket.emit('miniStatEnq', data);
    };
    SocketHelperProvider.prototype.fullStatEnq = function (data) {
        this.socket.emit('fullStatEnq', data);
    };
    // Loans
    // Get loan balances
    SocketHelperProvider.prototype.getLoanBal = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            resolve(_this.socket.emit('getLoanBal'));
        });
    };
    // Apply Loan
    SocketHelperProvider.prototype.applyMLoan = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            resolve(_this.socket.emit('applyMLoan', data));
        });
    };
    SocketHelperProvider.prototype.applyExpressLoan = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            resolve(_this.socket.emit('applyExpressLoan', data));
        });
    };
    SocketHelperProvider.prototype.applyFosaAdvance = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            resolve(_this.socket.emit('applyFosaAdvance', data));
        });
    };
    // Pay Loan
    SocketHelperProvider.prototype.payLoan = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            resolve(_this.socket.emit('payLoan', data));
        });
    };
    // Guarantees/Guarantors
    SocketHelperProvider.prototype.guaranteesGuarantors = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            resolve(_this.socket.emit('guaranteesGuarantors'));
        });
    };
    // Funds Transfer
    // Get Account Balances
    SocketHelperProvider.prototype.accountBalances = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            resolve(_this.socket.emit('accountBalances'));
        });
    };
    SocketHelperProvider.prototype.internalFundsTransfer = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            resolve(_this.socket.emit('internalFundsTransfer', data));
        });
    };
    SocketHelperProvider.prototype.mpesaFundsTransfer = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            resolve(_this.socket.emit('mpesaFundsTransfer', data));
        });
    };
    SocketHelperProvider.prototype.bankFundsTransfer = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            resolve(_this.socket.emit('bankFundsTransfer', data));
        });
    };
    // Utilities and bills
    SocketHelperProvider.prototype.utilsAndBills = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            resolve(_this.socket.emit('utillsAndBills', data));
        });
    };
    SocketHelperProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng_socket_io__["Socket"]])
    ], SocketHelperProvider);
    return SocketHelperProvider;
}());

//# sourceMappingURL=sockethelper.js.map

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/altlanding/altlanding.module": [
		554,
		0
	],
	"../pages/paybillspricing/paybillspricing.module": [
		555,
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
webpackAsyncContext.id = 188;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FabtoggleProvider; });
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

var FabtoggleProvider = /** @class */ (function () {
    function FabtoggleProvider() {
    }
    FabtoggleProvider.prototype.toggleFab = function (toggle) {
        if (toggle) {
            document.getElementById("body").style.display = "none";
            // if(document.getElementById("otherloanops")==null){
            // 	console.log("otherloanops not exist")
            // }else if(document.getElementById("otherloanops")){
            // 	console.log("otherloanops exist")
            // 	document.getElementById("otherloanops").style.display = "inline";
            // }
        }
        else {
            document.getElementById("body").style.display = "block";
            // if(document.getElementById("otherloanops")==null){
            // 	console.log("otherloanops not exist")
            // }else{
            // 	document.getElementById("otherloanops").style.display = "none";
            // }		
            // document.getElementById("otherloanops").style.display = "none";
        }
    };
    FabtoggleProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], FabtoggleProvider);
    return FabtoggleProvider;
}());

//# sourceMappingURL=fabtoggle.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuyminutesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_page_transitions__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BuyminutesPage = /** @class */ (function () {
    function BuyminutesPage(navCtrl, navParams, viewCtrl, toastCtrl, alertCtrl, formBuilder, nativePageTransitions) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.nativePageTransitions = nativePageTransitions;
        this.accounts = [];
        this.airtimeTransaction = this.formBuilder.group({
            amount: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            accountnumber: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    BuyminutesPage.prototype.ionViewDidLoad = function () {
        this.accounts = [
            {
                name: "Dennis Obel",
                accountnumber: "123456789"
            },
            {
                name: "Shem Ogembo",
                accountnumber: "987654321"
            }
        ];
    };
    //handle events
    BuyminutesPage.prototype.dismiss = function () {
        /**Animate*/
        var options = {
            direction: 'up',
            duration: 400
        };
        this.nativePageTransitions.flip(options);
        /**End Animation*/
        this.viewCtrl.dismiss();
    };
    BuyminutesPage.prototype.onSubmit = function () {
        console.log(this.airtimeTransaction.value);
        var payAlert = this.alertCtrl.create({
            title: "Confirm",
            message: "You are about to buy Ksh " + this.airtimeTransaction.value.amount + " worth of airtime from account " + this.airtimeTransaction.value.accountnumber + ".",
            buttons: [
                {
                    text: 'Disagree',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Agree',
                    handler: function () {
                        console.log('Agree clicked');
                    }
                }
            ],
            cssClass: 'alertCustomCss'
        });
        payAlert.present();
    };
    BuyminutesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-buyminutes',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/buyminutes/buyminutes.html"*/'<ion-content class="modal-style no-scroll curves" padding>\n	<ion-label text-right color="secondarytext"><strong>BUY AIRTIME</strong></ion-label>\n	<br>\n\n  <form [formGroup]="airtimeTransaction" (ngSubmit)="onSubmit()">\n    <ion-item class="curves">\n    <ion-label><ion-icon name="md-cash"></ion-icon></ion-label>\n    <ion-input style="font-size: 1.3rem;" formControlName="amount" placeholder="Amount" type="text"></ion-input>\n    </ion-item>	\n\n    <ion-item>\n      <ion-label style="font-size: 1.4rem;" color="secondarytext"><strong>From Account:</strong></ion-label>\n      <ion-select interface="action-sheet" okText="Okay" cancelText="Dismiss" style="font-size: 1.4rem;" formControlName="accountnumber" ngDefaultControl>\n        <ion-option \n        *ngFor="let data of accounts"\n        color="accent"\n        [value]="data.accountnumber">{{data.name}}</ion-option>\n      </ion-select>           \n    </ion-item> \n    \n    <ion-item class="curves">\n      <button class="curves" type="submit"  style="float: center; font-size: 1.2rem;" ion-button block color="dividercolor" [disabled]="!airtimeTransaction.valid">MAKE PAYMENT<ion-icon name="md-arrow-round-forward"></ion-icon></button>\n    </ion-item>               	\n  </form>\n\n\n\n<!--   <form [formGroup]="airtimeTransaction" (ngSubmit)="onSubmit()">\n    <ion-item class="curves">\n    <ion-label><ion-icon name="md-cash"></ion-icon></ion-label>\n    <ion-input style="font-size: 1.3rem;" formControlName="amount" placeholder="Amount" type="text"></ion-input>\n    </ion-item> \n\n    <ion-item>\n      <ion-label style="font-size: 1.4rem;" color="secondarytext"><strong>From Account:</strong></ion-label>\n      <ion-select interface="action-sheet" okText="Okay" cancelText="Dismiss" style="font-size: 1.4rem;" formControlName="accountnumber" ngDefaultControl>\n        <ion-option \n        *ngFor="let data of accounts"\n        color="accent"        \n        [value]="data.accountnumber">{{data.name}}</ion-option>\n      </ion-select>           \n    </ion-item> \n    \n    <ion-item class="curves">\n      <button class="curves" type="submit"  style="float: center; font-size: 1.2rem;" ion-button block color="dividercolor" [disabled]="!airtimeTransaction.valid">MAKE PAYMENT<ion-icon name="md-arrow-round-forward"></ion-icon></button>\n    </ion-item>     \n  </form>  --> \n\n	<ion-fab top right>\n		<button class="title-bar" ion-fab mini color="secondarytext" (click)="dismiss()"><ion-icon name="md-close"></ion-icon></button>\n	</ion-fab>\n</ion-content>\n'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/buyminutes/buyminutes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_page_transitions__["a" /* NativePageTransitions */]])
    ], BuyminutesPage);
    return BuyminutesPage;
}());

//# sourceMappingURL=buyminutes.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuyelectricityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_page_transitions__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BuyelectricityPage = /** @class */ (function () {
    function BuyelectricityPage(navCtrl, navParams, viewCtrl, toastCtrl, alertCtrl, formBuilder, nativePageTransitions) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.nativePageTransitions = nativePageTransitions;
        this.accounts = [];
        this.electricityTransaction = this.formBuilder.group({
            amount: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            accountnumber: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    BuyelectricityPage.prototype.ionViewDidLoad = function () {
        this.accounts = [
            {
                name: "Dennis Obel",
                accountnumber: "123456789"
            },
            {
                name: "Shem Ogembo",
                accountnumber: "987654321"
            }
        ];
    };
    //handle events
    BuyelectricityPage.prototype.dismiss = function () {
        /**Animate*/
        var options = {
            direction: 'up',
            duration: 400
        };
        this.nativePageTransitions.flip(options);
        /**End Animation*/
        this.viewCtrl.dismiss();
    };
    BuyelectricityPage.prototype.onSubmit = function () {
        console.log(this.electricityTransaction.value);
        var payAlert = this.alertCtrl.create({
            title: "Confirm",
            message: "You are about to buy Ksh " + this.electricityTransaction.value.amount + " worth of tokens from account " + this.electricityTransaction.value.accountnumber + ".",
            buttons: [
                {
                    text: 'Disagree',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Agree',
                    handler: function () {
                        console.log('Agree clicked');
                    }
                }
            ],
            cssClass: 'alertCustomCss'
        });
        payAlert.present();
    };
    BuyelectricityPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-buyelectricity',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/buyelectricity/buyelectricity.html"*/'<ion-content class="modal-style no-scroll curves" padding>\n	<ion-label style="text-align:right;" color="secondarytext"><strong>BUY TOKENS</strong></ion-label>\n	<br>\n\n<!-- 	<ion-list>\n        <ion-item class="curves">\n        <ion-label><ion-icon name="md-cash"></ion-icon></ion-label>\n        <ion-input style="font-size: 1.3rem;" [(ngModel)]="Amount" placeholder="Amount" type="text"></ion-input>\n        </ion-item>	\n\n        <ion-item>\n          <ion-label style="font-size: 1.4rem;" color="secondarytext"><strong>From Account:</strong></ion-label>\n          <ion-select interface="action-sheet" okText="Okay" cancelText="Dismiss" style="font-size: 1.4rem;">\n            <ion-option \n            *ngFor="let data of accounts"\n            color="accent"\n            [value]="data.accountnumber">{{data.name}}</ion-option>\n          </ion-select>           \n        </ion-item> \n        \n        <ion-item class="curves">\n          <button class="curves" style="float: center; font-size: 1.2rem;" ion-button block color="dividercolor" (click)="onSubmit()">MAKE PAYMENT<ion-icon name="md-arrow-round-forward"></ion-icon></button>\n        </ion-item>               	\n	</ion-list> -->\n\n  <form [formGroup]="electricityTransaction" (ngSubmit)="onSubmit()">\n    <ion-item class="curves">\n    <ion-label><ion-icon name="md-cash"></ion-icon></ion-label>\n    <ion-input style="font-size: 1.3rem;" formControlName="amount" placeholder="Amount" type="text"></ion-input>\n    </ion-item> \n\n    <ion-item>\n      <ion-label style="font-size: 1.4rem;" color="secondarytext"><strong>From Account:</strong></ion-label>\n      <ion-select interface="action-sheet" okText="Okay" cancelText="Dismiss" style="font-size: 1.4rem;" formControlName="accountnumber" ngDefaultControl>\n        <ion-option \n        *ngFor="let data of accounts"\n        color="accent"        \n        [value]="data.accountnumber">{{data.name}}</ion-option>\n      </ion-select>           \n    </ion-item> \n    \n    <ion-item class="curves">\n      <button class="curves" type="submit"  style="float: center; font-size: 1.2rem;" ion-button block color="dividercolor" [disabled]="!electricityTransaction.valid">MAKE PAYMENT<ion-icon name="md-arrow-round-forward"></ion-icon></button>\n    </ion-item>     \n  </form>\n\n	<ion-fab top right>\n		<button class="title-bar" ion-fab mini color="secondarytext" (click)="dismiss()"><ion-icon name="md-close"></ion-icon></button>\n	</ion-fab>\n</ion-content>\n'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/buyelectricity/buyelectricity.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_page_transitions__["a" /* NativePageTransitions */]])
    ], BuyelectricityPage);
    return BuyelectricityPage;
}());

//# sourceMappingURL=buyelectricity.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_sockethelper_sockethelper__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_http__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// providers


var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, toastCtrl, alertCtrl, loadingCtrl, socketHelper, http, navParams) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.socketHelper = socketHelper;
        this.http = http;
        this.navParams = navParams;
        this.terms = false;
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        // //Check if already authenticated
        // this.http.checkAuthentication().then((res) => {
        //     // console.log("Already authorized");
        //     this.loading.dismiss();
        //     this.navCtrl.setRoot(HomePage);
        // }, (err) => {
        //     // console.log("Not already authorized");
        //     this.loading.dismiss();
        // });	
    };
    //event handling
    SignupPage.prototype.onCancel = function () {
        this.navCtrl.pop();
    };
    SignupPage.prototype.onSignup = function () {
        // this.showLoader();
        var _this = this;
        var signUpData = {
            idnumber: this.id_number,
            phonenumber: this.phone_number
        };
        if (this.terms == false) {
            var termsCondAlert = this.alertCtrl.create({
                title: "Please agree to the terms and conditions",
                buttons: [
                    {
                        text: "OK",
                    }
                ],
                cssClass: 'alertCustomCss'
            });
            termsCondAlert.present();
        }
        else {
            this.http.joinSacco(signUpData)
                .then(function (result) {
                // this.loading.dismiss();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
            }, function (err) {
                // this.loading.dismiss();
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
                                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
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
    SignupPage.prototype.onVerification = function () {
        var message = "Verification code will be sent to you via SMS";
        var duration = 3000;
        var position = 'top';
        this.presentToast(message, duration, position);
    };
    SignupPage.prototype.onVerificationMpesa = function () {
    };
    //toast
    SignupPage.prototype.presentToast = function (message, duration, position) {
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
    SignupPage.prototype.updateTerms = function () {
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
    SignupPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Authenticating...'
        });
        this.loading.present();
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signup',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/signup/signup.html"*/'<ion-content class="no-scroll overaltheme" padding>\n	<br><br><br>\n	<div class="signin">\n		<div>\n			<ion-list>	\n				<ion-item class="curves">\n				<ion-label><ion-icon name="person"></ion-icon></ion-label>\n				<ion-input style="font-size: 1.3rem;" [(ngModel)]="id_number" placeholder="I.D No/Passport" type="text"></ion-input>\n				</ion-item>			\n\n				<ion-item class="curves">\n				<ion-label><ion-icon name="call"></ion-icon></ion-label>\n				<ion-input style="font-size: 1.3rem;" [(ngModel)]="phone_number" placeholder="Phone Number" type="text"></ion-input>\n				</ion-item>											\n			</ion-list>\n		</div>\n			<ion-item>\n				<ion-label \n				color="primarytext" \n				style="font-size: 1.2rem;"><strong>Agree to our <a href><u>Terms</u></a> & <a href><u>Conditions</u></a></strong></ion-label>\n\n				<ion-checkbox color="primarytext" [(ngModel)]="terms" (ionChange)="updateTerms()"></ion-checkbox>\n			</ion-item>	\n		<div>\n			<button  style="float: left; font-size: 1.2rem;" ion-button outline color="darkprimarycolor" (click)="onCancel()">CANCEL</button>\n			<button  style="float: right; font-size: 1.2rem;" ion-button outline color="darkprimarycolor" (click)="onSignup()">I\'M IN</button>\n		</div>\n	</div>\n</ion-content>\n\n\n				<!--\n\n				<ion-item class="curves">\n				<ion-label><ion-icon name="lock"></ion-icon></ion-label>\n				<ion-input style="font-size: 1.3rem;" [(ngModel)]="password" placeholder="Password:" type="password"></ion-input>\n				</ion-item>	\n\n				<ion-item class="curves">\n				<ion-label><ion-icon name="lock"></ion-icon></ion-label>\n				<ion-input style="font-size: 1.3rem;" [(ngModel)]="password" placeholder="Confirm Password:" type="password"></ion-input>\n				</ion-item>		\n\n				-->'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_sockethelper_sockethelper__["a" /* SocketHelperProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_sockethelper_sockethelper__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_http__ = __webpack_require__(56);
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


var SigninPage = /** @class */ (function () {
    function SigninPage(navCtrl, loadingCtrl, socketHelper, http, navParams) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.socketHelper = socketHelper;
        this.http = http;
        this.navParams = navParams;
    }
    SigninPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.showLoader();
        //Check if already authenticated
        this.http.checkAuthentication().then(function (res) {
            // console.log("Already authorized");
            _this.loading.dismiss();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        }, function (err) {
            // console.log("Not already authorized");
            _this.loading.dismiss();
        });
    };
    //event handling
    SigninPage.prototype.onCancel = function () {
        this.navCtrl.pop();
    };
    SigninPage.prototype.onSignin = function () {
        var _this = this;
        var data = {
            passcode: this.password
        };
        this.http.login(data).then(function (val) {
            console.log(val);
            if (val.success === true) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
            }
        });
        // this.socketHelper.signIn(data).then((res)=>{
        //   console.log(res)
        // })
        // this.navCtrl.push(HomePage)
    };
    SigninPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Authenticating...'
        });
        this.loading.present();
    };
    SigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signin',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/signin/signin.html"*/'<ion-content class="no-scroll overaltheme" padding>\n	<br><br><br>\n	<div class="signin">\n		<ion-list>									\n<!-- 			<ion-item class="curves">\n			<ion-label><ion-icon name="call"></ion-icon></ion-label>\n			<ion-input style="font-size: 1.3rem;" [(ngModel)]="phone_number" placeholder="Phone No" type="text"></ion-input>\n			</ion-item> -->\n\n			<ion-item class="curves">\n			<ion-label><ion-icon name="lock"></ion-icon></ion-label>\n			<ion-input style="font-size: 1.3rem;" [(ngModel)]="password" placeholder="Password" type="password"></ion-input>\n			</ion-item>\n		</ion-list>\n\n		<div>\n			<button  style="float: left; font-size: 1.2rem;" ion-button outline color="darkprimarycolor" (click)="onCancel()">CANCEL</button>\n			<button  style="float: right; font-size: 1.2rem;" ion-button outline color="darkprimarycolor" (click)="onSignin()">SIGNIN</button>		\n		</div>\n	</div>\n\n	<br><br>\n\n	<div text-center>\n		<p \n		color="dividercolor" \n		style="font-size: 1.2rem"><a href><u>Forgot Password</u></a></p>		\n	</div>\n</ion-content>\n\n\n'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/signin/signin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_sockethelper_sockethelper__["a" /* SocketHelperProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], SigninPage);
    return SigninPage;
}());

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JoinAppPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_sockethelper_sockethelper__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var JoinAppPage = /** @class */ (function () {
    function JoinAppPage(navCtrl, navParams, formBuilder, socketHelper) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.socketHelper = socketHelper;
        this.joinappformgroup = this.formBuilder.group({
            ja_phonenumber: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            ja_id: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            ja_membernumber: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    JoinAppPage.prototype.ionViewDidLoad = function () {
    };
    //event handling
    JoinAppPage.prototype.onCancel = function () {
        this.navCtrl.pop();
    };
    JoinAppPage.prototype.onSubmit = function () {
        var _this = this;
        // let data = {
        //   phonenumber:this.joinappformgroup.value.ja_phonenumber,
        //   membernumber:this.joinappformgroup.value.ja_membernumber,
        //   id:this.joinappformgroup.value.ja_id
        // }
        var data = "testtest";
        this.socketHelper
            .joinApp(data)
            .then(function () {
            _this.socketHelper.onVerified();
        });
    };
    JoinAppPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-joinapp',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/joinapp/joinapp.html"*/'<ion-content class="no-scroll overaltheme" padding>\n	<br><br><br>\n	<div class="signin">\n		<!--<ion-list>-->\n<!-- 			<ion-item class="curves">\n			<ion-label><ion-icon name="call"></ion-icon></ion-label>\n			<ion-input style="font-size: 1.3rem;" [(ngModel)]="phone_number" placeholder="Phone No" type="text"></ion-input>\n			</ion-item> -->\n			<form [formGroup]="joinappformgroup" (ngSubmit)="onSubmit()">\n				<ion-item class="curves">\n				<ion-label><ion-icon name="lock"></ion-icon></ion-label>\n				<ion-input formControlName="ja_phonenumber" style="font-size: 1.3rem;" [(ngModel)]="phonenumber" placeholder="phonenumber" type="number"></ion-input><br>\n				</ion-item>\n				<ion-item class="curves">\n				<ion-label><ion-icon name="lock"></ion-icon></ion-label>\n				<ion-input formControlName="ja_id" style="font-size: 1.3rem;" [(ngModel)]="id" placeholder="Id/Passport" type="number"></ion-input><br>\n				</ion-item>\n				<ion-item class="curves">\n				<ion-label><ion-icon name="lock"></ion-icon></ion-label>\n				<ion-input formControlName="ja_membernumber" style="font-size: 1.3rem;" [(ngModel)]="membernumber" placeholder="Member No" type="number"></ion-input><br>\n				</ion-item>\n			</form>\n		 <!--</ion-list> -->\n\n		<div>\n			<button  style="float: left; font-size: 1.2rem;" ion-button outline color="darkprimarycolor" (click)="onCancel()">CANCEL</button>\n			<button  style="float: right; font-size: 1.2rem;" ion-button outline color="darkprimarycolor" (click)="onSubmit()">SUBMIT</button>\n		</div>\n	</div>\n\n	<br><br>\n\n	<div text-center>\n		<p\n		color="dividercolor"\n		style="font-size: 1.2rem"><a href><u>Forgot Password</u></a></p>\n	</div>\n</ion-content>\n\n\n'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/joinapp/joinapp.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_sockethelper_sockethelper__["a" /* SocketHelperProvider */]])
    ], JoinAppPage);
    return JoinAppPage;
}());

//# sourceMappingURL=joinapp.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransferbankPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_page_transitions__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_sockethelper_sockethelper__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TransferbankPage = /** @class */ (function () {
    function TransferbankPage(navCtrl, navParams, viewCtrl, alertCtrl, formBuilder, socketHelper, nativePageTransitions) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.socketHelper = socketHelper;
        this.nativePageTransitions = nativePageTransitions;
        this.banks = [];
        this.branch = [];
        this.bankformgroup = this.formBuilder.group({
            b_amount: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            b_accountnumber: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            b_bank: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            b_branch: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    TransferbankPage.prototype.ionViewDidLoad = function () {
        //banks list
        this.banks = ["K.C.B", "CO-OP BANK", "I&M BANK", "FAULU BANK", "EQUITY BANK"];
        this.branch = ["Kisumu Tom Mboya Street", "Nairobi Moi Avenue"];
    };
    //handle events
    TransferbankPage.prototype.dismiss = function () {
        /**Animate*/
        var options = {
            direction: 'up',
            duration: 400
        };
        this.nativePageTransitions.flip(options);
        /**End Animation*/
        this.viewCtrl.dismiss();
    };
    TransferbankPage.prototype.onbank = function () {
        var _this = this;
        console.log(this.bankformgroup.value);
        var payAlert = this.alertCtrl.create({
            title: "Confirm",
            message: "You are about to transfer Ksh " + this.bankformgroup.value.b_amount + " to account number " + this.bankformgroup.value.b_accountnumber + " at " + this.bankformgroup.value.b_bank + ".",
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Agree',
                    handler: function () {
                        _this.socketHelper.bankFundsTransfer({
                            phone_number: 254727677068,
                            member_number: 123456789,
                            bank: _this.bankformgroup.value.b_bank,
                            branch: _this.bankformgroup.value.b_branch,
                            account_number: _this.bankformgroup.value.b_accountnumber,
                            amount: _this.bankformgroup.value.b_amount
                        });
                        console.log('Agree clicked');
                    }
                }
            ],
            cssClass: 'alertCustomCss'
        });
        payAlert.present();
    };
    TransferbankPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-transferbank',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/transferbank/transferbank.html"*/'<ion-header>\n  <ion-toolbar text-center>\n    Transfer To Bank\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n	<div>\n      <form [formGroup]="bankformgroup" (ngSubmit)="onbank()">\n          <ion-item>\n              <ion-label\n                text-left\n                style="font-size: 1.4rem;"\n                color="secondarytext"><strong>Choose Bank To Send To:</strong>\n              </ion-label>\n              <ion-select\n                formControlName="b_bank"\n                interface="action-sheet"\n                okText="Okay"\n                cancelText="Dismiss"\n                style="font-size: 1.4rem;"\n                ngDefaultControl>\n                  <ion-option\n                    class="curves"\n                    *ngFor="let data of banks"\n                    color="accent"\n                    [value]="data">{{data}}</ion-option>\n              </ion-select>\n          </ion-item>\n\n          <ion-item>\n              <ion-label\n                text-left\n                style="font-size: 1.4rem;"\n                color="secondarytext"><strong>Choose Branch:</strong>\n              </ion-label>\n              <ion-select\n                formControlName="b_branch"\n                interface="action-sheet"\n                okText="Okay"\n                cancelText="Dismiss"\n                style="font-size: 1.4rem;"\n                ngDefaultControl>\n                  <ion-option\n                    class="curves"\n                    *ngFor="let data of branch"\n                    color="accent"\n                    [value]="data">{{data}}</ion-option>\n              </ion-select>\n          </ion-item>\n\n          <ion-item class="curves">\n              <ion-label><ion-icon name="md-cash"></ion-icon></ion-label>\n              <ion-input\n                style="font-size: 1.3rem;"\n                formControlName="b_accountnumber"\n                placeholder="Enter Account Number"\n                type="text"></ion-input>\n          </ion-item>\n\n          <ion-item class="curves">\n              <ion-label><ion-icon name="md-cash"></ion-icon></ion-label>\n              <ion-input\n                style="font-size: 1.3rem;"\n                formControlName="b_amount"\n                placeholder="Amount"\n                type="text"></ion-input>\n          </ion-item>\n        <ion-item class="curves">\n          <button\n            type="submit"\n            style="float: center; font-size: 1.2rem;"\n            ion-button\n            outline\n            block\n            color="darkprimarycolor"\n            [disabled]="!bankformgroup.valid">SEND</button>\n        </ion-item>\n      </form>\n	</div>\n	<ion-fab top right edge>\n    <button\n      class="title-bar"\n      ion-fab\n      mini\n      color="secondarytext"\n      (click)="dismiss()"><ion-icon name="md-close"></ion-icon></button>\n	</ion-fab>\n</ion-content>\n'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/transferbank/transferbank.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__providers_sockethelper_sockethelper__["a" /* SocketHelperProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_page_transitions__["a" /* NativePageTransitions */]])
    ], TransferbankPage);
    return TransferbankPage;
}());

//# sourceMappingURL=transferbank.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransferkbsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_page_transitions__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_sockethelper_sockethelper__ = __webpack_require__(16);
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





var TransferkbsPage = /** @class */ (function () {
    function TransferkbsPage(navCtrl, navParams, viewCtrl, alertCtrl, formBuilder, socketHelper, nativePageTransitions) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.socketHelper = socketHelper;
        this.nativePageTransitions = nativePageTransitions;
        this.me_other = [];
        this.accounts = [];
        //kbsacco
        this.kbsaccoformgroup = this.formBuilder.group({
            k_amount: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            k_me_other: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            k_account: [""],
            k_accountnumber: [""]
        });
    }
    TransferkbsPage.prototype.ionViewDidLoad = function () {
        //me_other
        this.me_other = [
            {
                option: "Me",
                value: "me"
            },
            {
                option: "Other",
                value: "other"
            }
        ];
        //accounts
        this.accounts = [
            {
                accountname: "Savings Account",
                accountnumber: "12345678901"
            },
            {
                accountname: "Biashara Account",
                accountnumber: "12345678901"
            },
        ];
    };
    //handle events
    TransferkbsPage.prototype.dismiss = function () {
        /**Animate*/
        var options = {
            direction: 'up',
            duration: 400
        };
        this.nativePageTransitions.flip(options);
        /**End Animation*/
        this.viewCtrl.dismiss();
    };
    TransferkbsPage.prototype.onSelectMeOrOther = function (data) {
        this.chosen_me_or_other = data;
    };
    TransferkbsPage.prototype.onkbsacco = function () {
        var _this = this;
        console.log(this.kbsaccoformgroup.value);
        var payAlert = this.alertCtrl.create({
            title: "Confirm",
            message: "You are about to transfer Ksh " + this.kbsaccoformgroup.value.k_amount + " to account " + this.kbsaccoformgroup.value.k_accountnumber + ".",
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Agree',
                    handler: function () {
                        var user = {
                            phoneNumber: 254727677,
                            memberNumber: 123456789
                        };
                        var data = {};
                        if (_this.chosen_me_or_other === 'me') {
                            data = __assign({}, user, { meOther: _this.kbsaccoformgroup.value.k_me_other, account: _this.kbsaccoformgroup.value.k_account, amount: _this.kbsaccoformgroup.value.k_amount });
                        }
                        else {
                            data = __assign({}, user, { meOther: _this.kbsaccoformgroup.value.k_me_other, accountNumber: _this.kbsaccoformgroup.value.k_accountnumber, amount: _this.kbsaccoformgroup.value.k_amount });
                        }
                        console.log(data);
                        _this.socketHelper.internalFundsTransfer(data);
                        console.log('Agree clicked');
                    }
                }
            ],
            cssClass: 'alertCustomCss'
        });
        payAlert.present();
    };
    TransferkbsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-transferkbs',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/transferkbs/transferkbs.html"*/'<ion-header>\n  <ion-toolbar text-center>\n  	Transfer From FOSA to ->\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n	<div>\n		<form [formGroup]="kbsaccoformgroup" (ngSubmit)="onkbsacco()">\n            <ion-item>\n                <ion-label\n                  text-left\n                  style="font-size: 1.4rem;"\n                  color="secondarytext"><strong>Me or Other:</strong></ion-label>\n                <ion-select\n                  interface="action-sheet"\n                  okText="Okay"\n                  cancelText="Dismiss"\n                  style="font-size: 1.4rem;"\n                  formControlName="k_me_other"\n                  ngDefaultControl>\n                    <ion-option\n                      *ngFor="let data of me_other"\n                      color="accent"\n                      [value]="data.value"\n                      (ionSelect)="onSelectMeOrOther(data.option)">{{data.option}}</ion-option>\n                </ion-select>\n            </ion-item>\n\n			<ion-item *ngIf="kbsaccoformgroup.value.k_me_other == \'other\'">\n				<ion-label><ion-icon name="md-cash"></ion-icon></ion-label>\n				<ion-input style="font-size: 1.3rem;" formControlName="k_accountnumber" placeholder="Enter Account Number" type="text"></ion-input>\n			</ion-item>\n\n			<ion-item *ngIf="kbsaccoformgroup.value.k_me_other == \'me\'">\n                <ion-label text-left style="font-size: 1.4rem;" color="secondarytext"><strong>Choose Account:</strong></ion-label>\n                <ion-select interface="action-sheet" okText="Okay" cancelText="Dismiss" style="font-size: 1.4rem;" formControlName="k_account" ngDefaultControl>\n                    <ion-option\n                        *ngFor="let data of accounts"\n                        color="accent"\n                        [value]="data.accountnumber">{{data.accountname}}:{{data.accountnumber}}</ion-option>\n                </ion-select>\n			</ion-item>\n\n			<ion-item class="curves">\n			<ion-label><ion-icon name="md-cash"></ion-icon></ion-label>\n			<ion-input style="font-size: 1.3rem;" formControlName="k_amount" placeholder="Amount" type="text"></ion-input>\n			</ion-item>\n\n\n\n			<ion-item class="curves">\n			  <button  type="submit"  style="float: center; font-size: 1.2rem;" ion-button outline block color="darkprimarycolor" [disabled]="!kbsaccoformgroup.valid">SEND</button>\n			</ion-item>\n		</form>\n	</div>\n\n	<ion-fab top right edge>\n		<button class="title-bar" ion-fab mini color="secondarytext" (click)="dismiss()"><ion-icon name="md-close"></ion-icon></button>\n	</ion-fab>\n</ion-content>\n'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/transferkbs/transferkbs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__providers_sockethelper_sockethelper__["a" /* SocketHelperProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_page_transitions__["a" /* NativePageTransitions */]])
    ], TransferkbsPage);
    return TransferkbsPage;
}());

//# sourceMappingURL=transferkbs.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransfermpesaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_page_transitions__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_sockethelper_sockethelper__ = __webpack_require__(16);
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





var TransfermpesaPage = /** @class */ (function () {
    function TransfermpesaPage(navCtrl, navParams, viewCtrl, alertCtrl, formBuilder, socketHelper, nativePageTransitions) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.socketHelper = socketHelper;
        this.nativePageTransitions = nativePageTransitions;
        this.contacts = [];
        this.me_other = [];
        //mpesa
        this.mpesaformgroup = this.formBuilder.group({
            m_amount: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            m_me_other: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            m_contact: [""]
        });
    }
    TransfermpesaPage.prototype.ionViewDidLoad = function () {
        //me_other
        this.me_other = [
            {
                option: "Me",
                value: "me"
            },
            {
                option: "Other",
                value: "other"
            }
        ];
        //contact list
        this.contacts = [
            {
                name: "Brian Abuto",
                phonenumber: "0727677068"
            },
            {
                name: "Risper Kemunto",
                phonenumber: "0713318756"
            },
            {
                name: "Charles Mwamba",
                phonenumber: "07214956"
            },
        ];
    };
    //handle events
    TransfermpesaPage.prototype.dismiss = function () {
        /**Animate*/
        var options = {
            direction: 'up',
            duration: 400
        };
        this.nativePageTransitions.flip(options);
        /**End Animation*/
        this.viewCtrl.dismiss();
    };
    TransfermpesaPage.prototype.onSelectContact = function (data) {
        console.log(typeof data);
        var del = document.getElementById("m_contact_del");
        console.log(del.value);
        del.value = "";
        var holder = document.getElementById("m_contact_holder");
        holder.value = "" + data;
        console.log(holder.value);
    };
    TransfermpesaPage.prototype.onSelectMeOrOther = function (data) {
        this.chosen_me_or_other = data;
    };
    TransfermpesaPage.prototype.onmpesa = function () {
        var _this = this;
        var payAlert = this.alertCtrl.create({
            title: "Confirm",
            message: "You are about to transfer Ksh " + this.mpesaformgroup.value.m_amount + " to mobile number " + this.mpesaformgroup.value.m_contact + ".",
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Agree',
                    handler: function () {
                        var user = {
                            phoneNumber: 254727677,
                            memberNnumber: 123456789
                        };
                        var data = {};
                        if (_this.chosen_me_or_other === 'me') {
                            data = __assign({}, user, { meOther: _this.mpesaformgroup.value.m_me_other, amount: _this.mpesaformgroup.value.m_amount });
                        }
                        else {
                            data = __assign({}, user, { meOther: _this.mpesaformgroup.value.m_me_other, amount: _this.mpesaformgroup.value.m_amount, contact: _this.mpesaformgroup.value.m_contact });
                        }
                        _this.socketHelper.mpesaFundsTransfer(__assign({}, data));
                        console.log('Agree clicked');
                    }
                }
            ],
            cssClass: 'alertCustomCss'
        });
        payAlert.present();
    };
    TransfermpesaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-transfermpesa',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/transfermpesa/transfermpesa.html"*/'<ion-header>\n  <ion-toolbar text-center>\n  	Send To M-Pesa\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n	<div>\n		<form [formGroup]="mpesaformgroup" (ngSubmit)="onmpesa()">\n            <ion-item>\n                <ion-label\n                  text-left\n                  style="font-size: 1.4rem;"\n                  color="secondarytext"><strong>Me or Other:</strong></ion-label>\n                <ion-select\n                  interface="action-sheet"\n                  okText="Okay"\n                  cancelText="Dismiss"\n                  style="font-size: 1.4rem;"\n                  formControlName="m_me_other"\n                  ngDefaultControl>\n                    <ion-option\n                      *ngFor="let data of me_other"\n                      color="accent"\n                      [value]="data.value"\n                      (ionSelect)="onSelectMeOrOther(data.option)">{{data.option}}</ion-option>\n                </ion-select>\n            </ion-item>\n\n            <ion-row *ngIf="mpesaformgroup.value.m_me_other == \'other\'">\n            	<ion-col col-6>\n		            <ion-item class="curves">\n		                <!-- <ion-label><ion-icon name="md-call"></ion-icon></ion-label> -->\n		                <ion-input id="m_contact_holder" style="font-size: 1.3rem;" formControlName="m_contact" placeholder="Contact" type="text"></ion-input>\n		            </ion-item>\n            	</ion-col>\n\n            	<ion-col col-6>\n					<ion-item >\n					  <ion-label text-left style="font-size: 1.4rem;" color="secondarytext"><strong></strong></ion-label>\n					  <ion-select\n					  	interface="action-sheet"\n					  	okText="Okay"\n					  	cancelText="Dismiss"\n					  	id="m_contact_del"\n					  	style="font-size: 1.4rem;"\n					  	formControlName="m_contact"\n					  	ngDefaultControl>\n					    <ion-option\n					    *ngFor="let data of contacts"\n					    color="accent"\n					    (ionSelect)="onSelectContact(data.name)"\n					    [value]="data.phonenumber">{{data.name}}</ion-option>\n					  </ion-select>\n					</ion-item>\n            	</ion-col>\n            </ion-row>\n<!--\n            <ion-item *ngIf="mpesaformgroup.value.m_me_other == \'other\'">\n				<input color="primarycolor" type="text" name="example" list="exampleList" placeholder="Contact">\n				<datalist id="exampleList" color="primarycolor">\n				    <option color="primarycolor" *ngFor="let data of contacts" value="{{data.name}}">\n				</datalist>\n            </ion-item> -->\n\n\n            <ion-item class="curves">\n                <ion-label><ion-icon name="md-cash"></ion-icon></ion-label>\n                <ion-input style="font-size: 1.3rem;" formControlName="m_amount" placeholder="Amount" type="text"></ion-input>\n            </ion-item>\n\n			<ion-item class="curves">\n			  <button type="submit"  style="float: center; font-size: 1.2rem;" ion-button outline block color="darkprimarycolor" [disabled]="!mpesaformgroup.valid">SEND</button>\n			</ion-item>\n\n\n\n\n\n\n\n\n		</form>\n	</div>\n\n\n\n	<ion-fab top right edge>\n		<button class="title-bar" ion-fab mini color="secondarytext" (click)="dismiss()"><ion-icon name="md-close"></ion-icon></button>\n	</ion-fab>\n</ion-content>\n'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/transfermpesa/transfermpesa.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__providers_sockethelper_sockethelper__["a" /* SocketHelperProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_page_transitions__["a" /* NativePageTransitions */]])
    ], TransfermpesaPage);
    return TransfermpesaPage;
}());

//# sourceMappingURL=transfermpesa.js.map

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alerts_alerts__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_chat__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__buy_buy__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__start_start__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__accounts_accounts__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__loans_loans__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pricing_pricing__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__enquiries_enquiries__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__about_about__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__info_info__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_fabtoggle_fabtoggle__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_http_http__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { HomePage } from '../home/home';










var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, modalCtrl, fabToggleProvider, http) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.fabToggleProvider = fabToggleProvider;
        this.http = http;
        this.accountsglimpse = [];
        this.transactionsglimpse = [];
        this.loansglimpse = [];
        this.toggleFab = false;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.accountsglimpse = [
            {
                account: "Checking",
                currentbalance: "2000.00"
            },
            {
                account: "Savings",
                currentbalance: "3000.00"
            },
            {
                account: "Visa",
                currentbalance: "1000.00"
            }
        ];
        this.transactionsglimpse = [
            {
                recepient: {
                    name: "Dennis Obel",
                    accountnumber: "123456789"
                },
                accountfrom: {
                    name: "Checking",
                    accountnumber: "321654987"
                },
                amount: "1000.00",
                date: "1/2/2018"
            },
            {
                recepient: {
                    name: "Shem Ogembo",
                    accountnumber: "987654321"
                },
                accountfrom: {
                    name: "Savings",
                    accountnumber: "987321456"
                },
                amount: "1500.00",
                date: "2/3/2018"
            },
        ];
        this.loansglimpse = [
            {
                amount: "900000",
                type: "Main Loan"
            },
            {
                amount: "700000",
                type: "Main Loan"
            }
        ];
    };
    //handle events
    HomePage.prototype.onAlert = function () {
        var notifications = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__alerts_alerts__["a" /* AlertsPage */]);
        notifications.present();
    };
    HomePage.prototype.onChat = function () {
        var notifications = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__chat_chat__["a" /* ChatPage */]);
        notifications.present();
    };
    HomePage.prototype.onAccountsGlimpse = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__accounts_accounts__["a" /* AccountsPage */]);
    };
    HomePage.prototype.onLoansGlimpse = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__loans_loans__["a" /* LoansPage */]);
    };
    // onTransactionsGlimpse(){
    // 	this.navCtrl.push(FormPage)
    // }
    HomePage.prototype.onToggleFab = function () {
        this.toggleFab = !this.toggleFab;
        this.fabToggleProvider.toggleFab(this.toggleFab);
        // this.toggleFab = !this.toggleFab
        // if(this.toggleFab){
        // 	console.log("opened")
        // 	document.getElementById("body").style.display = "none";
        // }else{
        // 	console.log("closed")
        // 	document.getElementById("body").style.display = "block";
        // }
        // console.log("fab toggled:" + this.toggleFab);
        // document.getElementById("body").style.backgroundColor = "red";
    };
    /*Alt Landing Page ops */
    HomePage.prototype.onHome = function () {
        // this.navCtrl.setRoot(HomePage)
    };
    HomePage.prototype.onAccounts = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__accounts_accounts__["a" /* AccountsPage */]);
    };
    HomePage.prototype.onBuy = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__buy_buy__["a" /* BuyPage */]);
    };
    HomePage.prototype.onLoans = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__loans_loans__["a" /* LoansPage */]);
    };
    HomePage.prototype.onPricing = function () {
        console.log("pricing works");
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__pricing_pricing__["a" /* PricingPage */]);
    };
    HomePage.prototype.onEnquiries = function () {
        console.log("enquiries works");
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__enquiries_enquiries__["a" /* EnquiriesPage */]);
    };
    HomePage.prototype.onAbout = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__about_about__["a" /* AboutPage */]);
    };
    HomePage.prototype.onInfo = function () {
        var info = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_11__info_info__["a" /* InfoPage */]);
        info.present();
    };
    HomePage.prototype.onLogOut = function () {
        var _this = this;
        this.http.logout().then(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__start_start__["a" /* StartPage */]);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], HomePage.prototype, "nav", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar hideBackButton class="headertext">\n    <button ion-button show menuToggle>\n      <ion-icon name=menu></ion-icon>\n    </button>\n\n    <button float-right (click)="onLogOut()" ion-button color="lightprimarycolor">\n      <ion-icon name="md-log-out"></ion-icon>\n    </button>\n\n    <ion-title class="headertext">KBSACCO</ion-title>\n  </ion-navbar> \n</ion-header>\n\n<ion-content padding class="no-scroll">   \n  <br>\n    <div class="landingpagepos" id="body">\n      <ion-row>\n        <ion-col col-6>\n          <div class="curves">\n            <button class="fundstransfer text-transform" style="color: #212121;" color="primarytext" ion-button outline (click)="onLoans()">\n              <strong>Loans</strong>\n              <!-- <ion-icon name="hand"></ion-icon> -->\n            </button>\n          </div>          \n        </ion-col>        \n        <ion-col col-6>\n          <div class="curves">\n            <button class="fundstransfer text-transform" style="color: #212121;" color="darkprimarycolor" ion-button outline (click)="onAccounts()">\n              <strong>Funds Transfer</strong>\n              <!-- <ion-icon name="card"></ion-icon> -->\n            </button>\n          </div>          \n        </ion-col>\n      </ion-row> \n\n      <ion-row>\n        <ion-col col-6>\n          <div class="curves">\n            <button class="fundstransfer text-transform" style="color: #212121;" color="darkprimarycolor" ion-button outline (click)="onPricing()">\n              <strong >Transaction Charges</strong>\n              <!-- <ion-icon name="home"></ion-icon> -->\n            </button>\n          </div>\n        </ion-col>\n        <ion-col col-6>\n          <div class="curves">\n            <button class="fundstransfer text-transform" style="color: #212121;" color="primarytext" ion-button outline (click)="onBuy()">\n              <strong>Utilities & Bills</strong>\n              <!-- <ion-icon name="cart"></ion-icon> -->\n            </button>\n          </div>          \n        </ion-col>\n      </ion-row>              \n\n      <ion-row>\n        <ion-col col-6>\n          <div class="curves">\n            <button class="fundstransfer text-transform" style="color: #212121;" color="primarytext" ion-button outline (click)="onAbout()">\n              <strong>About Us</strong>              \n            </button>\n          </div>\n        </ion-col>\n        <ion-col col-6>\n          <div class="curves">\n            <button \n            class="fundstransfer text-transform" \n            style="color: #212121;" \n            color="darkprimarycolor" \n            ion-button outline \n            (click)="onEnquiries()">\n              <strong>Enquiries</strong>              \n            </button>\n          </div>\n        </ion-col>\n      </ion-row>           \n    </div>\n\n\n\n\n\n  <ion-fab center bottom>\n    <button [(ngModel)]="toggleFab" (click)="onToggleFab()" class="footer title-bar" ion-fab color="lightprimarycolor" ngDefaultControl>\n      <ion-icon name="add"></ion-icon>\n    </button>\n    <ion-fab-list side="right">\n      <button (click)="onAlert()" class="footer title-bar" ion-fab color="lightprimarycolor">\n        <ion-icon name="md-notifications"></ion-icon>\n        <div class="label">Alert</div>\n      </button>\n    </ion-fab-list>\n    <ion-fab-list side="left">\n      <button class="footer title-bar" ion-fab (click)="onChat()">\n        <ion-icon name="md-text"></ion-icon>\n        <div class="label">Chat</div>\n      </button>\n    </ion-fab-list>      \n<!--     <ion-fab-list side="left">\n      <button menuToggle class="footer title-bar" ion-fab color="lightprimarycolor">\n        <ion-icon name="menu"></ion-icon>\n        <div class="label">Menu</div>\n      </button>\n    </ion-fab-list>   -->  \n  </ion-fab>   \n\n\n</ion-content>'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_12__providers_fabtoggle_fabtoggle__["a" /* FabtoggleProvider */],
            __WEBPACK_IMPORTED_MODULE_13__providers_http_http__["a" /* HttpProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_page_transitions__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertsPage = /** @class */ (function () {
    function AlertsPage(navCtrl, navParams, viewCtrl, nativePageTransitions) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.nativePageTransitions = nativePageTransitions;
        this.alerts = [];
    }
    AlertsPage.prototype.ionViewDidLoad = function () {
        this.alerts = [
            {
                timeelapsed: "2",
                alertdefinition: "Large Deposit",
                alertdescription: "Ksh 1231.45 was deposited into my checking account."
            },
            {
                timeelapsed: "3",
                alertdefinition: "Withdrawal",
                alertdescription: "Ksh 500.00 was withdrawn from my savings account."
            },
            {
                timeelapsed: "4",
                alertdefinition: "Loan Reminder",
                alertdescription: "My loan balance is Ksh 40000. Installment expected in 5 days."
            },
        ];
    };
    //handle events
    AlertsPage.prototype.dismiss = function () {
        /**Animate*/
        var options = {
            direction: 'up',
            duration: 400
        };
        this.nativePageTransitions.flip(options);
        /**End Animation*/
        this.viewCtrl.dismiss();
    };
    AlertsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-alerts',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/alerts/alerts.html"*/'<ion-content class="modal-style curves no-scroll" padding>\n	<br><br>\n	<div text-center>\n		<ion-label color="secondarytext"><strong>ALERTS</strong></ion-label>\n		<div class="slide-container">\n			<ion-slides autoplay="2500" loop="true" speed="200" pager>\n				<ion-slide *ngFor="let data of alerts">\n				    <ion-row>\n				      <ion-col col-6>\n				        <p style="font-size: 1.2rem;" class="slide">{{data.timeelapsed}} Hrs |</p>\n				      </ion-col>\n				      <ion-col col-6>\n				        <p style="font-size: 1.2rem;" class="slide">{{data.alertdefinition}}</p>\n				      </ion-col>\n				    </ion-row>\n				    <p style="font-size: 1.2rem;">{{data.alertdescription}}</p>\n				    <br>							\n				</ion-slide>\n			</ion-slides>			\n		</div>\n	</div>\n	\n	<ion-fab top right>\n		<button class="title-bar" ion-fab mini color="secondarytext" (click)="dismiss()"><ion-icon name="md-close"></ion-icon></button>\n	</ion-fab>\n</ion-content>\n'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/alerts/alerts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_page_transitions__["a" /* NativePageTransitions */]])
    ], AlertsPage);
    return AlertsPage;
}());

//# sourceMappingURL=alerts.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_page_transitions__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatPage = /** @class */ (function () {
    function ChatPage(navCtrl, navParams, viewCtrl, nativePageTransitions) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.nativePageTransitions = nativePageTransitions;
    }
    ChatPage.prototype.ionViewDidLoad = function () { };
    //handle events
    ChatPage.prototype.dismiss = function () {
        /**Animate*/
        var options = {
            direction: 'up',
            duration: 400
        };
        this.nativePageTransitions.flip(options);
        /**End Animation*/
        this.viewCtrl.dismiss();
    };
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-chat',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/chat/chat.html"*/'<ion-content class="modal-style no-scroll curves" padding >\n    <div  id="chat_window_1" style="margin-left:10px;">\n        \n        	<div class="panel panel-default">\n                <div class="panel-heading top-bar">\n                    <div>\n                        <h4 class="panel-title"><span class="glyphicon glyphicon-comment"></span>Customer Care</h4>\n                    </div>\n<!--                     <div class="col-md-4 col-xs-4" style="text-align: right;">\n                        <a href="#"><span id="minim_chat_window" class="glyphicon glyphicon-minus icon_minim"></span></a>\n                        <a href="#"><span class="glyphicon glyphicon-remove icon_close" data-id="chat_window_1"></span></a>\n                    </div> -->\n                </div>\n                <div class="panel-body msg_container_base">\n                    <div class="row msg_container base_sent">\n                        <div class="col-md-10 col-xs-10">\n                            <div class="messages msg_sent">\n                                <p>that mloan thing looks good, huh. How much can i borrow?</p>\n                                <time datetime="2009-11-13T20:00">Timothy • 51 min</time>\n                            </div>\n                        </div>\n                        <div class="col-md-2 col-xs-2 avatar">\n                            <img src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg" class=" img-responsive ">\n                        </div>\n                    </div>\n                    <div class="row msg_container base_receive">\n                        <div class="col-md-2 col-xs-2 avatar">\n                            <img src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg" class=" img-responsive ">\n                        </div>\n                        <div class="col-md-10 col-xs-10">\n                            <div class="messages msg_receive">\n                                <p>You can borrow a max of Ksh 20,000</p>\n                                <time datetime="2009-11-13T20:00">KBS Customer Care • 51 min</time>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="row msg_container base_sent">\n                        <div class="col-md-10 col-xs-10">\n                            <div class="messages msg_sent">\n                                <p>that mloan thing looks good, huh. How much can i borrow?</p>\n                                <time datetime="2009-11-13T20:00">Timothy • 51 min</time>\n                            </div>\n                        </div>\n                        <div class="col-md-2 col-xs-2 avatar">\n                            <img src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg" class=" img-responsive ">\n                        </div>\n                    </div>\n                    <div class="row msg_container base_receive">\n                        <div class="col-md-2 col-xs-2 avatar">\n                            <img src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg" class=" img-responsive ">\n                        </div>\n                        <div class="col-md-10 col-xs-10">\n                            <div class="messages msg_receive">\n                                <p>You can borrow a max of Ksh 20,000</p>\n                                <time datetime="2009-11-13T20:00">KBS Customer Care • 51 min</time>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class="panel-footer">\n                    <div class="input-group">\n                        <input id="btn-input" type="text" class="form-control input-sm chat_input" placeholder="Write your message here..." />\n                        <span class="input-group-btn">\n                        <button class="btn title-bar btn-sm" id="btn-chat">Send</button>\n                        </span>\n                    </div>\n                </div>\n    		</div>\n       \n    </div>\n	<ion-fab top right>\n		<button class="title-bar" ion-fab mini color="secondarytext" (click)="dismiss()"><ion-icon name="md-close"></ion-icon></button>\n	</ion-fab>    \n</ion-content>'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/chat/chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_page_transitions__["a" /* NativePageTransitions */]])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoanapplyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_page_transitions__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mloanmodal_mloanmodal__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__expressloanmodal_expressloanmodal__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fosaadvancemodal_fosaadvancemodal__ = __webpack_require__(389);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoanapplyPage = /** @class */ (function () {
    // private mloanformgroup: FormGroup
    // private expressformgroup: FormGroup
    // private fosaformgroup: FormGroup
    function LoanapplyPage(navCtrl, navParams, viewCtrl, alertCtrl, modalCtrl, formBuilder, nativePageTransitions) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.formBuilder = formBuilder;
        this.nativePageTransitions = nativePageTransitions;
        this.loanbtns = "Fosa";
        /*
        //Implemented elsewhere
        //m-loan data
        this.mloanformgroup = this.formBuilder.group({
            m_amount:["",Validators.required]
        })

        //express loan data
        this.expressformgroup = this.formBuilder.group({
            e_amount:["",Validators.required]
        })

        //fosa advance data
        this.fosaformgroup = this.formBuilder.group({
            f_amount:["",Validators.required]
        })
        */
    }
    LoanapplyPage.prototype.ionViewDidLoad = function () { };
    //handle events
    LoanapplyPage.prototype.dismiss = function () {
        /**Animate*/
        var options = {
            direction: 'up',
            duration: 400
        };
        this.nativePageTransitions.flip(options);
        /**End Animation*/
        this.viewCtrl.dismiss();
    };
    /*
    //Implemented Elsewhere

    onSubmitMloan(){
        console.log(this.mloanformgroup.value)

        let payAlert = this.alertCtrl.create({
            title:"Confirm",
            message:`You are about to apply for a Ksh ${this.mloanformgroup.value.m_amount} m-loan.`,
            buttons: [
                {
                  text: 'Disagree',
                  handler: () => {
                    console.log('Disagree clicked');
                  }
                },
                {
                  text: 'Agree',
                  handler: () => {
                    console.log('Agree clicked');
                  }
                }
            ],
            cssClass:'alertCustomCss'
        })

        payAlert.present()
    }
    */
    /*
    //Implemented Elsewhere
    onSubmitExpress(){
        console.log(this.expressformgroup.value)

        let payAlert = this.alertCtrl.create({
            title:"Confirm",
            message:`You are about to apply for a Ksh ${this.expressformgroup.value.e_amount} express loan.`,
            buttons: [
                {
                  text: 'Disagree',
                  handler: () => {
                    console.log('Disagree clicked');
                  }
                },
                {
                  text: 'Agree',
                  handler: () => {
                    console.log('Agree clicked');
                  }
                }
            ],
            cssClass:'alertCustomCss'
        })

        payAlert.present()
    }
    */
    /*
    //Implemented Elsewhere
    onSubmitFosa(){
        console.log(this.fosaformgroup.value)

        let payAlert = this.alertCtrl.create({
            title:"Confirm",
            message:`You are about to apply for a Ksh ${this.fosaformgroup.value.f_amount} fosa advance.`,
            buttons: [
                {
                  text: 'Disagree',
                  handler: () => {
                    console.log('Disagree clicked');
                  }
                },
                {
                  text: 'Agree',
                  handler: () => {
                    console.log('Agree clicked');
                  }
                }
            ],
            cssClass:'alertCustomCss'
        })

        payAlert.present()
    }
    */
    //Loan Aplication Modals
    LoanapplyPage.prototype.onMloanModal = function () {
        var mloanmodal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__mloanmodal_mloanmodal__["a" /* MloanmodalPage */]);
        mloanmodal.present();
    };
    LoanapplyPage.prototype.onExpressModal = function () {
        var eloanmodal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__expressloanmodal_expressloanmodal__["a" /* ExpressloanmodalPage */]);
        eloanmodal.present();
    };
    LoanapplyPage.prototype.onFosaModal = function () {
        var floanmodal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__fosaadvancemodal_fosaadvancemodal__["a" /* FosaadvancemodalPage */]);
        floanmodal.present();
    };
    LoanapplyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-loanapply',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/loanapply/loanapply.html"*/'<ion-header>\n  <ion-toolbar text-center>\n  	Apply Loan\n  </ion-toolbar>\n</ion-header>\n<ion-content padding class="overaltheme">\n	<br><br><br>\n\n    <!-- Loan Application Ops -->\n    <div text-center id="otherloanops">    		\n		<button \n		(click)="onMloanModal()"\n        class="otheropsbtn text-transform"\n		style="color: #ede7f6" \n		color="lightprimarycolor" \n		ion-button \n		outline \n		block>M-Loan\n		</button>    		\n	\n		<button \n		(click)="onExpressModal()"\n        class="otheropsbtn text-transform"\n		style="color: #ede7f6" \n		color="lightprimarycolor" \n		ion-button \n		outline \n		block>Express Loan\n		</button>\n	\n		<button \n		(click)="onFosaModal()"\n        class="otheropsbtn text-transform"\n		style="color: #ede7f6" \n		color="lightprimarycolor" \n		ion-button \n		outline \n		block>Fosa Advance\n		</button>\n    </div>\n\n	<ion-fab top right edge>\n		<button class="title-bar" ion-fab mini color="secondarytext" (click)="dismiss()"><ion-icon name="md-close"></ion-icon></button>\n	</ion-fab>\n</ion-content>\n'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/loanapply/loanapply.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_page_transitions__["a" /* NativePageTransitions */]])
    ], LoanapplyPage);
    return LoanapplyPage;
}());

//# sourceMappingURL=loanapply.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MloanmodalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_page_transitions__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_sockethelper_sockethelper__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MloanmodalPage = /** @class */ (function () {
    function MloanmodalPage(navCtrl, navParams, viewCtrl, alertCtrl, formBuilder, socketHelper, nativePageTransitions) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.socketHelper = socketHelper;
        this.nativePageTransitions = nativePageTransitions;
        //m-loan data
        this.mloanformgroup = this.formBuilder.group({
            m_amount: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    MloanmodalPage.prototype.ionViewDidLoad = function () { };
    /*handle events*/
    MloanmodalPage.prototype.dismiss = function () {
        /**Animate*/
        var options = {
            direction: 'up',
            duration: 400
        };
        this.nativePageTransitions.flip(options);
        /**End Animation*/
        this.viewCtrl.dismiss();
    };
    /*On Submit Loan Function*/
    MloanmodalPage.prototype.onSubmitMloan = function () {
        var _this = this;
        console.log(this.mloanformgroup.value.m_amount);
        var payAlert = this.alertCtrl.create({
            title: "Confirm",
            message: "You are about to apply for a Ksh " + this.mloanformgroup.value.m_amount + " m-loan.",
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Agree',
                    handler: function () {
                        _this.socketHelper.applyMLoan({
                            phone_number: 254727677068,
                            member_number: 123456789,
                            amount: _this.mloanformgroup.value.m_amount
                        });
                        console.log('Agree clicked');
                    }
                }
            ],
            cssClass: 'alertCustomCss'
        });
        payAlert.present();
    };
    MloanmodalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-mloanmodal',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/mloanmodal/mloanmodal.html"*/'<ion-header>\n  <ion-toolbar text-center>\n  	Apply For M-Loan\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n	<br><br><br>	\n	<div>\n		<form [formGroup]="mloanformgroup" (ngSubmit)="onSubmitMloan()">\n		    <ion-item class="curves">\n		    <ion-label><ion-icon name="md-cash"></ion-icon></ion-label>\n		    <ion-input style="font-size: 1.3rem;" formControlName="m_amount" placeholder="Amount" type="text"></ion-input>\n		    </ion-item>	       \n		    <ion-item class="curves">\n		      <button style="float: center; font-size: 1.2rem;" ion-button block outline color="darkprimarycolor" [disabled]="!mloanformgroup.valid">SEND MLOAN REQUEST</button>\n		    </ion-item>               	\n		</form>				\n	</div>	\n	<ion-fab top right edge>\n		<button class="title-bar" ion-fab mini color="secondarytext" (click)="dismiss()"><ion-icon name="md-close"></ion-icon></button>\n	</ion-fab>\n</ion-content>\n'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/mloanmodal/mloanmodal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__providers_sockethelper_sockethelper__["a" /* SocketHelperProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_page_transitions__["a" /* NativePageTransitions */]])
    ], MloanmodalPage);
    return MloanmodalPage;
}());

//# sourceMappingURL=mloanmodal.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpressloanmodalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_page_transitions__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_sockethelper_sockethelper__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ExpressloanmodalPage = /** @class */ (function () {
    function ExpressloanmodalPage(navCtrl, navParams, viewCtrl, alertCtrl, formBuilder, socketHelper, nativePageTransitions) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.socketHelper = socketHelper;
        this.nativePageTransitions = nativePageTransitions;
        //express loan data
        this.expressformgroup = this.formBuilder.group({
            e_amount: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    ExpressloanmodalPage.prototype.ionViewDidLoad = function () { };
    //handle events
    ExpressloanmodalPage.prototype.dismiss = function () {
        /**Animate*/
        var options = {
            direction: 'up',
            duration: 400
        };
        this.nativePageTransitions.flip(options);
        /**End Animation*/
        this.viewCtrl.dismiss();
    };
    /*On submit express loan function*/
    ExpressloanmodalPage.prototype.onSubmitExpress = function () {
        var _this = this;
        console.log(this.expressformgroup.value);
        var payAlert = this.alertCtrl.create({
            title: "Confirm",
            message: "You are about to apply for a Ksh " + this.expressformgroup.value.e_amount + " express loan.",
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Agree',
                    handler: function () {
                        _this.socketHelper.applyExpressLoan({
                            phone_number: 254727677068,
                            member_number: 123456789,
                            amount: _this.expressformgroup.value.e_amount
                        });
                        console.log('Agree clicked');
                    }
                }
            ],
            cssClass: 'alertCustomCss'
        });
        payAlert.present();
    };
    ExpressloanmodalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-expressloanmodal',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/expressloanmodal/expressloanmodal.html"*/'<ion-header>\n  <ion-toolbar text-center>\n  	Apply For Express Loan\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n	<br><br><br>	\n	<div>\n		<form [formGroup]="expressformgroup" (ngSubmit)="onSubmitExpress()">\n		    <ion-item class="curves">\n		    <ion-label><ion-icon name="md-cash"></ion-icon></ion-label>\n		    <ion-input style="font-size: 1.3rem;" formControlName="e_amount" placeholder="Amount" type="text"></ion-input>\n		    </ion-item>	       \n		    <ion-item class="curves">\n		      <button style="float: center; font-size: 1.2rem;" ion-button block outline color="darkprimarycolor" [disabled]="!expressformgroup.valid">SEND EXP LOAN REQUEST</button>\n		    </ion-item>               	\n		</form>				\n	</div>	\n	<ion-fab top right edge>\n		<button class="title-bar" ion-fab mini color="secondarytext" (click)="dismiss()"><ion-icon name="md-close"></ion-icon></button>\n	</ion-fab>\n</ion-content>\n'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/expressloanmodal/expressloanmodal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__providers_sockethelper_sockethelper__["a" /* SocketHelperProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_page_transitions__["a" /* NativePageTransitions */]])
    ], ExpressloanmodalPage);
    return ExpressloanmodalPage;
}());

//# sourceMappingURL=expressloanmodal.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FosaadvancemodalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_page_transitions__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_sockethelper_sockethelper__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FosaadvancemodalPage = /** @class */ (function () {
    function FosaadvancemodalPage(navCtrl, navParams, viewCtrl, alertCtrl, formBuilder, socketHelper, nativePageTransitions) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.socketHelper = socketHelper;
        this.nativePageTransitions = nativePageTransitions;
        //fosa advance data
        this.fosaformgroup = this.formBuilder.group({
            f_amount: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    FosaadvancemodalPage.prototype.ionViewDidLoad = function () { };
    /*handle events*/
    FosaadvancemodalPage.prototype.dismiss = function () {
        /**Animate*/
        var options = {
            direction: 'up',
            duration: 400
        };
        this.nativePageTransitions.flip(options);
        /**End Animation*/
        this.viewCtrl.dismiss();
    };
    /*On submit fosa advance function*/
    FosaadvancemodalPage.prototype.onSubmitFosa = function () {
        var _this = this;
        console.log(this.fosaformgroup.value);
        var payAlert = this.alertCtrl.create({
            title: "Confirm",
            message: "You are about to apply for a Ksh " + this.fosaformgroup.value.f_amount + " fosa advance.\n\t\t\t\t\tInterest of 5% will be charged. Payable in 30 days",
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Agree',
                    handler: function () {
                        _this.socketHelper.applyFosaAdvance({
                            phone_number: 254727677068,
                            member_number: 123456789,
                            amount: _this.fosaformgroup.value.f_amount
                        });
                        console.log('Agree clicked');
                    }
                }
            ],
            cssClass: 'alertCustomCss'
        });
        payAlert.present();
    };
    FosaadvancemodalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-fosaadvancemodal',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/fosaadvancemodal/fosaadvancemodal.html"*/'<ion-header>\n  <ion-toolbar text-center>\n  	Apply For FOSA Advance\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n	<br><br><br>	\n	<div>\n		<form [formGroup]="fosaformgroup" (ngSubmit)="onSubmitFosa()">\n		    <ion-item class="curves">\n		    <ion-label><ion-icon name="md-cash"></ion-icon></ion-label>\n		    <ion-input style="font-size: 1.3rem;" formControlName="f_amount" placeholder="Amount" type="text"></ion-input>\n		    </ion-item>	       \n		    <ion-item class="curves">\n		      <button style="float: center; font-size: 1.2rem;" ion-button block outline color="darkprimarycolor" [disabled]="!fosaformgroup.valid">SEND FOSA ADV REQUEST</button>\n		    </ion-item>               	\n		</form>				\n	</div>	\n	<ion-fab top right edge>\n		<button class="title-bar" ion-fab mini color="secondarytext" (click)="dismiss()"><ion-icon name="md-close"></ion-icon></button>\n	</ion-fab>\n</ion-content>\n'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/fosaadvancemodal/fosaadvancemodal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__providers_sockethelper_sockethelper__["a" /* SocketHelperProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_page_transitions__["a" /* NativePageTransitions */]])
    ], FosaadvancemodalPage);
    return FosaadvancemodalPage;
}());

//# sourceMappingURL=fosaadvancemodal.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoanpayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_page_transitions__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__loancalc_loancalc__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_sockethelper_sockethelper__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoanpayPage = /** @class */ (function () {
    function LoanpayPage(navCtrl, navParams, viewCtrl, modalCtrl, alertCtrl, formBuilder, socketHelper, nativePageTransitions) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.socketHelper = socketHelper;
        this.nativePageTransitions = nativePageTransitions;
        this.loans = [];
        this.loanpayformgroup = this.formBuilder.group({
            lp_amount: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            lp_loan: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            lp_payvia: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    LoanpayPage.prototype.ionViewDidLoad = function () {
        this.loans = [
            {
                type: "M-Loan",
                amount: "20000",
                balance: "10000"
            },
            {
                type: "Express Loan",
                amount: "100000",
                balance: "50000"
            },
        ];
    };
    //handle events
    LoanpayPage.prototype.dismiss = function () {
        /**Animate*/
        var options = {
            direction: 'up',
            duration: 400
        };
        this.nativePageTransitions.flip(options);
        /**End Animation*/
        this.viewCtrl.dismiss();
    };
    LoanpayPage.prototype.onCalc = function () {
        var loanCalcModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__loancalc_loancalc__["a" /* LoancalcPage */]);
        loanCalcModal.present();
    };
    LoanpayPage.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.loanpayformgroup.value);
        var payAlert = this.alertCtrl.create({
            title: "Confirm",
            message: "You are about to reimburse " + this.loanpayformgroup.value.lp_amount + " in " + this.loanpayformgroup.value.lp_loan + "s.",
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Agree',
                    handler: function () {
                        _this.socketHelper.payLoan({
                            phoneNumber: 254727677068,
                            memberNumber: 123456789,
                            amount: _this.loanpayformgroup.value.lp_amount,
                            loan: _this.loanpayformgroup.value.lp_loan,
                            payVia: _this.loanpayformgroup.value.lp_payvia
                        });
                        console.log('Agree clicked');
                    }
                }
            ],
            cssClass: 'alertCustomCss'
        });
        payAlert.present();
    };
    LoanpayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-loanpay',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/loanpay/loanpay.html"*/'<ion-header>\n  <ion-toolbar text-center>\n    Pay Loan Via M-Pesa or FOSA\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n	<form [formGroup]="loanpayformgroup" (ngSubmit)="onSubmit()">\n      <!-- RADIO BUTTONS -->\n      <p text-center>Please select your preferred payment method:</p>\n      <div text-center>\n        <ion-row>\n          <ion-col col-6>\n            <div class="radio">                \n                  <input type="radio" name="lp_payvia" value="mpesa" checked="checked" formControlName="lp_payvia">\n                  <label>\n                    M-PESA\n                  </label>\n            </div>            \n          </ion-col>\n          <ion-col col-6>\n            <div class="radio">                \n                    <input type="radio" name="lp_payvia" value="fosa"  formControlName="lp_payvia">\n                    <label>\n                      FOSA\n                  </label>\n            </div>            \n          </ion-col>\n        </ion-row>\n      </div>\n\n\n\n        <ion-item class="curves">\n        <ion-label><ion-icon name="md-cash"></ion-icon></ion-label>\n        <ion-input style="font-size: 1.3rem;" formControlName="lp_amount" placeholder="Amount" type="number"></ion-input>\n        </ion-item>	\n\n        <ion-item>\n          <ion-label style="font-size: 1.4rem;" color="secondarytext"><strong>To Loan:</strong></ion-label>\n          <ion-select interface="action-sheet" okText="Okay" cancelText="Dismiss" style="font-size: 1.4rem;" formControlName="lp_loan" ngDefaultControl>\n            <ion-option \n            style="font-size: 1.1rem;"\n            *ngFor="let data of loans"\n            color="accent"\n            [value]="data.type">{{data.type}}|Bal:{{data.balance}}</ion-option>\n          </ion-select>           \n        </ion-item> \n        \n        <ion-item class="curves">\n          <button style="float: center; font-size: 1.2rem;" ion-button block outline color="darkprimarycolor" [disabled]="!loanpayformgroup.valid">MAKE PAYMENT<ion-icon name="md-arrow-round-forward"></ion-icon></button>\n        </ion-item>               	\n	</form>\n \n\n	<ion-fab top right edge>\n		<button class="title-bar" ion-fab mini color="secondarytext" (click)="dismiss()"><ion-icon name="md-close"></ion-icon></button>\n	</ion-fab>\n\n  <ion-fab bottom center>\n    <button class="title-bar" ion-fab mini color="secondarytext" (click)="onCalc()"><ion-icon name="md-calculator"></ion-icon></button>\n  </ion-fab>  \n</ion-content>\n'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/loanpay/loanpay.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__providers_sockethelper_sockethelper__["a" /* SocketHelperProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_page_transitions__["a" /* NativePageTransitions */]])
    ], LoanpayPage);
    return LoanpayPage;
}());

//# sourceMappingURL=loanpay.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoancalcPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_page_transitions__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoancalcPage = /** @class */ (function () {
    function LoancalcPage(navCtrl, navParams, viewCtrl, alertCtrl, formBuilder, nativePageTransitions) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.nativePageTransitions = nativePageTransitions;
        this.loanTypes = [];
        this.loancalcformgroup = this.formBuilder.group({
            lc_loantype: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            lc_amount: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            lc_months: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            lc_interestrate: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    LoancalcPage.prototype.ionViewDidLoad = function () {
        //Loan TYpes
        this.loanTypes = [
            {
                name: "Development Loan",
                value: "development_loan",
                interest_rate: 1.23
            },
            {
                name: "Micro Loan",
                value: "micro_loan",
                interest_rate: 1.23
            },
            {
                name: "M-Loan",
                value: "m_loan",
                interest_rate: 1.23
            },
            {
                name: "Education Loan",
                value: "education_loan",
                interest_rate: 1.23
            },
            {
                name: "Super Loan",
                value: "super_loan",
                interest_rate: 1.23
            },
            {
                name: "Express Loan",
                value: "express_loan",
                interest_rate: 1.23
            },
            {
                name: "Smart Life Loan",
                value: "smart_life_loan",
                interest_rate: 1.23
            },
            {
                name: "Clear & Apply Loan",
                value: "clear_and_apply_loan",
                interest_rate: 1.23
            },
        ];
    };
    //handle events
    LoancalcPage.prototype.dismiss = function () {
        /**Animate*/
        var options = {
            direction: 'up',
            duration: 400
        };
        this.nativePageTransitions.flip(options);
        /**End Animation*/
        this.viewCtrl.dismiss();
    };
    LoancalcPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-loancalc',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/loancalc/loancalc.html"*/'<ion-header>\n  <ion-toolbar text-center>\n    Loan Calculator\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n    <form [formGroup]="loancalcformgroup" (ngSubmit)="onSubmit()">\n    <ion-item>\n        <ion-label text-left style="font-size: 1.3rem;" color="secondarytext"><strong>Loan Type:</strong></ion-label>\n        <ion-select interface="action-sheet" okText="Okay" cancelText="Dismiss" style="font-size: 1.4rem;" formControlName="lc_loantype" ngDefaultControl>\n          <ion-option \n          style="font-size: 1.1rem;"\n          *ngFor="let data of loans"\n          color="accent"\n          [value]="data.type">{{data.type}}|Bal:{{data.balance}}</ion-option>\n        </ion-select>           \n    </ion-item>\n\n      <ion-item class="curves">\n        <ion-label text-left><strong>Loan Amount</strong></ion-label>\n        <ion-input style="font-size: 1.3rem;" formControlName="lc_amount" placeholder="Amount" type="text"></ion-input>\n      </ion-item>	\n\n      <ion-item class="curves">\n          <ion-label><strong>Months</strong></ion-label>\n          <ion-input style="font-size: 1.3rem;" formControlName="lc_months" placeholder="Months" type="text"></ion-input>\n      </ion-item>     \n      \n      <ion-item class="curves">\n          <ion-label><strong>Interest Rate</strong></ion-label>\n          <ion-input style="font-size: 1.3rem;" formControlName="lc_interestrate" placeholder="Interest Rate" type="text"></ion-input>\n      </ion-item>       \n\n \n      \n      <ion-item class="curves">\n        <button style="float: center; font-size: 1.2rem;" ion-button block outline color="darkprimarycolor" [disabled]="!loancalcformgroup.valid">CALCULATE<ion-icon name="md-arrow-round-forward"></ion-icon></button>\n      </ion-item>               	\n    </form>  \n	<ion-fab top right edge>\n		<button class="title-bar" ion-fab mini color="secondarytext" (click)="dismiss()"><ion-icon name="md-close"></ion-icon></button>\n	</ion-fab>\n</ion-content>\n'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/loancalc/loancalc.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_page_transitions__["a" /* NativePageTransitions */]])
    ], LoancalcPage);
    return LoancalcPage;
}());

//# sourceMappingURL=loancalc.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuaranteesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_page_transitions__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_sockethelper_sockethelper__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GuaranteesPage = /** @class */ (function () {
    function GuaranteesPage(navCtrl, navParams, viewCtrl, alertCtrl, socketHelper, nativePageTransitions) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.socketHelper = socketHelper;
        this.nativePageTransitions = nativePageTransitions;
        this.grntbtns = "Guarantees";
        this.guarantees = [];
        this.guarantors = [];
    }
    GuaranteesPage.prototype.ionViewDidLoad = function () {
        this.socketHelper
            .guaranteesGuarantors()
            .then(function (res) {
        });
        this.guarantees = [
            {
                name: "James Kibwana",
                loantype: "FOSA Advance",
                amount: "120000",
                balance: "50000",
                maturity: "12/12/2018"
            },
            {
                name: "Erick Sermon",
                loantype: "Express Loan",
                amount: "120000",
                balance: "50000",
                maturity: "12/12/2018"
            }
        ];
        this.guarantors = [
            {
                name: "Tony Were",
                loantype: "FOSA Advance",
                amount: "120000",
            },
            {
                name: "Vincent Juma",
                loantype: "Express Loan",
                amount: "170000",
            }
        ];
        console.log(this.guarantees);
    };
    //handle events
    GuaranteesPage.prototype.dismiss = function () {
        /**Animate*/
        var options = {
            direction: 'up',
            duration: 400
        };
        this.nativePageTransitions.flip(options);
        /**End Animation*/
        this.viewCtrl.dismiss();
    };
    GuaranteesPage.prototype.onMail = function () {
        var mailAlert = this.alertCtrl.create({
            title: "Mail Guarantors/Guarantees",
            message: "Sending list of guarantors/guarantees to your email will cost you 50/=",
            buttons: [
                {
                    text: "Cancel",
                    role: "cancel",
                    handler: function () {
                        console.log("cancelled");
                    }
                },
                {
                    text: "Agree",
                    handler: function () {
                    }
                }
            ],
            cssClass: "alertCustomCss"
        });
        mailAlert.present();
    };
    GuaranteesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-guarantees',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/guarantees/guarantees.html"*/'<ion-header>\n  <ion-toolbar text-center>\n		  <ion-segment [(ngModel)]="grntbtns" style="font-size:1.0rem;" color="dark">\n		    <ion-segment-button style=" font-style: bold;" value="Guarantees">\n		      GUARANTEES\n		    </ion-segment-button>    \n\n		    <ion-segment-button style=" font-style: bold;" value="Guarantors">\n		      GUARANTORS\n		    </ion-segment-button>   \n		  </ion-segment>   	\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n    <div>\n		<div class="curves">  \n<!-- 		  <ion-segment [(ngModel)]="grntbtns" style="font-size:1.0rem;">\n		    <ion-segment-button style="color: #9C27B0; font-style: bold;" value="Guarantees">\n		      GUARANTEES\n		    </ion-segment-button>    \n\n		    <ion-segment-button style="color: #9C27B0; font-style: bold;" value="Guarantors">\n		      GUARANTORS\n		    </ion-segment-button>   \n		  </ion-segment>  -->     \n		</div>    \n\n		<div [ngSwitch]="grntbtns">\n			<!-- Guarantees -->\n			<div *ngSwitchCase="\'Guarantees\'" text-left>\n				<ion-list>\n				    <ion-item *ngFor="let data of guarantees">\n				        <p><strong>{{data.name}}</strong></p>\n				        <p><strong>{{data.loantype}}</strong></p>\n				    	<p><strong>Loan Amount: Ksh {{data.amount}}</strong></p>					      \n				    	<p><strong>Loan Balance: Ksh {{data.balance}}</strong></p>	\n				    	<p><strong>Maturity Date: {{data.maturity}}</strong></p>\n				    </ion-item>	               	\n				</ion-list>				\n			</div>\n			<!-- Guarantors -->\n			<div *ngSwitchCase="\'Guarantors\'">\n				<ion-list>\n				    <ion-item *ngFor="let data of guarantors">\n				    <p><strong>{{data.name}}</strong></p>	\n				    <p><strong>{{data.loantype}}</strong></p>	\n				    <p><strong>Ksh {{data.amount}}</strong></p>		    \n				    </ion-item>	               	\n				</ion-list>				\n			</div>	\n		</div>    	\n    </div>\n\n\n	<ion-fab top right edge>\n		<button class="title-bar" ion-fab mini color="secondarytext" (click)="dismiss()"><ion-icon name="md-close"></ion-icon></button>\n	</ion-fab>\n\n	<ion-fab bottom left>\n		<button class="title-bar" ion-fab mini color="secondarytext" (click)="onMail()"><ion-icon name="md-mail"></ion-icon></button>\n	</ion-fab>	\n</ion-content>\n'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/guarantees/guarantees.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_sockethelper_sockethelper__["a" /* SocketHelperProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_page_transitions__["a" /* NativePageTransitions */]])
    ], GuaranteesPage);
    return GuaranteesPage;
}());

//# sourceMappingURL=guarantees.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendmoneypricingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_page_transitions__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SendmoneypricingPage = /** @class */ (function () {
    function SendmoneypricingPage(navCtrl, viewCtrl, navParams, nativePageTransitions) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.nativePageTransitions = nativePageTransitions;
    }
    SendmoneypricingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SendmoneypricingPage');
    };
    //handle events
    SendmoneypricingPage.prototype.dismiss = function () {
        /**Animate*/
        var options = {
            direction: 'up',
            duration: 400
        };
        this.nativePageTransitions.flip(options);
        /**End Animation*/
        this.viewCtrl.dismiss();
    };
    SendmoneypricingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-sendmoneypricing',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/sendmoneypricing/sendmoneypricing.html"*/'<ion-header>\n  <ion-toolbar text-center>\n  	Send Money Pricing\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n	<div id="body">\n		<div text-center id="otherloanops">      \n			<div\n			class="otheropsbtn text-transform"\n			style="color: #ede7f6" \n			color="lightprimarycolor">\n			<p>Transfer To M-Pesa</p>\n			<p>Ksh 60.50</p>\n			</div>   \n			<br>\n			<div\n			class="otheropsbtn text-transform"\n			style="color: #ede7f6" \n			color="lightprimarycolor">\n			<p>Transfer To Internal Account</p>\n			<p>55.00</p>\n			</div>   									\n		</div>			\n	</div>\n\n	<ion-fab top right edge>\n		<button class="title-bar" ion-fab mini color="secondarytext" (click)="dismiss()"><ion-icon name="md-close"></ion-icon></button>\n	</ion-fab>\n</ion-content>\n'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/sendmoneypricing/sendmoneypricing.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_page_transitions__["a" /* NativePageTransitions */]])
    ], SendmoneypricingPage);
    return SendmoneypricingPage;
}());

//# sourceMappingURL=sendmoneypricing.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuyairtimepricingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_page_transitions__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BuyairtimepricingPage = /** @class */ (function () {
    function BuyairtimepricingPage(navCtrl, viewCtrl, navParams, nativePageTransitions) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.nativePageTransitions = nativePageTransitions;
    }
    BuyairtimepricingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SendmoneypricingPage');
    };
    //handle events
    BuyairtimepricingPage.prototype.dismiss = function () {
        /**Animate*/
        var options = {
            direction: 'up',
            duration: 400
        };
        this.nativePageTransitions.flip(options);
        /**End Animation*/
        this.viewCtrl.dismiss();
    };
    BuyairtimepricingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-buyairtimepricing',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/buyairtimepricing/buyairtimepricing.html"*/'<ion-header>\n  <ion-toolbar text-center>\n  	Buy Airtime Pricing\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n	<ion-fab top right edge>\n		<button class="title-bar" ion-fab mini color="secondarytext" (click)="dismiss()"><ion-icon name="md-close"></ion-icon></button>\n	</ion-fab>\n</ion-content>\n'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/buyairtimepricing/buyairtimepricing.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_page_transitions__["a" /* NativePageTransitions */]])
    ], BuyairtimepricingPage);
    return BuyairtimepricingPage;
}());

//# sourceMappingURL=buyairtimepricing.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountpricingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_page_transitions__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountpricingPage = /** @class */ (function () {
    function AccountpricingPage(navCtrl, viewCtrl, navParams, nativePageTransitions) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.nativePageTransitions = nativePageTransitions;
    }
    AccountpricingPage.prototype.ionViewDidLoad = function () { };
    //handle events
    AccountpricingPage.prototype.dismiss = function () {
        /**Animate*/
        var options = {
            direction: 'up',
            duration: 400
        };
        this.nativePageTransitions.flip(options);
        /**End Animation*/
        this.viewCtrl.dismiss();
    };
    AccountpricingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-accountpricing',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/accountpricing/accountpricing.html"*/'<ion-header>\n  <ion-toolbar text-center>\n  	Account Pricing\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n	<div id="body">\n		<div text-center id="otherloanops">   \n		<br>   \n			<div\n			class="otheropsbtn text-transform"\n			style="color: #ede7f6" \n			color="lightprimarycolor">\n			<p>Balance Enquiry</p>\n			<p>Ksh 11.00</p>\n			</div>   \n			<br>\n			<div\n			class="otheropsbtn text-transform"\n			style="color: #ede7f6" \n			color="lightprimarycolor">\n			<p>Ministatement</p>\n			<p>FREE</p>\n			</div>   \n			<br>\n			<div\n			class="otheropsbtn text-transform"\n			style="color: #ede7f6" \n			color="lightprimarycolor">\n			<p>E-Statement</p>\n			<p>Ksh 33.00</p>\n			</div> 											\n		</div>			\n	</div>	\n	<ion-fab top right edge>\n		<button class="title-bar" ion-fab mini color="secondarytext" (click)="dismiss()"><ion-icon name="md-close"></ion-icon></button>\n	</ion-fab>\n</ion-content>\n'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/accountpricing/accountpricing.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_page_transitions__["a" /* NativePageTransitions */]])
    ], AccountpricingPage);
    return AccountpricingPage;
}());

//# sourceMappingURL=accountpricing.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoanpricingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_page_transitions__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoanpricingPage = /** @class */ (function () {
    function LoanpricingPage(navCtrl, viewCtrl, navParams, nativePageTransitions) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.nativePageTransitions = nativePageTransitions;
    }
    LoanpricingPage.prototype.ionViewDidLoad = function () { };
    //handle events
    LoanpricingPage.prototype.dismiss = function () {
        /**Animate*/
        var options = {
            direction: 'up',
            duration: 400
        };
        this.nativePageTransitions.flip(options);
        /**End Animation*/
        this.viewCtrl.dismiss();
    };
    LoanpricingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-loanpricing',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/loanpricing/loanpricing.html"*/'<ion-header>\n  <ion-toolbar text-center>\n  	Loan Pricing\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n	<div id="body">\n		<div text-center id="otherloanops">   \n			<br>\n			<div\n			class="otheropsbtn text-transform"\n			style="color: #ede7f6" \n			color="lightprimarycolor">\n			<p>FOSA Advance</p>\n			<p>5%</p>\n			</div>  \n			<br>\n			<div\n			class="otheropsbtn text-transform"\n			style="color: #ede7f6" \n			color="lightprimarycolor">\n			<p>M-LOAN 7 Days</p>\n			<p>4%</p>\n			</div> 				\n			<br>\n			<div\n			class="otheropsbtn text-transform"\n			style="color: #ede7f6" \n			color="lightprimarycolor">\n			<p>M-LOAN 15 Days</p>\n			<p>7%</p>\n			</div>		\n			<br>\n			<div\n			class="otheropsbtn text-transform"\n			style="color: #ede7f6" \n			color="lightprimarycolor">\n			<p>M-LOAN 30 Days</p>\n			<p>10%</p>\n			</div>			\n			<br>\n			<div\n			class="otheropsbtn text-transform"\n			style="color: #ede7f6" \n			color="lightprimarycolor">\n			<p>Send Guarantors/Guarantees to mail.</p>\n			<p>Ksh 50.00</p>\n			</div>	\n			<br>\n			<div\n			class="otheropsbtn text-transform"\n			style="color: #ede7f6" \n			color="lightprimarycolor">\n			<p>Stima Token Loan</p>\n			<p>7%. Processing Fee Ksh 22.00 Payable in 14 days</p>\n			</div>	\n			<br>\n			<div\n			class="otheropsbtn text-transform"\n			style="color: #ede7f6" \n			color="lightprimarycolor">\n			<p>Airtime Advance</p>\n			<p>5% Payable in 10 days.</p>\n			</div>																						\n		</div>			\n	</div>	\n	<ion-fab top right edge>\n		<button class="title-bar" ion-fab mini color="secondarytext" (click)="dismiss()"><ion-icon name="md-close"></ion-icon></button>\n	</ion-fab>\n</ion-content>\n'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/loanpricing/loanpricing.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_page_transitions__["a" /* NativePageTransitions */]])
    ], LoanpricingPage);
    return LoanpricingPage;
}());

//# sourceMappingURL=loanpricing.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BalanceenquiryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_page_transitions__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_fabtoggle_fabtoggle__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_sockethelper_sockethelper__ = __webpack_require__(16);
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






var BalanceenquiryPage = /** @class */ (function () {
    function BalanceenquiryPage(navCtrl, modalCtrl, viewCtrl, navParams, formBuilder, fabToggleProvider, socketHelper, nativePageTransitions) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.fabToggleProvider = fabToggleProvider;
        this.socketHelper = socketHelper;
        this.nativePageTransitions = nativePageTransitions;
        this.user_accounts = [];
        this.balanceenquiryformgroup = this.formBuilder.group({
            benq_account: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    BalanceenquiryPage.prototype.ionViewDidLoad = function () {
        this.user_accounts = [
            {
                account_number: 12345678901,
                available_balance: 40500,
                actual_balance: 40000
            },
            {
                account_number: 10987654321,
                available_balance: 50500,
                actual_balance: 50000
            },
            {
                account_number: 98712365410,
                available_balance: 60500,
                actual_balance: 60000
            }
        ];
    };
    BalanceenquiryPage.prototype.dismiss = function () {
        /**Animate*/
        var options = {
            direction: 'up',
            duration: 400
        };
        this.nativePageTransitions.flip(options);
        /**End Animation*/
        this.viewCtrl.dismiss();
    };
    BalanceenquiryPage.prototype.onSubmit = function () {
        var _this = this;
        var user = {
            phoneNumber: 254727677068,
            memberNumber: 123456789
        };
        this.socketHelper.balanceEnq(__assign({}, user, this.balanceenquiryformgroup.value));
        console.log(this.balanceenquiryformgroup.value.benq_account);
        var filteredBalEnq = this.user_accounts.filter(function (data) {
            return data.account_number === _this.balanceenquiryformgroup.value.benq_account;
        });
        console.log(filteredBalEnq);
        this.available_balance = filteredBalEnq[0].available_balance;
        this.actual_balance = filteredBalEnq[0].actual_balance;
    };
    BalanceenquiryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-balanceenquiry',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/balanceenquiry/balanceenquiry.html"*/'<ion-header>\n    <ion-navbar hideBackButton>\n        <button ion-button show menuToggle>\n            <ion-icon name=menu></ion-icon>\n        </button>\n        <ion-title>KBSACCO: Balance Enq</ion-title>\n    </ion-navbar> \n</ion-header>\n<ion-content padding class="overaltheme">\n    <ion-card>\n        <ion-card-header>Choose an account</ion-card-header>\n        <form [formGroup]="balanceenquiryformgroup" (ngSubmit)="onSubmit()">\n            <ion-item>\n            <!-- <ion-label style="font-size: 1.4rem;" color="secondarytext"><strong></strong></ion-label> -->\n            <ion-select \n            interface="action-sheet" \n            okText="Okay" \n            cancelText="Dismiss" \n            style="font-size: 1.4rem;" \n            formControlName="benq_account" \n            ngDefaultControl>\n                <ion-option \n                style="font-size: 1.1rem;"\n                *ngFor="let data of user_accounts"\n                color="accent"\n                [value]="data.account_number">{{data.account_number}}</ion-option>\n            </ion-select>           \n            </ion-item>  \n            \n            <ion-item class="curves">\n                <button style="float: center; font-size: 1.2rem;" ion-button block outline color="darkprimarycolor" [disabled]="!balanceenquiryformgroup.valid">Send Request<ion-icon name="md-arrow-round-forward"></ion-icon></button>\n            </ion-item>             \n        </form>        \n    </ion-card>\n    <ion-card>\n        <ion-card-header>Balance Details</ion-card-header>\n        <p [(ngModel)]="available_balance" ngDefaultControl><strong>Available Balance</strong> : {{available_balance}}</p>\n        <hr>\n        <p [(ngModel)]="actual_balance" ngDefaultControl><strong>Actual Balance</strong> : {{actual_balance}}</p>\n    </ion-card>\n    <ion-fab top right edge>\n        <button class="title-bar" ion-fab mini color="secondarytext" (click)="dismiss()"><ion-icon name="md-close"></ion-icon></button>\n    </ion-fab> 	    \n</ion-content>'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/balanceenquiry/balanceenquiry.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__providers_fabtoggle_fabtoggle__["a" /* FabtoggleProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_sockethelper_sockethelper__["a" /* SocketHelperProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_page_transitions__["a" /* NativePageTransitions */]])
    ], BalanceenquiryPage);
    return BalanceenquiryPage;
}());

//# sourceMappingURL=balanceenquiry.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MinistatementenquiryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_page_transitions__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_fabtoggle_fabtoggle__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_sockethelper_sockethelper__ = __webpack_require__(16);
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






var MinistatementenquiryPage = /** @class */ (function () {
    function MinistatementenquiryPage(navCtrl, modalCtrl, viewCtrl, navParams, formBuilder, socketHelper, fabToggleProvider, nativePageTransitions) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.socketHelper = socketHelper;
        this.fabToggleProvider = fabToggleProvider;
        this.nativePageTransitions = nativePageTransitions;
        this.user_accounts = [];
        this.ministatementenquiryformgroup = this.formBuilder.group({
            mse_account: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    MinistatementenquiryPage.prototype.ionViewDidLoad = function () {
        this.user_accounts = [
            {
                account_number: 12345678901,
                available_balance: 40500,
                actual_balance: 40000
            },
            {
                account_number: 10987654321,
                available_balance: 50500,
                actual_balance: 50000
            },
            {
                account_number: 98712365410,
                available_balance: 60500,
                actual_balance: 60000
            }
        ];
    };
    MinistatementenquiryPage.prototype.dismiss = function () {
        /**Animate*/
        var options = {
            direction: 'up',
            duration: 400
        };
        this.nativePageTransitions.flip(options);
        /**End Animation*/
        this.viewCtrl.dismiss();
    };
    MinistatementenquiryPage.prototype.onSubmit = function () {
        var user = {
            phoneNumber: 254727677068,
            memberNumber: 123456789
        };
        this.socketHelper.balanceEnq(__assign({}, user, this.ministatementenquiryformgroup.value));
    };
    MinistatementenquiryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-ministatementenquiry',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/ministatementenquiry/ministatementenquiry.html"*/'<ion-header>\n    <ion-navbar hideBackButton>\n        <button ion-button show menuToggle>\n            <ion-icon name=menu></ion-icon>\n        </button>\n        <ion-title>KBSACCO: Mini Stat Enq</ion-title>\n    </ion-navbar> \n</ion-header>\n<ion-content padding class="overaltheme">\n    <ion-card>\n        <ion-card-header>Choose an account</ion-card-header>\n        <form [formGroup]="ministatementenquiryformgroup" (ngSubmit)="onSubmit()">\n            <ion-item>\n            <!-- <ion-label style="font-size: 1.4rem;" color="secondarytext"><strong></strong></ion-label> -->\n            <ion-select \n                interface="action-sheet" \n                okText="Okay" \n                cancelText="Dismiss" \n                style="font-size: 1.4rem;" \n                formControlName="mse_account" \n                ngDefaultControl>\n                <ion-option \n                style="font-size: 1.1rem;"\n                *ngFor="let data of user_accounts"\n                color="accent"\n                [value]="data.account_number">{{data.account_number}}</ion-option>\n            </ion-select>           \n            </ion-item>  \n            \n            <ion-item class="curves">\n                <button \n                    style="float: center; font-size: 1.2rem;" \n                    ion-button \n                    block \n                    outline \n                    color="darkprimarycolor" \n                    [disabled]="!ministatementenquiryformgroup.valid">Send Request<ion-icon name="md-arrow-round-forward"></ion-icon></button>\n            </ion-item>             \n        </form>        \n    </ion-card>\n    <ion-card class="ministatdetails" text-center>\n        <ion-row>\n            <ion-col col-4>\n                <h6>Date</h6>\n            </ion-col>\n            <ion-col col-4>\n                <h6>Description</h6>\n            </ion-col>\n            <ion-col col-4>\n                <h6>Amount</h6>\n            </ion-col>\n        </ion-row>\n    </ion-card>\n    <ion-fab top right edge>\n        <button class="title-bar" ion-fab mini color="secondarytext" (click)="dismiss()"><ion-icon name="md-close"></ion-icon></button>\n    </ion-fab> 	    \n</ion-content>'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/ministatementenquiry/ministatementenquiry.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__providers_sockethelper_sockethelper__["a" /* SocketHelperProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_fabtoggle_fabtoggle__["a" /* FabtoggleProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_page_transitions__["a" /* NativePageTransitions */]])
    ], MinistatementenquiryPage);
    return MinistatementenquiryPage;
}());

//# sourceMappingURL=ministatementenquiry.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullstatementenquiryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_page_transitions__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_fabtoggle_fabtoggle__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_sockethelper_sockethelper__ = __webpack_require__(16);
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






var FullstatementenquiryPage = /** @class */ (function () {
    function FullstatementenquiryPage(navCtrl, modalCtrl, viewCtrl, navParams, formBuilder, socketHelper, fabToggleProvider, nativePageTransitions) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.socketHelper = socketHelper;
        this.fabToggleProvider = fabToggleProvider;
        this.nativePageTransitions = nativePageTransitions;
        this.user_accounts = [];
        this.fullstatementenquiryformgroup = this.formBuilder.group({
            fse_account: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            fse_fromdate: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            fse_todate: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    FullstatementenquiryPage.prototype.ionViewDidLoad = function () {
        this.user_accounts = [
            {
                account_number: 12345678901,
                available_balance: 40500,
                actual_balance: 40000
            },
            {
                account_number: 10987654321,
                available_balance: 50500,
                actual_balance: 50000
            },
            {
                account_number: 98712365410,
                available_balance: 60500,
                actual_balance: 60000
            }
        ];
    };
    FullstatementenquiryPage.prototype.dismiss = function () {
        /**Animate*/
        var options = {
            direction: 'up',
            duration: 400
        };
        this.nativePageTransitions.flip(options);
        /**End Animation*/
        this.viewCtrl.dismiss();
    };
    FullstatementenquiryPage.prototype.onSubmit = function () {
        var user = {
            phoneNumber: 254727677068,
            memberNumber: 123456789
        };
        this.socketHelper.balanceEnq(__assign({}, user, this.fullstatementenquiryformgroup.value));
    };
    FullstatementenquiryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-fullstatementenquiry',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/fullstatementenquiry/fullstatementenquiry.html"*/'<ion-header>\n        <ion-navbar hideBackButton>\n            <button ion-button show menuToggle>\n                <ion-icon name=menu></ion-icon>\n            </button>\n            <ion-title>KBSACCO: Full Stat Enq</ion-title>\n        </ion-navbar> \n    </ion-header>\n    <ion-content padding class="overaltheme">\n        <ion-card>\n            <ion-card-header>Choose an account</ion-card-header>\n            <form [formGroup]="fullstatementenquiryformgroup" (ngSubmit)="onSubmit()">\n                <ion-item>\n                <!-- <ion-label style="font-size: 1.4rem;" color="secondarytext"><strong></strong></ion-label> -->\n                <ion-select \n                    interface="action-sheet" \n                    okText="Okay" \n                    cancelText="Dismiss" \n                    style="font-size: 1.4rem;" \n                    formControlName="fse_account" \n                    ngDefaultControl>\n                    <ion-option \n                    style="font-size: 1.1rem;"\n                    *ngFor="let data of user_accounts"\n                    color="accent"\n                    [value]="data.account_number">{{data.account_number}}</ion-option>\n                </ion-select>           \n                </ion-item>   \n                \n                <ion-item>\n                    <ion-label text-left>From</ion-label>\n                    <ion-datetime \n                        ngDefaultControl\n                        formControlName="fse_fromdate" \n                        displayFormat="MM/DD/YYYY"></ion-datetime>\n                </ion-item> \n                \n                <ion-item>\n                    <ion-label text-left>To</ion-label>\n                    <ion-datetime \n                        ngDefaultControl\n                        formControlName="fse_todate" \n                        displayFormat="MM/DD/YYYY"></ion-datetime>\n                </ion-item>\n\n                <ion-item class="curves">\n                    <button \n                        style="float: center; font-size: 1.2rem;" \n                        ion-button \n                        block \n                        outline \n                        color="darkprimarycolor" \n                        [disabled]="!fullstatementenquiryformgroup.valid">Send Request<ion-icon name="md-arrow-round-forward"></ion-icon></button>\n                </ion-item>                 \n            </form>        \n        </ion-card>\n           \n        <ion-fab top right edge>\n            <button class="title-bar" ion-fab mini color="secondarytext" (click)="dismiss()"><ion-icon name="md-close"></ion-icon></button>\n        </ion-fab> 	    \n    </ion-content>'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/fullstatementenquiry/fullstatementenquiry.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__providers_sockethelper_sockethelper__["a" /* SocketHelperProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_fabtoggle_fabtoggle__["a" /* FabtoggleProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_page_transitions__["a" /* NativePageTransitions */]])
    ], FullstatementenquiryPage);
    return FullstatementenquiryPage;
}());

//# sourceMappingURL=fullstatementenquiry.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(420);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_http__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_page_transitions__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_joinapp_joinapp__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_list_list__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_signin_signin__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_start_start__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_alerts_alerts__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_accounts_accounts__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_buy_buy__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_buyelectricity_buyelectricity__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_buyminutes_buyminutes__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_loans_loans__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_loanapply_loanapply__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_loanpay_loanpay__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_chat_chat__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_guarantees_guarantees__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_form_form__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_transferbank_transferbank__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_transferkbs_transferkbs__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_transfermpesa_transfermpesa__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_pricing_pricing__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_enquiries_enquiries__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_expressloanmodal_expressloanmodal__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_mloanmodal_mloanmodal__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_fosaadvancemodal_fosaadvancemodal__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_about_about__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_sendmoneypricing_sendmoneypricing__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_paybillspricing_paybillspricing__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_buyairtimepricing_buyairtimepricing__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_accountpricing_accountpricing__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_info_info__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_loanpricing_loanpricing__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_loancalc_loancalc__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_balanceenquiry_balanceenquiry__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_ministatementenquiry_ministatementenquiry__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_fullstatementenquiry_fullstatementenquiry__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_verify_verify__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45_ng_socket_io__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_45_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__ionic_native_status_bar__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__ionic_native_splash_screen__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__providers_alert_alert__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__providers_fabtoggle_fabtoggle__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__providers_sockethelper_sockethelper__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__providers_http_http__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//plugins








































var config = { url: 'http://localhost:3000/', options: {} };






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_joinapp_joinapp__["a" /* JoinAppPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_start_start__["a" /* StartPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_alerts_alerts__["a" /* AlertsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_accounts_accounts__["a" /* AccountsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_buy_buy__["a" /* BuyPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_buyelectricity_buyelectricity__["a" /* BuyelectricityPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_buyminutes_buyminutes__["a" /* BuyminutesPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_loans_loans__["a" /* LoansPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_loanapply_loanapply__["a" /* LoanapplyPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_loanpay_loanpay__["a" /* LoanpayPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_guarantees_guarantees__["a" /* GuaranteesPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_form_form__["a" /* FormPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_transferbank_transferbank__["a" /* TransferbankPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_transferkbs_transferkbs__["a" /* TransferkbsPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_transfermpesa_transfermpesa__["a" /* TransfermpesaPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_pricing_pricing__["a" /* PricingPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_enquiries_enquiries__["a" /* EnquiriesPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_expressloanmodal_expressloanmodal__["a" /* ExpressloanmodalPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_mloanmodal_mloanmodal__["a" /* MloanmodalPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_fosaadvancemodal_fosaadvancemodal__["a" /* FosaadvancemodalPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_sendmoneypricing_sendmoneypricing__["a" /* SendmoneypricingPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_paybillspricing_paybillspricing__["a" /* PaybillspricingPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_buyairtimepricing_buyairtimepricing__["a" /* BuyairtimepricingPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_accountpricing_accountpricing__["a" /* AccountpricingPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_info_info__["a" /* InfoPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_loanpricing_loanpricing__["a" /* LoanpricingPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_loancalc_loancalc__["a" /* LoancalcPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_balanceenquiry_balanceenquiry__["a" /* BalanceenquiryPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_ministatementenquiry_ministatementenquiry__["a" /* MinistatementenquiryPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_fullstatementenquiry_fullstatementenquiry__["a" /* FullstatementenquiryPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_verify_verify__["a" /* VerifyPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/altlanding/altlanding.module#AltlandingPageModule', name: 'AltlandingPage', segment: 'altlanding', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/paybillspricing/paybillspricing.module#PaybillspricingPageModule', name: 'PaybillspricingPage', segment: 'paybillspricing', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_45_ng_socket_io__["SocketIoModule"].forRoot(config),
                __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_joinapp_joinapp__["a" /* JoinAppPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_start_start__["a" /* StartPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_alerts_alerts__["a" /* AlertsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_accounts_accounts__["a" /* AccountsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_buy_buy__["a" /* BuyPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_buyelectricity_buyelectricity__["a" /* BuyelectricityPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_buyminutes_buyminutes__["a" /* BuyminutesPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_loans_loans__["a" /* LoansPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_loanapply_loanapply__["a" /* LoanapplyPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_loanpay_loanpay__["a" /* LoanpayPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_guarantees_guarantees__["a" /* GuaranteesPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_form_form__["a" /* FormPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_transferbank_transferbank__["a" /* TransferbankPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_transferkbs_transferkbs__["a" /* TransferkbsPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_transfermpesa_transfermpesa__["a" /* TransfermpesaPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_pricing_pricing__["a" /* PricingPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_enquiries_enquiries__["a" /* EnquiriesPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_expressloanmodal_expressloanmodal__["a" /* ExpressloanmodalPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_mloanmodal_mloanmodal__["a" /* MloanmodalPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_fosaadvancemodal_fosaadvancemodal__["a" /* FosaadvancemodalPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_sendmoneypricing_sendmoneypricing__["a" /* SendmoneypricingPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_paybillspricing_paybillspricing__["a" /* PaybillspricingPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_buyairtimepricing_buyairtimepricing__["a" /* BuyairtimepricingPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_accountpricing_accountpricing__["a" /* AccountpricingPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_info_info__["a" /* InfoPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_loanpricing_loanpricing__["a" /* LoanpricingPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_loancalc_loancalc__["a" /* LoancalcPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_balanceenquiry_balanceenquiry__["a" /* BalanceenquiryPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_ministatementenquiry_ministatementenquiry__["a" /* MinistatementenquiryPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_fullstatementenquiry_fullstatementenquiry__["a" /* FullstatementenquiryPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_verify_verify__["a" /* VerifyPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_46__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_47__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_page_transitions__["a" /* NativePageTransitions */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_48__providers_alert_alert__["a" /* AlertProvider */],
                __WEBPACK_IMPORTED_MODULE_49__providers_fabtoggle_fabtoggle__["a" /* FabtoggleProvider */],
                __WEBPACK_IMPORTED_MODULE_50__providers_sockethelper_sockethelper__["a" /* SocketHelperProvider */],
                __WEBPACK_IMPORTED_MODULE_51__providers_http_http__["a" /* HttpProvider */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_http__["a" /* HTTP */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_buy_buy__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_start_start__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_accounts_accounts__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_loans_loans__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_pricing_pricing__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_enquiries_enquiries__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_about_about__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_http_http__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












// import { InfoPage } from '../pages/info/info';
// Providers

var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, modalCtrl, alertCtrl, http) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.http = http;
        // rootPage: any = HomePage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_start_start__["a" /* StartPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Utilities & Bills', icon: 'md-cart', component: __WEBPACK_IMPORTED_MODULE_5__pages_buy_buy__["a" /* BuyPage */] },
            { title: 'Funds Transfer', icon: 'md-cash', component: __WEBPACK_IMPORTED_MODULE_7__pages_accounts_accounts__["a" /* AccountsPage */] },
            { title: 'Loans', icon: 'md-card', component: __WEBPACK_IMPORTED_MODULE_8__pages_loans_loans__["a" /* LoansPage */] },
            { title: 'Pricing', icon: 'md-pricetag', component: __WEBPACK_IMPORTED_MODULE_9__pages_pricing_pricing__["a" /* PricingPage */] },
            { title: 'About Us', icon: 'md-information-circle', component: __WEBPACK_IMPORTED_MODULE_11__pages_about_about__["a" /* AboutPage */] }
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
    //handle events
    // onAlert(){
    //   let notifications = this.modalCtrl.create(AlertsPage)
    //   notifications.present();
    // }
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.onHome = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
    };
    MyApp.prototype.onAccounts = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_accounts_accounts__["a" /* AccountsPage */]);
    };
    MyApp.prototype.onBuy = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_buy_buy__["a" /* BuyPage */]);
    };
    MyApp.prototype.onLoans = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_loans_loans__["a" /* LoansPage */]);
    };
    MyApp.prototype.onPricing = function () {
        console.log("pricing works");
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_pricing_pricing__["a" /* PricingPage */]);
    };
    MyApp.prototype.onEnquiries = function () {
        console.log("enquiries works");
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_enquiries_enquiries__["a" /* EnquiriesPage */]);
    };
    MyApp.prototype.onAbout = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_11__pages_about_about__["a" /* AboutPage */]);
    };
    MyApp.prototype.onReport = function () {
        var prompt = this.alertCtrl.create({
            title: "STATEMENT REQUEST",
            message: "Your statement will be submitted to your email.",
            buttons: [
                {
                    text: "Send Statement",
                    handler: function (data) {
                        console.log(data);
                    }
                }
            ],
            cssClass: 'alertCustomCss'
        });
        prompt.present();
    };
    MyApp.prototype.onLogOut = function () {
        var _this = this;
        this.http.logout().then(function () {
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_start_start__["a" /* StartPage */]);
        });
        // this.navCtrl.setRoot(LoginPage)
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/app/app.html"*/'<ion-menu [content]="content" persistent=true >\n  <ion-content class="drawer" padding>\n\n<!--     <div  class="drawerheader">\n      <ion-row>\n        <ion-col col-4>\n          <div class="user" text-center>\n            <ion-thumbnail item-start>\n              <img src="assets/imgs/avatar.png">\n            </ion-thumbnail>          \n          </div>           \n        </ion-col>\n        <ion-col col-4>         \n        </ion-col>\n        <ion-col col-4>      \n        </ion-col>\n      </ion-row>\n    </div> -->\n    <br><br><br><br><br><br><br><br>\n    <ion-list>\n        \n      <button \n      class="bgrndthemee"       \n      menuClose \n      ion-item \n      *ngFor="let p of pages" \n      (click)="openPage(p)" \n      color="darkprimarycolor">\n      <ion-row>\n        <ion-col col-6><ion-icon name={{p.icon}}></ion-icon></ion-col>\n        <ion-col text-left col-6>{{p.title}}</ion-col>\n      </ion-row>     \n        \n      </button>\n\n\n\n      <button\n      class="bgrndthemee" \n      color="darkprimarycolor"\n      ion-item\n      (click)="handleProfile()">\n        <ion-row>\n          <ion-col col-6><ion-icon name=md-person></ion-icon></ion-col>\n          <ion-col text-left col-6>Profile</ion-col>\n        </ion-row>       \n      </button>\n    \n    </ion-list>    \n\n    <!-- <div class="center">\n      <ion-row>\n        <ion-col col-6>\n          <div class="curves">\n            <button menuClose class="fundstransfer text-transform" style="color: #ede7f6;" color="lightprimarycolor" ion-button outline (click)="onHome()">\n              <strong >Home</strong>\n              \n            </button>\n          </div>\n        </ion-col>\n        <ion-col col-6>\n          <div class="curves">\n            <button menuClose class="fundstransfer text-transform" style="color: #ede7f6;" color="primarytext" ion-button outline (click)="onBuy()">\n              <strong>Utilities & Bills</strong>\n              \n            </button>\n          </div>          \n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-6>\n          <div class="curves">\n            <button menuToggle class="fundstransfer text-transform" style="color: #ede7f6;" color="primarytext" ion-button outline (click)="onLoans()">\n              <strong>Loans</strong>\n              \n            </button>\n          </div>          \n        </ion-col>        \n        <ion-col col-6>\n          <div class="curves">\n            <button menuClose class="fundstransfer text-transform" style="color: #ede7f6;" color="lightprimarycolor" ion-button outline (click)="onAccounts()">\n              <strong>Funds Transfer</strong>\n              \n            </button>\n          </div>          \n        </ion-col>\n      </ion-row>   \n\n              \n\n      <ion-row>\n        <ion-col col-6>\n          <div class="curves">\n            <button menuClose class="fundstransfer text-transform" style="color: #ede7f6;" color="lightprimarycolor" ion-button outline (click)="onAbout()">\n              <strong>About Us</strong>              \n            </button>\n          </div>\n        </ion-col>\n        <ion-col col-6>\n          <div class="curves">\n            <button menuClose class="fundstransfer text-transform" style="color: #ede7f6;" color="primarytext" ion-button outline (click)="onPricing()">\n              <strong>Transaction Charges</strong>              \n            </button>\n          </div>\n        </ion-col>\n      </ion-row>           \n    </div> -->\n\n    <!-- Log Out -->\n<!--     <ion-fab center top>\n      <button class="footer title-bar" ion-fab color="lightprimarycolor">\n        <ion-icon name="add"></ion-icon>\n      </button>   \n      <ion-fab-list side="right">   \n        <button (click)="onLogOut()" class="footer title-bar" ion-fab color="lightprimarycolor">\n          <ion-icon name="md-log-out"></ion-icon>\n          <div class="toplabel">Logout</div>\n        </button>\n       </ion-fab-list>    \n      <ion-fab-list side="left">   \n        <button menuClose (click)="onPricing()" class="footer title-bar" ion-fab color="lightprimarycolor">\n          <ion-icon name="md-pricetags"></ion-icon>\n          <div class="toplabel">Pricing</div>\n        </button>\n       </ion-fab-list>        \n    </ion-fab> -->\n\n    <ion-fab center bottom>\n      <button class="footer title-bar" ion-fab color="lightprimarycolor">\n        <ion-icon name="add"></ion-icon>\n      </button>\n      <ion-fab-list side="right">\n        <button (click)="onReport()" class="footer title-bar" ion-fab color="lightprimarycolor">\n          <ion-icon name="custom-report"></ion-icon>\n          <div class="label">Statement</div>\n        </button>\n      </ion-fab-list>\n      <ion-fab-list side="left">   \n        <button (click)="onLogOut()" class="footer title-bar" ion-fab color="lightprimarycolor">\n          <ion-icon name="md-log-out"></ion-icon>\n          <div class="label">Logout</div>\n        </button>\n       </ion-fab-list>      \n    </ion-fab>    \n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_12__providers_http_http__["a" /* HttpProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 496:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 525:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 263,
	"./af.js": 263,
	"./ar": 264,
	"./ar-dz": 265,
	"./ar-dz.js": 265,
	"./ar-kw": 266,
	"./ar-kw.js": 266,
	"./ar-ly": 267,
	"./ar-ly.js": 267,
	"./ar-ma": 268,
	"./ar-ma.js": 268,
	"./ar-sa": 269,
	"./ar-sa.js": 269,
	"./ar-tn": 270,
	"./ar-tn.js": 270,
	"./ar.js": 264,
	"./az": 271,
	"./az.js": 271,
	"./be": 272,
	"./be.js": 272,
	"./bg": 273,
	"./bg.js": 273,
	"./bm": 274,
	"./bm.js": 274,
	"./bn": 275,
	"./bn.js": 275,
	"./bo": 276,
	"./bo.js": 276,
	"./br": 277,
	"./br.js": 277,
	"./bs": 278,
	"./bs.js": 278,
	"./ca": 279,
	"./ca.js": 279,
	"./cs": 280,
	"./cs.js": 280,
	"./cv": 281,
	"./cv.js": 281,
	"./cy": 282,
	"./cy.js": 282,
	"./da": 283,
	"./da.js": 283,
	"./de": 284,
	"./de-at": 285,
	"./de-at.js": 285,
	"./de-ch": 286,
	"./de-ch.js": 286,
	"./de.js": 284,
	"./dv": 287,
	"./dv.js": 287,
	"./el": 288,
	"./el.js": 288,
	"./en-au": 289,
	"./en-au.js": 289,
	"./en-ca": 290,
	"./en-ca.js": 290,
	"./en-gb": 291,
	"./en-gb.js": 291,
	"./en-ie": 292,
	"./en-ie.js": 292,
	"./en-il": 293,
	"./en-il.js": 293,
	"./en-nz": 294,
	"./en-nz.js": 294,
	"./eo": 295,
	"./eo.js": 295,
	"./es": 296,
	"./es-do": 297,
	"./es-do.js": 297,
	"./es-us": 298,
	"./es-us.js": 298,
	"./es.js": 296,
	"./et": 299,
	"./et.js": 299,
	"./eu": 300,
	"./eu.js": 300,
	"./fa": 301,
	"./fa.js": 301,
	"./fi": 302,
	"./fi.js": 302,
	"./fo": 303,
	"./fo.js": 303,
	"./fr": 304,
	"./fr-ca": 305,
	"./fr-ca.js": 305,
	"./fr-ch": 306,
	"./fr-ch.js": 306,
	"./fr.js": 304,
	"./fy": 307,
	"./fy.js": 307,
	"./gd": 308,
	"./gd.js": 308,
	"./gl": 309,
	"./gl.js": 309,
	"./gom-latn": 310,
	"./gom-latn.js": 310,
	"./gu": 311,
	"./gu.js": 311,
	"./he": 312,
	"./he.js": 312,
	"./hi": 313,
	"./hi.js": 313,
	"./hr": 314,
	"./hr.js": 314,
	"./hu": 315,
	"./hu.js": 315,
	"./hy-am": 316,
	"./hy-am.js": 316,
	"./id": 317,
	"./id.js": 317,
	"./is": 318,
	"./is.js": 318,
	"./it": 319,
	"./it.js": 319,
	"./ja": 320,
	"./ja.js": 320,
	"./jv": 321,
	"./jv.js": 321,
	"./ka": 322,
	"./ka.js": 322,
	"./kk": 323,
	"./kk.js": 323,
	"./km": 324,
	"./km.js": 324,
	"./kn": 325,
	"./kn.js": 325,
	"./ko": 326,
	"./ko.js": 326,
	"./ky": 327,
	"./ky.js": 327,
	"./lb": 328,
	"./lb.js": 328,
	"./lo": 329,
	"./lo.js": 329,
	"./lt": 330,
	"./lt.js": 330,
	"./lv": 331,
	"./lv.js": 331,
	"./me": 332,
	"./me.js": 332,
	"./mi": 333,
	"./mi.js": 333,
	"./mk": 334,
	"./mk.js": 334,
	"./ml": 335,
	"./ml.js": 335,
	"./mn": 336,
	"./mn.js": 336,
	"./mr": 337,
	"./mr.js": 337,
	"./ms": 338,
	"./ms-my": 339,
	"./ms-my.js": 339,
	"./ms.js": 338,
	"./mt": 340,
	"./mt.js": 340,
	"./my": 341,
	"./my.js": 341,
	"./nb": 342,
	"./nb.js": 342,
	"./ne": 343,
	"./ne.js": 343,
	"./nl": 344,
	"./nl-be": 345,
	"./nl-be.js": 345,
	"./nl.js": 344,
	"./nn": 346,
	"./nn.js": 346,
	"./pa-in": 347,
	"./pa-in.js": 347,
	"./pl": 348,
	"./pl.js": 348,
	"./pt": 349,
	"./pt-br": 350,
	"./pt-br.js": 350,
	"./pt.js": 349,
	"./ro": 351,
	"./ro.js": 351,
	"./ru": 352,
	"./ru.js": 352,
	"./sd": 353,
	"./sd.js": 353,
	"./se": 354,
	"./se.js": 354,
	"./si": 355,
	"./si.js": 355,
	"./sk": 356,
	"./sk.js": 356,
	"./sl": 357,
	"./sl.js": 357,
	"./sq": 358,
	"./sq.js": 358,
	"./sr": 359,
	"./sr-cyrl": 360,
	"./sr-cyrl.js": 360,
	"./sr.js": 359,
	"./ss": 361,
	"./ss.js": 361,
	"./sv": 362,
	"./sv.js": 362,
	"./sw": 363,
	"./sw.js": 363,
	"./ta": 364,
	"./ta.js": 364,
	"./te": 365,
	"./te.js": 365,
	"./tet": 366,
	"./tet.js": 366,
	"./tg": 367,
	"./tg.js": 367,
	"./th": 368,
	"./th.js": 368,
	"./tl-ph": 369,
	"./tl-ph.js": 369,
	"./tlh": 370,
	"./tlh.js": 370,
	"./tr": 371,
	"./tr.js": 371,
	"./tzl": 372,
	"./tzl.js": 372,
	"./tzm": 373,
	"./tzm-latn": 374,
	"./tzm-latn.js": 374,
	"./tzm.js": 373,
	"./ug-cn": 375,
	"./ug-cn.js": 375,
	"./uk": 376,
	"./uk.js": 376,
	"./ur": 377,
	"./ur.js": 377,
	"./uz": 378,
	"./uz-latn": 379,
	"./uz-latn.js": 379,
	"./uz.js": 378,
	"./vi": 380,
	"./vi.js": 380,
	"./x-pseudo": 381,
	"./x-pseudo.js": 381,
	"./yo": 382,
	"./yo.js": 382,
	"./zh-cn": 383,
	"./zh-cn.js": 383,
	"./zh-hk": 384,
	"./zh-hk.js": 384,
	"./zh-tw": 385,
	"./zh-tw.js": 385
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 525;

/***/ }),

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-list',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormPage = /** @class */ (function () {
    function FormPage(navCtrl, navParams, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.todo = this.formBuilder.group({
            title: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            description: [''],
        });
    }
    FormPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FormPage');
    };
    FormPage.prototype.logForm = function () {
        console.log(this.todo.value);
    };
    FormPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-form',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/form/form.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>form</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <form [formGroup]="todo" (ngSubmit)="logForm()">\n      <ion-item>\n        <ion-label>Todo</ion-label>\n        <ion-input type="text" formControlName="title"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Description</ion-label>\n        <ion-textarea formControlName="description"></ion-textarea>\n      </ion-item>\n      <button ion-button type="submit" [disabled]="!todo.valid">Submit</button>\n    </form>\n</ion-content>\n'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/form/form.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], FormPage);
    return FormPage;
}());

//# sourceMappingURL=form.js.map

/***/ }),

/***/ 546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VerifyPage = /** @class */ (function () {
    function VerifyPage(navCtrl, toastCtrl, alertCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
    }
    VerifyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-verify',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/verify/verify.html"*/'<ion-content class="no-scroll overaltheme" padding>\n    <p>Verify</p>\n</ion-content>'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/iTeller/src/pages/verify/verify.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], VerifyPage);
    return VerifyPage;
}());

//# sourceMappingURL=verify.js.map

/***/ }),

/***/ 547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertProvider = /** @class */ (function () {
    function AlertProvider(http) {
        this.http = http;
    }
    AlertProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], AlertProvider);
    return AlertProvider;
}());

//# sourceMappingURL=alert.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(229);
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




var HttpProvider = /** @class */ (function () {
    function HttpProvider(http, storage) {
        this.http = http;
        this.storage = storage;
        this.offline = {
            joinSaccoURL: "http://localhost:3000/joinsacco",
            verifyUserURL: "http://localhost:3000/verifyuser",
            passCodeURL: "http://localhost:3000/passcode",
            loginURL: "http://localhost:3000/login",
            logoutURL: "http://localhost:3000/logout",
            protectedURL: "http://localhost:3000/protected"
        };
    }
    HttpProvider.prototype.joinSacco = function (data) {
        var _this = this;
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
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
            headers.append("Accept", "application/json");
            headers.append("Content-Type", "application/json");
            // fetch signup data from local storage
            _this.storage.get('signupData')
                .then(function (val) {
                var body = __assign({}, data, val);
                _this.http.post(_this.offline.loginURL, body, { headers: headers })
                    .map(function (res) { return res.json(); })
                    .subscribe(function (res) {
                    // let data = res.json
                    // console.log(res)
                    resolve(res);
                    // this.token = data.token;
                });
            });
        });
    };
    HttpProvider.prototype.checkAuthentication = function () {
        var _this = this;
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
    HttpProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], HttpProvider);
    return HttpProvider;
}());

//# sourceMappingURL=http.js.map

/***/ })

},[400]);
//# sourceMappingURL=main.js.map