(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["name-modal-name-modal-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/name-modal/name-modal.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/name-modal/name-modal.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar mode=\"ios\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button mode=\"md\" defaultHref=\"/\" icon=\"assets/icon/icon-back.svg\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <img src=\"assets/imgs/logo.png\" id=\"header_logo\" height=\"40\" alt=\"\">\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <ion-item lines=\"none\" class=\"form-control-label\">\r\n    <ion-label>What should we <span>call you</span>?</ion-label>\r\n  </ion-item>\r\n  <ion-item lines=\"none\" class=\"input_box\">\r\n    <ion-label>\r\n      <ion-icon src=\"assets/icon/icon-name.svg\"></ion-icon>\r\n    </ion-label>\r\n    <ion-input type=\"text\" [(ngModel)]=\"fullName\" placeholder=\"Full Name\"></ion-input>\r\n  </ion-item>\r\n\r\n\r\n</ion-content>\r\n\r\n<ion-footer no-border>\r\n  <ion-button expand=\"full\" class=\"button-green\" color=\"button_color\" (click)=\"goToPhone()\">NEXT</ion-button>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/name-modal/name-modal.module.ts":
/*!*************************************************!*\
  !*** ./src/app/name-modal/name-modal.module.ts ***!
  \*************************************************/
/*! exports provided: NameModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NameModalPageModule", function() { return NameModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _name_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./name-modal.page */ "./src/app/name-modal/name-modal.page.ts");







const routes = [
    {
        path: '',
        component: _name_modal_page__WEBPACK_IMPORTED_MODULE_6__["NameModalPage"]
    }
];
let NameModalPageModule = class NameModalPageModule {
};
NameModalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_name_modal_page__WEBPACK_IMPORTED_MODULE_6__["NameModalPage"]]
    })
], NameModalPageModule);



/***/ }),

/***/ "./src/app/name-modal/name-modal.page.scss":
/*!*************************************************!*\
  !*** ./src/app/name-modal/name-modal.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*********  header ************/\nion-title {\n  padding-top: 10px;\n}\nion-title .md .title-md .hydrated {\n  text-align: center !important;\n}\nion-content {\n  --overflow: hidden;\n}\nion-item {\n  --padding-start: 0px !important;\n}\nion-input {\n  --placeholder-color: #999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmFtZS1tb2RhbC9EOlxcV29ya1xcTW9iaWxlXFxpb25pY1xcYWJhY19wYXJlbnRzL3NyY1xcYXBwXFxuYW1lLW1vZGFsXFxuYW1lLW1vZGFsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbmFtZS1tb2RhbC9uYW1lLW1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrQkFBQTtBQUNBO0VBQ0UsaUJBQUE7QUNDRjtBRENFO0VBQ0UsNkJBQUE7QUNDSjtBREdBO0VBQ0Usa0JBQUE7QUNBRjtBREdBO0VBQ0UsK0JBQUE7QUNBRjtBREdBO0VBQ0UseUJBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL25hbWUtbW9kYWwvbmFtZS1tb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqICBoZWFkZXIgKioqKioqKioqKioqL1xyXG5pb24tdGl0bGUge1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG5cclxuICAubWQgLnRpdGxlLW1kIC5oeWRyYXRlZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAtLW92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24taW5wdXQge1xyXG4gIC0tcGxhY2Vob2xkZXItY29sb3I6ICM5OTk7XHJcbn0iLCIvKioqKioqKioqICBoZWFkZXIgKioqKioqKioqKioqL1xuaW9uLXRpdGxlIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5pb24tdGl0bGUgLm1kIC50aXRsZS1tZCAuaHlkcmF0ZWQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLW92ZXJmbG93OiBoaWRkZW47XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHggIWltcG9ydGFudDtcbn1cblxuaW9uLWlucHV0IHtcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzk5OTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/name-modal/name-modal.page.ts":
/*!***********************************************!*\
  !*** ./src/app/name-modal/name-modal.page.ts ***!
  \***********************************************/
/*! exports provided: NameModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NameModalPage", function() { return NameModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_alert_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/alert-message.service */ "./src/app/services/alert-message.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");





let NameModalPage = class NameModalPage {
    constructor(alert, storage, router) {
        this.alert = alert;
        this.storage = storage;
        this.router = router;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        //get data storage for this user
        this.newUser = {};
        this.storage.get('newUser').then((user) => {
            console.log('user storage in storage:');
            console.log(user);
            this.newUser = user;
            this.fullName = this.newUser.fullName;
        });
    }
    goToPhone() {
        if (this.fullName != '' || this.fullName != undefined) {
            //store info on storage
            this.newUser.fullName = this.fullName;
            this.storage.set('newUser', this.newUser);
            //go to full name page
            this.router.navigate(['/phone-modal']);
        }
        else {
            //alert user
            this.alert.customMessage('Please enter your name!');
        }
    }
};
NameModalPage.ctorParameters = () => [
    { type: _services_alert_message_service__WEBPACK_IMPORTED_MODULE_3__["AlertMessageService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
NameModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-name-modal',
        template: __webpack_require__(/*! raw-loader!./name-modal.page.html */ "./node_modules/raw-loader/index.js!./src/app/name-modal/name-modal.page.html"),
        styles: [__webpack_require__(/*! ./name-modal.page.scss */ "./src/app/name-modal/name-modal.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_alert_message_service__WEBPACK_IMPORTED_MODULE_3__["AlertMessageService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], NameModalPage);



/***/ })

}]);
//# sourceMappingURL=name-modal-name-modal-module-es2015.js.map