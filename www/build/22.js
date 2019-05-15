webpackJsonp([22],{

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanEligibilityPageModule", function() { return LoanEligibilityPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loan_eligibility__ = __webpack_require__(399);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoanEligibilityPageModule = (function () {
    function LoanEligibilityPageModule() {
    }
    return LoanEligibilityPageModule;
}());
LoanEligibilityPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__loan_eligibility__["a" /* LoanEligibilityPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__loan_eligibility__["a" /* LoanEligibilityPage */]),
        ],
    })
], LoanEligibilityPageModule);

//# sourceMappingURL=loan-eligibility.module.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoanEligibilityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_socket_socket__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loanform_loanform__ = __webpack_require__(231);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoanEligibilityPage = (function () {
    function LoanEligibilityPage(modalCtrl, viewCtrl, toastCtrl, navCtrl, alertCtrl, navParams, socketHelper, socket, storage) {
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.socketHelper = socketHelper;
        this.socket = socket;
        this.storage = storage;
    }
    LoanEligibilityPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.presentToast('Click loan item to apply for loan', true, 'middle');
        var memberData = this.navParams.get('data');
        var mno = memberData['MB.CUST.NO'];
        // GET LOAN ELIG DATA
        this.socketHelper.loanEligibility(mno).then(function () {
            _this.socket.on('loanEligibilityResult', function (data) {
                console.log("LOAN ELIG:", data);
                return new Promise(function (resolve, reject) {
                    resolve(
                    // this.dataSplitByComma = data.data.split(",")
                    // .split(':')[5].split('.')
                    _this.loanEligibility = data.split('"') /*[5]*/.filter(function (el) {
                        return !el.includes('VR') && el.includes('Loan');
                    })[0].split(':'));
                }).then(function (data) {
                    var regex = /\,(?=\D)/;
                    // this.loanEligibility = this.loanEligibility[1].split(regex);
                    _this.loanEligibility = _this.loanEligibility[1].split(regex).map(function (el) {
                        return Object.assign({}, el.split("="));
                    });
                    console.log("LOAN ELIG: ", _this.loanEligibility);
                    // .split('=')
                    /*
                    let stringWithoutSpaces = this.loanEligibility.trim()
                    console.log(stringWithoutSpaces)
                    let dictionaryWithValues = stringWithoutSpaces.split('0')
                    console.log(dictionaryWithValues)
                    */
                    /*
                    
                    this.loanEligibility.forEach((el:any) => {
                      if(el[0].length <= 1) {
                        this.loanEligibility.splice(this.loanEligibility.indexOf(el),1)
                      }else {
                        
                      }
                    })
                    */
                });
            });
        });
    };
    LoanEligibilityPage.prototype.presentToast = function (message, close, position) {
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
    LoanEligibilityPage.prototype.handleApply = function (data) {
        var _this = this;
        console.log(data);
        var applyAlert = this.alertCtrl.create({
            title: data[0] + " application",
            message: "Apply " + data[0],
            buttons: [
                {
                    text: 'Apply',
                    handler: function () {
                        console.log("LoanForm Data:", data);
                        // this.presentToast(`Processing loan application`, true, 'middle')
                        var loanForm = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__loanform_loanform__["a" /* LoanformPage */], { loanData: data });
                        loanForm.present();
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        applyAlert.present();
    };
    LoanEligibilityPage.prototype.logOut = function () {
        this.navCtrl.setRoot('WelcomePage');
    };
    LoanEligibilityPage.prototype.onClose = function () {
        this.viewCtrl.dismiss();
    };
    return LoanEligibilityPage;
}());
LoanEligibilityPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-loan-eligibility',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/loan-eligibility/loan-eligibility.html"*/'\n<ion-header>\n  <!--\n  <ion-navbar hideBackButton>\n    <img  class="imagestyle" object-fit: cover height="70px"  width="470px" src="assets/images/header.jpg"/>     \n  </ion-navbar>\n  -->\n  <ion-navbar hideBackButton>\n    <!--\n    <ion-buttons start >\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="ios-menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end >\n      <button ion-button icon-only (click)="logOut()">\n        <ion-icon name="ios-log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n    -->\n    <img height="150px" width="470px" src="assets/images/loanseligibilityheader.jpg"/>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding>\n  <p class="myTitle">You are eligible for the following loans:</p>\n  \n  <ion-grid>\n    <ion-row>\n      <ion-col col-6 col-md-4 col-lg-3 *ngFor="let item of loanEligibility">\n        <div class="account" (click)="handleApply(item)">\n          <strong><p style="color:#ff812c">{{item[0]}}</p></strong>\n          \n          <strong>\n          <p class="countNum">\n            Ksh:{{item[1]}}\n          </p>\n          </strong>\n          <!--<button ion-button block small clear color="faceColor" (click)="handleApply(item)">Apply</button>-->\n        </div>\n        \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-fab left bottom>\n    <button ion-fab mini color="gold" (click)="onClose()"><ion-icon name="md-close"></ion-icon></button>\n  </ion-fab>     \n\n</ion-content>\n'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/loan-eligibility/loan-eligibility.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_socket_socket__["a" /* SocketProvider */],
        __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__["Socket"],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
], LoanEligibilityPage);

/*

      this.socket.on('loanEligibilityResult',(data)=>{
        console.log("LOAN ELIG:", data)

        


        let alert = this.alertCtrl.create({
          title: 'ELIGIBLE FOR THE FOLLOWING LOANS',

          message: data,

          buttons:[
            {
              text:"OK",
              role:'cancel'
            }
          ]


        })

        alert.present()
      })
*/ 
//# sourceMappingURL=loan-eligibility.js.map

/***/ })

});
//# sourceMappingURL=22.js.map