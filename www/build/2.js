webpackJsonp([2],{

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProfilePageModule", function() { return UpdateProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__update_profile__ = __webpack_require__(367);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UpdateProfilePageModule = (function () {
    function UpdateProfilePageModule() {
    }
    return UpdateProfilePageModule;
}());
UpdateProfilePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__update_profile__["a" /* UpdateProfilePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__update_profile__["a" /* UpdateProfilePage */]),
        ],
    })
], UpdateProfilePageModule);

//# sourceMappingURL=update-profile.module.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateProfilePage; });
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


var UpdateProfilePage = (function () {
    function UpdateProfilePage(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.fullName = 'Adam Nicolas Taylor Smith';
        this.country = 'england';
        this.city = 'liverpool';
        this.phone = 12345343543;
        this.email = 'Adam_Nicolas@gmail.com';
    }
    UpdateProfilePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return UpdateProfilePage;
}());
UpdateProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-update-profile',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/update-profile/update-profile.html"*/'\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons>\n      <button ion-button icon-only (click)="dismiss()">\n        <ion-icon name="md-close-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="update">\n    <div class="appForm">\n      <ion-list>\n        <!-- to write full name -->\n        <ion-item>\n          <ion-label stacked>Full Name</ion-label>\n          <ion-input type="text"  placeholder="Full Name" [(ngModel)]="fullName"></ion-input>\n        </ion-item> \n        <!-- select country -->\n        <ion-item >\n          <ion-label stacked>Country</ion-label>\n            <ion-select   [(ngModel)]="country">\n              <ion-option value="england" >England</ion-option> \n              <ion-option value="usa" >USA</ion-option> \n              <ion-option value="france" >France</ion-option> \n            </ion-select>\n        </ion-item>\n          <!-- select city -->\n        <ion-item >\n          <ion-label stacked>City</ion-label>\n            <ion-select   [(ngModel)]="city">\n              <ion-option value="liverpool" >Liverpool</ion-option> \n              <ion-option value="manchester" >Manchester</ion-option> \n              <ion-option value="london" >London</ion-option> \n            </ion-select>\n        </ion-item>\n          <!-- write phone number -->\n        <ion-item>\n          <ion-label stacked>Phone</ion-label>\n          <ion-input type="num"  placeholder="Phone Number" [(ngModel)]="phone"></ion-input>\n        </ion-item> \n        <!-- write e-mailaddress -->\n        <ion-item>\n          <ion-label stacked>E-mail</ion-label>\n          <ion-input type="email"  placeholder="E-mail address" [(ngModel)]="email"></ion-input>\n        </ion-item> \n      </ion-list> \n    </div>\n    <button ion-button block color="color2" (click)="dismiss()">Save</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/update-profile/update-profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
], UpdateProfilePage);

//# sourceMappingURL=update-profile.js.map

/***/ })

});
//# sourceMappingURL=2.js.map