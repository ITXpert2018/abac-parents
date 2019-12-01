(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-modal-menu-modal-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/menu-modal/menu-modal.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/menu-modal/menu-modal.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>menu-modal</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/menu-modal/menu-modal.module.ts":
/*!*************************************************!*\
  !*** ./src/app/menu-modal/menu-modal.module.ts ***!
  \*************************************************/
/*! exports provided: MenuModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuModalPageModule", function() { return MenuModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _menu_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu-modal.page */ "./src/app/menu-modal/menu-modal.page.ts");







var routes = [
    {
        path: '',
        component: _menu_modal_page__WEBPACK_IMPORTED_MODULE_6__["MenuModalPage"]
    }
];
var MenuModalPageModule = /** @class */ (function () {
    function MenuModalPageModule() {
    }
    MenuModalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_menu_modal_page__WEBPACK_IMPORTED_MODULE_6__["MenuModalPage"]]
        })
    ], MenuModalPageModule);
    return MenuModalPageModule;
}());



/***/ }),

/***/ "./src/app/menu-modal/menu-modal.page.scss":
/*!*************************************************!*\
  !*** ./src/app/menu-modal/menu-modal.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUtbW9kYWwvbWVudS1tb2RhbC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/menu-modal/menu-modal.page.ts":
/*!***********************************************!*\
  !*** ./src/app/menu-modal/menu-modal.page.ts ***!
  \***********************************************/
/*! exports provided: MenuModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuModalPage", function() { return MenuModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MenuModalPage = /** @class */ (function () {
    function MenuModalPage() {
    }
    MenuModalPage.prototype.ngOnInit = function () {
    };
    MenuModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu-modal',
            template: __webpack_require__(/*! raw-loader!./menu-modal.page.html */ "./node_modules/raw-loader/index.js!./src/app/menu-modal/menu-modal.page.html"),
            styles: [__webpack_require__(/*! ./menu-modal.page.scss */ "./src/app/menu-modal/menu-modal.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenuModalPage);
    return MenuModalPage;
}());



/***/ })

}]);
//# sourceMappingURL=menu-modal-menu-modal-module-es5.js.map