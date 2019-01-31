webpackJsonp([19],{

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillmanagementPageModule", function() { return BillmanagementPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__billmanagement__ = __webpack_require__(350);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BillmanagementPageModule = (function () {
    function BillmanagementPageModule() {
    }
    return BillmanagementPageModule;
}());
BillmanagementPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__billmanagement__["a" /* BillmanagementPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__billmanagement__["a" /* BillmanagementPage */]),
        ],
    })
], BillmanagementPageModule);

//# sourceMappingURL=billmanagement.module.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillmanagementPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_socket_socket__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_socket_io__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng_socket_io__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BillmanagementPage = (function () {
    function BillmanagementPage(storage, socketHelper, socket, navCtrl, alertCtrl, navParams) {
        var _this = this;
        this.storage = storage;
        this.socketHelper = socketHelper;
        this.socket = socket;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.fosaArray = [];
        this.mainSavArray = [];
        this.bills = [
            { name: 'Airtime', component: '' },
            { name: 'Electricity', component: '' }
        ];
        this.socket.on('airtimePurchaseData', function (data) {
            console.log(data);
            var alert = _this.alertCtrl.create({
                title: "AIRTIME PURCHASE FEEDBACK",
                message: data.data,
                buttons: [
                    {
                        text: 'Ok',
                        role: 'Ok',
                        handler: function (data) {
                            console.log('Cancel clicked');
                        }
                    },
                ]
            });
            alert.present();
        });
        this.socket.on('tokenPurchaseData', function (data) {
            console.log(data);
            var alert = _this.alertCtrl.create({
                title: "TOKEN PURCHASE FEEDBACK",
                message: data.data,
                buttons: [
                    {
                        text: 'Ok',
                        role: 'Ok',
                        handler: function (data) {
                            console.log('Cancel clicked');
                        }
                    },
                ]
            });
            alert.present();
        });
    }
    BillmanagementPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad BillmanagementPage ...');
        this.socket.on('balEnqData', function (data) {
            console.log("balEnqData:", data);
            _this.fosaArray = data.data[0];
            _this.fosaBal = _this.fosaArray[Object.keys(_this.fosaArray)[3]];
            _this.mainSavArray = data.data[1];
            _this.mainSav = _this.mainSavArray[Object.keys(_this.mainSavArray)[3]];
            _this.name = _this.mainSavArray[Object.keys(_this.mainSavArray)[1]];
            console.log(_this.fosaBal, ":", _this.mainSav);
        });
    };
    BillmanagementPage.prototype.handlePurchase = function (item) {
        var _this = this;
        console.log(item);
        var alert = this.alertCtrl.create({
            title: item + " purchase:",
            inputs: [
                {
                    name: 'amount',
                    placeholder: 'Amount',
                    type: 'number'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Buy',
                    handler: function (data) {
                        if (item === 'Airtime') {
                            _this.socketHelper.airtimePurchase(data.amount);
                        }
                        else if (item === 'Electricity') {
                            _this.socketHelper.tokenPurchase(data.amount);
                        }
                    }
                },
                {
                    text: 'Kopa',
                    handler: function (data) {
                        if (item === 'Airtime') {
                            console.log("kopa credo coming soon");
                        }
                        else if (item === 'Electricity') {
                            console.log("kopa token coming soon");
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    return BillmanagementPage;
}());
BillmanagementPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-billmanagement',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/billmanagement/billmanagement.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-buttons start >\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="ios-menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Bill Management</ion-title>\n    <ion-buttons end >\n      <button ion-button icon-only (click)="logOut()">\n        <ion-icon name="ios-log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n<p class="myTitle">Handle Bills</p>\n  <!-- account Name,account Number and currency -->\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6 col-md-4 col-lg-3 *ngFor="let item of bills">\n        <div class="account" (click)="handlePurchase(item.name)">\n          <p>{{item.name}}</p>\n          <!--\n          <p class="countNum">\n            {{item.firstNums}}\n            <span>xxxxx</span>\n            {{item.lastNums}}\n          </p>\n          \n          <p>{{item.currency}} $</p>-->\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/billmanagement/billmanagement.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3__providers_socket_socket__["a" /* SocketProvider */],
        __WEBPACK_IMPORTED_MODULE_4_ng_socket_io__["Socket"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], BillmanagementPage);

/*
"1427FT18318TNXFW/OFS190280351666183.01/1,TRANSACTION.TYPE=ACAI:1:1,DEBIT.ACCT.NO=01030469011:1:1,CURRENCY.MKT.DR=1:1:1,DEBIT.CURRENCY=KES:1:1,DEBIT.AMOUNT=10.00:1:1,DEBIT.VALUE.DATE=20181114:1:1,DEBIT.THEIR.REF=Airtime Payment:1:1,CREDIT.THEIR.REF=Airtime Payment:1:1,CREDIT.ACCT.NO=KES1130600010001:1:1,CURRENCY.MKT.CR=1:1:1,CREDIT.CURRENCY=KES:1:1,CREDIT.VALUE.DATE=20181114:1:1,PROCESSING.DATE=20181114:1:1,ORDERING.BANK=KBS:1:1,CHARGE.COM.DISPLAY=NO:1:1,COMMISSION.CODE=DEBIT PLUS CHARGES:1:1,CHARGE.CODE=DEBIT PLUS CHARGES:1:1,PROFIT.CENTRE.CUST=30469:1:1,RETURN.TO.DEPT=NO:1:1,FED.FUNDS=NO:1:1,POSITION.TYPE=TR:1:1,MB.MEMBER.NO=30469:1:1,MB.MESSAGE=;Dear MWAKESI, your request for Airtime Payment of 10.00 has been processed successfully.;:1:1,AMOUNT.DEBITED=KES10.00:1:1,AMOUNT.CREDITED=KES10.00:1:1,CREDIT.COMP.CODE=KE0010001:1:1,DEBIT.COMP.CODE=KE0010001:1:1,LOC.AMT.DEBITED=10.00:1:1,LOC.AMT.CREDITED=10.00:1:1,CUST.GROUP.LEVEL=99:1:1,DEBIT.CUSTOMER=30469:1:1,DR.ADVICE.REQD.Y.N=N:1:1,CR.ADVICE.REQD.Y.N=N:1:1,CHARGED.CUSTOMER=30469:1:1,TOT.REC.COMM=0:1:1,TOT.REC.COMM.LCL=0:1:1,TOT.REC.CHG=0:1:1,TOT.REC.CHG.LCL=0:1:1,RATE.FIXING=NO:1:1,TOT.REC.CHG.CRCCY=0:1:1,TOT.SND.CHG.CRCCY=0.00:1:1,AUTH.DATE=20181114:1:1,STMT.NOS=186560351666183.02:1:1,STMT.NOS=1-2:2:1,CURR.NO=1:1:1,INPUTTER=3516_MOBILE__OFS_KBSBANK:1:1,DATE.TIME=1901281823:1:1,AUTHORISER=3516_MOBILE_OFS_KBSBANK:1:1,CO.CODE=KE0010001:1:1,DEPT.CODE=1:1:1|000|$$"
*/ 
//# sourceMappingURL=billmanagement.js.map

/***/ })

});
//# sourceMappingURL=19.js.map