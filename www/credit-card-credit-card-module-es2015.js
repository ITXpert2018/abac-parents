(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["credit-card-credit-card-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/credit-card/credit-card.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/credit-card/credit-card.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar mode=\"ios\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button mode=\"md\" defaultHref=\"/\" icon=\"assets/icon/icon-back.svg\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Credit Cards</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-card *ngFor=\"let card of cards\">\r\n      <ion-row>\r\n        <ion-col>\r\n          <img src=\"assets/icon/icon-card.svg\" height=\"30px\">\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-label style=\"display:block;font-size: 14px;\">{{card.cardnumber}}</ion-label>\r\n        </ion-col>\r\n        <ion-col>\r\n          <!-- <ion-button mode=\"ios\" color=\"light\" (click)=\"delete(card)\"> -->\r\n            <img src=\"assets/icon/icon-delete.svg\" height=\"30px\"/>\r\n          <!-- </ion-button> -->\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-label style=\"display:block;font-size: 14px;\">{{card.expirydate}}</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card>\r\n    \r\n  <ion-grid class=\"back_all\">\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button expand=\"full\" class=\"button-green add-button\" color=\"button_color\"\r\n          (click)=\"logOut()\">\r\n          +\r\n          <br><br>\r\n          Add New Credit Card\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/credit-card/credit-card.module.ts":
/*!***************************************************!*\
  !*** ./src/app/credit-card/credit-card.module.ts ***!
  \***************************************************/
/*! exports provided: CreditCardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditCardPageModule", function() { return CreditCardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _credit_card_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./credit-card.page */ "./src/app/credit-card/credit-card.page.ts");







const routes = [
    {
        path: '',
        component: _credit_card_page__WEBPACK_IMPORTED_MODULE_6__["CreditCardPage"]
    }
];
let CreditCardPageModule = class CreditCardPageModule {
};
CreditCardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_credit_card_page__WEBPACK_IMPORTED_MODULE_6__["CreditCardPage"]]
    })
], CreditCardPageModule);



/***/ }),

/***/ "./src/app/credit-card/credit-card.page.scss":
/*!***************************************************!*\
  !*** ./src/app/credit-card/credit-card.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title {\n  text-align: center;\n  --color: rgb(235, 129, 40);\n}\n\nion-content {\n  --background: #f5f5f5;\n  --padding-top: 10px;\n  --padding-bottom: 10px;\n  --padding-start: 10px;\n  --padding-end: 10px;\n}\n\n.add-button {\n  height: 60px;\n}\n\n.button-inner {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlZGl0LWNhcmQvRDpcXFdvcmtcXE1vYmlsZVxcaW9uaWNcXGFiYWNfcGFyZW50cy9zcmNcXGFwcFxcY3JlZGl0LWNhcmRcXGNyZWRpdC1jYXJkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY3JlZGl0LWNhcmQvY3JlZGl0LWNhcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSwwQkFBQTtBQ0NKOztBREdBO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ0FKOztBREdBO0VBQ0ksWUFBQTtBQ0FKOztBREdBO0VBQ0ksNEJBQUE7RUFBQSw2QkFBQTtVQUFBLGlCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9jcmVkaXQtY2FyZC9jcmVkaXQtY2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLS1jb2xvcjogcmdiKDIzNSwgMTI5LCA0MCk7XHJcbn1cclxuIFxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMTBweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxMHB4O1xyXG59XHJcblxyXG4uYWRkLWJ1dHRvbiB7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbn1cclxuXHJcbi5idXR0b24taW5uZXIge1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW47XHJcbn1cclxuXHJcbiIsImlvbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLS1jb2xvcjogcmdiKDIzNSwgMTI5LCA0MCk7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICAtLXBhZGRpbmctdG9wOiAxMHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG59XG5cbi5hZGQtYnV0dG9uIHtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuXG4uYnV0dG9uLWlubmVyIHtcbiAgZmxleC1mbG93OiBjb2x1bW47XG59Il19 */"

/***/ }),

/***/ "./src/app/credit-card/credit-card.page.ts":
/*!*************************************************!*\
  !*** ./src/app/credit-card/credit-card.page.ts ***!
  \*************************************************/
/*! exports provided: CreditCardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditCardPage", function() { return CreditCardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CreditCardPage = class CreditCardPage {
    constructor() {
        this.cards = [];
        var card = {};
        card.id = "1";
        card.cardnumber = 1234567890123456;
        card.cvv = 777;
        card.expirydate = "12/23";
        this.cards.push(card);
    }
    ngOnInit() {
    }
};
CreditCardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-credit-card',
        template: __webpack_require__(/*! raw-loader!./credit-card.page.html */ "./node_modules/raw-loader/index.js!./src/app/credit-card/credit-card.page.html"),
        styles: [__webpack_require__(/*! ./credit-card.page.scss */ "./src/app/credit-card/credit-card.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CreditCardPage);



/***/ })

}]);
//# sourceMappingURL=credit-card-credit-card-module-es2015.js.map