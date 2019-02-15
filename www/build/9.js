webpackJsonp([9],{

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPageModule", function() { return SettingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setting__ = __webpack_require__(372);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingPageModule = (function () {
    function SettingPageModule() {
    }
    return SettingPageModule;
}());
SettingPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__setting__["a" /* SettingPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__setting__["a" /* SettingPage */]),
        ],
    })
], SettingPageModule);

//# sourceMappingURL=setting.module.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_component__ = __webpack_require__(224);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingPage = (function () {
    function SettingPage(_myApp, navCtrl) {
        this._myApp = _myApp;
        this.navCtrl = navCtrl;
        this.language = 'en';
        this.action = false;
        this.action = this._myApp.animateVarible;
    }
    SettingPage.prototype.animateApp = function (e) {
        this._myApp.animateVarible = e.checked;
        this.action = this._myApp.animateVarible;
    };
    // logOut Function 
    SettingPage.prototype.logOut = function () {
        this.navCtrl.setRoot('WelcomePage');
    };
    return SettingPage;
}());
SettingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-setting',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/setting/setting.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-buttons start >\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="ios-menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Setting</ion-title>\n    <ion-buttons end >\n      <button ion-button icon-only (click)="logOut()">\n        <ion-icon name="ios-log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <div class="appForm">\n    <ion-list>\n      <ion-item>\n        <ion-label stacked>Password</ion-label>\n        <ion-input type="password" value="5672897892"  placeholder="password"></ion-input>\n      </ion-item> \n      <!-- Language Select -->\n      <ion-item >\n        <ion-label stacked>App Language</ion-label>\n          <ion-select  [(ngModel)]="language">\n             <ion-option value="en" >English</ion-option> \n             <ion-option value="fr" >French</ion-option> \n          </ion-select>\n      </ion-item>\n    </ion-list> \n    <!-- Notification checkbox list -->\n    <ion-list>\n      <ion-list-header>\n          Notification\n      </ion-list-header>\n      <ion-item>\n        <ion-label>Send me sms when i login</ion-label>\n        <ion-checkbox></ion-checkbox>\n      </ion-item>\n      <ion-item>\n        <ion-label>Notify me when there is new deposits</ion-label>\n        <ion-checkbox></ion-checkbox>\n      </ion-item>\n    </ion-list> \n    <!-- Animation checkbox  -->\n    <!-- list in you need to add another checkbox -->\n    <ion-list>\n      <ion-list-header>\n          Animation\n      </ion-list-header>\n      <ion-item>\n        <ion-label>Animation Avilability</ion-label>\n        <ion-checkbox (ionChange)="animateApp($event)"  checked="{{action}}"></ion-checkbox>\n      </ion-item>\n    </ion-list> \n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/setting/setting.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
], SettingPage);

//# sourceMappingURL=setting.js.map

/***/ })

});
//# sourceMappingURL=9.js.map