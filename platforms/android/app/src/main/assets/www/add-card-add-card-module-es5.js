(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-card-add-card-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/add-card/add-card.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/add-card/add-card.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>add-card</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/add-card/add-card.module.ts":
/*!*********************************************!*\
  !*** ./src/app/add-card/add-card.module.ts ***!
  \*********************************************/
/*! exports provided: AddCardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCardPageModule", function() { return AddCardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_card_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-card.page */ "./src/app/add-card/add-card.page.ts");







var routes = [
    {
        path: '',
        component: _add_card_page__WEBPACK_IMPORTED_MODULE_6__["AddCardPage"]
    }
];
var AddCardPageModule = /** @class */ (function () {
    function AddCardPageModule() {
    }
    AddCardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_add_card_page__WEBPACK_IMPORTED_MODULE_6__["AddCardPage"]]
        })
    ], AddCardPageModule);
    return AddCardPageModule;
}());



/***/ }),

/***/ "./src/app/add-card/add-card.page.scss":
/*!*********************************************!*\
  !*** ./src/app/add-card/add-card.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1jYXJkL2FkZC1jYXJkLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/add-card/add-card.page.ts":
/*!*******************************************!*\
  !*** ./src/app/add-card/add-card.page.ts ***!
  \*******************************************/
/*! exports provided: AddCardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCardPage", function() { return AddCardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AddCardPage = /** @class */ (function () {
    function AddCardPage() {
    }
    AddCardPage.prototype.ngOnInit = function () {
    };
    AddCardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-card',
            template: __webpack_require__(/*! raw-loader!./add-card.page.html */ "./node_modules/raw-loader/index.js!./src/app/add-card/add-card.page.html"),
            styles: [__webpack_require__(/*! ./add-card.page.scss */ "./src/app/add-card/add-card.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AddCardPage);
    return AddCardPage;
}());



/***/ })

}]);
//# sourceMappingURL=add-card-add-card-module-es5.js.map