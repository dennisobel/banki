webpackJsonp([14],{

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalAccountPageModule", function() { return PersonalAccountPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__personal_account__ = __webpack_require__(403);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PersonalAccountPageModule = (function () {
    function PersonalAccountPageModule() {
    }
    return PersonalAccountPageModule;
}());
PersonalAccountPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__personal_account__["a" /* PersonalAccountPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__personal_account__["a" /* PersonalAccountPage */]),
        ],
    })
], PersonalAccountPageModule);

//# sourceMappingURL=personal-account.module.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalAccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_socket_io__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_socket_socket__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__account_details_account_details__ = __webpack_require__(229);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PersonalAccountPage = (function () {
    function PersonalAccountPage(viewCtrl, toastCtrl, navCtrl, navParams, socketHelper, storage, socket) {
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.socketHelper = socketHelper;
        this.storage = storage;
        this.socket = socket;
        this.fosaArray = [];
        this.mainSavArray = [];
        this.accounts = [];
        this.balanceArray = [];
        this.commaRemoved = [];
    }
    PersonalAccountPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.presentToast();
        // Fetch Member Data
        var memberData = this.navParams.get('data');
        this.mno = memberData['MB.CUST.NO'];
        console.log("PERSONAL ACCOUNTS MEMBER DATA: ", memberData);
        // GET MEMBER ACCOUNTS
        // this.socketHelper.getAccounts(mno)
        // GET ACCOUNT BALANCES
        this.socketHelper.balanceEnq(this.mno).then(function () {
            _this.socket.on('balEnqData', function (data) {
                if (data.data.length > 0) {
                    return new Promise(function (resolve, reject) {
                        resolve(_this.balanceArray = data.data.filter(function (el) {
                            return !el.includes('VR');
                        }).map(function (el) {
                            return Object.assign({}, el.split(";"));
                        }));
                    })
                        .then(function () {
                        _this.balanceArray.shift();
                    })
                        .then(function (data) {
                        console.log("DATA:", _this.balanceArray);
                        _this.filtered = _this.balanceArray.filter(function (el) {
                            return el[3] > 0;
                        });
                        console.log("FILTERED ARRAY:", _this.filtered);
                        _this.balanceArray.forEach(function (el) {
                            if (el[0].length <= 1) {
                                _this.balanceArray.splice(_this.balanceArray.indexOf(el), 1);
                            }
                            else {
                            }
                        });
                        // console.log(this.balanceArray[0])
                        // console.log(this.balanceArray[0][0])
                        // console.log('BAL ARRAY: ',this.balanceArray);
                        // this.amount = this.balanceArray[this.balanceArray.length-1][3].substr(0,substrLoc2);
                    });
                }
                // PROCESS STRING this.balEnqData 
                console.log('BAL ARRAY: ', _this.balanceArray);
            });
        });
    };
    // AccountDetailsPage
    // goTo Function 
    PersonalAccountPage.prototype.goTo = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__account_details_account_details__["a" /* AccountDetailsPage */], { data: { details: item, mno: this.mno } });
    };
    // logOut Function 
    PersonalAccountPage.prototype.logOut = function () {
        this.navCtrl.setRoot('WelcomePage');
    };
    PersonalAccountPage.prototype.remove_character = function (str_to_remove, str) {
        var reg = new RegExp(str_to_remove);
        return str.replace(reg, '');
    };
    PersonalAccountPage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Click item to view more details...',
            // duration: 3000,
            showCloseButton: true,
            position: 'middle'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    PersonalAccountPage.prototype.onClose = function () {
        this.viewCtrl.dismiss();
    };
    return PersonalAccountPage;
}());
PersonalAccountPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-personal-account',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/personal-account/personal-account.html"*/'\n<ion-header>\n  <!--\n  <ion-navbar hideBackButton>\n    <img  class="imagestyle" object-fit: cover height="70px"  width="470px" src="assets/images/header.jpg"/>     \n  </ion-navbar>\n  -->\n  <ion-navbar hideBackButton>\n    <!--\n    <ion-buttons start >\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="ios-menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end >\n      <button ion-button icon-only (click)="logOut()">\n        <ion-icon name="ios-log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n    -->\n    <img height="150px" width="470px" src="assets/images/savingsandbalancesheader.jpg"/>\n  </ion-navbar>\n\n  <!--\n  <ion-navbar>\n    <ion-grid class="blanceGrid">\n    <ion-row>\n      <ion-col col-auto>\n        <div class="avatarContent">\n          <img src="assets/img/obel.CR2"/>\n\n        </div>\n      </ion-col>\n      <ion-col col>\n        <div class="loginInfo">\n          <P><strong>{{name}}</strong></P>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  </ion-navbar>  \n  -->\n  \n</ion-header>\n\n<ion-content >\n  <p class="myTitle">Accounts</p>\n  \n  <ion-grid>\n    <ion-row>\n      <ion-col col-6 col-md-4 col-lg-3 *ngFor="let item of filtered">\n        <div class="account" (click)="goTo(item)">\n          <p style="color: #65a2d9">{{item[0]}}</p>\n          <!--\n          <p class="countNum">\n            Acc Num:{{item[2]}}\n          </p>\n          -->\n\n          <p>Ksh {{item[3]}}</p>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  \n  <ion-fab left bottom>\n    <button ion-fab mini color="gold" (click)="onClose()"><ion-icon name="md-close"></ion-icon></button>\n  </ion-fab>    \n\n</ion-content>\n'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/personal-account/personal-account.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_socket_socket__["a" /* SocketProvider */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_2_ng_socket_io__["Socket"]])
], PersonalAccountPage);

// Fetch member data
/*
this.storage.get('memberData').then((data) => {
  console.log('MEMBER DATA: ', data);
  this.socketHelper.balanceEnq(data)
})
console.log("personal accs page loaded")
*/
// this.socketHelper.balanceEnq()
// this.socketHelper.balanceEnq(this.navParams.get('data'))
/*
this.socket.on('balEnqData',(data)=>{
  console.log("balEnqData:",data)
  this.fosaArray = data.data[0]
  this.fosaBal = this.fosaArray[Object.keys(this.fosaArray)[3]]
  this.fosaAccNum = this.fosaArray[Object.keys(this.fosaArray)[2]]
  this.mainSavArray = data.data[1]
  this.mainSav = this.mainSavArray[Object.keys(this.mainSavArray)[3]]
  this.mainSavAccNum = this.mainSavArray[Object.keys(this.mainSavArray)[2]]
  console.log("FOSA",this.fosaBal)
  console.log("MAIN",this.mainSav)
  console.log("FOSA NUM",this.fosaAccNum)
  console.log("MAIN ACC NUM",this.mainSavAccNum)

  this.accounts=[
    {
      name:'FOSA',
      accNumber:this.fosaAccNum,
      currency:this.fosaBal
    },
    {
      name:'MAIN',
      accNumber:this.mainSavAccNum,
      currency:this.mainSav
    }
  ]
})
*/ 
//# sourceMappingURL=personal-account.js.map

/***/ })

});
//# sourceMappingURL=14.js.map