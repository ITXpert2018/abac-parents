(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["password-modal-password-modal-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/password-modal/password-modal.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/password-modal/password-modal.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>password-modal</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content> -->\r\n<ion-header no-border>\r\n  <ion-toolbar mode=\"ios\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button mode=\"md\" icon=\"assets/icon/icon-back.svg\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <img src=\"assets/imgs/logo.png\" id=\"header_logo\" height=\"40\" alt=\"\">\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <ion-item lines=\"none\" class=\"form-control-label\">\r\n    <ion-label class=\"ion-text-wrap\">This email has already been registered, enter the <span>password</span></ion-label>\r\n  </ion-item>\r\n  <ion-item lines=\"none\" class=\"input_box\">\r\n    <ion-label>\r\n      <ion-icon name=\"lock\"></ion-icon>\r\n    </ion-label>\r\n    <ion-input type=\"password\" value=\"\" [(ngModel)]=\"password\"></ion-input>\r\n  </ion-item>\r\n</ion-content>\r\n\r\n<ion-footer no-border>\r\n  <ion-button expand=\"full\" class=\"button-green\" color=\"button_color\" (click)=\"goToHome()\">SUBMIT</ion-button>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/password-modal/password-modal.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/password-modal/password-modal.module.ts ***!
  \*********************************************************/
/*! exports provided: PasswordModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordModalPageModule", function() { return PasswordModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _password_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./password-modal.page */ "./src/app/password-modal/password-modal.page.ts");







var routes = [
    {
        path: '',
        component: _password_modal_page__WEBPACK_IMPORTED_MODULE_6__["PasswordModalPage"]
    }
];
var PasswordModalPageModule = /** @class */ (function () {
    function PasswordModalPageModule() {
    }
    PasswordModalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_password_modal_page__WEBPACK_IMPORTED_MODULE_6__["PasswordModalPage"]]
        })
    ], PasswordModalPageModule);
    return PasswordModalPageModule;
}());



/***/ }),

/***/ "./src/app/password-modal/password-modal.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/password-modal/password-modal.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*********  header ************/\nion-title {\n  padding-top: 10px;\n}\nion-title .md .title-md .hydrated {\n  text-align: center !important;\n}\n.button-md,\n.button-ios {\n  font-size: 16px;\n  font-weight: 600;\n  padding: 12px 15px;\n  border-radius: 0;\n  height: 5.2rem;\n  margin: 0;\n}\nion-content {\n  --overflow: hidden;\n}\nion-item {\n  --padding-start: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFzc3dvcmQtbW9kYWwvRDpcXFdvcmtcXE1vYmlsZVxcaW9uaWNcXGFiYWNfcGFyZW50cy9zcmNcXGFwcFxccGFzc3dvcmQtbW9kYWxcXHBhc3N3b3JkLW1vZGFsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFzc3dvcmQtbW9kYWwvcGFzc3dvcmQtbW9kYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtCQUFBO0FBQ0E7RUFDRSxpQkFBQTtBQ0NGO0FEQ0U7RUFDRSw2QkFBQTtBQ0NKO0FER0E7O0VBRUUsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FDQUY7QURJQTtFQUNFLGtCQUFBO0FDREY7QURJQTtFQUNFLCtCQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9wYXNzd29yZC1tb2RhbC9wYXNzd29yZC1tb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqICBoZWFkZXIgKioqKioqKioqKioqL1xyXG5pb24tdGl0bGUge1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG5cclxuICAubWQgLnRpdGxlLW1kIC5oeWRyYXRlZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5idXR0b24tbWQsXHJcbi5idXR0b24taW9zIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBwYWRkaW5nOiAxMnB4IDE1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBoZWlnaHQ6IDUuMnJlbTtcclxuICBtYXJnaW46IDA7XHJcblxyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgLS1vdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHggIWltcG9ydGFudDtcclxufSIsIi8qKioqKioqKiogIGhlYWRlciAqKioqKioqKioqKiovXG5pb24tdGl0bGUge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbmlvbi10aXRsZSAubWQgLnRpdGxlLW1kIC5oeWRyYXRlZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4uYnV0dG9uLW1kLFxuLmJ1dHRvbi1pb3Mge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDEycHggMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgaGVpZ2h0OiA1LjJyZW07XG4gIG1hcmdpbjogMDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLW92ZXJmbG93OiBoaWRkZW47XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHggIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/password-modal/password-modal.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/password-modal/password-modal.page.ts ***!
  \*******************************************************/
/*! exports provided: PasswordModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordModalPage", function() { return PasswordModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_alert_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/alert-message.service */ "./src/app/services/alert-message.service.ts");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/loading.service */ "./src/app/services/loading.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var PasswordModalPage = /** @class */ (function () {
    function PasswordModalPage(alert, loadingService, auth, storage, router) {
        this.alert = alert;
        this.loadingService = loadingService;
        this.auth = auth;
        this.storage = storage;
        this.router = router;
    }
    PasswordModalPage.prototype.ngOnInit = function () {
    };
    PasswordModalPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        //if user returns back. remove any written password.
        this.password = '';
        //get data storage for this user
        this.existingUser = {};
        this.storage.get('existingUser').then(function (user) {
            _this.existingUser = user;
        });
    };
    PasswordModalPage.prototype.goToHome = function () {
        var _this = this;
        if (this.password == "" || this.password == undefined) {
            this.alert.customMessage("Please enter password!");
        }
        else {
            this.loadingService.present();
            this.existingUser.password = this.password;
            this.auth.signIn(this.existingUser.email, this.existingUser.password).then(function (data) {
                _this.router.navigate(['/child']).then(function () {
                    if (_this.loadingService.isLoading)
                        _this.loadingService.dismiss();
                });
            }, function (err) {
                if (_this.loadingService.isLoading) {
                    _this.loadingService.dismiss().then(function () {
                        _this.alert.customMessage(err);
                    });
                }
            });
        }
    };
    PasswordModalPage.ctorParameters = function () { return [
        { type: _services_alert_message_service__WEBPACK_IMPORTED_MODULE_2__["AlertMessageService"] },
        { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"] },
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    PasswordModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-password-modal',
            template: __webpack_require__(/*! raw-loader!./password-modal.page.html */ "./node_modules/raw-loader/index.js!./src/app/password-modal/password-modal.page.html"),
            styles: [__webpack_require__(/*! ./password-modal.page.scss */ "./src/app/password-modal/password-modal.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_alert_message_service__WEBPACK_IMPORTED_MODULE_2__["AlertMessageService"],
            _services_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], PasswordModalPage);
    return PasswordModalPage;
}());



/***/ })

}]);
//# sourceMappingURL=password-modal-password-modal-module-es5.js.map