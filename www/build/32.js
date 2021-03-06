webpackJsonp([32],{

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyGoodsPageModule", function() { return BuyGoodsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buy_goods__ = __webpack_require__(391);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BuyGoodsPageModule = (function () {
    function BuyGoodsPageModule() {
    }
    return BuyGoodsPageModule;
}());
BuyGoodsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__buy_goods__["a" /* BuyGoodsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__buy_goods__["a" /* BuyGoodsPage */]),
        ],
    })
], BuyGoodsPageModule);

//# sourceMappingURL=buy-goods.module.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuyGoodsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the BuyGoodsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BuyGoodsPage = (function () {
    function BuyGoodsPage(viewCtrl, navCtrl, alertCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
    }
    BuyGoodsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BuyGoodsPage');
    };
    BuyGoodsPage.prototype.handleContinue = function () {
        var alert = this.alertCtrl.create({
            title: "PROCESSING BUY GOODS",
            buttons: [
                {
                    text: "Ok",
                    role: "cancel",
                    handler: function () {
                        console.log("canceled");
                    }
                }
            ]
        });
        alert.present();
    };
    BuyGoodsPage.prototype.logOut = function () {
        this.navCtrl.setRoot('WelcomePage');
    };
    BuyGoodsPage.prototype.onClose = function () {
        this.viewCtrl.dismiss();
    };
    return BuyGoodsPage;
}());
BuyGoodsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-buy-goods',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/buy-goods/buy-goods.html"*/'\n<ion-header>\n  <!--\n  <ion-navbar hideBackButton>\n    <img  class="imagestyle" object-fit: cover height="70px"  width="470px" src="assets/images/header.jpg"/>     \n  </ion-navbar>\n  -->\n  <ion-navbar hideBackButton>\n    <!--\n    <ion-buttons start >\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="ios-menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end >\n      <button ion-button icon-only (click)="logOut()">\n        <ion-icon name="ios-log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n    -->\n    <img height="150px" width="470px" src="assets/images/buygoodsheader.jpg"/>\n  </ion-navbar>\n</ion-header>\n\n<!--buygoodsheader-->\n\n\n<ion-content padding>\n<div class="appForm">\n  <ion-list>\n    <ion-item>\n      <ion-input placeholder="Till Number" style="border: 1px solid black; border-radius: 4px;" [(ngModel)]="till" type="text" id="till"></ion-input>\n    </ion-item>   \n    <hr>\n    <ion-item>\n      <ion-input placeholder="Amount" style="border: 1px solid black; border-radius: 4px;" [(ngModel)]="amount" type="text" id="amount"></ion-input>\n    </ion-item> \n  </ion-list>   \n\n  <hr>\n\n  <button color="faceColor" ion-button block (click)="handleContinue()">CONTINUE</button>\n\n  </div>\n\n  <ion-fab left bottom>\n    <button ion-fab mini color="gold" (click)="onClose()"><ion-icon name="md-close"></ion-icon></button>\n  </ion-fab>   \n</ion-content>\n '/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/buy-goods/buy-goods.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], BuyGoodsPage);

//# sourceMappingURL=buy-goods.js.map

/***/ })

});
//# sourceMappingURL=32.js.map