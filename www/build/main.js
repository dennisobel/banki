webpackJsonp([25],{

/***/ 122:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 122;

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/account-details/account-details.module": [
		319,
		24
	],
	"../pages/add-account/add-account.module": [
		320,
		23
	],
	"../pages/address-details/address-details.module": [
		321,
		22
	],
	"../pages/banktransfer/banktransfer.module": [
		322,
		21
	],
	"../pages/beneficiaries/beneficiaries.module": [
		323,
		20
	],
	"../pages/billmanagement/billmanagement.module": [
		324,
		19
	],
	"../pages/contact-us/contact-us.module": [
		325,
		18
	],
	"../pages/currency-convertor/currency-convertor.module": [
		326,
		17
	],
	"../pages/deposit/deposit.module": [
		327,
		16
	],
	"../pages/find-us/find-us.module": [
		328,
		15
	],
	"../pages/forgot-password/forgot-password.module": [
		329,
		14
	],
	"../pages/loans/loans.module": [
		330,
		13
	],
	"../pages/personal-account/personal-account.module": [
		331,
		12
	],
	"../pages/profile/profile.module": [
		332,
		11
	],
	"../pages/sendmpesa/sendmpesa.module": [
		333,
		10
	],
	"../pages/setting/setting.module": [
		334,
		9
	],
	"../pages/sign-in/sign-in.module": [
		336,
		0
	],
	"../pages/sign-up/sign-up.module": [
		337,
		8
	],
	"../pages/statements/statements.module": [
		338,
		7
	],
	"../pages/summary/summary.module": [
		335,
		6
	],
	"../pages/transactions-details/transactions-details.module": [
		340,
		5
	],
	"../pages/transactions/transactions.module": [
		339,
		4
	],
	"../pages/transfer/transfer.module": [
		341,
		3
	],
	"../pages/update-profile/update-profile.module": [
		342,
		2
	],
	"../pages/welcome/welcome.module": [
		343,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 164;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_socket_io__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(43);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SocketProvider = (function () {
    function SocketProvider(socket, storage) {
        this.socket = socket;
        this.storage = storage;
    }
    SocketProvider.prototype.onConnect = function () {
        var _this = this;
        this.socket.on('connect', function () {
            var sessionid = _this.socket.ioSocket.id;
            console.log("socket id is: ", sessionid);
        });
    };
    SocketProvider.prototype.onVerified = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    SocketProvider.prototype.onDisconnect = function () {
        this.socket.on('disconnect', function () {
            console.log("connection lost");
        });
    };
    // Oauth
    SocketProvider.prototype.joinApp = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            resolve(_this.socket.emit('joinApp', data));
        });
    };
    SocketProvider.prototype.signIn = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            resolve(_this.socket.emit('signIn', data));
        });
    };
    SocketProvider.prototype.signUp = function (data) {
        this.socket.emit('signUp', data);
    };
    // Enquiries
    SocketProvider.prototype.balanceEnq = function () {
        var _this = this;
        this.storage.get('loginData')
            .then(function (res) {
            var body = __assign({}, res);
            return body;
        })
            .then(function (res) {
            // this.storage.set("login",(res.data))
            _this.socket.emit("balanceEnq", res);
            console.log("heree come res of balenq", res);
        });
    };
    SocketProvider.prototype.miniStatEnq = function (data) {
        this.socket.emit('miniStatEnq', data);
    };
    SocketProvider.prototype.fullStatEnq = function (data) {
        this.socket.emit('fullStatEnq', data);
    };
    // Loans
    // Get loan balances
    SocketProvider.prototype.getLoanBal = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            resolve(_this.socket.emit('getLoanBal'));
        });
    };
    // Apply Loan
    SocketProvider.prototype.applyMLoan = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            resolve(_this.socket.emit('applyMLoan', data));
        });
    };
    SocketProvider.prototype.applyExpressLoan = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            resolve(_this.socket.emit('applyExpressLoan', data));
        });
    };
    SocketProvider.prototype.applyFosaAdvance = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            resolve(_this.socket.emit('applyFosaAdvance', data));
        });
    };
    // Pay Loan
    SocketProvider.prototype.payLoan = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            resolve(_this.socket.emit('payLoan', data));
        });
    };
    // Guarantees/Guarantors
    SocketProvider.prototype.guaranteesGuarantors = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            resolve(_this.socket.emit('guaranteesGuarantors'));
        });
    };
    // Funds Transfer
    // Get Account Balances
    SocketProvider.prototype.accountBalances = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            resolve(_this.socket.emit('accountBalances'));
        });
    };
    SocketProvider.prototype.internalFundsTransfer = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            resolve(_this.socket.emit('internalFundsTransfer', data));
        });
    };
    SocketProvider.prototype.mpesaFundsTransfer = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            resolve(_this.socket.emit('mpesaFundsTransfer', data));
        });
    };
    SocketProvider.prototype.bankFundsTransfer = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            resolve(_this.socket.emit('bankFundsTransfer', data));
        });
    };
    // Utilities and bills
    SocketProvider.prototype.airtimePurchase = function (data) {
        var _this = this;
        this.storage.get('loginData')
            .then(function (res) {
            var body = __assign({ data: data }, res);
            console.log(body);
            return body;
        })
            .then(function (res) {
            console.log("airtime purchase res:", res);
            _this.socket.emit("airtimePurchase", res);
        });
    };
    SocketProvider.prototype.tokenPurchase = function (data) {
        var _this = this;
        this.storage.get('loginData')
            .then(function (res) {
            var body = __assign({ data: data }, res);
            console.log(body);
            return body;
        })
            .then(function (res) {
            console.log("token purchase res:", res);
            _this.socket.emit("tokenPurchase", res);
        });
    };
    SocketProvider.prototype.eStatement = function () {
        var _this = this;
        this.storage.get('loginData')
            .then(function (res) {
            var body = __assign({}, res);
            console.log(body);
            return body;
        })
            .then(function (res) {
            console.log("e-stat:", res);
            _this.socket.emit("estatement", res);
        });
    };
    return SocketProvider;
}());
SocketProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng_socket_io__["Socket"],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], SocketProvider);

//# sourceMappingURL=socket.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(43);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HttpProvider = (function () {
    function HttpProvider(http, storage) {
        this.http = http;
        this.storage = storage;
        this.offline = {
            joinSaccoURL: "http://localhost:3000/joinsacco",
            verifyUserURL: "http://localhost:3000/verifyuser",
            passCodeURL: "http://localhost:3000/passcode",
            loginURL: "http://localhost:3000/login",
            logoutURL: "http://localhost:3000/logout",
            getUserURL: "http://localhost:3000/getuser",
            protectedURL: "http://localhost:3000/protected",
        };
    }
    HttpProvider.prototype.joinSacco = function (data) {
        var _this = this;
        console.log(data);
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
            headers.append("Accept", "application/json");
            headers.append("Content-Type", "application/json");
            // store data in local storage
            _this.storage.set('signupData', data)
                .then(function () { });
            _this.http.post(_this.offline.joinSaccoURL, data, { headers: headers })
                .subscribe(function (res) {
                var data = res.json();
                _this.token = data.token;
                _this.user = data.user;
                _this.storage.set('token', data.token);
                _this.storage.set('user', data.user);
                resolve(data);
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    HttpProvider.prototype.verifyUser = function (data) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append("Accept", "application/json");
        headers.append("Content-Type", "application/json");
        // fetch signup data from local storage
        this.storage.get('signupData')
            .then(function (val) {
            var body = __assign({}, data, val);
            console.log(body);
            _this.http.post(_this.offline.verifyUserURL, body, { headers: headers })
                .subscribe(function (res) {
                console.log(res.json);
            });
        });
    };
    HttpProvider.prototype.passCode = function (data) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append("Accept", "application/json");
        headers.append("Content-Type", "application/json");
        // fetch signup data from local storage
        this.storage.get('signupData')
            .then(function (val) {
            var body = __assign({}, data, val);
            _this.http.post(_this.offline.passCodeURL, body, { headers: headers })
                .subscribe(function (res) {
                console.log(res.json);
            });
        });
    };
    HttpProvider.prototype.login = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
            headers.append("Accept", "application/json");
            headers.append("Content-Type", "application/json");
            // store data in local storage
            // .then((res)=>{
            _this.http.post(_this.offline.loginURL, data, { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                console.log("res:", res);
                _this.storage.set('loginData', res);
                resolve(res);
            });
            // })      
            // fetch signup data from local storage
            /*
            this.storage.get('loginData')
                .then((val)=>{
                    let body = {
                        ...data,
                        ...val
                    }
                    
                    this.http.post(this.offline.loginURL,body,{headers})
                        .map((res)=>res.json())
                        .subscribe(res => {
                            // let data = res.json
                            console.log(res)
                            resolve(res)
                            // this.token = data.token;
      
                        })
                })      */
        });
    };
    HttpProvider.prototype.checkAuthentication = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // Load token if exists
            _this.storage.get('token').then(function (value) {
                _this.token = value;
                var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
                headers.append('Authorization', _this.token);
                _this.http.get(_this.offline.protectedURL, { headers: headers })
                    .subscribe(function (res) {
                    resolve(res);
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    HttpProvider.prototype.logout = function () {
        var _this = this;
        // this.storage.set('token', '');
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.offline.logoutURL)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    HttpProvider.prototype.getuser = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.offline.getUserURL)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    return HttpProvider;
}());
HttpProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
], HttpProvider);

//# sourceMappingURL=http.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(180);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = 'WelcomePage';
        this.animateVarible = false;
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Summary', component: 'SummaryPage', icon: 'banki-summary' },
            { title: 'Personal Accounts', component: 'PersonalAccountPage', icon: 'banki-user' },
            { title: 'Benficiariers', component: 'BeneficiariesPage', icon: 'banki-exchange' },
            { title: 'Setting', component: 'SettingPage', icon: 'banki-setting' },
            { title: 'Profile', component: 'ProfilePage', icon: 'banki-user-1' },
            { title: 'Currancy Converter', component: 'CurrencyConvertorPage', icon: 'banki-converter' },
            { title: 'Transfer Payment', component: 'TransferPage', icon: 'banki-transfer' },
            { title: 'Find us', component: 'FindUsPage', icon: 'banki-location' },
            { title: 'Contact us', component: 'ContactUsPage', icon: 'banki-phone' },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/app/app.html"*/'<ion-menu [content]="content" swipeEnabled="false" type="overlay">\n  <ion-content>\n    <ion-list>\n      <ion-item menuClose  *ngFor="let p of pages" (click)="openPage(p.component)">\n        <ion-icon class="{{p.icon}}" item-left></ion-icon>\n        {{p.title}}\n      </ion-item>\n    </ion-list>\n  </ion-content>\n  <ion-footer>\n    <button ion-button clear menuClose (click)="openPage(\'WelcomePage\')">Log out</button>\n  </ion-footer>\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content  [class.animateApp]="animateVarible==true" swipeBackEnabled="false"></ion-nav> '/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(243);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_t24_t24__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_http_http__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_socket_socket__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng_socket_io__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_ng_socket_io__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var socketConfig = { url: 'http://localhost:3000/', options: {
        autoConnect: true,
    } };
var config = {
    backButtonText: '',
    backButtonIcon: 'ios-arrow-round-back',
    iconMode: 'ios',
    mode: 'ios',
    modalEnter: 'modal-slide-in',
    modalLeave: 'modal-slide-out',
    pageTransition: 'ios',
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], config, {
                links: [
                    { loadChildren: '../pages/account-details/account-details.module#AccountDetailsPageModule', name: 'AccountDetailsPage', segment: 'account-details', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/add-account/add-account.module#AddAccountPageModule', name: 'AddAccountPage', segment: 'add-account', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/address-details/address-details.module#AddressDetailsPageModule', name: 'AddressDetailsPage', segment: 'address-details', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/banktransfer/banktransfer.module#BanktransferPageModule', name: 'BanktransferPage', segment: 'banktransfer', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/beneficiaries/beneficiaries.module#BeneficiariesPageModule', name: 'BeneficiariesPage', segment: 'beneficiaries', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/billmanagement/billmanagement.module#BillmanagementPageModule', name: 'BillmanagementPage', segment: 'billmanagement', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/contact-us/contact-us.module#ContactUsPageModule', name: 'ContactUsPage', segment: 'contact-us', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/currency-convertor/currency-convertor.module#CurrencyConvertorPageModule', name: 'CurrencyConvertorPage', segment: 'currency-convertor', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/deposit/deposit.module#DepositPageModule', name: 'DepositPage', segment: 'deposit', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/find-us/find-us.module#FindUsPageModule', name: 'FindUsPage', segment: 'find-us', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/forgot-password/forgot-password.module#ForgotPasswordPageModule', name: 'ForgotPasswordPage', segment: 'forgot-password', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/loans/loans.module#LoansPageModule', name: 'LoansPage', segment: 'loans', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/personal-account/personal-account.module#PersonalAccountPageModule', name: 'PersonalAccountPage', segment: 'personal-account', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/sendmpesa/sendmpesa.module#SendmpesaPageModule', name: 'SendmpesaPage', segment: 'sendmpesa', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/setting/setting.module#SettingPageModule', name: 'SettingPage', segment: 'setting', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/summary/summary.module#SummaryPageModule', name: 'SummaryPage', segment: 'summary', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/sign-in/sign-in.module#SignInPageModule', name: 'SignInPage', segment: 'sign-in', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/sign-up/sign-up.module#SignUpPageModule', name: 'SignUpPage', segment: 'sign-up', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/statements/statements.module#StatementsPageModule', name: 'StatementsPage', segment: 'statements', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/transactions/transactions.module#TransactionsPageModule', name: 'TransactionsPage', segment: 'transactions', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/transactions-details/transactions-details.module#TransactionsDetailsPageModule', name: 'TransactionsDetailsPage', segment: 'transactions-details', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/transfer/transfer.module#TransferPageModule', name: 'TransferPage', segment: 'transfer', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/update-profile/update-profile.module#UpdateProfilePageModule', name: 'UpdateProfilePage', segment: 'update-profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_12_ng_socket_io__["SocketIoModule"].forRoot(socketConfig),
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_9__providers_t24_t24__["a" /* T24Provider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_11__providers_socket_socket__["a" /* SocketProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 290:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return T24Provider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(43);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var T24Provider = (function () {
    function T24Provider(http, storage) {
        this.http = http;
        this.storage = storage;
        this.offline = {
            balanceEnquiry: "http://localhost:3000/balanceEnquiry",
        };
    }
    T24Provider.prototype.balanceEnquiry = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
            headers.append("Accept", "application/json");
            headers.append("Content-Type", "application/json");
            _this.storage.get('loginData')
                .then(function (val) {
                var body = __assign({}, val);
                _this.http.post(_this.offline.balanceEnquiry, body, { headers: headers })
                    .subscribe(function (res) {
                    console.log(res.json);
                    resolve(res.json());
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    return T24Provider;
}());
T24Provider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
], T24Provider);

//# sourceMappingURL=t24.js.map

/***/ })

},[225]);
//# sourceMappingURL=main.js.map