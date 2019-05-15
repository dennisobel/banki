webpackJsonp([6],{

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatementsPageModule", function() { return StatementsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__statements__ = __webpack_require__(410);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StatementsPageModule = (function () {
    function StatementsPageModule() {
    }
    return StatementsPageModule;
}());
StatementsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__statements__["a" /* StatementsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__statements__["a" /* StatementsPage */]),
        ],
    })
], StatementsPageModule);

//# sourceMappingURL=statements.module.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatementsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_socket_socket__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__guaranteeview_guaranteeview__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__guarantorview_guarantorview__ = __webpack_require__(232);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var StatementsPage = (function () {
    function StatementsPage(toastCtrl, viewCtrl, navCtrl, alertCtrl, navParams, socketHelper, socket, storage) {
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.socketHelper = socketHelper;
        this.socket = socket;
        this.storage = storage;
        this.memberData = this.navParams.get('data');
        this.mno = this.memberData['MB.CUST.NO'];
    }
    StatementsPage.prototype.ionViewDidLoad = function () {
        this.presentToast("This messages will be sent to your registered email", true, "bottom");
    };
    StatementsPage.prototype.handleEStatement = function () {
        var _this = this;
        this.socketHelper.eStatement(this.mno).then(function () {
            _this.socket.on('eStatementData', function (data) {
                console.log('ESTATEMENT RESULTS: ', data);
                _this.presentToast('Your estatement statement will be sent to your email inbox shortly', true, 'middle');
            });
        });
    };
    StatementsPage.prototype.handleGuarantorStatement = function () {
        var _this = this;
        this.socketHelper.getGuarantors(this.mno).then(function () {
            _this.socket.on('guarantorsResult', function (data) {
                console.log('GUARANTORS RESULT:', data);
                // this.presentToast('Your guarantors statement will be sent to your email inbox shortly',true,'middle')
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__guarantorview_guarantorview__["a" /* GuarantorviewPage */], { data: data });
            });
        });
    };
    StatementsPage.prototype.handleGuaranteeStatement = function () {
        var _this = this;
        this.socketHelper.getGuarantees(this.mno).then(function () {
            _this.socket.on('guaranteesResult', function (data) {
                console.log('GUARANTEES RESULT: ', data);
                // this.presentToast('Your guarantees statement will be sent to your email inbox shortly',true,'middle')
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__guaranteeview_guaranteeview__["a" /* GuaranteeviewPage */], { data: data });
            });
        });
    };
    StatementsPage.prototype.logOut = function () {
        this.navCtrl.setRoot('WelcomePage');
    };
    StatementsPage.prototype.onClose = function () {
        this.viewCtrl.dismiss();
    };
    StatementsPage.prototype.presentToast = function (message, close, position) {
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
    return StatementsPage;
}());
StatementsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-statements',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/statements/statements.html"*/'\n<ion-header>\n  <!--\n  <ion-navbar hideBackButton>\n    <img  class="imagestyle" object-fit: cover height="70px"  width="470px" src="assets/images/header.jpg"/>     \n  </ion-navbar>\n  -->\n  <ion-navbar hideBackButton>\n    <!--\n    <ion-buttons start >\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="ios-menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end >\n      <button ion-button icon-only (click)="logOut()">\n        <ion-icon name="ios-log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n    -->\n    <img height="150px" width="470px" src="assets/images/statementsheader.jpg"/>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-row>\n    <ion-col col-6>\n      <div (click)="handleEStatement()">\n        <ion-img height="150px" width="150px" src="assets/images/estatements.jpg"></ion-img>\n      </div>        \n    </ion-col>\n    <ion-col col-6>\n      <div (click)="handleGuarantorStatement()">\n        <ion-img height="150px" width="150px" src="assets/images/guarantor.jpg"></ion-img>\n      </div>      \n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col col-3></ion-col>\n    <ion-col col-4>\n      <div (click)="handleGuaranteeStatement()">\n        <ion-img height="150px" width="150px" src="assets/images/guarantee.jpg"></ion-img>\n      </div>    \n    </ion-col>\n    <ion-col col-3></ion-col>\n  </ion-row> \n\n\n\n\n\n  \n\n  <!--\n  <button \n    ion-button \n    block \n    color="color2" \n    (click)="handleEStatement()">E-Statement\n  </button> \n\n  <br>\n\n  <button \n    ion-button \n    block \n    color="color2" \n    (click)="handleGuarantorStatement()">Guarantor Statement\n  </button> \n\n  <br>\n\n  <button\n    ion-button \n    block \n    color="color2" \n    (click)="handleGuaranteeStatement()">Guarantees Statement\n  </button> \n\n  -->\n\n  <ion-fab left bottom>\n    <button ion-fab mini color="gold" (click)="onClose()"><ion-icon name="md-close"></ion-icon></button>\n  </ion-fab>  \n\n</ion-content>\n '/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/statements/statements.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_socket_socket__["a" /* SocketProvider */],
        __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__["Socket"],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
], StatementsPage);

/**
 
      this.socket.on('eStatementData',(data)=>{
        console.log(data)
        let alert = this.alertCtrl.create({
          title:"E-STATEMENT REQUEST",
          message:`${data.data}`,
          buttons:[
            {
              text:'Ok',
              role:'cancel',
              handler:() => {
                console.log('Cancel clicked');
              }
            }
          ]
          
        })
        alert.present();
      })
 */ 
//# sourceMappingURL=statements.js.map

/***/ })

});
//# sourceMappingURL=6.js.map