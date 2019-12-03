(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-child-my-child-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/my-child/my-child.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/my-child/my-child.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>my-child</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content> -->\r\n<ion-header>\r\n  <ion-toolbar mode=\"ios\">\r\n    <ion-title>\r\n      <img src=\"assets/imgs/logo-icon.png\" alt=\"\">\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n  <div class=\"kids-section\">\r\n    <div class=\"container\">\r\n      <h2 class=\"grey-heading\">KIDS</h2>\r\n      <ion-slides>\r\n        <ion-slide *ngFor=\"let k of childs\">\r\n          <div class=\"kids-block\" (click)=\"childSelected(k)\">\r\n            <div class=\"kids-img\">\r\n              <img *ngIf=\"k.photoUrl\" [src]=\"k.photoUrl\" alt=\"\" title=\"\" />\r\n              <img *ngIf=\"!k.photoUrl\" src=\"/assets/imgs/child-demo.png\" alt=\"\" title=\"\" />\r\n            </div>\r\n            <p>{{k.fullName}}</p>\r\n          </div>\r\n        </ion-slide>\r\n        <ion-slide>\r\n          <div class=\"kids-block add-kid\" (click)=\"goToAddChild()\">\r\n            <div class=\"kids-img\">\r\n              <span class=\"plus-icon\">+</span>\r\n            </div>\r\n            <p>Add Kid </p>\r\n          </div>\r\n        </ion-slide>\r\n      </ion-slides>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"activity-section\">\r\n    <div class=\"container\">\r\n      <h2 class=\"grey-heading\">Activities</h2>\r\n\r\n      <ion-list *ngFor=\"let child of childs\" class=\"activity-block\"\r\n        (click)=\"goToActivityDetails(child.activitiesEnrolled[0])\">\r\n        <ion-grid *ngIf=\"child.activitiesEnrolled\" >\r\n          <ion-row *ngFor=\"let activity of child.activitiesEnrolled\">\r\n            <ion-col size=\"2\" class=\"text-center\">\r\n              <h3 class=\"time\">{{activity.detail.starttime}}</h3> \r\n            </ion-col>\r\n            <ion-col size=\"8\">\r\n              <div class=\"activity-container\">\r\n                <h4 class=\"activity-name\">{{activity.name}}</h4>\r\n                <p class=\"activity-details\">{{activity.description}}</p>\r\n                <p class=\"activity-school\">{{child.schoolName}}</p>\r\n                 <p class=\"enrolled-kid\"><span>{{child.fullName}}</span></p>\r\n              </div>\r\n\r\n            </ion-col>\r\n            <ion-col size=\"2\">\r\n              <p class=\"hours\">{{activity.detail.duration}} Hours</p>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-list>\r\n\r\n\r\n\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-footer no-border>\r\n  <ion-toolbar transparent>\r\n    <ion-grid>\r\n      <ion-row class=\"footer_tab\">\r\n        <ion-col class=\"active\">\r\n          <i class=\"footer-icon child-face\"></i>\r\n          <small> My Kids </small>\r\n        </ion-col>\r\n        <ion-col (click)=\"goToActivityList()\">\r\n          <i class=\"football footer-icon\"></i>\r\n          <small> Activity</small>\r\n        </ion-col>\r\n\r\n        <ion-col (click)=\"goToConversation()\">\r\n          <i class=\"footer-message footer-icon\"></i>\r\n          <small> Chat</small>\r\n        </ion-col>\r\n\r\n        <ion-col (click)=\"goToDetails()\">\r\n          <i class=\"icon-User footer-icon\"></i>\r\n          <small> Profile </small>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/my-child/my-child.module.ts":
/*!*********************************************!*\
  !*** ./src/app/my-child/my-child.module.ts ***!
  \*********************************************/
/*! exports provided: MyChildPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyChildPageModule", function() { return MyChildPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _my_child_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-child.page */ "./src/app/my-child/my-child.page.ts");







var routes = [
    {
        path: '',
        component: _my_child_page__WEBPACK_IMPORTED_MODULE_6__["MyChildPage"]
    }
];
var MyChildPageModule = /** @class */ (function () {
    function MyChildPageModule() {
    }
    MyChildPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_my_child_page__WEBPACK_IMPORTED_MODULE_6__["MyChildPage"]]
        })
    ], MyChildPageModule);
    return MyChildPageModule;
}());



/***/ }),

/***/ "./src/app/my-child/my-child.page.scss":
/*!*********************************************!*\
  !*** ./src/app/my-child/my-child.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #f5f5f5;\n  --padding-top: 10px;\n  --padding-bottom: 10px;\n  --padding-end: 10px;\n}\n\nion-item {\n  --padding-start: 0px !important;\n}\n\nion-input {\n  --placeholder-color: #999;\n}\n\nion-list {\n  padding: 0px !important;\n}\n\nion-grid {\n  padding: 0px !important;\n}\n\nion-row {\n  padding: 0px !important;\n}\n\nion-col {\n  padding: 0px !important;\n}\n\n.kids-section {\n  height: 160px;\n  margin: 0;\n  float: left;\n  width: 100vw;\n  background: #ffffff;\n}\n\n.swiper-slide {\n  width: 80px !important;\n  margin-left: 10px;\n}\n\n.kids-block {\n  margin: 0;\n  padding: 0;\n  float: left;\n  text-align: center;\n}\n\n.kids-img {\n  width: 65px;\n  height: 65px;\n  border-radius: 50%;\n  position: relative;\n  display: block;\n  margin: 0 auto;\n  overflow: hidden;\n  border: 2px solid #FFEFD6;\n}\n\n.kids-img img {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  min-height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  left: 0;\n  right: 0;\n  margin: auto;\n}\n\n.slide-zoom {\n  width: 150px;\n}\n\n.scroll-content {\n  padding: 0 !important;\n}\n\n.add-kid .kids-img {\n  border: 1px dashed #8DC53F;\n  background: #FAFAFA;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.plus-icon {\n  width: 20px;\n  height: 20px;\n  line-height: 22px;\n  font-size: 14px;\n  padding-left: 1px;\n  background: #8DC53F;\n  color: #ffffff;\n  text-align: center;\n  display: block;\n  border-radius: 100%;\n  margin: auto;\n}\n\n.add-kid p {\n  color: #8DC53F;\n  font-weight: 600;\n  font-weight: 600;\n  font-family: \"Montserrat\", sans-serif;\n}\n\n.kids-block p {\n  color: #F49401;\n  font-size: 12px;\n  margin-top: 10px;\n  margin-bottom: 0;\n  font-weight: 600;\n  font-family: \"Montserrat\", sans-serif;\n}\n\n.grey-heading {\n  margin: 0 0 20px 0;\n  padding: 0;\n  font-weight: 600;\n  text-transform: uppercase;\n  color: #9B9B9B;\n  font-size: 14px;\n}\n\n.container {\n  width: 100%;\n  max-width: 100%;\n  padding: 0 15px;\n  margin-right: auto;\n  margin-left: auto;\n  margin-top: 20px;\n}\n\n.activity-section {\n  padding: 24px 0 0 0;\n  float: left;\n  width: 100%;\n}\n\n.activity-block {\n  margin: 0 0 5px 0;\n  padding: 5px;\n  border-radius: 2px;\n  background: #fff;\n  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);\n  float: left;\n  width: 100%;\n  font-weight: 700;\n  color: #9B9B9B;\n  font-size: 11px;\n  line-height: normal;\n  position: relative;\n}\n\n.align-items-center {\n  -webkit-box-align: center !important;\n  align-items: center !important;\n}\n\n.d-flex {\n  display: -webkit-box !important;\n  display: flex !important;\n}\n\n.row {\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n}\n\n.activity-container {\n  padding: 15px 10px 15px 10px;\n}\n\n.text-center {\n  display: -webkit-box;\n  display: flex;\n  text-align: center !important;\n}\n\n.time {\n  margin: 0;\n  padding-left: 10px;\n  font-size: 20px;\n  color: #F49401;\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n}\n\n.activity-name {\n  font-size: 14px;\n  color: #4A4A4A;\n  font-weight: 700;\n  margin: 0 0 10px 0;\n}\n\n.activity-block p {\n  margin: 0;\n}\n\n.activity-section h3 {\n  font-size: 16px;\n}\n\n.activity-school {\n  border-radius: 2px;\n  background: #f9f9f9;\n  display: inline-block;\n  padding: 6px 7px;\n  color: #8DC53F;\n  font-size: 10px;\n  margin: 10px 0 0 0 !important;\n}\n\n.enrolled-kid {\n  border-radius: 2px;\n  background: #f9f9f9;\n  display: inline-block;\n  padding: 6px 7px;\n  color: #F49401;\n  font-size: 10px;\n  margin: 10px 0 0 0 !important;\n}\n\n.hours {\n  position: absolute;\n  right: 0;\n  border-radius: 0px 2px;\n  background: #f2ffec;\n  padding: 6px 3px;\n}\n\n.footer_tab {\n  -webkit-box-pack: center;\n          justify-content: center;\n  text-align: center;\n}\n\n.footer_tab ion-icon {\n  font-size: 20px;\n}\n\n.icon-User {\n  background: url(/assets/icon/footer-User.svg) center center/contain no-repeat;\n}\n\n.footer-message {\n  background: url(/assets/icon/footer-message.svg) center center/contain no-repeat;\n}\n\n.child-face {\n  background: url(/assets/icon/child-face-green.svg) center center/contain no-repeat;\n}\n\n.football {\n  background: url(/assets/icon/football.svg) center center/contain no-repeat;\n}\n\n.footer-icon {\n  margin: 0;\n  padding: 0;\n  width: 18px;\n  height: 20px;\n  display: block;\n  margin: 0 auto;\n}\n\n.footer_tab small {\n  display: none;\n  margin-top: 2px;\n}\n\n.footer_tab .active small {\n  display: block;\n  color: #8DC53F;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktY2hpbGQvRDpcXFdvcmtcXE1vYmlsZVxcaW9uaWNcXGFiYWNfcGFyZW50cy9zcmNcXGFwcFxcbXktY2hpbGRcXG15LWNoaWxkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbXktY2hpbGQvbXktY2hpbGQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCTTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUVBLG1CQUFBO0FDckJSOztBRDBCTTtFQUNFLCtCQUFBO0FDdkJSOztBRDBCTTtFQUNFLHlCQUFBO0FDdkJSOztBRDBCTTtFQUNFLHVCQUFBO0FDdkJSOztBRDBCTTtFQUNFLHVCQUFBO0FDdkJSOztBRDBCTTtFQUNFLHVCQUFBO0FDdkJSOztBRDJCTTtFQUNFLHVCQUFBO0FDeEJSOztBRDRCTTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ3pCUjs7QUQ0Qk07RUFDRSxzQkFBQTtFQUNBLGlCQUFBO0FDekJSOztBRDRCTTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDekJSOztBRDZCTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQzFCUjs7QUQ2Qk07RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFFQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0FDM0JSOztBRCtCTTtFQUNFLFlBQUE7QUM1QlI7O0FEK0JNO0VBQ0UscUJBQUE7QUM1QlI7O0FEK0JNO0VBQ0UsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDNUJSOztBRCtCTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUM1QlI7O0FEZ0NNO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQ0FBQTtBQzdCUjs7QURnQ007RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFDQUFBO0FDN0JSOztBRGdDTTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQzdCUjs7QURnQ007RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUM3QlI7O0FEZ0NNO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQzdCUjs7QURnQ007RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDN0JSOztBRGdDTTtFQUNFLG9DQUFBO0VBRUEsOEJBQUE7QUM5QlI7O0FEaUNNO0VBRUUsK0JBQUE7RUFBQSx3QkFBQTtBQy9CUjs7QURrQ007RUFFRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ2hDUjs7QURtQ007RUFFRSw0QkFBQTtBQ2pDUjs7QURvQ007RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw2QkFBQTtBQ2pDUjs7QURvQ007RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7QUNqQ1I7O0FEb0NNO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDakNSOztBRG9DTTtFQUNFLFNBQUE7QUNqQ1I7O0FEb0NNO0VBQ0UsZUFBQTtBQ2pDUjs7QURxQ007RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7QUNsQ1I7O0FEcUNNO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0FDbENSOztBRHFDTTtFQUNFLGtCQUFBO0VBRUEsUUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ25DUjs7QUR5Q007RUFDRSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0Esa0JBQUE7QUN0Q1I7O0FEeUNNO0VBQ0UsZUFBQTtBQ3RDUjs7QUR5Q007RUFDRSw2RUFBQTtBQ3RDUjs7QUR5Q007RUFDRSxnRkFBQTtBQ3RDUjs7QUR5Q007RUFDRSxrRkFBQTtBQ3RDUjs7QUR5Q007RUFDRSwwRUFBQTtBQ3RDUjs7QUQwQ007RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUN2Q1I7O0FEMENNO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUN2Q1I7O0FEMENNO0VBQ0UsY0FBQTtFQUNBLGNBQUE7QUN2Q1IiLCJmaWxlIjoic3JjL2FwcC9teS1jaGlsZC9teS1jaGlsZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgICAvLyAgLyoqKioqKioqKiAgaGVhZGVyICoqKioqKioqKioqKi9cclxuICAgICAgLy8gIGlvbi10aXRsZSB7XHJcbiAgICAgIC8vICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgLy8gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAgIC8vICB9XHJcblxyXG4gICAgICAvLyAgLmJ1dHRvbi1tZCxcclxuICAgICAgLy8gIC5idXR0b24taW9zIHtcclxuICAgICAgLy8gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAvLyAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAvLyAgICBwYWRkaW5nOiAxMnB4IDE1cHg7XHJcbiAgICAgIC8vICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgIC8vICAgIGhlaWdodDogNS4ycmVtO1xyXG4gICAgICAvLyAgICBtYXJnaW46IDA7XHJcblxyXG4gICAgICAvLyAgfVxyXG5cclxuICAgICAgLy8gLmNvbnRlbnQtbWQsXHJcbiAgICAgIC8vIC5jb250ZW50LWlvcyB7XHJcbiAgICAgIC8vICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RjdGNztcclxuICAgICAgLy8gfVxyXG4gICAgICBpb24tY29udGVudCB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG4gICAgICAgIC0tcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgICAvLy0tcGFkZGluZy1zdGFydDogMTBweDtcclxuICAgICAgICAtLXBhZGRpbmctZW5kOiAxMHB4O1xyXG5cclxuICAgICAgICAvLyAtLW92ZXJmbG93OiB2ZXJ0aWNhbDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgICAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzk5OTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW9uLWxpc3Qge1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpb24tZ3JpZCB7XHJcbiAgICAgICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlvbi1yb3cge1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgfVxyXG5cclxuICAgICAgaW9uLWNvbCB7XHJcbiAgICAgICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgICAua2lkcy1zZWN0aW9uIHtcclxuICAgICAgICBoZWlnaHQ6IDE2MHB4O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnN3aXBlci1zbGlkZSB7XHJcbiAgICAgICAgd2lkdGg6IDgwcHggIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmtpZHMtYmxvY2sge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5raWRzLWltZyB7XHJcbiAgICAgICAgd2lkdGg6IDY1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjRkZFRkQ2O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAua2lkcy1pbWcgaW1nIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG5cclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zbGlkZS16b29tIHtcclxuICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zY3JvbGwtY29udGVudCB7XHJcbiAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuYWRkLWtpZCAua2lkcy1pbWcge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjOERDNTNGO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNGQUZBRkE7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucGx1cy1pY29uIHtcclxuICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM4REM1M0Y7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgICAgLmFkZC1raWQgcCB7XHJcbiAgICAgICAgY29sb3I6ICM4REM1M0Y7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5raWRzLWJsb2NrIHAge1xyXG4gICAgICAgIGNvbG9yOiAjRjQ5NDAxO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZ3JleS1oZWFkaW5nIHtcclxuICAgICAgICBtYXJnaW46IDAgMCAyMHB4IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgY29sb3I6ICM5QjlCOUI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogMCAxNXB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuYWN0aXZpdHktc2VjdGlvbiB7XHJcbiAgICAgICAgcGFkZGluZzogMjRweCAwIDAgMDtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmFjdGl2aXR5LWJsb2NrIHtcclxuICAgICAgICBtYXJnaW46IDAgMCA1cHggMDtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIGNvbG9yOiAjOUI5QjlCO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmFsaWduLWl0ZW1zLWNlbnRlciB7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5kLWZsZXgge1xyXG5cclxuICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5yb3cge1xyXG5cclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTE1cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hY3Rpdml0eS1jb250YWluZXIge1xyXG4gICAgICAgIC8vdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHggMTBweCAxNXB4IDEwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50ZXh0LWNlbnRlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnRpbWUge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjRjQ5NDAxO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmFjdGl2aXR5LW5hbWUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogIzRBNEE0QTtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIG1hcmdpbjogMCAwIDEwcHggMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmFjdGl2aXR5LWJsb2NrIHAge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmFjdGl2aXR5LXNlY3Rpb24gaDMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICAgIC5hY3Rpdml0eS1zY2hvb2wge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBwYWRkaW5nOiA2cHggN3B4O1xyXG4gICAgICAgIGNvbG9yOiAjOERDNTNGO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICBtYXJnaW46IDEwcHggMCAwIDAgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmVucm9sbGVkLWtpZCB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmOWY5Zjk7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmc6IDZweCA3cHg7XHJcbiAgICAgICAgY29sb3I6ICNGNDk0MDE7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwIDAgMCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuaG91cnMge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAvL3RvcDogLTE1cHg7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDJweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjJmZmVjO1xyXG4gICAgICAgIHBhZGRpbmc6IDZweCAzcHg7XHJcbiAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAgIC5mb290ZXJfdGFiIHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5mb290ZXJfdGFiIGlvbi1pY29uIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5pY29uLVVzZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ljb24vZm9vdGVyLVVzZXIuc3ZnKSBjZW50ZXIgY2VudGVyIC8gY29udGFpbiBuby1yZXBlYXQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5mb290ZXItbWVzc2FnZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaWNvbi9mb290ZXItbWVzc2FnZS5zdmcpIGNlbnRlciBjZW50ZXIgLyBjb250YWluIG5vLXJlcGVhdDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNoaWxkLWZhY2Uge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ljb24vY2hpbGQtZmFjZS1ncmVlbi5zdmcpIGNlbnRlciBjZW50ZXIgLyBjb250YWluIG5vLXJlcGVhdDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmZvb3RiYWxsIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pY29uL2Zvb3RiYWxsLnN2ZykgY2VudGVyIGNlbnRlciAvIGNvbnRhaW4gbm8tcmVwZWF0O1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgICAgLmZvb3Rlci1pY29uIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5mb290ZXJfdGFiIHNtYWxsIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmZvb3Rlcl90YWIgLmFjdGl2ZSBzbWFsbCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgY29sb3I6ICM4REM1M0Y7XHJcblxyXG4gICAgICB9IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gIC0tcGFkZGluZy10b3A6IDEwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHggIWltcG9ydGFudDtcbn1cblxuaW9uLWlucHV0IHtcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzk5OTtcbn1cblxuaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuaW9uLWdyaWQge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuaW9uLXJvdyB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG5pb24tY29sIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5raWRzLXNlY3Rpb24ge1xuICBoZWlnaHQ6IDE2MHB4O1xuICBtYXJnaW46IDA7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTAwdnc7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG5cbi5zd2lwZXItc2xpZGUge1xuICB3aWR0aDogODBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmtpZHMtYmxvY2sge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZsb2F0OiBsZWZ0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5raWRzLWltZyB7XG4gIHdpZHRoOiA2NXB4O1xuICBoZWlnaHQ6IDY1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlcjogMnB4IHNvbGlkICNGRkVGRDY7XG59XG5cbi5raWRzLWltZyBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnNsaWRlLXpvb20ge1xuICB3aWR0aDogMTUwcHg7XG59XG5cbi5zY3JvbGwtY29udGVudCB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuLmFkZC1raWQgLmtpZHMtaW1nIHtcbiAgYm9yZGVyOiAxcHggZGFzaGVkICM4REM1M0Y7XG4gIGJhY2tncm91bmQ6ICNGQUZBRkE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucGx1cy1pY29uIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZy1sZWZ0OiAxcHg7XG4gIGJhY2tncm91bmQ6ICM4REM1M0Y7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5hZGQta2lkIHAge1xuICBjb2xvcjogIzhEQzUzRjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xufVxuXG4ua2lkcy1ibG9jayBwIHtcbiAgY29sb3I6ICNGNDk0MDE7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xufVxuXG4uZ3JleS1oZWFkaW5nIHtcbiAgbWFyZ2luOiAwIDAgMjBweCAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogIzlCOUI5QjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uYWN0aXZpdHktc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDI0cHggMCAwIDA7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmFjdGl2aXR5LWJsb2NrIHtcbiAgbWFyZ2luOiAwIDAgNXB4IDA7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwcHggMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjOUI5QjlCO1xuICBmb250LXNpemU6IDExcHg7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmFsaWduLWl0ZW1zLWNlbnRlciB7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4uZC1mbGV4IHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xufVxuXG4ucm93IHtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xuICBtYXJnaW4tbGVmdDogLTE1cHg7XG59XG5cbi5hY3Rpdml0eS1jb250YWluZXIge1xuICBwYWRkaW5nOiAxNXB4IDEwcHggMTVweCAxMHB4O1xufVxuXG4udGV4dC1jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLnRpbWUge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogI0Y0OTQwMTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmFjdGl2aXR5LW5hbWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNEE0QTRBO1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW46IDAgMCAxMHB4IDA7XG59XG5cbi5hY3Rpdml0eS1ibG9jayBwIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uYWN0aXZpdHktc2VjdGlvbiBoMyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmFjdGl2aXR5LXNjaG9vbCB7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA2cHggN3B4O1xuICBjb2xvcjogIzhEQzUzRjtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBtYXJnaW46IDEwcHggMCAwIDAgIWltcG9ydGFudDtcbn1cblxuLmVucm9sbGVkLWtpZCB7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA2cHggN3B4O1xuICBjb2xvcjogI0Y0OTQwMTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBtYXJnaW46IDEwcHggMCAwIDAgIWltcG9ydGFudDtcbn1cblxuLmhvdXJzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDJweDtcbiAgYmFja2dyb3VuZDogI2YyZmZlYztcbiAgcGFkZGluZzogNnB4IDNweDtcbn1cblxuLmZvb3Rlcl90YWIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZm9vdGVyX3RhYiBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmljb24tVXNlciB7XG4gIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ljb24vZm9vdGVyLVVzZXIuc3ZnKSBjZW50ZXIgY2VudGVyL2NvbnRhaW4gbm8tcmVwZWF0O1xufVxuXG4uZm9vdGVyLW1lc3NhZ2Uge1xuICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pY29uL2Zvb3Rlci1tZXNzYWdlLnN2ZykgY2VudGVyIGNlbnRlci9jb250YWluIG5vLXJlcGVhdDtcbn1cblxuLmNoaWxkLWZhY2Uge1xuICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pY29uL2NoaWxkLWZhY2UtZ3JlZW4uc3ZnKSBjZW50ZXIgY2VudGVyL2NvbnRhaW4gbm8tcmVwZWF0O1xufVxuXG4uZm9vdGJhbGwge1xuICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pY29uL2Zvb3RiYWxsLnN2ZykgY2VudGVyIGNlbnRlci9jb250YWluIG5vLXJlcGVhdDtcbn1cblxuLmZvb3Rlci1pY29uIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5mb290ZXJfdGFiIHNtYWxsIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgbWFyZ2luLXRvcDogMnB4O1xufVxuXG4uZm9vdGVyX3RhYiAuYWN0aXZlIHNtYWxsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAjOERDNTNGO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/my-child/my-child.page.ts":
/*!*******************************************!*\
  !*** ./src/app/my-child/my-child.page.ts ***!
  \*******************************************/
/*! exports provided: MyChildPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyChildPage", function() { return MyChildPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_data_share_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/data-share.service */ "./src/app/services/data-share.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_7__);








var MyChildPage = /** @class */ (function () {
    function MyChildPage(db, auth, router, dataShare) {
        this.db = db;
        this.auth = auth;
        this.router = router;
        this.dataShare = dataShare;
        this.momentjs = moment__WEBPACK_IMPORTED_MODULE_6__;
    }
    MyChildPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.enrolledActivities = [];
        // this.dataShare.refreshMyChilds();
        //subscribe to childrens collection
        firebase__WEBPACK_IMPORTED_MODULE_7__["database"]().ref('/childrens/').once('value', function (snapshot) {
            _this.childs = [];
            snapshot.forEach(function (snap) {
                if (snap.val().parentId == _this.auth.getUid()) {
                    _this.childs.push(snap.val());
                    console.log(_this.childs);
                }
            });
        });
    };
    MyChildPage.prototype.ngOnInit = function () {
    };
    MyChildPage.prototype.goToDetails = function () {
        this.router.navigate(['/details']);
    };
    MyChildPage.prototype.goToConversation = function () {
        this.router.navigate(['/conversation']);
    };
    MyChildPage.prototype.goToActivityDetails = function (activity) {
        // console.log(activity);
        this.router.navigate(['/activity-details/' + activity.id]);
    };
    MyChildPage.prototype.goToActivityList = function () {
        this.router.navigate(['/activity-list']);
    };
    MyChildPage.prototype.goToAddChild = function () {
        this.router.navigate(['/child-add/my-child']);
    };
    MyChildPage.prototype.childSelected = function (child) {
        //console.log('selected child: ', child);
        this.router.navigate(['/child-modify/' + child.id]);
    };
    MyChildPage.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_data_share_service__WEBPACK_IMPORTED_MODULE_1__["DataShareService"] }
    ]; };
    MyChildPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-my-child',
            template: __webpack_require__(/*! raw-loader!./my-child.page.html */ "./node_modules/raw-loader/index.js!./src/app/my-child/my-child.page.html"),
            styles: [__webpack_require__(/*! ./my-child.page.scss */ "./src/app/my-child/my-child.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_data_share_service__WEBPACK_IMPORTED_MODULE_1__["DataShareService"]])
    ], MyChildPage);
    return MyChildPage;
}());



/***/ })

}]);
//# sourceMappingURL=my-child-my-child-module-es5.js.map