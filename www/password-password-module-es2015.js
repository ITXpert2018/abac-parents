(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["password-password-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/password/password.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/password/password.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\r\n  <ion-toolbar mode=\"ios\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button mode=\"md\" icon=\"assets/icon/icon-back.svg\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <img src=\"assets/imgs/logo.png\" id=\"header_logo\" height=\"40\" alt=\"\">\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <ion-item lines=\"none\" class=\"form-control-label\">\r\n    <ion-label class=\"ion-text-wrap\">Password</ion-label>\r\n  </ion-item>\r\n  <ion-item lines=\"none\" class=\"input_box\">\r\n    <ion-label>\r\n      <ion-icon name=\"lock\"></ion-icon>\r\n    </ion-label>\r\n    <ion-input type=\"password\" value=\"\" [(ngModel)]=\"password\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item lines=\"none\" class=\"form-control-label no-margin-top\">\r\n    <ion-label class=\"ion-text-wrap\">Confirm Password</ion-label>\r\n  </ion-item>\r\n  <ion-item lines=\"none\" class=\"input_box\">\r\n    <ion-label>\r\n      <ion-icon name=\"lock\"></ion-icon>\r\n    </ion-label>\r\n    <ion-input type=\"password\" value=\"\" [(ngModel)]=\"confirmPassword\"></ion-input>\r\n  </ion-item>\r\n</ion-content>\r\n\r\n<ion-footer no-border>\r\n  <ion-button expand=\"full\" class=\"button-green\" color=\"button_color\" (click)=\"goToName()\">NEXT</ion-button>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/password/password.module.ts":
/*!*********************************************!*\
  !*** ./src/app/password/password.module.ts ***!
  \*********************************************/
/*! exports provided: PasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordPageModule", function() { return PasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./password.page */ "./src/app/password/password.page.ts");







const routes = [
    {
        path: '',
        component: _password_page__WEBPACK_IMPORTED_MODULE_6__["PasswordPage"]
    }
];
let PasswordPageModule = class PasswordPageModule {
};
PasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_password_page__WEBPACK_IMPORTED_MODULE_6__["PasswordPage"]]
    })
], PasswordPageModule);



/***/ }),

/***/ "./src/app/password/password.page.scss":
/*!*********************************************!*\
  !*** ./src/app/password/password.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*********  header ************/\nion-title {\n  padding-top: 10px;\n}\nion-title .md .title-md .hydrated {\n  text-align: center !important;\n}\nion-content {\n  --overflow: hidden;\n}\nion-item {\n  --padding-start: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFzc3dvcmQvRDpcXFdvcmtcXE1vYmlsZVxcaW9uaWNcXGFiYWNfcGFyZW50cy9zcmNcXGFwcFxccGFzc3dvcmRcXHBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFzc3dvcmQvcGFzc3dvcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtCQUFBO0FBQ0E7RUFDRSxpQkFBQTtBQ0NGO0FEQ0U7RUFDRSw2QkFBQTtBQ0NKO0FER0E7RUFDRSxrQkFBQTtBQ0FGO0FER0E7RUFDRSwrQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvcGFzc3dvcmQvcGFzc3dvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKiAgaGVhZGVyICoqKioqKioqKioqKi9cclxuaW9uLXRpdGxlIHtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuXHJcbiAgLm1kIC50aXRsZS1tZCAuaHlkcmF0ZWQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgLS1vdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHggIWltcG9ydGFudDtcclxufSIsIi8qKioqKioqKiogIGhlYWRlciAqKioqKioqKioqKiovXG5pb24tdGl0bGUge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbmlvbi10aXRsZSAubWQgLnRpdGxlLW1kIC5oeWRyYXRlZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweCAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/password/password.page.ts":
/*!*******************************************!*\
  !*** ./src/app/password/password.page.ts ***!
  \*******************************************/
/*! exports provided: PasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordPage", function() { return PasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_alert_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/alert-message.service */ "./src/app/services/alert-message.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");






let PasswordPage = class PasswordPage {
    constructor(alert, storage, router, auth) {
        this.alert = alert;
        this.storage = storage;
        this.router = router;
        this.auth = auth;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        //if user returns back. remove any written password.
        this.password = '';
        this.confirmPassword = '';
        //get data storage for this user
        this.newUser = {};
        this.storage.get('newUser').then((user) => {
            console.log('user storage in storage:');
            console.log(user);
            this.newUser = user;
        });
    }
    isPasswordPolicyMet() {
        if (this.password.length < 8) {
            this.errorMessage = "The minimum password length is 8 characters!";
            return false;
        }
        this.errorMessage = '';
        return true;
    }
    isPasswordConfirmed() {
        this.errorMessage = "Password doesn't match!";
        if (this.password == '' || this.password == undefined)
            return false;
        if (this.confirmPassword == '' || this.password == undefined)
            return false;
        if (this.confirmPassword != this.password) {
            return false;
        }
        this.errorMessage = '';
        return true;
    }
    goToName() {
        if (this.isPasswordPolicyMet() && this.isPasswordConfirmed()) {
            //store info on storage
            this.newUser.password = this.password;
            this.storage.set('newUser', this.newUser);
            //go to full name page
            this.router.navigate(['/name-modal']);
        }
        else {
            //alert user
            this.alert.customMessage(this.errorMessage);
        }
    }
};
PasswordPage.ctorParameters = () => [
    { type: _services_alert_message_service__WEBPACK_IMPORTED_MODULE_2__["AlertMessageService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }
];
PasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-password',
        template: __webpack_require__(/*! raw-loader!./password.page.html */ "./node_modules/raw-loader/index.js!./src/app/password/password.page.html"),
        styles: [__webpack_require__(/*! ./password.page.scss */ "./src/app/password/password.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_alert_message_service__WEBPACK_IMPORTED_MODULE_2__["AlertMessageService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]])
], PasswordPage);



/***/ })

}]);
//# sourceMappingURL=password-password-module-es2015.js.map