webpackJsonp([15],{

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockPageModule", function() { return LockPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lock__ = __webpack_require__(366);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LockPageModule = (function () {
    function LockPageModule() {
    }
    return LockPageModule;
}());
LockPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__lock__["a" /* LockPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lock__["a" /* LockPage */]),
        ],
    })
], LockPageModule);

//# sourceMappingURL=lock.module.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LockPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LockPage = (function () {
    function LockPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LockPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LockPage');
    };
    return LockPage;
}());
LockPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-lock',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/lock/lock.html"*/'\n<ion-content padding>\n  <div class="appForm">\n    <p>Unlock App</p>\n    <!-- buttons to send or Cancal -->\n\n    <ion-item>\n      <ion-label floating></ion-label>\n      <ion-icon name="ios-lock-outline" item-left></ion-icon>\n      <ion-input [(ngModel)]="pin" type="password" id="pin"></ion-input>\n    </ion-item>\n\n    <hr>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col col-4>\n          <button ion-button block color="color1" >1</button>\n        </ion-col>\n        <ion-col col-4>\n          <button ion-button block color="color1" >2</button>\n        </ion-col>\n        <ion-col col-4>\n          <button ion-button block color="color1" >3</button>\n        </ion-col>        \n      </ion-row>\n\n      <ion-row>\n        <ion-col col-4>\n          <button ion-button block color="color1" >4</button>\n        </ion-col>\n        <ion-col col-4>\n          <button ion-button block color="color1" >5</button>\n        </ion-col>\n        <ion-col col-4>\n          <button ion-button block color="color1" >6</button>\n        </ion-col>        \n      </ion-row>     \n\n      <ion-row>\n        <ion-col col-4>\n          <button ion-button block color="color1" >7</button>\n        </ion-col>\n        <ion-col col-4>\n          <button ion-button block color="color1" >8</button>\n        </ion-col>\n        <ion-col col-4>\n          <button ion-button block color="color1" >9</button>\n        </ion-col>        \n      </ion-row>  \n\n      <ion-row>\n        <ion-col col-4>\n          <button ion-button block color="color1" ><ion-icon name="checkmark"></ion-icon></button>\n        </ion-col>\n        <ion-col col-4>\n          <button ion-button block color="color1" >0</button>\n        </ion-col>\n        <ion-col col-4>\n          <button ion-button block color="color1" ><ion-icon name="arrow-back"></ion-icon></button>\n        </ion-col>        \n      </ion-row>             \n    </ion-grid>\n    \n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/lock/lock.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], LockPage);

//# sourceMappingURL=lock.js.map

/***/ })

});
//# sourceMappingURL=15.js.map