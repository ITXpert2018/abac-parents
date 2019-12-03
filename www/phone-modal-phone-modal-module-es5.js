(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["phone-modal-phone-modal-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/phone-modal/phone-modal.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/phone-modal/phone-modal.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar mode=\"ios\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button mode=\"md\" defaultHref=\"/\" icon=\"assets/icon/icon-back.svg\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <img src=\"assets/imgs/logo.png\" id=\"header_logo\" height=\"40\" alt=\"\">\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <ion-item lines=\"none\" class=\"form-control-label\">\r\n    <ion-label>Your <span>Phone Number</span>?</ion-label>\r\n  </ion-item>\r\n  <ion-item lines=\"none\" class=\"input_box\">\r\n    <ion-label>\r\n      <ion-icon src=\"assets/icon/icon-phone.svg\"></ion-icon>\r\n    </ion-label>\r\n    <ion-input type=\"number\" (keyup.enter)=\"goToChildsPage()\" [(ngModel)]=\"phone\"></ion-input>\r\n  </ion-item>\r\n\r\n\r\n</ion-content>\r\n\r\n<ion-footer no-border>\r\n  <ion-button expand=\"full\" class=\"button-green\" color=\"button_color\"\r\n    (click)=\"goToChildsPage()\">NEXT</ion-button>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/phone-modal/phone-modal.module.ts":
/*!***************************************************!*\
  !*** ./src/app/phone-modal/phone-modal.module.ts ***!
  \***************************************************/
/*! exports provided: PhoneModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneModalPageModule", function() { return PhoneModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _phone_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./phone-modal.page */ "./src/app/phone-modal/phone-modal.page.ts");







var routes = [
    {
        path: '',
        component: _phone_modal_page__WEBPACK_IMPORTED_MODULE_6__["PhoneModalPage"]
    }
];
var PhoneModalPageModule = /** @class */ (function () {
    function PhoneModalPageModule() {
    }
    PhoneModalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_phone_modal_page__WEBPACK_IMPORTED_MODULE_6__["PhoneModalPage"]]
        })
    ], PhoneModalPageModule);
    return PhoneModalPageModule;
}());



/***/ }),

/***/ "./src/app/phone-modal/phone-modal.page.scss":
/*!***************************************************!*\
  !*** ./src/app/phone-modal/phone-modal.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*********  header ************/\nion-title {\n  padding-top: 10px;\n}\nion-title .md .title-md .hydrated {\n  text-align: center !important;\n}\nion-content {\n  --overflow: hidden;\n}\nion-item {\n  --padding-start: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGhvbmUtbW9kYWwvRDpcXFdvcmtcXE1vYmlsZVxcaW9uaWNcXGFiYWNfcGFyZW50cy9zcmNcXGFwcFxccGhvbmUtbW9kYWxcXHBob25lLW1vZGFsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGhvbmUtbW9kYWwvcGhvbmUtbW9kYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtCQUFBO0FBQ0E7RUFDRSxpQkFBQTtBQ0NGO0FEQ0U7RUFDRSw2QkFBQTtBQ0NKO0FER0E7RUFDRSxrQkFBQTtBQ0FGO0FER0E7RUFDRSwrQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvcGhvbmUtbW9kYWwvcGhvbmUtbW9kYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKiAgaGVhZGVyICoqKioqKioqKioqKi9cclxuaW9uLXRpdGxlIHtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuXHJcbiAgLm1kIC50aXRsZS1tZCAuaHlkcmF0ZWQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgLS1vdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHggIWltcG9ydGFudDtcclxufSIsIi8qKioqKioqKiogIGhlYWRlciAqKioqKioqKioqKiovXG5pb24tdGl0bGUge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbmlvbi10aXRsZSAubWQgLnRpdGxlLW1kIC5oeWRyYXRlZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweCAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/phone-modal/phone-modal.page.ts":
/*!*************************************************!*\
  !*** ./src/app/phone-modal/phone-modal.page.ts ***!
  \*************************************************/
/*! exports provided: PhoneModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneModalPage", function() { return PhoneModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _services_alert_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/alert-message.service */ "./src/app/services/alert-message.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/loading.service */ "./src/app/services/loading.service.ts");







var PhoneModalPage = /** @class */ (function () {
    function PhoneModalPage(storage, alert, router, auth, loadingService) {
        this.storage = storage;
        this.alert = alert;
        this.router = router;
        this.auth = auth;
        this.loadingService = loadingService;
    }
    PhoneModalPage.prototype.ngOnInit = function () {
    };
    PhoneModalPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        //get data storage for this user
        this.newUser = {};
        this.storage.get('newUser').then(function (user) {
            console.log('user storage in storage:');
            console.log(user);
            _this.newUser = user;
            _this.phone = _this.newUser.phone;
        });
    };
    PhoneModalPage.prototype.goToChildsPage = function () {
        var _this = this;
        if (this.phone != '' || this.phone != undefined) {
            //store info on storage
            this.loadingService.present();
            this.newUser.phone = this.phone;
            this.storage.set('newUser', this.newUser);
            this.auth.register(this.newUser).then(function () {
                // this.router.navigate(['/child']).then(() => {
                //   if (this.loadingService.isLoading)
                //     this.loadingService.dismiss();
                // })
                _this.router.navigate(['/child']);
            });
        }
        else {
            //alert user
            this.alert.customMessage('Please enter your phone number!');
        }
    };
    PhoneModalPage.ctorParameters = function () { return [
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
        { type: _services_alert_message_service__WEBPACK_IMPORTED_MODULE_3__["AlertMessageService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
        { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"] }
    ]; };
    PhoneModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-phone-modal',
            template: __webpack_require__(/*! raw-loader!./phone-modal.page.html */ "./node_modules/raw-loader/index.js!./src/app/phone-modal/phone-modal.page.html"),
            styles: [__webpack_require__(/*! ./phone-modal.page.scss */ "./src/app/phone-modal/phone-modal.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
            _services_alert_message_service__WEBPACK_IMPORTED_MODULE_3__["AlertMessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
            _services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"]])
    ], PhoneModalPage);
    return PhoneModalPage;
}());



/***/ })

}]);
//# sourceMappingURL=phone-modal-phone-modal-module-es5.js.map