(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["activity-details-activity-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/activity-details/activity-details.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/activity-details/activity-details.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar mode=\"ios\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button mode=\"md\" defaultHref=\"/\" icon=\"assets/icon/icon-back.svg\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{title}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"currentActivity\">\r\n  <div class=\"top-banner\" [style.backgroundImage]=\"'url(' + currentActivity.image + ')'\">\r\n    <div class=\"overlay\"></div>\r\n    <div class=\"banner-content\">\r\n      <h2>{{currentActivity?.name}}</h2>\r\n      <p>\r\n        {{currentActivity.start_date}}\r\n        to\r\n        {{currentActivity.end_date}}</p>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div *ngIf=\"currentActivity.isMeal == 'true'\" class=\"activity-detail justify-content-end activity5\" (click)=\"openTodaysMenu()\">\r\n    <div class=\"overlay\"></div>\r\n    <a>Today's Menu</a>\r\n  </div>\r\n  <div class=\"activity-detail activity4\" (click)=\"goToConversation()\">\r\n    <div class=\"overlay\"></div>\r\n    <a>Communications</a>\r\n  </div>\r\n  <div *ngIf=\"currentActivity.isMeal == 'false'\" class=\"activity-detail justify-content-end activity3\" (click)=\"goToGallery()\">\r\n    <div class=\"overlay\"></div>\r\n    <a>Photos</a>\r\n  </div>\r\n  <div *ngIf=\"currentActivity?.isMeal == 'false'\" class=\"activity-detail activity2\" (click)=\"goToReports()\">\r\n    <div class=\"overlay\"></div>\r\n    <a>Reports</a>\r\n  </div>\r\n  <div class=\"activity-detail  justify-content-end activity1\" (click)=\"goToConfiguration()\">\r\n    <div class=\"overlay\"></div>\r\n    <a>Configuration</a>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/activity-details/activity-details.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/activity-details/activity-details.module.ts ***!
  \*************************************************************/
/*! exports provided: ActivityDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityDetailsPageModule", function() { return ActivityDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _activity_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./activity-details.page */ "./src/app/activity-details/activity-details.page.ts");







var routes = [
    {
        path: '',
        component: _activity_details_page__WEBPACK_IMPORTED_MODULE_6__["ActivityDetailsPage"]
    }
];
var ActivityDetailsPageModule = /** @class */ (function () {
    function ActivityDetailsPageModule() {
    }
    ActivityDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_activity_details_page__WEBPACK_IMPORTED_MODULE_6__["ActivityDetailsPage"]]
        })
    ], ActivityDetailsPageModule);
    return ActivityDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/activity-details/activity-details.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/activity-details/activity-details.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*********  header ************/\nion-title {\n  text-align: center;\n  --color: rgb(235, 129, 40);\n}\nion-content {\n  --background: #f5f5f5;\n}\n.button-md,\n.button-ios {\n  font-size: 16px;\n  font-weight: 600;\n  padding: 12px 15px;\n  border-radius: 0;\n  height: 5.2rem;\n  margin: 0;\n}\n.top-banner {\n  height: 300px;\n  width: 100%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n}\n.activity5 {\n  height: 100px;\n  width: 100%;\n  background-image: url(\"/assets/imgs/activity-detail-5.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.activity4 {\n  height: 100px;\n  width: 100%;\n  background-image: url(\"/assets/imgs/activity-detail-4.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.activity3 {\n  height: 100px;\n  width: 100%;\n  background-image: url(\"/assets/imgs/activity-detail-3.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.activity2 {\n  height: 100px;\n  width: 100%;\n  background-image: url(\"/assets/imgs/activity-detail-2.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.activity1 {\n  height: 100px;\n  width: 100%;\n  background-image: url(\"/assets/imgs/activity-detail-1.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.banner-content {\n  font-size: 25px;\n  font-weight: 600;\n  color: #fff;\n  position: absolute;\n  bottom: 30px;\n  left: 20px;\n}\n.banner-content h2 {\n  font-weight: bold;\n}\n.justify-content-end {\n  -webkit-box-pack: end !important;\n  justify-content: flex-end !important;\n}\n.banner-content p {\n  font-size: 15px;\n  font-weight: 500;\n  line-height: 19px;\n  margin: 0;\n  padding: 0;\n  float: left;\n  width: 100%;\n  color: #ffffff;\n}\n.scroll-content {\n  padding: 0 !important;\n}\n.overlay {\n  width: 100%;\n  height: 100%;\n}\n.overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.6)), to(rgba(0, 0, 0, 0)));\n  background: linear-gradient(rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 100%);\n}\n.activity-detail {\n  margin: 0;\n  padding: 15px 13px 15px 34px;\n  float: left;\n  width: 100%;\n  min-height: 100px;\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.activity-detail a {\n  font-size: 20px;\n  color: #ffffff;\n  font-weight: 600;\n  position: relative;\n  padding-right: 13px;\n  text-decoration: none;\n}\n.activity-detail a:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  right: 0;\n  width: 7px;\n  height: 15px;\n  background: url(/assets/imgs/icon-arrow.png) center center/contain no-repeat;\n}\n@media (min-width: 300px) and (min-height: 300px) {\n  ion-modal.menuModal ion-backdrop {\n    visibility: visible;\n    opacity: 0.7 !important;\n  }\n}\nion-modal.menuModal .modal-wrapper {\n  position: absolute;\n  overflow: hidden;\n  width: 90%;\n  height: 100%;\n  top: 30%;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  border: 0;\n}\nion-modal.menuModal .close-text {\n  color: white;\n  font-size: 1.8rem;\n  text-align: center;\n  font-weight: bold;\n}\nion-modal.menuModal .ion-page {\n  height: 70% !important;\n  position: absolute;\n  bottom: 0;\n}\nion-modal.menuModal .content {\n  border-radius: 7px;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWN0aXZpdHktZGV0YWlscy9EOlxcV29ya1xcTW9iaWxlXFxpb25pY1xcYWJhY19wYXJlbnRzL3NyY1xcYXBwXFxhY3Rpdml0eS1kZXRhaWxzXFxhY3Rpdml0eS1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWN0aXZpdHktZGV0YWlscy9hY3Rpdml0eS1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrQkFBQTtBQUNBO0VBQ0Usa0JBQUE7RUFDQSwwQkFBQTtBQ0NGO0FERUE7RUFDRSxxQkFBQTtBQ0NGO0FERUE7O0VBRUUsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FDQ0Y7QURHQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBRUEsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDREY7QURJQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsMkRBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FDREY7QURJQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsMkRBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FDREY7QURJQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsMkRBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FDREY7QURJQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsMkRBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FDREY7QURJQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsMkRBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FDREY7QURRQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDTEY7QURPRTtFQUNFLGlCQUFBO0FDTEo7QURTQTtFQUNFLGdDQUFBO0VBRUEsb0NBQUE7QUNQRjtBRFVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ1BGO0FEVUE7RUFDRSxxQkFBQTtBQ1BGO0FEVUE7RUFFRSxXQUFBO0VBQ0EsWUFBQTtBQ1JGO0FEWUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwyR0FBQTtFQUFBLHlFQUFBO0FDVEY7QURZQTtFQUNFLFNBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNURjtBRFlBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ1RGO0FEWUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSw0RUFBQTtBQ1RGO0FEZ0JFO0VBQ0U7SUFDRSxtQkFBQTtJQUNBLHVCQUFBO0VDYko7QUFDRjtBRGdCRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFHQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQ2hCSjtBRG9CRTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNsQko7QURxQkU7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQ25CSjtBRHNCRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUNwQkoiLCJmaWxlIjoic3JjL2FwcC9hY3Rpdml0eS1kZXRhaWxzL2FjdGl2aXR5LWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKiAgaGVhZGVyICoqKioqKioqKioqKi9cclxuaW9uLXRpdGxlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLS1jb2xvcjogcmdiKDIzNSwgMTI5LCA0MCk7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbn1cclxuXHJcbi5idXR0b24tbWQsXHJcbi5idXR0b24taW9zIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBwYWRkaW5nOiAxMnB4IDE1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBoZWlnaHQ6IDUuMnJlbTtcclxuICBtYXJnaW46IDA7XHJcblxyXG59XHJcblxyXG4udG9wLWJhbm5lciB7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1ncy9mb290YmFsbC5qcGcnKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uYWN0aXZpdHk1IHtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWdzL2FjdGl2aXR5LWRldGFpbC01LmpwZycpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmFjdGl2aXR5NCB7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1ncy9hY3Rpdml0eS1kZXRhaWwtNC5qcGcnKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5hY3Rpdml0eTMge1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltZ3MvYWN0aXZpdHktZGV0YWlsLTMuanBnJyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uYWN0aXZpdHkyIHtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWdzL2FjdGl2aXR5LWRldGFpbC0yLmpwZycpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmFjdGl2aXR5MSB7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1ncy9hY3Rpdml0eS1kZXRhaWwtMS5qcGcnKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi8vIC5iYW5uZXItY29udGVudCB7XHJcbi8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyB9XHJcblxyXG4uYmFubmVyLWNvbnRlbnQge1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDMwcHg7XHJcbiAgbGVmdDogMjBweDtcclxuXHJcbiAgaDIge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG59XHJcblxyXG4uanVzdGlmeS1jb250ZW50LWVuZCB7XHJcbiAgLXdlYmtpdC1ib3gtcGFjazogZW5kICFpbXBvcnRhbnQ7XHJcblxyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJhbm5lci1jb250ZW50IHAge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uc2Nyb2xsLWNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm92ZXJsYXkge1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG59XHJcblxyXG4ub3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjYpIDAlLCByZ2JhKDAsIDAsIDAsIDApIDEwMCUpO1xyXG59XHJcblxyXG4uYWN0aXZpdHktZGV0YWlsIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMTVweCAxM3B4IDE1cHggMzRweDtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYWN0aXZpdHktZGV0YWlsIGEge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxM3B4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmFjdGl2aXR5LWRldGFpbCBhOmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICByaWdodDogMDtcclxuICB3aWR0aDogN3B4O1xyXG4gIGhlaWdodDogMTVweDtcclxuICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWdzL2ljb24tYXJyb3cucG5nKSBjZW50ZXIgY2VudGVyIC8gY29udGFpbiBuby1yZXBlYXQ7XHJcblxyXG5cclxufVxyXG5cclxuXHJcbmlvbi1tb2RhbC5tZW51TW9kYWwge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAzMDBweCkgYW5kIChtaW4taGVpZ2h0OiAzMDBweCkge1xyXG4gICAgaW9uLWJhY2tkcm9wIHtcclxuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgb3BhY2l0eTogMC43ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubW9kYWwtd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLy9tYXgtd2lkdGg6IDI4MHB4O1xyXG5cclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0b3A6IDMwJTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGJvcmRlcjogMDtcclxuXHJcbiAgfVxyXG5cclxuICAuY2xvc2UtdGV4dCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgLmlvbi1wYWdlIHtcclxuICAgIGhlaWdodDogNzAlICFpbXBvcnRhbnQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgfVxyXG5cclxuICAuY29udGVudCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICB9XHJcbn0iLCIvKioqKioqKioqICBoZWFkZXIgKioqKioqKioqKioqL1xuaW9uLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAtLWNvbG9yOiByZ2IoMjM1LCAxMjksIDQwKTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNmNWY1ZjU7XG59XG5cbi5idXR0b24tbWQsXG4uYnV0dG9uLWlvcyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZzogMTJweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBoZWlnaHQ6IDUuMnJlbTtcbiAgbWFyZ2luOiAwO1xufVxuXG4udG9wLWJhbm5lciB7XG4gIGhlaWdodDogMzAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hY3Rpdml0eTUge1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWdzL2FjdGl2aXR5LWRldGFpbC01LmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmFjdGl2aXR5NCB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZ3MvYWN0aXZpdHktZGV0YWlsLTQuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uYWN0aXZpdHkzIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1ncy9hY3Rpdml0eS1kZXRhaWwtMy5qcGdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5hY3Rpdml0eTIge1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWdzL2FjdGl2aXR5LWRldGFpbC0yLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmFjdGl2aXR5MSB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZ3MvYWN0aXZpdHktZGV0YWlsLTEuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uYmFubmVyLWNvbnRlbnQge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMzBweDtcbiAgbGVmdDogMjBweDtcbn1cbi5iYW5uZXItY29udGVudCBoMiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uanVzdGlmeS1jb250ZW50LWVuZCB7XG4gIC13ZWJraXQtYm94LXBhY2s6IGVuZCAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG59XG5cbi5iYW5uZXItY29udGVudCBwIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMTlweDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uc2Nyb2xsLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLm92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC42KSAwJSwgcmdiYSgwLCAwLCAwLCAwKSAxMDAlKTtcbn1cblxuLmFjdGl2aXR5LWRldGFpbCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMTVweCAxM3B4IDE1cHggMzRweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYWN0aXZpdHktZGV0YWlsIGEge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctcmlnaHQ6IDEzcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmFjdGl2aXR5LWRldGFpbCBhOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbWFyZ2luOiBhdXRvO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDdweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWdzL2ljb24tYXJyb3cucG5nKSBjZW50ZXIgY2VudGVyL2NvbnRhaW4gbm8tcmVwZWF0O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMzAwcHgpIGFuZCAobWluLWhlaWdodDogMzAwcHgpIHtcbiAgaW9uLW1vZGFsLm1lbnVNb2RhbCBpb24tYmFja2Ryb3Age1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgb3BhY2l0eTogMC43ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbmlvbi1tb2RhbC5tZW51TW9kYWwgLm1vZGFsLXdyYXBwZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAzMCU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyOiAwO1xufVxuaW9uLW1vZGFsLm1lbnVNb2RhbCAuY2xvc2UtdGV4dCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5pb24tbW9kYWwubWVudU1vZGFsIC5pb24tcGFnZSB7XG4gIGhlaWdodDogNzAlICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xufVxuaW9uLW1vZGFsLm1lbnVNb2RhbCAuY29udGVudCB7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/activity-details/activity-details.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/activity-details/activity-details.page.ts ***!
  \***********************************************************/
/*! exports provided: ActivityDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityDetailsPage", function() { return ActivityDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _services_alert_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/alert-message.service */ "./src/app/services/alert-message.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_5__);






var ActivityDetailsPage = /** @class */ (function () {
    function ActivityDetailsPage(route, db, router, alert) {
        this.route = route;
        this.db = db;
        this.router = router;
        this.alert = alert;
        this.currentActivity = {};
        this.activities = [];
    }
    ActivityDetailsPage.prototype.ngOnInit = function () {
    };
    ActivityDetailsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        // this.currentActivity = {};
        this.title = '';
        this.activityId = this.route.snapshot.params['activityId'];
        // console.log('activityId ', this.activityId);
        firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('/activities/').once('value', function (snapshot) {
            _this.activities = [];
            snapshot.forEach(function (snap) {
                if (snap.val().id == _this.activityId) {
                    _this.currentActivity = snap.val();
                    if (_this.currentActivity.isMeal == true) {
                        _this.title = 'Meal Details';
                    }
                    else {
                        _this.title = 'Activity Details';
                    }
                    console.log(_this.currentActivity);
                    return;
                }
            });
        });
    };
    ActivityDetailsPage.prototype.goToConversation = function () {
        this.router.navigate(['/conversation']);
    };
    ActivityDetailsPage.prototype.openTodaysMenu = function () {
        this.alert.customMessage('Not yet implemented!');
    };
    ActivityDetailsPage.prototype.goToGallery = function () {
        this.router.navigate(['/activiy-detail-photo/' + this.activityId]);
    };
    ActivityDetailsPage.prototype.goToReports = function () {
        this.router.navigate(['/activiy-detail-report/' + this.activityId]);
    };
    ActivityDetailsPage.prototype.goToConfiguration = function () {
        this.alert.customMessage('Not yet implemented!');
    };
    ActivityDetailsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_alert_message_service__WEBPACK_IMPORTED_MODULE_4__["AlertMessageService"] }
    ]; };
    ActivityDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-activity-details',
            template: __webpack_require__(/*! raw-loader!./activity-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/activity-details/activity-details.page.html"),
            styles: [__webpack_require__(/*! ./activity-details.page.scss */ "./src/app/activity-details/activity-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_alert_message_service__WEBPACK_IMPORTED_MODULE_4__["AlertMessageService"]])
    ], ActivityDetailsPage);
    return ActivityDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=activity-details-activity-details-module-es5.js.map