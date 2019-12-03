(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nominas-nominas-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/nominas/nominas.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/nominas/nominas.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar mode=\"ios\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button mode=\"md\" defaultHref=\"/\" icon=\"assets/icon/icon-back.svg\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Nominas</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/nominas/nominas.module.ts":
/*!*******************************************!*\
  !*** ./src/app/nominas/nominas.module.ts ***!
  \*******************************************/
/*! exports provided: NominasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NominasPageModule", function() { return NominasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _nominas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nominas.page */ "./src/app/nominas/nominas.page.ts");







const routes = [
    {
        path: '',
        component: _nominas_page__WEBPACK_IMPORTED_MODULE_6__["NominasPage"]
    }
];
let NominasPageModule = class NominasPageModule {
};
NominasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_nominas_page__WEBPACK_IMPORTED_MODULE_6__["NominasPage"]]
    })
], NominasPageModule);



/***/ }),

/***/ "./src/app/nominas/nominas.page.scss":
/*!*******************************************!*\
  !*** ./src/app/nominas/nominas.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title {\n  text-align: center;\n  --color: rgb(235, 129, 40);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm9taW5hcy9EOlxcV29ya1xcTW9iaWxlXFxpb25pY1xcYWJhY19wYXJlbnRzL3NyY1xcYXBwXFxub21pbmFzXFxub21pbmFzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbm9taW5hcy9ub21pbmFzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsMEJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL25vbWluYXMvbm9taW5hcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLS1jb2xvcjogcmdiKDIzNSwgMTI5LCA0MCk7XHJcbiBcclxuICB9XHJcbiAiLCJpb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC0tY29sb3I6IHJnYigyMzUsIDEyOSwgNDApO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/nominas/nominas.page.ts":
/*!*****************************************!*\
  !*** ./src/app/nominas/nominas.page.ts ***!
  \*****************************************/
/*! exports provided: NominasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NominasPage", function() { return NominasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NominasPage = class NominasPage {
    constructor() { }
    ngOnInit() {
    }
};
NominasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-niominas',
        template: __webpack_require__(/*! raw-loader!./nominas.page.html */ "./node_modules/raw-loader/index.js!./src/app/nominas/nominas.page.html"),
        styles: [__webpack_require__(/*! ./nominas.page.scss */ "./src/app/nominas/nominas.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NominasPage);



/***/ })

}]);
//# sourceMappingURL=nominas-nominas-module-es2015.js.map