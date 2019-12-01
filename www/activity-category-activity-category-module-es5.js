(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["activity-category-activity-category-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/activity-category/activity-category.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/activity-category/activity-category.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar mode=\"ios\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button mode=\"md\" defaultHref=\"/\" icon=\"assets/icon/icon-back.svg\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{currentCategory.name}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <!-- <ion-list class=\"category-block\">\r\n    <h2>Football</h2>\r\n    <p>Lorem ipsum dolor sit amet, consectetur ading elit, sed do eiusmod tempor incididunt utsam labore et dolore magna\r\n      aliqua. Ut enim</p>\r\n\r\n    <button ion-button clear class=\"btn btn-outline-default\" (click)=\"thankyouOrder()\">SIGN UP</button>\r\n  </ion-list> -->\r\n  <ion-card *ngFor=\"let activity of activities\">\r\n    <div style=\"position:relative !important; \">\r\n      <img [src]=\"activity.image\">\r\n      <ion-button mode=\"ios\" class=\"sign-up-btn\" (click)=\"enrollToActivity(activity)\">SIGN UP\r\n      </ion-button>\r\n    </div>\r\n    <ion-card-header>\r\n      <ion-card-title>{{activity.name}}</ion-card-title>\r\n      <ion-card-subtitle>{{activity.schoolName}}</ion-card-subtitle>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      {{activity.description}}\r\n      <p class=\"activity_details\">\r\n        <span>{{activity.price}}&nbsp;&#8364;</span>\r\n        <span style='margin-left: 15px;'>\r\n          <ion-icon src=\"/assets/icon/icon-date.svg\"></ion-icon>\r\n          &nbsp;\r\n          {{activity.start_date.toDate() | date: 'dd MMM'}} - {{activity.end_date.toDate() | date: 'dd MMM'}}\r\n        </span>\r\n        <span style='margin-left: 10px'>\r\n          <ion-icon mode=\"md\" name=\"time\"></ion-icon>\r\n          {{activity.duration_hrs}} hrs\r\n        </span>\r\n      </p>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>\r\n<!-- &#8364; -->"

/***/ }),

/***/ "./src/app/activity-category/activity-category.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/activity-category/activity-category.module.ts ***!
  \***************************************************************/
/*! exports provided: ActivityCategoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityCategoryPageModule", function() { return ActivityCategoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _activity_category_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./activity-category.page */ "./src/app/activity-category/activity-category.page.ts");







var routes = [
    {
        path: '',
        component: _activity_category_page__WEBPACK_IMPORTED_MODULE_6__["ActivityCategoryPage"]
    }
];
var ActivityCategoryPageModule = /** @class */ (function () {
    function ActivityCategoryPageModule() {
    }
    ActivityCategoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_activity_category_page__WEBPACK_IMPORTED_MODULE_6__["ActivityCategoryPage"]]
        })
    ], ActivityCategoryPageModule);
    return ActivityCategoryPageModule;
}());



/***/ }),

/***/ "./src/app/activity-category/activity-category.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/activity-category/activity-category.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title {\n  text-align: center;\n  --color: rgb(235, 129, 40);\n}\n\n.scroll-content {\n  background-color: #F7F7F7;\n}\n\nion-card-title {\n  --color: #8DC53F;\n  font-size: 17px;\n}\n\nion-card-subtitle {\n  --color: rgb(235, 129, 40);\n  font-size: 13px;\n  text-transform: none !important;\n}\n\nion-card-content {\n  font-size: 13px;\n  color: #000;\n  padding-left: 15px;\n  padding-bottom: 15px;\n  padding-right: 15px;\n  padding-top: 0;\n}\n\nimg {\n  height: 220px;\n}\n\n.activity_details {\n  padding-top: 10px;\n  color: #888;\n}\n\n.activity_details ion-icon {\n  vertical-align: middle;\n}\n\nion-card-header {\n  padding: 15px;\n}\n\n.sign-up-btn {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  margin: 15px;\n  font-size: 13px;\n  --border-radius: 5px !important;\n  --background: #F1FEEA !important;\n  --background-activated: #D4E4CB !important;\n  --color: #000;\n}\n\n.category-block {\n  margin: 12px 0 0 0;\n  padding: 30px 20px;\n  border-radius: 2px;\n  background: #fff;\n  float: left;\n  width: 100%;\n  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);\n}\n\n.category-block h2 {\n  color: #8DC53F;\n  font-size: 18px;\n  font-weight: 600;\n  margin: 0 0 20px 0;\n}\n\n.category-block p {\n  font-size: 13px;\n  color: #4A4A4A;\n  margin: 0 0 20px 0;\n}\n\n.category-block .btn {\n  font-size: 13px;\n  padding: 9px 20px;\n  font-weight: 600;\n}\n\n.btn-outline-default {\n  border: 1px solid #8DC53F;\n  color: #8DC53F;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWN0aXZpdHktY2F0ZWdvcnkvRDpcXFdvcmtcXE1vYmlsZVxcaW9uaWNcXGFiYWNfcGFyZW50cy9zcmNcXGFwcFxcYWN0aXZpdHktY2F0ZWdvcnlcXGFjdGl2aXR5LWNhdGVnb3J5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWN0aXZpdHktY2F0ZWdvcnkvYWN0aXZpdHktY2F0ZWdvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFDO0VBQ0Usa0JBQUE7RUFDQSwwQkFBQTtBQ0NIOztBREdDO0VBQ0UseUJBQUE7QUNBSDs7QURHQztFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQ0FIOztBREdDO0VBQ0UsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7QUNBSDs7QURHQztFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0FIOztBREdDO0VBQ0UsYUFBQTtBQ0FIOztBREdDO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0FDQUg7O0FERUc7RUFDRSxzQkFBQTtBQ0FMOztBRElDO0VBRUUsYUFBQTtBQ0ZIOztBRE1DO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDBDQUFBO0VBQ0EsYUFBQTtBQ0hIOztBRE1DO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDJDQUFBO0FDSEg7O0FETUM7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNISDs7QURNQztFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNISDs7QURNQztFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDSEg7O0FETUM7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUNISCIsImZpbGUiOiJzcmMvYXBwL2FjdGl2aXR5LWNhdGVnb3J5L2FjdGl2aXR5LWNhdGVnb3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiBpb24tdGl0bGUge1xyXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIC0tY29sb3I6IHJnYigyMzUsIDEyOSwgNDApO1xyXG5cclxuIH1cclxuXHJcbiAuc2Nyb2xsLWNvbnRlbnQge1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGN0Y3O1xyXG4gfVxyXG5cclxuIGlvbi1jYXJkLXRpdGxlIHtcclxuICAgLS1jb2xvcjogIzhEQzUzRjtcclxuICAgZm9udC1zaXplOiAxN3B4O1xyXG4gfVxyXG5cclxuIGlvbi1jYXJkLXN1YnRpdGxlIHtcclxuICAgLS1jb2xvcjogcmdiKDIzNSwgMTI5LCA0MCk7XHJcbiAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxuIH1cclxuXHJcbiBpb24tY2FyZC1jb250ZW50IHtcclxuICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICBjb2xvcjogIzAwMDtcclxuICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgcGFkZGluZy10b3A6IDA7XHJcbiB9XHJcblxyXG4gaW1nIHtcclxuICAgaGVpZ2h0OiAyMjBweDtcclxuIH1cclxuXHJcbiAuYWN0aXZpdHlfZGV0YWlscyB7XHJcbiAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICBjb2xvcjogIzg4ODtcclxuXHJcbiAgIGlvbi1pY29uIHtcclxuICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICB9XHJcbiB9XHJcblxyXG4gaW9uLWNhcmQtaGVhZGVyIHtcclxuXHJcbiAgIHBhZGRpbmc6IDE1cHg7XHJcblxyXG4gfVxyXG5cclxuIC5zaWduLXVwLWJ0biB7XHJcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgYm90dG9tOiAwO1xyXG4gICByaWdodDogMDtcclxuICAgbWFyZ2luOiAxNXB4O1xyXG4gICBmb250LXNpemU6IDEzcHg7XHJcbiAgIC0tYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgIC0tYmFja2dyb3VuZDogI0YxRkVFQSAhaW1wb3J0YW50O1xyXG4gICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjRDRFNENCICFpbXBvcnRhbnQ7XHJcbiAgIC0tY29sb3I6ICMwMDA7XHJcbiB9XHJcblxyXG4gLmNhdGVnb3J5LWJsb2NrIHtcclxuICAgbWFyZ2luOiAxMnB4IDAgMCAwO1xyXG4gICBwYWRkaW5nOiAzMHB4IDIwcHg7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgZmxvYXQ6IGxlZnQ7XHJcbiAgIHdpZHRoOiAxMDAlO1xyXG4gICBib3gtc2hhZG93OiAwcHggMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gfVxyXG5cclxuIC5jYXRlZ29yeS1ibG9jayBoMiB7XHJcbiAgIGNvbG9yOiAjOERDNTNGO1xyXG4gICBmb250LXNpemU6IDE4cHg7XHJcbiAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgIG1hcmdpbjogMCAwIDIwcHggMDtcclxuIH1cclxuXHJcbiAuY2F0ZWdvcnktYmxvY2sgcCB7XHJcbiAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgY29sb3I6ICM0QTRBNEE7XHJcbiAgIG1hcmdpbjogMCAwIDIwcHggMDtcclxuIH1cclxuXHJcbiAuY2F0ZWdvcnktYmxvY2sgLmJ0biB7XHJcbiAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgcGFkZGluZzogOXB4IDIwcHg7XHJcbiAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiB9XHJcblxyXG4gLmJ0bi1vdXRsaW5lLWRlZmF1bHQge1xyXG4gICBib3JkZXI6IDFweCBzb2xpZCAjOERDNTNGO1xyXG4gICBjb2xvcjogIzhEQzUzRjtcclxuIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAvLyAgaW9uLW1vZGFsLnRoYW5reW91IHtcclxuIC8vICAgIEBtZWRpYSAobWluLXdpZHRoOiAzMDBweCkgYW5kIChtaW4taGVpZ2h0OiAzMDBweCkge1xyXG4gLy8gICAgICBpb24tYmFja2Ryb3Age1xyXG4gLy8gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAvLyAgICAgICAgb3BhY2l0eTogMC40ICFpbXBvcnRhbnQ7XHJcbiAvLyAgICAgIH1cclxuIC8vICAgIH1cclxuXHJcbiAvLyAgICAubW9kYWwtd3JhcHBlciB7XHJcbiAvLyAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuIC8vICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuIC8vICAgICAgLy9tYXgtd2lkdGg6IDI4MHB4O1xyXG4gLy8gICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAvLyAgICAgIHdpZHRoOiA5MCU7XHJcbiAvLyAgICAgIGhlaWdodDogMTAwJTtcclxuIC8vICAgICAgdG9wOiAzMCU7XHJcbiAvLyAgICAgIGJvdHRvbTogMDtcclxuIC8vICAgICAgbGVmdDogMDtcclxuIC8vICAgICAgcmlnaHQ6IDA7XHJcbiAvLyAgICAgIG1hcmdpbjogYXV0bztcclxuIC8vICAgICAgYm9yZGVyOiAwO1xyXG5cclxuIC8vICAgIH1cclxuXHJcbiAvLyAgICAuY2xvc2UtdGV4dCB7XHJcbiAvLyAgICAgIGNvbG9yOiB3aGl0ZTtcclxuIC8vICAgICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAvLyAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIC8vICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAvLyAgICB9XHJcblxyXG4gLy8gICAgLmlvbi1wYWdlIHtcclxuIC8vICAgICAgaGVpZ2h0OiA3MCUgIWltcG9ydGFudDtcclxuIC8vICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gLy8gICAgICBib3R0b206IDA7XHJcbiAvLyAgICB9XHJcblxyXG4gLy8gICAgLmNvbnRlbnQge1xyXG4gLy8gICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gLy8gICAgfVxyXG4gLy8gIH0iLCJpb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC0tY29sb3I6IHJnYigyMzUsIDEyOSwgNDApO1xufVxuXG4uc2Nyb2xsLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGN0Y3O1xufVxuXG5pb24tY2FyZC10aXRsZSB7XG4gIC0tY29sb3I6ICM4REM1M0Y7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuaW9uLWNhcmQtc3VidGl0bGUge1xuICAtLWNvbG9yOiByZ2IoMjM1LCAxMjksIDQwKTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzAwMDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5cbmltZyB7XG4gIGhlaWdodDogMjIwcHg7XG59XG5cbi5hY3Rpdml0eV9kZXRhaWxzIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGNvbG9yOiAjODg4O1xufVxuLmFjdGl2aXR5X2RldGFpbHMgaW9uLWljb24ge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG5pb24tY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4uc2lnbi11cC1idG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogMTVweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICAtLWJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6ICNGMUZFRUEgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI0Q0RTRDQiAhaW1wb3J0YW50O1xuICAtLWNvbG9yOiAjMDAwO1xufVxuXG4uY2F0ZWdvcnktYmxvY2sge1xuICBtYXJnaW46IDEycHggMCAwIDA7XG4gIHBhZGRpbmc6IDMwcHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IDBweCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG59XG5cbi5jYXRlZ29yeS1ibG9jayBoMiB7XG4gIGNvbG9yOiAjOERDNTNGO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbjogMCAwIDIwcHggMDtcbn1cblxuLmNhdGVnb3J5LWJsb2NrIHAge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjNEE0QTRBO1xuICBtYXJnaW46IDAgMCAyMHB4IDA7XG59XG5cbi5jYXRlZ29yeS1ibG9jayAuYnRuIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwYWRkaW5nOiA5cHggMjBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmJ0bi1vdXRsaW5lLWRlZmF1bHQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjOERDNTNGO1xuICBjb2xvcjogIzhEQzUzRjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/activity-category/activity-category.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/activity-category/activity-category.page.ts ***!
  \*************************************************************/
/*! exports provided: ActivityCategoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityCategoryPage", function() { return ActivityCategoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _thankyou_order_thankyou_order_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../thankyou-order/thankyou-order.page */ "./src/app/thankyou-order/thankyou-order.page.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_data_share_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/data-share.service */ "./src/app/services/data-share.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _child_selector_child_selector_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../child-selector/child-selector.page */ "./src/app/child-selector/child-selector.page.ts");











var ActivityCategoryPage = /** @class */ (function () {
    function ActivityCategoryPage(route, modalCtrl, dataShare, db, auth) {
        this.route = route;
        this.modalCtrl = modalCtrl;
        this.dataShare = dataShare;
        this.db = db;
        this.auth = auth;
        this.currentCategory = {};
        this.activities = [];
        this.momentjs = moment__WEBPACK_IMPORTED_MODULE_5__;
    }
    ActivityCategoryPage.prototype.ngOnInit = function () {
    };
    ActivityCategoryPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        //read category name
        this.categoryId = this.route.snapshot.params['categoryId'];
        //category name is also attribute of activity. it will depend school by school.
        // var newActivity: Activity = {};
        // // newActivity.categoryName = 'Esportives';
        // newActivity.name = 'Football';
        // newActivity.description = 'Lorem ipsum dolor sit amet, consectetur ading elit, sed do eiusmod tempor incididunt utsam labore et dolore magna aliqua';
        // newActivity.image = "/assets/imgs/football.jpg";
        // // newActivity.image = "https://www.telegraph.co.uk/content/dam/football/2019/08/15/TELEMMGLPICT000206110274_trans_NvBQzQNjv4BqrS8Z1b0ZQjNoViJZ3HnGQ4NS1YurETCFkeLSh1IwB7c.jpeg?imwidth=450";
        // newActivity.price = 2.5;
        // newActivity.start_date = new Date(2019, 8, 26);
        // newActivity.end_date = new Date(2019, 8, 30);
        // newActivity.duration_hrs = 3;
        // this.activities.push(newActivity);
        this.myChildsSchoolIds = [];
        this.myChildren = [];
        // this.dataShare.getMyChilds().forEach(child => {
        //   this.myChildsSchoolIds.push(child.schoolId);
        // });
        this.db.collection('parents').doc(this.auth.getUid()).collection('childrens').snapshotChanges().subscribe(function (serverItems) {
            serverItems.forEach(function (item) {
                // console.log('browsing children of this parent, got this child: ', item);
                var child = item.payload.doc.data();
                child.id = item.payload.doc.id;
                _this.myChildsSchoolIds.push(child.schoolId);
                _this.myChildren.push(child);
            });
        });
        this.db.collection('categories').doc(this.categoryId).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1))
            .subscribe(function (data) {
            _this.currentCategory = data;
        });
        // this.db.collection('categories').doc(this.categoryId).collection('activities').snapshotChanges().pipe(take(1)).subscribe(serverItems => {
        //   serverItems.forEach(a => {
        //     //this.hasChilds = true;
        //     let activity: Activity = a.payload.doc.data();
        //     activity.id = a.payload.doc.id;
        //     // console.log(category);
        //     if (this.myChildsSchoolIds.includes(activity.schoolId))
        //       this.activities.push(activity);
        //   });
        // }, error => { console.log(error) }
        //   , () => {
        //     //finished
        //     //subscription complete.
        //   });
        this.db.collection('activities', function (q) { return q.where('categoryId', '==', _this.categoryId); }).snapshotChanges().subscribe(function (serverItems) {
            serverItems.forEach(function (a) {
                var activity = a.payload.doc.data();
                activity.id = a.payload.doc.id;
                // console.log(category);
                if (_this.myChildsSchoolIds.includes(activity.schoolId))
                    _this.activities.push(activity);
            });
        });
    };
    ActivityCategoryPage.prototype.enrollToActivityStoreFirebase = function (child, activity) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("aaaaaaaaaaa", activity);
                        this.db.collection('parents').doc(this.auth.getUid()).collection('childrens').doc(child.id).set({
                            activitiesEnrolled: child.activitiesEnrolled
                        }, { merge: true });
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _thankyou_order_thankyou_order_page__WEBPACK_IMPORTED_MODULE_4__["ThankyouOrderPage"],
                                componentProps: {
                                    activity: activity
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ActivityCategoryPage.prototype.enrollToActivity = function (activity) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var childsOnThisSchool_1, child, shouldUpdateToFirebase, modal, found, i;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("aaaaaaaaaaaaaa", activity);
                        if (!(this.myChildren.length > 0)) return [3 /*break*/, 6];
                        childsOnThisSchool_1 = [];
                        child = void 0;
                        this.myChildren.forEach(function (child) {
                            // this.myChildsSchoolIds.push(child.schoolId)
                            if (child.schoolId == activity.schoolId) {
                                childsOnThisSchool_1.push(child);
                            }
                        });
                        shouldUpdateToFirebase = false;
                        console.log("childsOnThisSchool.length", childsOnThisSchool_1.length);
                        if (!(childsOnThisSchool_1.length > 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _child_selector_child_selector_page__WEBPACK_IMPORTED_MODULE_10__["ChildSelectorPage"],
                                componentProps: {
                                    activity: activity
                                },
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss()
                            .then(function (data) {
                            var returnData = data['data'];
                            // console.log(returnData);
                            if (returnData != 'cancel') {
                                var childReturned = void 0;
                                var shouldUpdatToFirebase2 = false;
                                childReturned = returnData;
                                if (childReturned.activitiesEnrolled == undefined) {
                                    //child has no previous activities enrolled.
                                    childReturned.activitiesEnrolled = [];
                                    childReturned.activitiesEnrolled.push(activity);
                                    shouldUpdatToFirebase2 = true;
                                }
                                else {
                                    //child has already some enrolled activities.
                                    //check if this activity is already enrolled
                                    var found = false;
                                    for (var i = 0; i < childReturned.activitiesEnrolled.length; i++) {
                                        if (childReturned.activitiesEnrolled[i].id == activity.id) {
                                            found = true;
                                            break;
                                        }
                                    }
                                    if (!found) {
                                        childReturned.activitiesEnrolled.push(activity);
                                        shouldUpdatToFirebase2 = true;
                                    }
                                    else {
                                        shouldUpdatToFirebase2 = false;
                                        console.log('child already enrolled to this activity.', childReturned.activitiesEnrolled);
                                    }
                                }
                                if (shouldUpdatToFirebase2) {
                                    // this.db.collection('parents').doc(this.auth.getUid()).collection('childrens').doc(child.id).set({
                                    //   activitiesEnrolled: child.activitiesEnrolled
                                    // }, { merge: true });
                                    // const modal = await this.modalCtrl.create({
                                    //   component: ThankyouOrderPage
                                    // });
                                    // return await modal.present();
                                    _this.enrollToActivityStoreFirebase(childReturned, activity);
                                }
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        //enroll the child on this school to this activity if not already enrolled
                        child = childsOnThisSchool_1[0];
                        if (child.activitiesEnrolled == undefined) {
                            //child has no previous activities enrolled.
                            child.activitiesEnrolled = [];
                            child.activitiesEnrolled.push(activity);
                            shouldUpdateToFirebase = true;
                        }
                        else {
                            found = false;
                            for (i = 0; i < child.activitiesEnrolled.length; i++) {
                                if (child.activitiesEnrolled[i].id == activity.id) {
                                    found = true;
                                    break;
                                }
                            }
                            if (!found) {
                                child.activitiesEnrolled.push(activity);
                                shouldUpdateToFirebase = true;
                            }
                            else {
                                shouldUpdateToFirebase = false;
                                console.log('child already enrolled to this activity.', child.activitiesEnrolled);
                            }
                        }
                        _a.label = 4;
                    case 4:
                        if (!shouldUpdateToFirebase) return [3 /*break*/, 6];
                        // this.db.collection('parents').doc(this.auth.getUid()).collection('childrens').doc(child.id).set({
                        //   activitiesEnrolled: child.activitiesEnrolled
                        // }, { merge: true });
                        // const modal = await this.modalCtrl.create({
                        //   component: ThankyouOrderPage
                        // });
                        // return await modal.present();
                        return [4 /*yield*/, this.enrollToActivityStoreFirebase(child, activity)];
                    case 5:
                        // this.db.collection('parents').doc(this.auth.getUid()).collection('childrens').doc(child.id).set({
                        //   activitiesEnrolled: child.activitiesEnrolled
                        // }, { merge: true });
                        // const modal = await this.modalCtrl.create({
                        //   component: ThankyouOrderPage
                        // });
                        // return await modal.present();
                        _a.sent();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    ActivityCategoryPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _services_data_share_service__WEBPACK_IMPORTED_MODULE_6__["DataShareService"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"] },
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"] }
    ]; };
    ActivityCategoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-activity-category',
            template: __webpack_require__(/*! raw-loader!./activity-category.page.html */ "./node_modules/raw-loader/index.js!./src/app/activity-category/activity-category.page.html"),
            styles: [__webpack_require__(/*! ./activity-category.page.scss */ "./src/app/activity-category/activity-category.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _services_data_share_service__WEBPACK_IMPORTED_MODULE_6__["DataShareService"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"]])
    ], ActivityCategoryPage);
    return ActivityCategoryPage;
}());



/***/ })

}]);
//# sourceMappingURL=activity-category-activity-category-module-es5.js.map