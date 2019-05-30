webpackJsonp([19],{

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MnopopPageModule", function() { return MnopopPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mnopop__ = __webpack_require__(379);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MnopopPageModule = (function () {
    function MnopopPageModule() {
    }
    return MnopopPageModule;
}());
MnopopPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__mnopop__["a" /* MnopopPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mnopop__["a" /* MnopopPage */]),
        ],
    })
], MnopopPageModule);

//# sourceMappingURL=mnopop.module.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MnopopPage; });
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



var MnopopPage = (function () {
    function MnopopPage(viewCtrl, http, navCtrl, navParams, popoverCtrl) {
        this.viewCtrl = viewCtrl;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
    }
    MnopopPage.prototype.handlePIN = function (page, page2open) {
        var _this = this;
        // Submit MNO
        this.http.submitMNO({ mno: this.mno }).then(function (data) {
            if (data.verified === true) {
                _this.presentPopover(page, page2open, null);
            }
            else {
                // mno dont exist
            }
        }).then(function () {
            _this.viewCtrl.dismiss();
        });
    };
    MnopopPage.prototype.presentPopover = function (page, page2open, data) {
        var ev = {
            target: {
                getBoundingClientRect: function () {
                    return {
                        top: '100', left: '100'
                    };
                }
            }
        };
        var popover = this.popoverCtrl.create(page, { ev: ev, page2open: page2open, data: data }, { cssClass: 'alertCustomCss', showBackdrop: true });
        popover.present({});
    };
    return MnopopPage;
}());
MnopopPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-mnopop',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/mnopop/mnopop.html"*/'<ion-header>\n  <ion-navbar hideBackButton>\n    <img  class="imagestyle" object-fit: cover height="70px"  width="470px" src="assets/images/entermnoheader.jpg"/>     \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="no-scroll">\n\n  <ion-item>    \n    <ion-input placeholder="Member Number" style="text-align:right; border-radius: 4px;" [(ngModel)]="mno" type="text"></ion-input>\n  </ion-item>\n\n  <button ion-button block color="gold" (click)="handlePIN(\'LockPage\',\'SummaryPage\')">Next</button>\n  \n</ion-content>\n'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/mnopop/mnopop.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* PopoverController */]])
], MnopopPage);

//# sourceMappingURL=mnopop.js.map

/***/ })

});
//# sourceMappingURL=19.js.map