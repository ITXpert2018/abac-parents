(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["conversation-conversation-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/conversation/conversation.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/conversation/conversation.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar mode=\"ios\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button mode=\"md\" defaultHref=\"/\" icon=\"assets/icon/icon-back-black.svg\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <div class=\"d_flx\">\r\n        <img src=\"parent.photoUrl\" height=\"40\" alt=\"\">&nbsp;\r\n        <p>{{parent.fullName}}</p>\r\n      </div>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <div class=\"container\">\r\n    <ul class=\"conversation\">\r\n      <li *ngFor=\"let m of messages\">\r\n        <div *ngIf=\"m.byAdmin == false\" class=\"sent\">\r\n          <div><span>{{m.text}}</span></div>\r\n        </div>\r\n        <p *ngIf=\"m.byAdmin == false\" class=\" time\">{{m.timestamp | date:'dd/MM/yyyy HH:mm' }}</p>\r\n        <div *ngIf=\"m.byAdmin == true\" class=\" replay text-left\">\r\n          <div><span>{{m.text}}</span></div>\r\n        </div>\r\n        <p *ngIf=\"m.byAdmin == true\" class=\"time text-left\">{{m.timestamp | date:'dd/MM/yyyy HH:mm'}}</p>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n\r\n</ion-content>\r\n\r\n<ion-footer no-border>\r\n    <div>\r\n      <div class=\"inputContainer\">\r\n        <ion-input type=\"text\" placeholder=\"Type a message\" [(ngModel)]=\"inp_text\" autofocus=\"true\" padding-start>\r\n        </ion-input>\r\n      </div>\r\n      <div class=\"send-button-parent\">\r\n        <ion-button mode=\"ios\" (click)=\"sendMsg()\" class=\"sendBtn\" color=\"transparent\">\r\n          <ion-icon class=\"sendBtn-icon\" src=\"assets/icon/icon-send-green.svg\" color=\"light\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n    </div>\r\n  <ion-toolbar transparent>\r\n    <ion-grid>\r\n      <ion-row class=\"footer_tab\">\r\n        <ion-col class=\"\" (click)=\"goToMyChild()\">\r\n          <i class=\"footer-icon child-face\"></i>\r\n          <small> My Kids </small>\r\n        </ion-col>\r\n        <ion-col (click)=\"goToActivityList()\">\r\n          <i class=\"football footer-icon\"></i>\r\n          <small> Activity</small>\r\n        </ion-col>\r\n\r\n        <ion-col class=\"active\">\r\n          <i class=\"footer-message footer-icon\"></i>\r\n          <small> Chat</small>\r\n        </ion-col>\r\n\r\n        <ion-col (click)=\"goToDetails()\">\r\n          <i class=\"icon-User footer-icon\"></i>\r\n          <small> Profile </small>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n"

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

module.exports = "ion-content {\n  --background: #f5f5f5;\n}\n\nion-back-button {\n  --icon-margin-top: 0px !important;\n}\n\n.toolbar-background {\n  background-color: #fff;\n}\n\n.d_flx {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.d_flx img {\n  width: 40px;\n  height: 40px;\n  background: #2b2b2b;\n  border-radius: 50%;\n}\n\n.d_flx p {\n  font-size: 15px;\n  font-weight: 600;\n  color: #000;\n}\n\n.scroll-content {\n  background: #f7f7f7;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: end;\n          align-items: flex-end;\n}\n\n.container {\n  width: 100%;\n  max-width: 100%;\n  padding: 0 15px;\n}\n\n.conversation {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n\n.conversation li {\n  margin: 0 0 10px 0;\n  padding: 0;\n  float: left;\n  width: 100%;\n  text-align: right;\n}\n\n.conversation li div span {\n  background: #fff;\n  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);\n  font-size: 14px;\n  color: #F49401;\n  padding: 16px;\n  width: auto;\n  display: inline-block;\n}\n\n.time {\n  margin: 0;\n  padding: 0;\n  font-size: 10px;\n  color: #6D6F71;\n}\n\n.conversation li:last-child {\n  margin-bottom: 0;\n}\n\n.conversation li {\n  margin: 15px 0 15px 0;\n  padding: 0;\n  float: left;\n  width: 100%;\n  text-align: right;\n}\n\n.text-left {\n  text-align: left !important;\n}\n\n.conversation li div {\n  width: 100%;\n  float: left;\n  margin-bottom: 8px;\n}\n\n.sent div:first-child span,\n.sent div:only-child span {\n  border-radius: 25px 25px 0 25px !important;\n}\n\n.replay div:first-child span,\n.replay div:only-child span {\n  border-radius: 25px 25px 25px 0 !important;\n}\n\n.replay div:last-child span {\n  border-radius: 0 25px 25px 25px !important;\n}\n\n.replay div span {\n  border-radius: 0 25px 25px 0 !important;\n  color: #8ECF70 !important;\n}\n\n.time {\n  margin: 0;\n  padding: 0;\n  font-size: 10px;\n  color: #6D6F71;\n}\n\n.send_icon {\n  width: 50px;\n  height: 50px;\n  background: #ffffff url(/assets/icon/icon-send-green.svg) center center/20px no-repeat;\n  border: none;\n}\n\n.flex_Footer {\n  display: -webkit-box;\n  display: flex;\n}\n\n.containerFooter {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.inputContainer {\n  width: 85%;\n  display: inline-block;\n}\n\n.sendBtn-icon {\n  font-size: 30px;\n}\n\n.send-button-parent {\n  padding: 0 6px 0 8px;\n  display: inline-block;\n  width: 20px;\n}\n\n.footer_tab {\n  -webkit-box-pack: center;\n          justify-content: center;\n  text-align: center;\n}\n\n.footer_tab ion-icon {\n  font-size: 20px;\n}\n\n.child-face {\n  background: url(/assets/icon/child-face.svg) center center/contain no-repeat;\n}\n\n.football {\n  background: url(/assets/icon/football.svg) center center/contain no-repeat;\n}\n\n.footer-message {\n  background: url(/assets/icon/footer-message-green.svg) center center/contain no-repeat;\n}\n\n.icon-User {\n  background: url(/assets/icon/footer-User.svg) center center/contain no-repeat;\n}\n\n.footer-icon {\n  margin: 0;\n  padding: 0;\n  width: 18px;\n  height: 20px;\n  display: block;\n  margin: 0 auto;\n}\n\n.footer_tab small {\n  display: none;\n  margin-top: 2px;\n}\n\n.footer_tab .active small {\n  display: block;\n  color: #8DC53F;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udmVyc2F0aW9uL0Q6XFxXb3JrXFxNb2JpbGVcXGlvbmljXFxhYmFjX3BhcmVudHMvc3JjXFxhcHBcXGNvbnZlcnNhdGlvblxcY29udmVyc2F0aW9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY29udmVyc2F0aW9uL2NvbnZlcnNhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUNBQUE7QUNDRjs7QURHQTtFQUNFLHNCQUFBO0FDQUY7O0FER0E7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0FGOztBRElBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDREY7O0FET0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDSkY7O0FEUUE7RUFDRSxtQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHNCQUFBO1VBQUEscUJBQUE7QUNMRjs7QURVQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ1BGOztBRFdBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtBQ1JGOztBRFdBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ1JGOztBRFdBO0VBQ0UsZ0JBQUE7RUFDQSwyQ0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQ1JGOztBRFdBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ1JGOztBRFdBO0VBQ0UsZ0JBQUE7QUNSRjs7QURXQTtFQUNFLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNSRjs7QURXQTtFQUNFLDJCQUFBO0FDUkY7O0FEV0E7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDUkY7O0FEV0E7O0VBRUUsMENBQUE7QUNSRjs7QURXQTs7RUFFRSwwQ0FBQTtBQ1JGOztBRFdBO0VBQ0UsMENBQUE7QUNSRjs7QURXQTtFQUNFLHVDQUFBO0VBQ0EseUJBQUE7QUNSRjs7QURXQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNSRjs7QURXQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0ZBQUE7RUFDQSxZQUFBO0FDUkY7O0FEV0E7RUFDRSxvQkFBQTtFQUFBLGFBQUE7QUNSRjs7QURXQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNSRjs7QURXQTtFQUNFLFVBQUE7RUFDQSxxQkFBQTtBQ1JGOztBRG9CQTtFQUVFLGVBQUE7QUNsQkY7O0FEcUJBO0VBQ0Usb0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUNsQkY7O0FEcUJBO0VBQ0Usd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGtCQUFBO0FDbEJGOztBRHFCQTtFQUNFLGVBQUE7QUNsQkY7O0FEcUJBO0VBQ0UsNEVBQUE7QUNsQkY7O0FEcUJBO0VBQ0UsMEVBQUE7QUNsQkY7O0FEcUJBO0VBQ0Usc0ZBQUE7QUNsQkY7O0FEcUJBO0VBQ0UsNkVBQUE7QUNsQkY7O0FEcUJBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDbEJGOztBRHFCQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FDbEJGOztBRHFCQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0FDbEJGIiwiZmlsZSI6InNyYy9hcHAvY29udmVyc2F0aW9uL2NvbnZlcnNhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG59XHJcblxyXG5pb24tYmFjay1idXR0b24ge1xyXG4gIC0taWNvbi1tYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcclxuICAvLyAtLWljb24tZm9udC1zaXplOiBsYXJnZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udG9vbGJhci1iYWNrZ3JvdW5kIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uZF9mbHgge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAvLyBwYWRkaW5nLWJvdHRvbTogN3B4O1xyXG59XHJcblxyXG4uZF9mbHggaW1nIHtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYmFja2dyb3VuZDogIzJiMmIyYjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgLy8gbWFyZ2luLWJvdHRvbTogLTlweDtcclxuICAvLyBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcblxyXG59XHJcblxyXG4uZF9mbHggcCB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICMwMDA7XHJcblxyXG59XHJcblxyXG4uc2Nyb2xsLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbn1cclxuXHJcblxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDAgMTVweDtcclxuXHJcbn1cclxuXHJcbi5jb252ZXJzYXRpb24ge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG5cclxuLmNvbnZlcnNhdGlvbiBsaSB7XHJcbiAgbWFyZ2luOiAwIDAgMTBweCAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5jb252ZXJzYXRpb24gbGkgZGl2IHNwYW4ge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm94LXNoYWRvdzogMHB4IDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICNGNDk0MDE7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICB3aWR0aDogYXV0bztcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi50aW1lIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgY29sb3I6ICM2RDZGNzE7XHJcbn1cclxuXHJcbi5jb252ZXJzYXRpb24gbGk6bGFzdC1jaGlsZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLmNvbnZlcnNhdGlvbiBsaSB7XHJcbiAgbWFyZ2luOiAxNXB4IDAgMTVweCAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi50ZXh0LWxlZnQge1xyXG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNvbnZlcnNhdGlvbiBsaSBkaXYge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxufVxyXG5cclxuLnNlbnQgZGl2OmZpcnN0LWNoaWxkIHNwYW4sXHJcbi5zZW50IGRpdjpvbmx5LWNoaWxkIHNwYW4ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHggMjVweCAwIDI1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJlcGxheSBkaXY6Zmlyc3QtY2hpbGQgc3BhbixcclxuLnJlcGxheSBkaXY6b25seS1jaGlsZCBzcGFuIHtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4IDI1cHggMjVweCAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yZXBsYXkgZGl2Omxhc3QtY2hpbGQgc3BhbiB7XHJcbiAgYm9yZGVyLXJhZGl1czogMCAyNXB4IDI1cHggMjVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucmVwbGF5IGRpdiBzcGFuIHtcclxuICBib3JkZXItcmFkaXVzOiAwIDI1cHggMjVweCAwICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICM4RUNGNzAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRpbWUge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBjb2xvcjogIzZENkY3MTtcclxufVxyXG5cclxuLnNlbmRfaWNvbiB7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmYgdXJsKC9hc3NldHMvaWNvbi9pY29uLXNlbmQtZ3JlZW4uc3ZnKSBjZW50ZXIgY2VudGVyIC8gMjBweCBuby1yZXBlYXQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uZmxleF9Gb290ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5jb250YWluZXJGb290ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaW5wdXRDb250YWluZXIge1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4vLyAuaW5wdXRNZXNzYWdlIHtcclxuLy8gICBib3JkZXI6IDFweCBzb2xpZCAjZDhkOGUwO1xyXG4vLyAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbi8vIH1cclxuXHJcbi8vIC5pbnB1dEJnIHtcclxuLy8gICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4vLyB9XHJcblxyXG4uc2VuZEJ0bi1pY29uIHtcclxuICAvLyBtYXJnaW4tdG9wOiAtMTJweDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuXHJcbi5zZW5kLWJ1dHRvbi1wYXJlbnQge1xyXG4gIHBhZGRpbmc6IDAgNnB4IDAgOHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMjBweDtcclxufVxyXG5cclxuLmZvb3Rlcl90YWIge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmZvb3Rlcl90YWIgaW9uLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmNoaWxkLWZhY2Uge1xyXG4gIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ljb24vY2hpbGQtZmFjZS5zdmcpIGNlbnRlciBjZW50ZXIgLyBjb250YWluIG5vLXJlcGVhdDtcclxufVxyXG5cclxuLmZvb3RiYWxsIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pY29uL2Zvb3RiYWxsLnN2ZykgY2VudGVyIGNlbnRlciAvIGNvbnRhaW4gbm8tcmVwZWF0O1xyXG59XHJcblxyXG4uZm9vdGVyLW1lc3NhZ2Uge1xyXG4gIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ljb24vZm9vdGVyLW1lc3NhZ2UtZ3JlZW4uc3ZnKSBjZW50ZXIgY2VudGVyIC8gY29udGFpbiBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbi5pY29uLVVzZXIge1xyXG4gIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ljb24vZm9vdGVyLVVzZXIuc3ZnKSBjZW50ZXIgY2VudGVyIC8gY29udGFpbiBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbi5mb290ZXItaWNvbiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgd2lkdGg6IDE4cHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uZm9vdGVyX3RhYiBzbWFsbCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBtYXJnaW4tdG9wOiAycHg7XHJcbn1cclxuXHJcbi5mb290ZXJfdGFiIC5hY3RpdmUgc21hbGwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbG9yOiAjOERDNTNGO1xyXG5cclxufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZjVmNWY1O1xufVxuXG5pb24tYmFjay1idXR0b24ge1xuICAtLWljb24tbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi50b29sYmFyLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4uZF9mbHgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmRfZmx4IGltZyB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQ6ICMyYjJiMmI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmRfZmx4IHAge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4uc2Nyb2xsLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG5cbi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDE1cHg7XG59XG5cbi5jb252ZXJzYXRpb24ge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuLmNvbnZlcnNhdGlvbiBsaSB7XG4gIG1hcmdpbjogMCAwIDEwcHggMDtcbiAgcGFkZGluZzogMDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmNvbnZlcnNhdGlvbiBsaSBkaXYgc3BhbiB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDBweCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICNGNDk0MDE7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIHdpZHRoOiBhdXRvO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi50aW1lIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAjNkQ2RjcxO1xufVxuXG4uY29udmVyc2F0aW9uIGxpOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uY29udmVyc2F0aW9uIGxpIHtcbiAgbWFyZ2luOiAxNXB4IDAgMTVweCAwO1xuICBwYWRkaW5nOiAwO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4udGV4dC1sZWZ0IHtcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xufVxuXG4uY29udmVyc2F0aW9uIGxpIGRpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG4uc2VudCBkaXY6Zmlyc3QtY2hpbGQgc3Bhbixcbi5zZW50IGRpdjpvbmx5LWNoaWxkIHNwYW4ge1xuICBib3JkZXItcmFkaXVzOiAyNXB4IDI1cHggMCAyNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5yZXBsYXkgZGl2OmZpcnN0LWNoaWxkIHNwYW4sXG4ucmVwbGF5IGRpdjpvbmx5LWNoaWxkIHNwYW4ge1xuICBib3JkZXItcmFkaXVzOiAyNXB4IDI1cHggMjVweCAwICFpbXBvcnRhbnQ7XG59XG5cbi5yZXBsYXkgZGl2Omxhc3QtY2hpbGQgc3BhbiB7XG4gIGJvcmRlci1yYWRpdXM6IDAgMjVweCAyNXB4IDI1cHggIWltcG9ydGFudDtcbn1cblxuLnJlcGxheSBkaXYgc3BhbiB7XG4gIGJvcmRlci1yYWRpdXM6IDAgMjVweCAyNXB4IDAgIWltcG9ydGFudDtcbiAgY29sb3I6ICM4RUNGNzAgIWltcG9ydGFudDtcbn1cblxuLnRpbWUge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICM2RDZGNzE7XG59XG5cbi5zZW5kX2ljb24ge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmIHVybCgvYXNzZXRzL2ljb24vaWNvbi1zZW5kLWdyZWVuLnN2ZykgY2VudGVyIGNlbnRlci8yMHB4IG5vLXJlcGVhdDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uZmxleF9Gb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uY29udGFpbmVyRm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmlucHV0Q29udGFpbmVyIHtcbiAgd2lkdGg6IDg1JTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uc2VuZEJ0bi1pY29uIHtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4uc2VuZC1idXR0b24tcGFyZW50IHtcbiAgcGFkZGluZzogMCA2cHggMCA4cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDIwcHg7XG59XG5cbi5mb290ZXJfdGFiIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZvb3Rlcl90YWIgaW9uLWljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5jaGlsZC1mYWNlIHtcbiAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaWNvbi9jaGlsZC1mYWNlLnN2ZykgY2VudGVyIGNlbnRlci9jb250YWluIG5vLXJlcGVhdDtcbn1cblxuLmZvb3RiYWxsIHtcbiAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaWNvbi9mb290YmFsbC5zdmcpIGNlbnRlciBjZW50ZXIvY29udGFpbiBuby1yZXBlYXQ7XG59XG5cbi5mb290ZXItbWVzc2FnZSB7XG4gIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ljb24vZm9vdGVyLW1lc3NhZ2UtZ3JlZW4uc3ZnKSBjZW50ZXIgY2VudGVyL2NvbnRhaW4gbm8tcmVwZWF0O1xufVxuXG4uaWNvbi1Vc2VyIHtcbiAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaWNvbi9mb290ZXItVXNlci5zdmcpIGNlbnRlciBjZW50ZXIvY29udGFpbiBuby1yZXBlYXQ7XG59XG5cbi5mb290ZXItaWNvbiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMjBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uZm9vdGVyX3RhYiBzbWFsbCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIG1hcmdpbi10b3A6IDJweDtcbn1cblxuLmZvb3Rlcl90YWIgLmFjdGl2ZSBzbWFsbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogIzhEQzUzRjtcbn0iXX0= */"

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
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_6__);







let ConversationPage = class ConversationPage {
    constructor(router, activatedRoute, auth, afDatabase, db) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.auth = auth;
        this.afDatabase = afDatabase;
        this.db = db;
        this.parent = {};
        this.messages = [];
        this.inp_text = '';
    }
    ionViewWillEnter() {
        this.inp_text = '';
        firebase__WEBPACK_IMPORTED_MODULE_6__["database"]().ref('/parents/').once('value', (snapshot) => {
            snapshot.forEach(snap => {
                if (snap.val().parentId == this.auth.getUid())
                    this.parent = snap.val();
            });
        });
        // //get all messages
        // this.db.collection('parents').doc(this.auth.getUid())
        // .collection('messages', q => q.orderBy('timestamp', 'asc'))
        // .snapshotChanges().subscribe(
        //   serverItems => {
        //     this.messages = [];
        //     serverItems.forEach(item => {
        //       console.log(item);
        //       let message: Message = item.payload.doc.data();
        //       message.id = item.payload.doc.id;
        //       console.log(message);
        //       this.messages.push(message);
        //     });
        //   });
        // var newMessage = this.activatedRoute.snapshot.params['data'].message;
        // this.messages.push(newMessage);
    }
    sendMsg() {
        console.log(this.inp_text);
        let newMessage = {};
        newMessage.text = this.inp_text;
        newMessage.timestamp = new Date().toISOString();
        newMessage.senderUid = this.parent.uid;
        // this.db.collection('parents').doc(this.auth.getUid())
        // .collection('messages').add(newMessage);
        // this.inp_text = '';
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
        this.router.navigate(['/activity-list']);
    }
};
ConversationPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] }
];
ConversationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-conversation',
        template: __webpack_require__(/*! raw-loader!./conversation.page.html */ "./node_modules/raw-loader/index.js!./src/app/conversation/conversation.page.html"),
        styles: [__webpack_require__(/*! ./conversation.page.scss */ "./src/app/conversation/conversation.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
        _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]])
], ConversationPage);



/***/ })

}]);
//# sourceMappingURL=conversation-conversation-module-es2015.js.map