webpackJsonp([26],{

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindUsPageModule", function() { return FindUsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__find_us__ = __webpack_require__(395);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FindUsPageModule = (function () {
    function FindUsPageModule() {
    }
    return FindUsPageModule;
}());
FindUsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__find_us__["a" /* FindUsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__find_us__["a" /* FindUsPage */]),
        ],
    })
], FindUsPageModule);

//# sourceMappingURL=find-us.module.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindUsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FindUsPage = (function () {
    function FindUsPage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.text = 'List';
        this.start = 'chicago, il';
        this.end = 'chicago, il';
        this.directionsService = new google.maps.DirectionsService;
        this.directionsDisplay = new google.maps.DirectionsRenderer;
        this.items = [
            { address: 'Address 1', type: 'bank' },
            { address: 'Atm Location', type: 'atm' },
            { address: 'Address 2', type: 'bank' },
            { address: 'Address 3', type: 'bank' },
        ];
    }
    // call address details modal
    FindUsPage.prototype.callModal = function () {
        var modal = this.modalCtrl.create('AddressDetailsPage');
        modal.present();
    };
    // change addresses show
    FindUsPage.prototype.change = function () {
        if (this.text != 'Map') {
            this.text = 'Map';
        }
        else {
            this.text = 'List';
        }
    };
    // logOut Function 
    FindUsPage.prototype.logOut = function () {
        this.navCtrl.setRoot('WelcomePage');
    };
    // map functions
    FindUsPage.prototype.ionViewDidLoad = function () {
        this.initMap();
    };
    FindUsPage.prototype.initMap = function () {
        this.map = new google.maps.Map(this.mapElement.nativeElement, {
            zoom: 7,
            center: { lat: 41.85, lng: -87.65 }
        });
        this.directionsDisplay.setMap(this.map);
    };
    FindUsPage.prototype.calculateAndDisplayRoute = function () {
        var _this = this;
        this.directionsService.route({
            origin: this.start,
            destination: this.end,
            travelMode: 'DRIVING'
        }, function (response, status) {
            if (status === 'OK') {
                _this.directionsDisplay.setDirections(response);
            }
            else {
                window.alert('Directions request failed due to ' + status);
            }
        });
    };
    return FindUsPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], FindUsPage.prototype, "mapElement", void 0);
FindUsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-find-us',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/find-us/find-us.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-buttons start >\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="ios-menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Find Us</ion-title>\n    <ion-buttons end >\n      <button ion-button icon-only (click)="logOut()">\n        <ion-icon name="ios-log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item class="searchItem">\n    <ion-icon name="ios-search" item-right></ion-icon>\n    <ion-input placeholder="Search"></ion-input>\n  </ion-item>\n  <p class="myTitle" (click)="change()">{{text}}</p>\n  <!-- list of addresses -->\n   <div class="appForm" *ngIf="text == \'Map\'">\n    <ion-list [ngClass]="{\'notShow\':text ==\'List\'}">\n      <button  block ion-item *ngFor="let item of items" (click)="callModal()">\n        <ion-icon item-left name="ios-pin" *ngIf="item.type == \'bank\'"></ion-icon>\n        <ion-icon item-left name="ios-calculator" *ngIf="item.type == \'atm\'"></ion-icon>\n        <ion-icon item-right name="md-arrow-dropright"></ion-icon>\n        {{item.address}}\n      </button> \n    </ion-list> \n  </div> \n  <!-- Map of addresses -->\n  <div  class="map" #map id="map" [ngClass]="{\'notShow\':text ==\'Map\'}"> </div>\n</ion-content>\n'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/find-us/find-us.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
], FindUsPage);

//# sourceMappingURL=find-us.js.map

/***/ })

});
//# sourceMappingURL=26.js.map