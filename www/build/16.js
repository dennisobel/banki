webpackJsonp([16],{

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtppopPageModule", function() { return OtppopPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__otppop__ = __webpack_require__(380);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OtppopPageModule = (function () {
    function OtppopPageModule() {
    }
    return OtppopPageModule;
}());
OtppopPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__otppop__["a" /* OtppopPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__otppop__["a" /* OtppopPage */]),
        ],
    })
], OtppopPageModule);

//# sourceMappingURL=otppop.module.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtppopPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OtppopPage = (function () {
    function OtppopPage(viewCtrl, http, navCtrl, navParams, popoverCtrl) {
        this.viewCtrl = viewCtrl;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
    }
    OtppopPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OtppopPage');
        this.name = this.navParams.get('data').data;
        console.log(this.name);
    };
    OtppopPage.prototype.handleMNO = function (page) {
        // Submit OTP
        var _this = this;
        this.http.submitOTP({ otp: this.otp }).then(function (data) {
            if (data.verified == true) {
                // Handle MNO PopOver
                _this.presentPopover(page);
            }
            else {
                // handle wrong otp
            }
        }).then(function () {
            _this.viewCtrl.dismiss();
        });
        this.presentPopover(page);
    };
    OtppopPage.prototype.presentPopover = function (page) {
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
    return OtppopPage;
}());
OtppopPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-otppop',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/otppop/otppop.html"*/'<ion-header>\n  <ion-navbar hideBackButton>\n    <img  class="imagestyle" object-fit: cover height="70px"  width="470px" src="assets/images/enterotp.jpg"/>     \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="no-scroll">\n\n  <h5>\n    Welcome {{name}}, we have sent you a one time password, please enter it below.\n  </h5>\n  \n\n  <ion-item>    \n    <ion-input placeholder="OTP" style="text-align:right; border-radius: 4px;" [(ngModel)]="otp" type="text"></ion-input>\n  </ion-item>\n\n  <button ion-button block color="gold" (click)="handleMNO(\'MnopopPage\')">Next</button>\n  <br>\n  <button ion-button block outline color="gold" (click)="handleMNO(\'MnopopPage\')">Resend</button>\n  \n</ion-content>\n'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/otppop/otppop.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* PopoverController */]])
], OtppopPage);

//# sourceMappingURL=otppop.js.map

/***/ })

});
//# sourceMappingURL=16.js.map