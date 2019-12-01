(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["configuration-configuration-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/configuration/configuration.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/configuration/configuration.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>configuration</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/configuration/configuration.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/configuration/configuration.module.ts ***!
  \*******************************************************/
/*! exports provided: ConfigurationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationPageModule", function() { return ConfigurationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _configuration_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./configuration.page */ "./src/app/configuration/configuration.page.ts");







const routes = [
    {
        path: '',
        component: _configuration_page__WEBPACK_IMPORTED_MODULE_6__["ConfigurationPage"]
    }
];
let ConfigurationPageModule = class ConfigurationPageModule {
};
ConfigurationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_configuration_page__WEBPACK_IMPORTED_MODULE_6__["ConfigurationPage"]]
    })
], ConfigurationPageModule);



/***/ }),

/***/ "./src/app/configuration/configuration.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/configuration/configuration.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpZ3VyYXRpb24vY29uZmlndXJhdGlvbi5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/configuration/configuration.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/configuration/configuration.page.ts ***!
  \*****************************************************/
/*! exports provided: ConfigurationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationPage", function() { return ConfigurationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ConfigurationPage = class ConfigurationPage {
    constructor() { }
    ngOnInit() {
    }
};
ConfigurationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-configuration',
        template: __webpack_require__(/*! raw-loader!./configuration.page.html */ "./node_modules/raw-loader/index.js!./src/app/configuration/configuration.page.html"),
        styles: [__webpack_require__(/*! ./configuration.page.scss */ "./src/app/configuration/configuration.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ConfigurationPage);



/***/ })

}]);
//# sourceMappingURL=configuration-configuration-module-es2015.js.map