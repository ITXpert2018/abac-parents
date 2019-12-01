(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["details-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/details/details.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/details/details.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>details</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content> -->\r\n<!--\r\n  Generated template for the DetailsPage page.\r\n\r\n  See http://ionicframework.com/docs/components/#navigation for more info on\r\n  Ionic pages and navigation.\r\n-->\r\n<ion-header>\r\n  <ion-toolbar mode=\"ios\">\r\n    <ion-title>\r\n      <img src=\"assets/imgs/logo-icon.png\" alt=\"\">\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid class=\"back_all\">\r\n    <ion-row>\r\n      <ion-col>\r\n        <div class=\"upload-plus\" [style.backgroundImage]=\"'url('+parent.photoUrl+')'\">\r\n          <i class=\"camera-icon\" (click)=\"uploadPhoto()\"></i>\r\n        </div>\r\n        <p class=\"upload-label\">Upload Photo</p>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n\r\n\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-item lines=\"none\" class=\"form-control-label no-margin-top\">\r\n          <ion-label>Full Name</ion-label>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"input_box\">\r\n          <ion-label>\r\n            <ion-icon src=\"assets/icon/icon-name.svg\"></ion-icon>\r\n          </ion-label>\r\n          <ion-input type=\"text\" value=\"\" placeholder=\"John Smith\" [(ngModel)]=\"parent.fullName\"\r\n            (ionBlur)=\"onBlurParentData()\">\r\n          </ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-item lines=\"none\" class=\"form-control-label no-margin-top\">\r\n          <ion-label>Phone number</ion-label>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"input_box\">\r\n          <ion-label>\r\n            <ion-icon src=\"assets/icon/icon-phone.svg\"></ion-icon>\r\n          </ion-label>\r\n          <ion-input type=\"text\" value=\"\" placeholder=\"+000 0000 000\" [(ngModel)]=\"parent.phone\"\r\n            (ionBlur)=\"onBlurParentData()\"></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-item lines=\"none\" class=\"form-control-label no-margin-top\">\r\n          <ion-label>Email</ion-label>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"input_box\">\r\n          <ion-label>\r\n            <ion-icon src=\"assets/icon/icon-email.svg\"></ion-icon>\r\n          </ion-label>\r\n          <ion-input type=\"text\" value=\"\" placeholder=\"johnsmith@xyz.com\" [(ngModel)]=\"parent.email\"\r\n            (ionBlur)=\"onBlurParentData()\"></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n\r\n    <ion-row>\r\n      <ion-col size=\"6\">\r\n        <ion-button mode=\"ios\" size=\"large\" expand=\"full\" color=\"light\" (click)=\"creditCardPage()\">\r\n          <div class=\"colored_buttons\">\r\n            <img src=\"/assets/icon/icon-card.svg\">\r\n            <ion-label style=\"display:block;font-size: 14px;\">Credit Cards</ion-label>\r\n          </div>\r\n        </ion-button>\r\n\r\n      </ion-col>\r\n\r\n      <ion-col size=\"6\">\r\n        <ion-button mode=\"ios\" size=\"large\" expand=\"full\" color=\"light\" (click)=\"nominas()\">\r\n          <div class=\"colored_buttons\">\r\n            <img src=\"/assets/icon/icon-ticket.svg\">\r\n            <ion-label style=\"display:block;font-size: 14px;\">Tickets</ion-label>\r\n          </div>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <!-- <ion-item lines=\"none\" class=\"form-control-label no-margin-top\">\r\n          <ion-label (click)=\"logOut()\">Logout</ion-label>\r\n        </ion-item> -->\r\n        <ion-button expand=\"full\" class=\"button-green\" color=\"button_color\" (click)=\"logOut()\">\r\n          Logout\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n\r\n\r\n\r\n</ion-content>\r\n\r\n<ion-footer no-border>\r\n  <ion-toolbar transparent>\r\n    <ion-grid>\r\n      <ion-row class=\"footer_tab\">\r\n        <ion-col class=\"\" (click)=\"goToMyChild()\">\r\n          <i class=\"footer-icon child-face\"></i>\r\n          <small> My Kids </small>\r\n        </ion-col>\r\n        <ion-col (click)=\"goToActivityList()\">\r\n          <i class=\"football footer-icon\"></i>\r\n          <small> Activity</small>\r\n        </ion-col>\r\n\r\n        <ion-col (click)=\"goToConversation()\">\r\n          <i class=\"footer-message footer-icon\"></i>\r\n          <small> Chat</small>\r\n        </ion-col>\r\n\r\n        <ion-col class=\"active\">\r\n          <i class=\"icon-User footer-icon\"></i>\r\n          <small> Profile </small>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/details/details.module.ts":
/*!*******************************************!*\
  !*** ./src/app/details/details.module.ts ***!
  \*******************************************/
/*! exports provided: DetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPageModule", function() { return DetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./details.page */ "./src/app/details/details.page.ts");







var routes = [
    {
        path: '',
        component: _details_page__WEBPACK_IMPORTED_MODULE_6__["DetailsPage"]
    }
];
var DetailsPageModule = /** @class */ (function () {
    function DetailsPageModule() {
    }
    DetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_details_page__WEBPACK_IMPORTED_MODULE_6__["DetailsPage"]]
        })
    ], DetailsPageModule);
    return DetailsPageModule;
}());



/***/ }),

/***/ "./src/app/details/details.page.scss":
/*!*******************************************!*\
  !*** ./src/app/details/details.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*********  header ************/\n/*********  footer ************/\nion-footer .toolbar-md,\nion-footer .toolbar-ios {\n  padding: 0;\n  padding-bottom: 0 !important;\n}\nion-content {\n  --background: #f5f5f5;\n  --padding-top: 10px;\n  --padding-bottom: 10px;\n  --padding-start: 10px;\n  --padding-end: 10px;\n}\nion-item {\n  --padding-start: 0px !important;\n}\nion-input {\n  --placeholder-color: #999;\n}\n.upload-plus {\n  width: 155px;\n  height: 155px;\n  background: #fafafa;\n  border: 0.5px solid #e7e7e7;\n  display: block;\n  margin: 0 auto;\n  border-radius: 50%;\n  position: relative;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.camera-icon {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  background: url('icon-camera-white.svg') center center/40px no-repeat;\n}\n.upload-label {\n  font-size: 14px;\n  font-weight: 600;\n  color: #4A4A4A;\n  text-align: center;\n  margin-top: 30px;\n}\n.back_all {\n  background: #fff;\n}\n.scroll-content {\n  background: #f7f7f7;\n}\n/*############ input style  ##########*/\n/*********** footer**************/\n.footer_tab {\n  -webkit-box-pack: center;\n          justify-content: center;\n  text-align: center;\n}\n.footer_tab ion-icon {\n  font-size: 20px;\n}\n.icon-User {\n  background: url('footer-user-green.svg') center center/contain no-repeat;\n}\n.footer-message {\n  background: url('footer-message.svg') center center/contain no-repeat;\n}\n.child-face {\n  background: url('child-face.svg') center center/contain no-repeat;\n}\n.football {\n  background: url('football.svg') center center/contain no-repeat;\n}\n.footer-icon {\n  margin: 0;\n  padding: 0;\n  width: 18px;\n  height: 20px;\n  display: block;\n  margin: 0 auto;\n}\n.footer_tab small {\n  display: none;\n  margin-top: 2px;\n}\n.footer_tab .active small {\n  display: block;\n  color: #8DC53F;\n}\n.icon_card {\n  display: inline-block;\n  width: 30px;\n  height: 20px;\n  background: url('icon-card.svg') center center/cover no-repeat;\n  margin-top: 10px;\n}\n.icon_ticket {\n  display: inline-block;\n  width: 30px;\n  height: 20px;\n  background: url('icon-ticket.svg') center center/cover no-repeat;\n  margin-top: 10px;\n}\n.color_btn .button-inner {\n  color: #8DC53F;\n  padding-bottom: 10px;\n}\n.color_btn .input_btn {\n  border: none;\n  background: #f7f7f7;\n  height: 54px;\n}\n.colored_buttons {\n  color: #8DC53F !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlscy9EOlxcV29ya1xcTW9iaWxlXFxpb25pY1xcYWJhY19wYXJlbnRzL3NyY1xcYXBwXFxkZXRhaWxzXFxkZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGV0YWlscy9kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrQkFBQTtBQWlCQSwrQkFBQTtBQUNBOztFQUVFLFVBQUE7RUFDQSw0QkFBQTtBQ2ZGO0FEb0JBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ2pCRjtBRHFCQTtFQUNFLCtCQUFBO0FDbEJGO0FEcUJBO0VBQ0UseUJBQUE7QUNsQkY7QURzQkE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFFQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUNwQkY7QUR3QkE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFFQUFBO0FDckJGO0FEd0JBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNyQkY7QUR3QkE7RUFDRSxnQkFBQTtBQ3JCRjtBRHdCQTtFQUNFLG1CQUFBO0FDckJGO0FEMEJBLHVDQUFBO0FBdUNBLGlDQUFBO0FBRUE7RUFDRSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0Esa0JBQUE7QUM5REY7QURpRUE7RUFDRSxlQUFBO0FDOURGO0FEaUVBO0VBQ0Usd0VBQUE7QUM5REY7QURpRUE7RUFDRSxxRUFBQTtBQzlERjtBRGlFQTtFQUNFLGlFQUFBO0FDOURGO0FEaUVBO0VBQ0UsK0RBQUE7QUM5REY7QURtRUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNoRUY7QURtRUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQ2hFRjtBRG1FQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0FDaEVGO0FEb0VBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhEQUFBO0VBQ0EsZ0JBQUE7QUNqRUY7QURxRUE7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0VBQUE7RUFDQSxnQkFBQTtBQ2xFRjtBRHFFQTtFQUNFLGNBQUE7RUFDQSxvQkFBQTtBQ2xFRjtBRHNFQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNuRUY7QURzRUE7RUFDRSx5QkFBQTtBQ25FRiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbHMvZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqICBoZWFkZXIgKioqKioqKioqKioqL1xyXG4vLyBpb24tdGl0bGUge1xyXG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICBwYWRkaW5nLXRvcDogMjBweDtcclxuLy8gfVxyXG5cclxuLy8gLmJ1dHRvbi1tZCxcclxuLy8gLmJ1dHRvbi1pb3Mge1xyXG4vLyAgIGZvbnQtc2l6ZTogMTZweDtcclxuLy8gICBmb250LXdlaWdodDogNjAwO1xyXG4vLyAgIHBhZGRpbmc6IDEycHggMTVweDtcclxuLy8gICBib3JkZXItcmFkaXVzOiAwO1xyXG4vLyAgIGhlaWdodDogNS4ycmVtO1xyXG4vLyAgIG1hcmdpbjogMDtcclxuXHJcbi8vIH1cclxuXHJcbi8qKioqKioqKiogIGZvb3RlciAqKioqKioqKioqKiovXHJcbmlvbi1mb290ZXIgLnRvb2xiYXItbWQsXHJcbmlvbi1mb290ZXIgLnRvb2xiYXItaW9zIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8vKioqKioqKioqKiBib2R5ICoqKioqKioqKioqLy9cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbiAgLS1wYWRkaW5nLXRvcDogMTBweDtcclxuICAtLXBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcclxuICAtLXBhZGRpbmctZW5kOiAxMHB4O1xyXG4gIC8vIC0tb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gIC0tcGFkZGluZy1zdGFydDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1pbnB1dCB7XHJcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzk5OTtcclxufVxyXG5cclxuXHJcbi51cGxvYWQtcGx1cyB7XHJcbiAgd2lkdGg6IDE1NXB4O1xyXG4gIGhlaWdodDogMTU1cHg7XHJcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcclxuICBib3JkZXI6IDAuNXB4IHNvbGlkICNlN2U3ZTc7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAvLyBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltZ3Mva2lkcy0xLnBuZyk7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHJcbn1cclxuXHJcbi5jYW1lcmEtaWNvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pY29uL2ljb24tY2FtZXJhLXdoaXRlLnN2ZykgY2VudGVyIGNlbnRlciAvIDQwcHggbm8tcmVwZWF0O1xyXG59XHJcblxyXG4udXBsb2FkLWxhYmVsIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogIzRBNEE0QTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuLmJhY2tfYWxsIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcblxyXG4uc2Nyb2xsLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XHJcbn1cclxuXHJcblxyXG5cclxuLyojIyMjIyMjIyMjIyMgaW5wdXQgc3R5bGUgICMjIyMjIyMjIyMqL1xyXG5cclxuXHJcblxyXG5cclxuLy8gLml0ZW0tbWQuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XHJcbi8vICAgYm9yZGVyOiAwO1xyXG4vLyB9XHJcblxyXG4vLyAuaW5wdXRfYm94IHtcclxuLy8gICBtYXJnaW46IDA7XHJcbi8vICAgcGFkZGluZzogMCAwIDAgMjBweDtcclxuLy8gICBoZWlnaHQ6IDUwcHg7XHJcbi8vICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4vLyAgIGJhY2tncm91bmQ6ICNmYWZhZmEgIWltcG9ydGFudDtcclxuLy8gICBib3JkZXI6IDAuNXB4IHNvbGlkICNlN2U3ZTc7XHJcbi8vIH1cclxuXHJcbi8vIC5pbnB1dF9idG4ge1xyXG4vLyAgIG1hcmdpbjogYXV0bztcclxuLy8gICBwYWRkaW5nLWxlZnQ6IDE4cHg7XHJcbi8vICAgaGVpZ2h0OiA1MHB4O1xyXG4vLyAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuLy8gICBiYWNrZ3JvdW5kOiAjZmFmYWZhICFpbXBvcnRhbnQ7XHJcbi8vICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjZTdlN2U3O1xyXG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gfVxyXG5cclxuLy8gLmlucHV0X2J0biAuYnV0dG9uLWlubmVyIHtcclxuLy8gICBjb2xvcjogcmdiKDc3LCA3NywgNzcpO1xyXG5cclxuLy8gfVxyXG5cclxuLy8gLmlucHV0X2JveCAuaXRlbS1pbm5lciB7XHJcbi8vICAgcGFkZGluZzogMDtcclxuLy8gICBib3JkZXI6IDBweDtcclxuLy8gfVxyXG5cclxuXHJcbi8qKioqKioqKioqKiBmb290ZXIqKioqKioqKioqKioqKi9cclxuXHJcbi5mb290ZXJfdGFiIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mb290ZXJfdGFiIGlvbi1pY29uIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5pY29uLVVzZXIge1xyXG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaWNvbi9mb290ZXItdXNlci1ncmVlbi5zdmcpIGNlbnRlciBjZW50ZXIgLyBjb250YWluIG5vLXJlcGVhdDtcclxufVxyXG5cclxuLmZvb3Rlci1tZXNzYWdlIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ljb24vZm9vdGVyLW1lc3NhZ2Uuc3ZnKSBjZW50ZXIgY2VudGVyIC8gY29udGFpbiBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbi5jaGlsZC1mYWNlIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ljb24vY2hpbGQtZmFjZS5zdmcpIGNlbnRlciBjZW50ZXIgLyBjb250YWluIG5vLXJlcGVhdDtcclxufVxyXG5cclxuLmZvb3RiYWxsIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ljb24vZm9vdGJhbGwuc3ZnKSBjZW50ZXIgY2VudGVyIC8gY29udGFpbiBuby1yZXBlYXQ7XHJcbn1cclxuXHJcblxyXG5cclxuLmZvb3Rlci1pY29uIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICB3aWR0aDogMThweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5mb290ZXJfdGFiIHNtYWxsIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIG1hcmdpbi10b3A6IDJweDtcclxufVxyXG5cclxuLmZvb3Rlcl90YWIgLmFjdGl2ZSBzbWFsbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY29sb3I6ICM4REM1M0Y7XHJcblxyXG59XHJcblxyXG4uaWNvbl9jYXJkIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaWNvbi9pY29uLWNhcmQuc3ZnKSBjZW50ZXIgY2VudGVyIC8gY292ZXIgbm8tcmVwZWF0O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcblxyXG59XHJcblxyXG4uaWNvbl90aWNrZXQge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pY29uL2ljb24tdGlja2V0LnN2ZykgY2VudGVyIGNlbnRlciAvIGNvdmVyIG5vLXJlcGVhdDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uY29sb3JfYnRuIC5idXR0b24taW5uZXIge1xyXG4gIGNvbG9yOiAjOERDNTNGO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5cclxuLmNvbG9yX2J0biAuaW5wdXRfYnRuIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNztcclxuICBoZWlnaHQ6IDU0cHg7XHJcbn1cclxuXHJcbi5jb2xvcmVkX2J1dHRvbnMge1xyXG4gIGNvbG9yOiAjOERDNTNGICFpbXBvcnRhbnQ7XHJcbiAgLy8gaGVpZ2h0OiAxMDAlO1xyXG59IiwiLyoqKioqKioqKiAgaGVhZGVyICoqKioqKioqKioqKi9cbi8qKioqKioqKiogIGZvb3RlciAqKioqKioqKioqKiovXG5pb24tZm9vdGVyIC50b29sYmFyLW1kLFxuaW9uLWZvb3RlciAudG9vbGJhci1pb3Mge1xuICBwYWRkaW5nOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgLS1wYWRkaW5nLXRvcDogMTBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAtLXBhZGRpbmctZW5kOiAxMHB4O1xufVxuXG5pb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pbnB1dCB7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6ICM5OTk7XG59XG5cbi51cGxvYWQtcGx1cyB7XG4gIHdpZHRoOiAxNTVweDtcbiAgaGVpZ2h0OiAxNTVweDtcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjZTdlN2U3O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5jYW1lcmEtaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ljb24vaWNvbi1jYW1lcmEtd2hpdGUuc3ZnKSBjZW50ZXIgY2VudGVyLzQwcHggbm8tcmVwZWF0O1xufVxuXG4udXBsb2FkLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzRBNEE0QTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4uYmFja19hbGwge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4uc2Nyb2xsLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xufVxuXG4vKiMjIyMjIyMjIyMjIyBpbnB1dCBzdHlsZSAgIyMjIyMjIyMjIyovXG4vKioqKioqKioqKiogZm9vdGVyKioqKioqKioqKioqKiovXG4uZm9vdGVyX3RhYiB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mb290ZXJfdGFiIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uaWNvbi1Vc2VyIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pY29uL2Zvb3Rlci11c2VyLWdyZWVuLnN2ZykgY2VudGVyIGNlbnRlci9jb250YWluIG5vLXJlcGVhdDtcbn1cblxuLmZvb3Rlci1tZXNzYWdlIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pY29uL2Zvb3Rlci1tZXNzYWdlLnN2ZykgY2VudGVyIGNlbnRlci9jb250YWluIG5vLXJlcGVhdDtcbn1cblxuLmNoaWxkLWZhY2Uge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ljb24vY2hpbGQtZmFjZS5zdmcpIGNlbnRlciBjZW50ZXIvY29udGFpbiBuby1yZXBlYXQ7XG59XG5cbi5mb290YmFsbCB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaWNvbi9mb290YmFsbC5zdmcpIGNlbnRlciBjZW50ZXIvY29udGFpbiBuby1yZXBlYXQ7XG59XG5cbi5mb290ZXItaWNvbiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMjBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uZm9vdGVyX3RhYiBzbWFsbCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIG1hcmdpbi10b3A6IDJweDtcbn1cblxuLmZvb3Rlcl90YWIgLmFjdGl2ZSBzbWFsbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogIzhEQzUzRjtcbn1cblxuLmljb25fY2FyZCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pY29uL2ljb24tY2FyZC5zdmcpIGNlbnRlciBjZW50ZXIvY292ZXIgbm8tcmVwZWF0O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uaWNvbl90aWNrZXQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaWNvbi9pY29uLXRpY2tldC5zdmcpIGNlbnRlciBjZW50ZXIvY292ZXIgbm8tcmVwZWF0O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uY29sb3JfYnRuIC5idXR0b24taW5uZXIge1xuICBjb2xvcjogIzhEQzUzRjtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi5jb2xvcl9idG4gLmlucHV0X2J0biB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNztcbiAgaGVpZ2h0OiA1NHB4O1xufVxuXG4uY29sb3JlZF9idXR0b25zIHtcbiAgY29sb3I6ICM4REM1M0YgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/details/details.page.ts":
/*!*****************************************!*\
  !*** ./src/app/details/details.page.ts ***!
  \*****************************************/
/*! exports provided: DetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPage", function() { return DetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_alert_message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/alert-message.service */ "./src/app/services/alert-message.service.ts");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/loading.service */ "./src/app/services/loading.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






//FIREBASE




var DetailsPage = /** @class */ (function () {
    function DetailsPage(auth, db, camera, file, alert, loadingService, router) {
        this.auth = auth;
        this.db = db;
        this.camera = camera;
        this.file = file;
        this.alert = alert;
        this.loadingService = loadingService;
        this.router = router;
        this.parent = {};
        this.urlToImage = "";
    }
    DetailsPage.prototype.ngOnInit = function () {
    };
    DetailsPage.prototype.ionViewWillEnter = function () {
        //get info of current parent from firebase
        //this.urlToImage = "../../assets/imgs/kids-1.png";
        var _this = this;
        this.db.collection('parents').doc(this.auth.getUid()).valueChanges().subscribe(function (data) {
            //console.log(data);
            _this.parent = data;
            //console.log(this.parent.photoUrl);
            if (_this.parent.photoUrl == '' || _this.parent.photoUrl == undefined) {
                _this.parent.photoUrl = _this.urlToImage;
            }
        });
    };
    DetailsPage.prototype.onBlurParentData = function () {
        this.db.collection('parents').doc(this.auth.getUid()).update(this.parent);
    };
    DetailsPage.prototype.uploadPhoto = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var options, cameraInfo, blobInfo, downloadUrl, e_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            quality: 80,
                            destinationType: this.camera.DestinationType.FILE_URI,
                            encodingType: this.camera.EncodingType.JPEG,
                            mediaType: this.camera.MediaType.PICTURE
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 6]);
                        this.loadingService.present();
                        return [4 /*yield*/, this.camera.getPicture(options)];
                    case 2:
                        cameraInfo = _a.sent();
                        return [4 /*yield*/, this.makeFileIntoBlob(cameraInfo)];
                    case 3:
                        blobInfo = _a.sent();
                        return [4 /*yield*/, this.uploadToFirebase(blobInfo)];
                    case 4:
                        downloadUrl = _a.sent();
                        console.log(downloadUrl);
                        this.parent.photoUrl = downloadUrl;
                        this.onBlurParentData();
                        if (this.loadingService.isLoading)
                            this.loadingService.dismiss();
                        return [3 /*break*/, 6];
                    case 5:
                        e_1 = _a.sent();
                        if (this.loadingService.isLoading)
                            this.loadingService.dismiss();
                        console.log(e_1.message);
                        this.alert.customMessage("File Upload Error " + e_1.message);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    // FILE STUFF
    DetailsPage.prototype.makeFileIntoBlob = function (_imagePath) {
        var _this = this;
        // INSTALL PLUGIN - cordova plugin add cordova-plugin-file
        return new Promise(function (resolve, reject) {
            var fileName = "";
            _this.file
                .resolveLocalFilesystemUrl(_imagePath)
                .then(function (fileEntry) {
                var name = fileEntry.name, nativeURL = fileEntry.nativeURL;
                // get the path..
                var path = nativeURL.substring(0, nativeURL.lastIndexOf("/"));
                console.log("path", path);
                console.log("fileName", name);
                fileName = name;
                // we are provided the name, so now read the file into
                // a buffer
                return _this.file.readAsArrayBuffer(path, name);
            })
                .then(function (buffer) {
                // get the buffer and make a blob to be saved
                var imgBlob = new Blob([buffer], {
                    type: "image/jpeg"
                });
                console.log(imgBlob.type, imgBlob.size);
                resolve({
                    fileName: fileName,
                    imgBlob: imgBlob
                });
            })
                .catch(function (e) { return reject(e); });
        });
    };
    /**
   *
   * @param _imageBlobInfo
   */
    DetailsPage.prototype.uploadToFirebase = function (_imageBlobInfo) {
        var _this = this;
        console.log("uploadToFirebase");
        return new Promise(function (resolve, reject) {
            var fileRef = firebase__WEBPACK_IMPORTED_MODULE_6__["storage"]().ref("parentsApp/" + _this.auth.getUid() + "/" + _imageBlobInfo.fileName);
            var uploadTask = fileRef.put(_imageBlobInfo.imgBlob);
            uploadTask.on("state_changed", function (_snapshot) {
                console.log("snapshot progess " +
                    (_snapshot.bytesTransferred / _snapshot.totalBytes) * 100);
            }, function (_error) {
                console.log(_error);
                reject(_error);
            }, function () {
                // completion...
                resolve(fileRef.getDownloadURL());
            });
        });
    };
    DetailsPage.prototype.goToMyChild = function () {
        this.router.navigate(['/my-child']);
    };
    DetailsPage.prototype.goToActivityList = function () {
        this.router.navigate(['activity-list']);
    };
    DetailsPage.prototype.goToConversation = function () {
        this.router.navigate(['/conversation']);
    };
    DetailsPage.prototype.logOut = function () {
        this.auth.signOut();
    };
    DetailsPage.ctorParameters = function () { return [
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"] },
        { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__["File"] },
        { type: _services_alert_message_service__WEBPACK_IMPORTED_MODULE_7__["AlertMessageService"] },
        { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_8__["LoadingService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }
    ]; };
    DetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! raw-loader!./details.page.html */ "./node_modules/raw-loader/index.js!./src/app/details/details.page.html"),
            styles: [__webpack_require__(/*! ./details.page.scss */ "./src/app/details/details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__["File"],
            _services_alert_message_service__WEBPACK_IMPORTED_MODULE_7__["AlertMessageService"],
            _services_loading_service__WEBPACK_IMPORTED_MODULE_8__["LoadingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]])
    ], DetailsPage);
    return DetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=details-details-module-es5.js.map