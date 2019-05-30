webpackJsonp([18],{

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NonmemberPageModule", function() { return NonmemberPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nonmember__ = __webpack_require__(384);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NonmemberPageModule = (function () {
    function NonmemberPageModule() {
    }
    return NonmemberPageModule;
}());
NonmemberPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__nonmember__["a" /* NonmemberPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__nonmember__["a" /* NonmemberPage */]),
        ],
    })
], NonmemberPageModule);

//# sourceMappingURL=nonmember.module.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NonmemberPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_socket_socket__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nonmemberotp_nonmemberotp__ = __webpack_require__(230);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NonmemberPage = (function () {
    function NonmemberPage(socketHelper, socket, storage, toastCtrl, navCtrl, navParams, popoverCtrl) {
        this.socketHelper = socketHelper;
        this.socket = socket;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
    }
    NonmemberPage.prototype.ionViewDidLoad = function () {
    };
    NonmemberPage.prototype.handleContinue = function () {
        var _this = this;
        var data = {
            firstname: this.firstname,
            surname: this.surname,
            othername: this.othername,
            gender: this.gender,
            idnumber: this.idnumber,
            phonenumber: this.phonenumber,
            dob: this.dob
        };
        this.socketHelper.postNonMember(data).then(function () {
            setTimeout(function () {
                _this.presentToast('Your data has been submited for verification', false, 'bottom');
            }, 1000);
        }).then(function () {
            setTimeout(function () {
                _this.presentToast('Your data has been verified and a one time password has been sent to your number', false, 'bottom');
            }, 5000);
        }).then(function () {
            setTimeout(function () {
                _this.presentPopover(__WEBPACK_IMPORTED_MODULE_5__nonmemberotp_nonmemberotp__["a" /* NonmemberotpPage */], data);
            }, 10000);
        });
    };
    NonmemberPage.prototype.presentToast = function (message, close, position) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            showCloseButton: close,
            position: position
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    NonmemberPage.prototype.presentPopover = function (page, data) {
        var ev = {
            target: {
                getBoundingClientRect: function () {
                    return {
                        top: '100', left: '100'
                    };
                }
            }
        };
        var popover = this.popoverCtrl.create(page, { ev: ev, data: data }, { cssClass: 'alertCustomCss', showBackdrop: true });
        popover.present({});
    };
    return NonmemberPage;
}());
NonmemberPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-nonmember',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/nonmember/nonmember.html"*/'<ion-header>\n  <ion-toolbar color="faceColor">      \n    <ion-title text-center>Welcome</ion-title>       \n  </ion-toolbar> \n</ion-header>\n\n<ion-content padding>\n<div class="appForm">\n  <ion-list>\n    <ion-item>      \n      <ion-input placeholder="First Name" style="border: 1px solid black; text-align:right; border-radius: 4px;" [(ngModel)]="firstname" type="text" id="till"></ion-input>\n    </ion-item>   \n    <hr>\n    <ion-item>\n      <ion-input placeholder="Surname" style="border: 1px solid black; text-align:right; border-radius: 4px;" [(ngModel)]="surname" type="text" id="amount"></ion-input>\n    </ion-item> \n    <hr>\n    <ion-item>\n      <ion-input placeholder="Other Names" style="border: 1px solid black; text-align:right; border-radius: 4px;" [(ngModel)]="othernames" type="text" id="amount"></ion-input>\n    </ion-item>  \n    <hr>\n      <ion-item >\n        <ion-label stacked>Gender</ion-label>\n          <ion-select   [(ngModel)]="fromAccount">\n             <ion-option value="account1" >Male</ion-option> \n             <ion-option value="account2" >Female</ion-option> \n          </ion-select>\n      </ion-item>\n    <hr>\n    <ion-item>\n      <ion-input placeholder="ID Number" style="border: 1px solid black; text-align:right; border-radius: 4px;" [(ngModel)]="idnumber" type="text" id="amount"></ion-input>\n    </ion-item> \n    <hr>\n    <ion-item>\n      <ion-input placeholder="Phone Number" style="border: 1px solid black; text-align:right; border-radius: 4px;" [(ngModel)]="phonenumber" type="text" id="amount"></ion-input>\n    </ion-item>  \n    <hr>\n    <ion-item>\n      <ion-label>Date Of Birth</ion-label>\n      <ion-datetime displayFormat="DD/MM/YYYY"  style="border: 1px solid black; text-align:right; border-radius: 4px;" pickerFormat="MMMM YYYY DDDD" [(ngModel)]="dob"></ion-datetime>\n    </ion-item>                \n  </ion-list>   \n\n  <hr>\n\n  <button color="color2" ion-button block (click)="handleContinue()">CONTINUE</button>\n  </div>\n \n</ion-content>\n'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/nonmember/nonmember.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_socket_socket__["a" /* SocketProvider */],
        __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__["Socket"],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* PopoverController */]])
], NonmemberPage);

//# sourceMappingURL=nonmember.js.map

/***/ })

});
//# sourceMappingURL=18.js.map