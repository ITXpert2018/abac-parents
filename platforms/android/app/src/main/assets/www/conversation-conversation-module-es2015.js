(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["conversation-conversation-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/conversation/conversation.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/conversation/conversation.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>conversation</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content> -->\r\n<!--\r\n  Generated template for the ConversationPage page.\r\n\r\n  See http://ionicframework.com/docs/components/#navigation for more info on\r\n  Ionic pages and navigation.\r\n-->\r\n<ion-header>\r\n  <ion-toolbar mode=\"ios\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button mode=\"md\" defaultHref=\"/\" icon=\"assets/icon/icon-back-black.svg\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <div class=\"d_flx\">\r\n        <img src=\"parent.photoUrl\" height=\"40\" alt=\"\">&nbsp;\r\n        <p>{{parent.fullName}}</p>\r\n      </div>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"container\">\r\n    <ul class=\"conversation\">\r\n      <li *ngFor=\"let m of messages\">\r\n        <div *ngIf=\"m.senderUid == parent.uid\" class=\"sent\">\r\n          <div><span>{{m.text}}</span></div>\r\n        </div>\r\n        <p *ngIf=\"m.senderUid == parent.uid\" class=\" time\">{{m.timestamp | date:'dd/MM/yyyy HH:mm' }}</p>\r\n        <div *ngIf=\"m.senderUid != parent.uid\" class=\" replay text-left\">\r\n          <div><span>{{m.text}}</span></div>\r\n        </div>\r\n        <p *ngIf=\"m.senderUid != parent.uid\" class=\"time text-left\">{{m.timestamp | date:'dd/MM/yyyy HH:mm'}}</p>\r\n      </li>\r\n      <!-- <li>\r\n        <div class=\"sent\">\r\n          <div><span>How are you?</span></div>\r\n        </div>\r\n        <p class=\"time\">2:15 PM</p>\r\n      </li>\r\n      <li>\r\n        <div class=\"replay text-left\">\r\n          <div><span>I am Great!</span></div>\r\n          <div><span>I am Great!</span></div>\r\n        </div>\r\n        <p class=\"time text-left\">2:15 PM</p>\r\n      </li> -->\r\n\r\n    </ul>\r\n  </div>\r\n\r\n</ion-content>\r\n\r\n\r\n<ion-footer>\r\n  <ion-toolbar color=\"custom_header\">\r\n\r\n    <div class=\"containerFooter\">\r\n      <div class=\"inputContainer\">\r\n        <ion-input type=\"text\" placeholder=\"Type a message\" [(ngModel)]=\"inp_text\" autofocus=\"true\" padding-start>\r\n        </ion-input>\r\n      </div>\r\n      <div class=\"send-button-parent\">\r\n        <ion-button mode=\"ios\" (click)=\"sendMsg()\" class=\"sendBtn\" color=\"transparent\">\r\n          <ion-icon class=\"sendBtn-icon\" src=\"assets/icon/icon-send-green.svg\" color=\"light\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- <i slot=\"end\" class=\"send_icon\"></i> -->\r\n\r\n  </ion-toolbar>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/conversation/conversation.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/conversation/conversation.module.ts ***!
  \*****************************************************/
/*! exports provided: ConversationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversationPageModule", function() { return ConversationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _conversation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./conversation.page */ "./src/app/conversation/conversation.page.ts");







const routes = [
    {
        path: '',
        component: _conversation_page__WEBPACK_IMPORTED_MODULE_6__["ConversationPage"]
    }
];
let ConversationPageModule = class ConversationPageModule {
};
ConversationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_conversation_page__WEBPACK_IMPORTED_MODULE_6__["ConversationPage"]]
    })
], ConversationPageModule);



/***/ }),

/***/ "./src/app/conversation/conversation.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/conversation/conversation.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #f5f5f5;\n}\n\nion-back-button {\n  --icon-margin-top: 0px !important;\n}\n\n.toolbar-background {\n  background-color: #fff;\n}\n\n.d_flx {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.d_flx img {\n  width: 40px;\n  height: 40px;\n  background: #2b2b2b;\n  border-radius: 50%;\n}\n\n.d_flx p {\n  font-size: 15px;\n  font-weight: 600;\n  color: #000;\n}\n\n.scroll-content {\n  background: #f7f7f7;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: end;\n          align-items: flex-end;\n}\n\n.container {\n  width: 100%;\n  max-width: 100%;\n  padding: 0 15px;\n}\n\n.conversation {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n\n.conversation li {\n  margin: 0 0 10px 0;\n  padding: 0;\n  float: left;\n  width: 100%;\n  text-align: right;\n}\n\n.conversation li div span {\n  background: #fff;\n  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);\n  font-size: 14px;\n  color: #F49401;\n  padding: 16px;\n  width: auto;\n  display: inline-block;\n}\n\n.time {\n  margin: 0;\n  padding: 0;\n  font-size: 10px;\n  color: #6D6F71;\n}\n\n.conversation li:last-child {\n  margin-bottom: 0;\n}\n\n.conversation li {\n  margin: 15px 0 15px 0;\n  padding: 0;\n  float: left;\n  width: 100%;\n  text-align: right;\n}\n\n.text-left {\n  text-align: left !important;\n}\n\n.conversation li div {\n  width: 100%;\n  float: left;\n  margin-bottom: 8px;\n}\n\n.sent div:first-child span,\n.sent div:only-child span {\n  border-radius: 25px 25px 0 25px !important;\n}\n\n.replay div:first-child span,\n.replay div:only-child span {\n  border-radius: 25px 25px 25px 0 !important;\n}\n\n.replay div:last-child span {\n  border-radius: 0 25px 25px 25px !important;\n}\n\n.replay div span {\n  border-radius: 0 25px 25px 0 !important;\n  color: #8ECF70 !important;\n}\n\n.time {\n  margin: 0;\n  padding: 0;\n  font-size: 10px;\n  color: #6D6F71;\n}\n\n.send_icon {\n  width: 50px;\n  height: 50px;\n  background: #ffffff url(/assets/icon/icon-send-green.svg) center center/20px no-repeat;\n  border: none;\n}\n\n.flex_Footer {\n  display: -webkit-box;\n  display: flex;\n}\n\n.containerFooter {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.inputContainer {\n  width: 90%;\n}\n\n.sendBtn-icon {\n  font-size: 30px;\n}\n\n.send-button-parent {\n  padding: 0 6px 0 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udmVyc2F0aW9uL0Q6XFxXb3JrXFxNb2JpbGVcXGlvbmljXFxhYmFjX3BhcmVudHMvc3JjXFxhcHBcXGNvbnZlcnNhdGlvblxcY29udmVyc2F0aW9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY29udmVyc2F0aW9uL2NvbnZlcnNhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUNBQUE7QUNDRjs7QURHQTtFQUNFLHNCQUFBO0FDQUY7O0FER0E7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0FGOztBRElBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDREY7O0FET0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDSkY7O0FEUUE7RUFDRSxtQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHNCQUFBO1VBQUEscUJBQUE7QUNMRjs7QURVQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ1BGOztBRFdBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtBQ1JGOztBRFdBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ1JGOztBRFdBO0VBQ0UsZ0JBQUE7RUFDQSwyQ0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQ1JGOztBRFdBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ1JGOztBRFdBO0VBQ0UsZ0JBQUE7QUNSRjs7QURXQTtFQUNFLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNSRjs7QURXQTtFQUNFLDJCQUFBO0FDUkY7O0FEV0E7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDUkY7O0FEV0E7O0VBRUUsMENBQUE7QUNSRjs7QURXQTs7RUFFRSwwQ0FBQTtBQ1JGOztBRFdBO0VBQ0UsMENBQUE7QUNSRjs7QURXQTtFQUNFLHVDQUFBO0VBQ0EseUJBQUE7QUNSRjs7QURXQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNSRjs7QURXQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0ZBQUE7RUFDQSxZQUFBO0FDUkY7O0FEV0E7RUFDRSxvQkFBQTtFQUFBLGFBQUE7QUNSRjs7QURXQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNSRjs7QURXQTtFQUNFLFVBQUE7QUNSRjs7QURvQkE7RUFFRSxlQUFBO0FDbEJGOztBRHFCQTtFQUNFLG9CQUFBO0FDbEJGIiwiZmlsZSI6InNyYy9hcHAvY29udmVyc2F0aW9uL2NvbnZlcnNhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG59XHJcblxyXG5pb24tYmFjay1idXR0b24ge1xyXG4gIC0taWNvbi1tYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcclxuICAvLyAtLWljb24tZm9udC1zaXplOiBsYXJnZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udG9vbGJhci1iYWNrZ3JvdW5kIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uZF9mbHgge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAvLyBwYWRkaW5nLWJvdHRvbTogN3B4O1xyXG59XHJcblxyXG4uZF9mbHggaW1nIHtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYmFja2dyb3VuZDogIzJiMmIyYjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgLy8gbWFyZ2luLWJvdHRvbTogLTlweDtcclxuICAvLyBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcblxyXG59XHJcblxyXG4uZF9mbHggcCB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICMwMDA7XHJcblxyXG59XHJcblxyXG4uc2Nyb2xsLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbn1cclxuXHJcblxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDAgMTVweDtcclxuXHJcbn1cclxuXHJcbi5jb252ZXJzYXRpb24ge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG5cclxuLmNvbnZlcnNhdGlvbiBsaSB7XHJcbiAgbWFyZ2luOiAwIDAgMTBweCAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5jb252ZXJzYXRpb24gbGkgZGl2IHNwYW4ge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm94LXNoYWRvdzogMHB4IDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICNGNDk0MDE7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICB3aWR0aDogYXV0bztcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi50aW1lIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgY29sb3I6ICM2RDZGNzE7XHJcbn1cclxuXHJcbi5jb252ZXJzYXRpb24gbGk6bGFzdC1jaGlsZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLmNvbnZlcnNhdGlvbiBsaSB7XHJcbiAgbWFyZ2luOiAxNXB4IDAgMTVweCAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi50ZXh0LWxlZnQge1xyXG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNvbnZlcnNhdGlvbiBsaSBkaXYge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxufVxyXG5cclxuLnNlbnQgZGl2OmZpcnN0LWNoaWxkIHNwYW4sXHJcbi5zZW50IGRpdjpvbmx5LWNoaWxkIHNwYW4ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHggMjVweCAwIDI1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJlcGxheSBkaXY6Zmlyc3QtY2hpbGQgc3BhbixcclxuLnJlcGxheSBkaXY6b25seS1jaGlsZCBzcGFuIHtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4IDI1cHggMjVweCAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yZXBsYXkgZGl2Omxhc3QtY2hpbGQgc3BhbiB7XHJcbiAgYm9yZGVyLXJhZGl1czogMCAyNXB4IDI1cHggMjVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucmVwbGF5IGRpdiBzcGFuIHtcclxuICBib3JkZXItcmFkaXVzOiAwIDI1cHggMjVweCAwICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICM4RUNGNzAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRpbWUge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBjb2xvcjogIzZENkY3MTtcclxufVxyXG5cclxuLnNlbmRfaWNvbiB7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmYgdXJsKC9hc3NldHMvaWNvbi9pY29uLXNlbmQtZ3JlZW4uc3ZnKSBjZW50ZXIgY2VudGVyIC8gMjBweCBuby1yZXBlYXQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uZmxleF9Gb290ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5jb250YWluZXJGb290ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaW5wdXRDb250YWluZXIge1xyXG4gIHdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbi8vIC5pbnB1dE1lc3NhZ2Uge1xyXG4vLyAgIGJvcmRlcjogMXB4IHNvbGlkICNkOGQ4ZTA7XHJcbi8vICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuLy8gfVxyXG5cclxuLy8gLmlucHV0Qmcge1xyXG4vLyAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbi8vIH1cclxuXHJcbi5zZW5kQnRuLWljb24ge1xyXG4gIC8vIG1hcmdpbi10b3A6IC0xMnB4O1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuLnNlbmQtYnV0dG9uLXBhcmVudCB7XHJcbiAgcGFkZGluZzogMCA2cHggMCA4cHg7XHJcbn0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI2Y1ZjVmNTtcbn1cblxuaW9uLWJhY2stYnV0dG9uIHtcbiAgLS1pY29uLW1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xufVxuXG4udG9vbGJhci1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLmRfZmx4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5kX2ZseCBpbWcge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kOiAjMmIyYjJiO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5kX2ZseCBwIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzAwMDtcbn1cblxuLnNjcm9sbC1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCAxNXB4O1xufVxuXG4uY29udmVyc2F0aW9uIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbi5jb252ZXJzYXRpb24gbGkge1xuICBtYXJnaW46IDAgMCAxMHB4IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5jb252ZXJzYXRpb24gbGkgZGl2IHNwYW4ge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwcHggMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjRjQ5NDAxO1xuICBwYWRkaW5nOiAxNnB4O1xuICB3aWR0aDogYXV0bztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4udGltZSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogIzZENkY3MTtcbn1cblxuLmNvbnZlcnNhdGlvbiBsaTpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmNvbnZlcnNhdGlvbiBsaSB7XG4gIG1hcmdpbjogMTVweCAwIDE1cHggMDtcbiAgcGFkZGluZzogMDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnRleHQtbGVmdCB7XG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbn1cblxuLmNvbnZlcnNhdGlvbiBsaSBkaXYge1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLnNlbnQgZGl2OmZpcnN0LWNoaWxkIHNwYW4sXG4uc2VudCBkaXY6b25seS1jaGlsZCBzcGFuIHtcbiAgYm9yZGVyLXJhZGl1czogMjVweCAyNXB4IDAgMjVweCAhaW1wb3J0YW50O1xufVxuXG4ucmVwbGF5IGRpdjpmaXJzdC1jaGlsZCBzcGFuLFxuLnJlcGxheSBkaXY6b25seS1jaGlsZCBzcGFuIHtcbiAgYm9yZGVyLXJhZGl1czogMjVweCAyNXB4IDI1cHggMCAhaW1wb3J0YW50O1xufVxuXG4ucmVwbGF5IGRpdjpsYXN0LWNoaWxkIHNwYW4ge1xuICBib3JkZXItcmFkaXVzOiAwIDI1cHggMjVweCAyNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5yZXBsYXkgZGl2IHNwYW4ge1xuICBib3JkZXItcmFkaXVzOiAwIDI1cHggMjVweCAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjOEVDRjcwICFpbXBvcnRhbnQ7XG59XG5cbi50aW1lIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAjNkQ2RjcxO1xufVxuXG4uc2VuZF9pY29uIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiB1cmwoL2Fzc2V0cy9pY29uL2ljb24tc2VuZC1ncmVlbi5zdmcpIGNlbnRlciBjZW50ZXIvMjBweCBuby1yZXBlYXQ7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmZsZXhfRm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmNvbnRhaW5lckZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pbnB1dENvbnRhaW5lciB7XG4gIHdpZHRoOiA5MCU7XG59XG5cbi5zZW5kQnRuLWljb24ge1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbi5zZW5kLWJ1dHRvbi1wYXJlbnQge1xuICBwYWRkaW5nOiAwIDZweCAwIDhweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/conversation/conversation.page.ts":
/*!***************************************************!*\
  !*** ./src/app/conversation/conversation.page.ts ***!
  \***************************************************/
/*! exports provided: ConversationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversationPage", function() { return ConversationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");





let ConversationPage = class ConversationPage {
    constructor(router, auth, db) {
        this.router = router;
        this.auth = auth;
        this.db = db;
        this.parent = {};
        this.messages = [];
        this.inp_text = '';
    }
    ionViewWillEnter() {
        this.inp_text = '';
        this.db.collection('parents').doc(this.auth.getUid()).valueChanges().subscribe(data => {
            //console.log(data);
            this.parent = data;
        });
        //get all messages
        this.db.collection('parents').doc(this.auth.getUid()).collection('messages', q => q.orderBy('timestamp', 'asc')).snapshotChanges().subscribe(serverItems => {
            this.messages = [];
            serverItems.forEach(item => {
                console.log(item);
                let message = item.payload.doc.data();
                message.id = item.payload.doc.id;
                console.log(message);
                this.messages.push(message);
            });
        });
    }
    sendMsg() {
        console.log(this.inp_text);
        let newMessage = {};
        newMessage.text = this.inp_text;
        newMessage.timestamp = new Date().toISOString();
        newMessage.senderUid = this.parent.uid;
        this.db.collection('parents').doc(this.auth.getUid()).collection('messages').add(newMessage);
        this.inp_text = '';
    }
    ngOnInit() {
    }
    goToDetails() {
        this.router.navigate(['/details']);
    }
    goToMyChild() {
        this.router.navigate(['/my-child']);
    }
    goToActivityList() {
        this.router.navigate(['activity-list']);
    }
};
ConversationPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] }
];
ConversationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-conversation',
        template: __webpack_require__(/*! raw-loader!./conversation.page.html */ "./node_modules/raw-loader/index.js!./src/app/conversation/conversation.page.html"),
        styles: [__webpack_require__(/*! ./conversation.page.scss */ "./src/app/conversation/conversation.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]])
], ConversationPage);



/***/ })

}]);
//# sourceMappingURL=conversation-conversation-module-es2015.js.map