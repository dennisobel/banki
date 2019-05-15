webpackJsonp([12],{

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(405);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePageModule = (function () {
    function ProfilePageModule() {
    }
    return ProfilePageModule;
}());
ProfilePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
        ],
    })
], ProfilePageModule);

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_http__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfilePage = (function () {
    function ProfilePage(storage, http, camera, navCtrl, navParams, modalCtrl) {
        this.storage = storage;
        this.http = http;
        this.camera = camera;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        // change Image
        this.base64Image = 'assets/img/profile.png';
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('memberData').then(function (data) {
            console.log("MEMBER DATA:", data);
            _this.name = data['MB.CUST.NAME..................'].toUpperCase();
            _this.memberNo = data['MB.CUST.NO'];
            _this.memberPhone = data['MB.CELL.NO..'];
        });
    };
    ProfilePage.prototype.onChange = function () {
        var imgprof;
        var img;
        imgprof = document.getElementById("image");
        img = imgprof.files[0];
        var hidden = document.getElementById("fileDisplayArea");
        var reader = new FileReader();
        reader.onloadend = function () {
            hidden.innerHTML = "";
            var img = new Image();
            img.src = reader.result;
            hidden.appendChild(img).setAttribute("id", "picha");
        };
        reader.readAsDataURL(img);
    };
    ProfilePage.prototype.onAdd = function () {
        this.picha = document.getElementById("picha").getAttribute("src");
        var profile = {
            image: this.image
        };
        this.http.uploadImage({
            image: this.image,
            membernumber: this.memberNo
        }).then(function () {
            // HANDLE SERVER FEEDBAK
        });
    };
    // call address details modal
    ProfilePage.prototype.callModal = function () {
        var modal = this.modalCtrl.create('UpdateProfilePage');
        modal.present();
    };
    ProfilePage.prototype.accessGallery = function () {
        var _this = this;
        this.camera.getPicture({
            sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
            destinationType: this.camera.DestinationType.DATA_URL
        }).then(function (imageData) {
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            console.log(err);
        });
    };
    // logOut Function 
    ProfilePage.prototype.logOut = function () {
        this.navCtrl.setRoot('WelcomePage');
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-profile',template:/*ion-inline-start:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/profile/profile.html"*/'\n<ion-header>\n  \n  <ion-navbar>\n    <img  class="imagestyle" object-fit: cover height="70px"  width="470px" src="assets/images/header.jpg"/>     \n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list inset>\n    <ion-item>\n    	<ion-label>Image Upload</ion-label>\n    	<input \n    		style="font-size: 1.2rem;" \n    		type="file" \n    		id="image" \n    		(change)="onChange()"/>			 \n    	<hr>\n    </ion-item>\n  </ion-list>\n\n  <button ion-button small outline block color="list" (click)="onAdd()">Add</button>\n  <div id="fileDisplayArea" style="display: none"></div>  \n \n\n  <!--\n  <div class="profile">\n    <div class="imgBg" [ngStyle]="{\'background-image\':\'url(\' + base64Image + \')\'}">\n      <ion-icon name="ios-camera"  (click)="accessGallery()"></ion-icon>\n    </div>\n    <h4>Adam Nicolas</h4>\n     <p>\n      <ion-icon name="ios-pin"></ion-icon>\n      England\n    </p> \n    <div class="appForm">\n      <ion-list>\n        \n        <button  block ion-item>\n          <ion-icon item-left name="md-contact"></ion-icon>\n          Adam Nicolas Taylor Smith\n        </button>\n        \n        <button  block ion-item >\n          <ion-icon item-left name="ios-pin"></ion-icon>\n          Liverpool\n        </button>\n         \n        <button  block ion-item>\n          <ion-icon item-left name="ios-call"></ion-icon>\n          12345343543\n        </button> \n         \n        <button  block ion-item >\n          <ion-icon item-left name="ios-mail"></ion-icon>\n          Adam_Nicolas@gmail.com\n        </button> \n      </ion-list> \n    </div>\n  </div>\n  -->\n</ion-content>\n<ion-footer>\n  <button ion-button block color="color2" (click)="callModal()">Update</button>\n</ion-footer>\n'/*ion-inline-end:"/home/dennis/Desktop/desktopstuff/apps/ionic/iTellerProject/banki/src/pages/profile/profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3__providers_http_http__["a" /* HttpProvider */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=12.js.map