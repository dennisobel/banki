webpackJsonp([27],{

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterpinPageModule", function() { return EnterpinPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enterpin__ = __webpack_require__(381);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EnterpinPageModule = (function () {
    function EnterpinPageModule() {
    }
    return EnterpinPageModule;
}());
EnterpinPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__enterpin__["a" /* EnterpinPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__enterpin__["a" /* EnterpinPage */]),
        ],
    })
], EnterpinPageModule);

//# sourceMappingURL=enterpin.module.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnterpinPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_socket_io__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_http__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_socket_socket__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__summary_summary__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EnterpinPage = (function () {
    function EnterpinPage(appCtrl, viewCtrl, socketHelper, http, socket, storage, navCtrl, navParams) {
        this.appCtrl = appCtrl;
        this.viewCtrl = viewCtrl;
        this.socketHelper = socketHelper;
        this.http = http;
        this.socket = socket;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pin = "";
    }
    EnterpinPage.prototype.ionViewDidLoad = function () {
    };
    EnterpinPage.prototype.handle = function (data) {
        // console.log("LOCK DATA: ",data)
        this.pin = this.pin + data;
        console.log(this.pin);
        // document.getElementById('pin').setAttribute("value",data)
        // let input = document.getElementById('pin').
    };
    EnterpinPage.prototype.handleGo = function () {
        var _this = this;
        console.log("handle enter", this.pin);
        // check pass
        var mno;
        mno = this.navParams.get('data');
        this.storage.get('memberData').then(function (member_data) {
            // mno = member_data['MB.CUST.NO']
            var data = {
                password: _this.pin,
                mno: mno
            };
            console.log(data);
            _this.http.submitPIN(data).then(function (data) {
                _this.nav = _this.appCtrl.getRootNavById('n4');
                if (data.success === true) {
                    return new Promise(function (resolve, reject) {
                        resolve(_this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__summary_summary__["a" /* SummaryPage */], { data: member_data }));
                        // let nav = this.appCtrl.getActiveNavs()[0]
                        // nav.setRoot(SummaryPage,{data:member_data})
                        // this.navCtrl.push(SummaryPage,{data:member_data});
                        /*
                        this.navCtrl.setRoot(SummaryPage).then(()=>{
                          this.navCtrl.popToRoot().then(()=>{
            
                          }).catch(err => {
                            
                          })
                        }).catch(err => {
            
                        })
                        */
                        // resolve(this.navParams.get('data'))
                    }).then(function () {
                        _this.viewCtrl.dismiss();
                    });
                }
                else {
                    // logic for password fail
                    console.log("password fail bro");
                }
            });
        });
    };
    EnterpinPage.prototype.handleBack = function () {
        console.log("handle delete");
        this.pin = this.pin.slice(0, -1);
    };
    return EnterpinPage;
}());
EnterpinPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-enterpin',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/enterpin/enterpin.html"*/'<!--\n<ion-header>\n  <ion-navbar hideBackButton>\n    <img  class="imagestyle" object-fit: cover height="70px"  width="470px" src="assets/images/enterpno.jpg"/>     \n  </ion-navbar>\n</ion-header>\n-->\n\n<ion-content padding class="getstart no-scroll">\n  <h2 align="center" style="color:#ff812c">Enter PIN</h2>\n  <div class="">\n\n    <ion-item>\n      <ion-label floating></ion-label>\n      <ion-icon name="ios-lock-outline" item-left></ion-icon>\n      <ion-input style="color:#ff812c" [(ngModel)]="pin" type="password" id="pin" value=""></ion-input>\n    </ion-item>\n\n    <hr>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col col-4>\n          <button ion-button block clear color="color1" (click)="handle(1)" >1</button>\n        </ion-col>\n        <ion-col col-4>\n          <button ion-button block clear color="color1" (click)="handle(2)">2</button>\n        </ion-col>\n        <ion-col col-4>\n          <button ion-button block clear color="color1" (click)="handle(3)">3</button>\n        </ion-col>        \n      </ion-row>\n\n      <br>\n\n      <ion-row>\n        <ion-col col-4>\n          <button ion-button block clear color="color1" (click)="handle(4)">4</button>\n        </ion-col>\n        <ion-col col-4>\n          <button ion-button block clear color="color1" (click)="handle(5)">5</button>\n        </ion-col>\n        <ion-col col-4>\n          <button ion-button block clear color="color1" (click)="handle(6)">6</button>\n        </ion-col>        \n      </ion-row>     \n\n      <br>\n\n      <ion-row>\n        <ion-col col-4>\n          <button ion-button block clear color="color1" (click)="handle(7)">7</button>\n        </ion-col>\n        <ion-col col-4>\n          <button ion-button block clear color="color1" (click)="handle(8)">8</button>\n        </ion-col>\n        <ion-col col-4>\n          <button ion-button block clear color="color1" (click)="handle(9)">9</button>\n        </ion-col>        \n      </ion-row>  \n\n      <br>\n\n      <ion-row>\n        <ion-col col-4>\n          <button ion-button block clear color="resendBtn" (click)="handleBack()"><ion-icon name="arrow-back"></ion-icon></button>\n        </ion-col>           \n\n        <ion-col col-4>\n          <button ion-button block clear color="color1" (click)="handle(0)">0</button>\n        </ion-col>\n\n        <ion-col col-4>\n          <button ion-button block clear color="color1" (click)="handleGo()"><ion-icon name="md-checkmark-circle"></ion-icon></button>\n        </ion-col>          \n      </ion-row>             \n    </ion-grid>\n    \n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/enterpin/enterpin.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_socket_socket__["a" /* SocketProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_http_http__["a" /* HttpProvider */],
        __WEBPACK_IMPORTED_MODULE_2_ng_socket_io__["Socket"],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], EnterpinPage);

//# sourceMappingURL=enterpin.js.map

/***/ })

});
//# sourceMappingURL=27.js.map