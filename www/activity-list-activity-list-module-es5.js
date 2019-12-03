(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["activity-list-activity-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/activity-list/activity-list.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/activity-list/activity-list.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>activity-list</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content> -->\r\n<ion-header>\r\n  <ion-toolbar mode=\"ios\">\r\n    <ion-title>\r\n      <img src=\"assets/imgs/logo-icon.png\" alt=\"\">\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n\r\n  <div *ngFor=\"let category of categories\" class=\"activity-list list\"\r\n    [style.backgroundImage]=\"'url(' + category.image + ')'\" (click)=\"goToActivityCategory(category)\">\r\n    <div class=\"overlay\"></div>\r\n    <div class=\"activity-content\">\r\n      <h3>{{category.name}}</h3>\r\n     <!-- <p>{{category.activities.length}} Activities</p>  -->\r\n    </div>\r\n  </div> \r\n\r\n</ion-content>\r\n\r\n<ion-footer no-border>\r\n  <ion-toolbar transparent>\r\n    <ion-grid>\r\n      <ion-row class=\"footer_tab\">\r\n        <ion-col class=\"\" (click)=\"goToMyChild()\">\r\n          <i class=\"footer-icon child-face\"></i>\r\n          <small> My Kids </small>\r\n        </ion-col>\r\n        <ion-col class=\"active\">\r\n          <i class=\"football footer-icon\"></i>\r\n          <small> Activity</small>\r\n        </ion-col>\r\n\r\n        <ion-col (click)=\"goToConversation()\">\r\n          <i class=\"footer-message footer-icon\"></i>\r\n          <small> Chat</small>\r\n        </ion-col>\r\n\r\n        <ion-col (click)=\"goToDetails()\">\r\n          <i class=\"icon-User footer-icon\"></i>\r\n          <small> Profile </small>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/activity-list/activity-list.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/activity-list/activity-list.module.ts ***!
  \*******************************************************/
/*! exports provided: ActivityListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityListPageModule", function() { return ActivityListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _activity_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./activity-list.page */ "./src/app/activity-list/activity-list.page.ts");







var routes = [
    {
        path: '',
        component: _activity_list_page__WEBPACK_IMPORTED_MODULE_6__["ActivityListPage"]
    }
];
var ActivityListPageModule = /** @class */ (function () {
    function ActivityListPageModule() {
    }
    ActivityListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_activity_list_page__WEBPACK_IMPORTED_MODULE_6__["ActivityListPage"]]
        })
    ], ActivityListPageModule);
    return ActivityListPageModule;
}());



/***/ }),

/***/ "./src/app/activity-list/activity-list.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/activity-list/activity-list.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*********  header ************/\nion-content {\n  --background: #f5f5f5;\n}\n.scroll-content {\n  padding: 0 !important;\n}\n.activity-list {\n  margin: 0;\n  padding: 15px;\n  float: left;\n  width: 100%;\n  min-height: 16.6%;\n  text-align: center;\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.activity-list .overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.45)), to(rgba(102, 122, 73, 0.9)));\n  background: linear-gradient(rgba(0, 0, 0, 0.45) 0%, rgba(102, 122, 73, 0.9) 100%);\n}\n.activity-content {\n  margin: 0;\n  padding: 0;\n  float: left;\n  width: 100%;\n  position: relative;\n  color: #ffffff;\n}\n.activity-content h3 {\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 22px;\n  margin: 0 0 5px 0;\n}\n.activity-content p {\n  font-size: 12px;\n  margin-bottom: 0;\n}\n.list1 {\n  background-image: url(\"/assets/imgs/activity-1.jpg\");\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.list2 {\n  background-image: url(\"/assets/imgs/activity-2.jpg\");\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.list3 {\n  background-image: url(\"/assets/imgs/activity-3.jpg\");\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.list4 {\n  background-image: url(\"/assets/imgs/activity-4.jpg\");\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.list5 {\n  background-image: url(\"/assets/imgs/activity-5.jpg\");\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.list6 {\n  background-image: url(\"/assets/imgs/activity-6.jpg\");\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.list {\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.footer_tab {\n  -webkit-box-pack: center;\n          justify-content: center;\n  text-align: center;\n}\n.footer_tab ion-icon {\n  font-size: 20px;\n}\n.icon-User {\n  background: url(/assets/icon/footer-User.svg) center center/contain no-repeat;\n}\n.footer-message {\n  background: url(/assets/icon/footer-message.svg) center center/contain no-repeat;\n}\n.child-face {\n  background: url(/assets/icon/child-face.svg) center center/contain no-repeat;\n}\n.football {\n  background: url(/assets/icon/football-green.svg) center center/contain no-repeat;\n}\n.footer-icon {\n  margin: 0;\n  padding: 0;\n  width: 18px;\n  height: 20px;\n  display: block;\n  margin: 0 auto;\n}\n.footer_tab small {\n  display: none;\n  margin-top: 2px;\n}\n.footer_tab .active small {\n  display: block;\n  color: #8DC53F;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWN0aXZpdHktbGlzdC9EOlxcV29ya1xcTW9iaWxlXFxpb25pY1xcYWJhY19wYXJlbnRzL3NyY1xcYXBwXFxhY3Rpdml0eS1saXN0XFxhY3Rpdml0eS1saXN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWN0aXZpdHktbGlzdC9hY3Rpdml0eS1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrQkFBQTtBQW1CQTtFQUNFLHFCQUFBO0FDakJGO0FEb0JBO0VBQ0UscUJBQUE7QUNqQkY7QURvQkE7RUFDRSxTQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ2pCRjtBRG9CQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtSEFBQTtFQUFBLGlGQUFBO0FDakJGO0FEb0JBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ2pCRjtBRG9CQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNqQkY7QURvQkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNqQkY7QURvQkE7RUFDRSxvREFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUNqQkY7QURxQkE7RUFDRSxvREFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUNsQkY7QURxQkE7RUFDRSxvREFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUNsQkY7QURxQkE7RUFDRSxvREFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUNsQkY7QURxQkE7RUFDRSxvREFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUNsQkY7QURxQkE7RUFDRSxvREFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUNsQkY7QURxQkE7RUFFRSxzQkFBQTtFQUNBLDRCQUFBO0FDbkJGO0FENkJBO0VBQ0Usd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGtCQUFBO0FDMUJGO0FENkJBO0VBQ0UsZUFBQTtBQzFCRjtBRDZCQTtFQUNFLDZFQUFBO0FDMUJGO0FENkJBO0VBQ0UsZ0ZBQUE7QUMxQkY7QUQ2QkE7RUFDRSw0RUFBQTtBQzFCRjtBRDZCQTtFQUNFLGdGQUFBO0FDMUJGO0FEOEJBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDM0JGO0FEOEJBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUMzQkY7QUQ4QkE7RUFDRSxjQUFBO0VBQ0EsY0FBQTtBQzNCRiIsImZpbGUiOiJzcmMvYXBwL2FjdGl2aXR5LWxpc3QvYWN0aXZpdHktbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqICBoZWFkZXIgKioqKioqKioqKioqL1xyXG4vLyBpb24tdGl0bGUge1xyXG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICBwYWRkaW5nLXRvcDogMjBweDtcclxuLy8gfVxyXG5cclxuLy8gLmJ1dHRvbi1tZCxcclxuLy8gLmJ1dHRvbi1pb3Mge1xyXG4vLyAgIGZvbnQtc2l6ZTogMTZweDtcclxuLy8gICBmb250LXdlaWdodDogNjAwO1xyXG4vLyAgIHBhZGRpbmc6IDEycHggMTVweDtcclxuLy8gICBib3JkZXItcmFkaXVzOiAwO1xyXG4vLyAgIGhlaWdodDogNS4ycmVtO1xyXG4vLyAgIG1hcmdpbjogMDtcclxuXHJcbi8vIH1cclxuLy8gaW9uLWNvbnRlbnQge1xyXG4vLyAgIC8vIC0tb3ZlcmZsb3c6IGhpZGRlbjtcclxuLy8gfVxyXG5pb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG59XHJcblxyXG4uc2Nyb2xsLWNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmFjdGl2aXR5LWxpc3Qge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDE2LjYlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYWN0aXZpdHktbGlzdCAub3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjQ1KSAwJSwgcmdiYSgxMDIsIDEyMiwgNzMsIDAuOSkgMTAwJSk7XHJcbn1cclxuXHJcbi5hY3Rpdml0eS1jb250ZW50IHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5hY3Rpdml0eS1jb250ZW50IGgzIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBsaW5lLWhlaWdodDogMjJweDtcclxuICBtYXJnaW46IDAgMCA1cHggMDtcclxufVxyXG5cclxuLmFjdGl2aXR5LWNvbnRlbnQgcCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5saXN0MSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltZ3MvYWN0aXZpdHktMS5qcGcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblxyXG59XHJcblxyXG4ubGlzdDIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWdzL2FjdGl2aXR5LTIuanBnJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG4ubGlzdDMge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWdzL2FjdGl2aXR5LTMuanBnJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG4ubGlzdDQge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWdzL2FjdGl2aXR5LTQuanBnJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG4ubGlzdDUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWdzL2FjdGl2aXR5LTUuanBnJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG4ubGlzdDYge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWdzL2FjdGl2aXR5LTYuanBnJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG4ubGlzdCB7XHJcbiAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltZ3MvYWN0aXZpdHktNi5qcGcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4uZm9vdGVyX3RhYiB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZm9vdGVyX3RhYiBpb24taWNvbiB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4uaWNvbi1Vc2VyIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pY29uL2Zvb3Rlci1Vc2VyLnN2ZykgY2VudGVyIGNlbnRlciAvIGNvbnRhaW4gbm8tcmVwZWF0O1xyXG59XHJcblxyXG4uZm9vdGVyLW1lc3NhZ2Uge1xyXG4gIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ljb24vZm9vdGVyLW1lc3NhZ2Uuc3ZnKSBjZW50ZXIgY2VudGVyIC8gY29udGFpbiBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbi5jaGlsZC1mYWNlIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pY29uL2NoaWxkLWZhY2Uuc3ZnKSBjZW50ZXIgY2VudGVyIC8gY29udGFpbiBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbi5mb290YmFsbCB7XHJcbiAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaWNvbi9mb290YmFsbC1ncmVlbi5zdmcpIGNlbnRlciBjZW50ZXIgLyBjb250YWluIG5vLXJlcGVhdDtcclxufVxyXG5cclxuXHJcbi5mb290ZXItaWNvbiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgd2lkdGg6IDE4cHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uZm9vdGVyX3RhYiBzbWFsbCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBtYXJnaW4tdG9wOiAycHg7XHJcbn1cclxuXHJcbi5mb290ZXJfdGFiIC5hY3RpdmUgc21hbGwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbG9yOiAjOERDNTNGO1xyXG5cclxufSIsIi8qKioqKioqKiogIGhlYWRlciAqKioqKioqKioqKiovXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI2Y1ZjVmNTtcbn1cblxuLnNjcm9sbC1jb250ZW50IHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG4uYWN0aXZpdHktbGlzdCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMTVweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxNi42JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hY3Rpdml0eS1saXN0IC5vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjQ1KSAwJSwgcmdiYSgxMDIsIDEyMiwgNzMsIDAuOSkgMTAwJSk7XG59XG5cbi5hY3Rpdml0eS1jb250ZW50IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5hY3Rpdml0eS1jb250ZW50IGgzIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgbWFyZ2luOiAwIDAgNXB4IDA7XG59XG5cbi5hY3Rpdml0eS1jb250ZW50IHAge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5saXN0MSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1ncy9hY3Rpdml0eS0xLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLmxpc3QyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWdzL2FjdGl2aXR5LTIuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4ubGlzdDMge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZ3MvYWN0aXZpdHktMy5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5saXN0NCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1ncy9hY3Rpdml0eS00LmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLmxpc3Q1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWdzL2FjdGl2aXR5LTUuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4ubGlzdDYge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZ3MvYWN0aXZpdHktNi5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5saXN0IHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLmZvb3Rlcl90YWIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZm9vdGVyX3RhYiBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmljb24tVXNlciB7XG4gIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ljb24vZm9vdGVyLVVzZXIuc3ZnKSBjZW50ZXIgY2VudGVyL2NvbnRhaW4gbm8tcmVwZWF0O1xufVxuXG4uZm9vdGVyLW1lc3NhZ2Uge1xuICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pY29uL2Zvb3Rlci1tZXNzYWdlLnN2ZykgY2VudGVyIGNlbnRlci9jb250YWluIG5vLXJlcGVhdDtcbn1cblxuLmNoaWxkLWZhY2Uge1xuICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pY29uL2NoaWxkLWZhY2Uuc3ZnKSBjZW50ZXIgY2VudGVyL2NvbnRhaW4gbm8tcmVwZWF0O1xufVxuXG4uZm9vdGJhbGwge1xuICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pY29uL2Zvb3RiYWxsLWdyZWVuLnN2ZykgY2VudGVyIGNlbnRlci9jb250YWluIG5vLXJlcGVhdDtcbn1cblxuLmZvb3Rlci1pY29uIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5mb290ZXJfdGFiIHNtYWxsIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgbWFyZ2luLXRvcDogMnB4O1xufVxuXG4uZm9vdGVyX3RhYiAuYWN0aXZlIHNtYWxsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAjOERDNTNGO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/activity-list/activity-list.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/activity-list/activity-list.page.ts ***!
  \*****************************************************/
/*! exports provided: ActivityListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityListPage", function() { return ActivityListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_data_share_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/data-share.service */ "./src/app/services/data-share.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _services_alert_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/alert-message.service */ "./src/app/services/alert-message.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_7__);








var ActivityListPage = /** @class */ (function () {
    function ActivityListPage(router, dataShare, db, alert, auth) {
        this.router = router;
        this.dataShare = dataShare;
        this.db = db;
        this.alert = alert;
        this.auth = auth;
        this.imageServerUrl = "http://abacadmin.herokuapp.com/assets/images/";
    }
    ActivityListPage.prototype.ngOnInit = function () {
    };
    ActivityListPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_7__["database"]().ref('/categories/').once('value', function (snapshot) {
            _this.categories = [];
            snapshot.forEach(function (snap) {
                _this.categories.push(snap.val());
            });
        });
    };
    ActivityListPage.prototype.goToActivityCategory = function (category) {
        var _this = this;
        console.log("category", category);
        var categoryId;
        // if (category.activities.length > 0) {
        firebase__WEBPACK_IMPORTED_MODULE_7__["database"]().ref('/categories/').once('value', function (snapshot) {
            _this.categories = [];
            snapshot.forEach(function (snap) {
                console.log("category", category);
                console.log("snap.val().name", snap.val().name);
                if (snap.val().name == category.name) {
                    categoryId = snap.key;
                    console.log("categoryId", categoryId);
                    _this.router.navigate(['/activity-category/' + categoryId]);
                }
            });
        });
        //   this.router.navigate(['/activity-category/' + categoryId]);
        // }
        // else {
        //   this.alert.customMessage(category.name + ' has no activities!');
        // }
    };
    ActivityListPage.prototype.goToDetails = function () {
        this.router.navigate(['/details']);
    };
    ActivityListPage.prototype.goToMyChild = function () {
        this.router.navigate(['/my-child']);
    };
    ActivityListPage.prototype.goToConversation = function () {
        this.router.navigate(['/conversation']);
    };
    ActivityListPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_data_share_service__WEBPACK_IMPORTED_MODULE_1__["DataShareService"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
        { type: _services_alert_message_service__WEBPACK_IMPORTED_MODULE_5__["AlertMessageService"] },
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] }
    ]; };
    ActivityListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-activity-list',
            template: __webpack_require__(/*! raw-loader!./activity-list.page.html */ "./node_modules/raw-loader/index.js!./src/app/activity-list/activity-list.page.html"),
            styles: [__webpack_require__(/*! ./activity-list.page.scss */ "./src/app/activity-list/activity-list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_data_share_service__WEBPACK_IMPORTED_MODULE_1__["DataShareService"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],
            _services_alert_message_service__WEBPACK_IMPORTED_MODULE_5__["AlertMessageService"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]])
    ], ActivityListPage);
    return ActivityListPage;
}());



/***/ })

}]);
//# sourceMappingURL=activity-list-activity-list-module-es5.js.map