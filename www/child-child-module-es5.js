(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["child-child-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/child/child.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/child/child.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar mode=\"ios\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button mode=\"md\" defaultHref=\"/\" icon=\"assets/icon/icon-back.svg\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <img src=\"assets/imgs/logo.png\" id=\"header_logo\" height=\"40\" alt=\"\">\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content class=\"ion-padding\">\r\n\r\n  <ion-grid *ngFor=\"let child of childs\" class=\"child-profile\">\r\n    <ion-row>\r\n      <ion-col col-3>\r\n        <ion-avatar slot=\"start\">\r\n        <img [src]=\"child.photoUrl\" alt=\"\" title=\"\" />\r\n         </ion-avatar> \r\n      </ion-col>\r\n      <ion-col col-9 class=\"child_name\">\r\n        <h3>{{child.fullName}}</h3>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n\r\n  <ion-grid class=\"add-child\" (click)=\"goToChildAdd()\">\r\n    <ion-row>\r\n      <ion-col>\r\n        <span class=\"plus-icon\">+</span>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <label class=\"text\">Add Child</label>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n\r\n<ion-footer no-border>\r\n  <ion-button *ngIf=\"hasChilds\" expand=\"full\" class=\"button-green\"\r\n    color=\"button_color\" (click)=\"detailsPage()\">FINISH\r\n  </ion-button>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/child/child.module.ts":
/*!***************************************!*\
  !*** ./src/app/child/child.module.ts ***!
  \***************************************/
/*! exports provided: ChildPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildPageModule", function() { return ChildPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _child_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./child.page */ "./src/app/child/child.page.ts");







var routes = [
    {
        path: '',
        component: _child_page__WEBPACK_IMPORTED_MODULE_6__["ChildPage"]
    }
];
var ChildPageModule = /** @class */ (function () {
    function ChildPageModule() {
    }
    ChildPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_child_page__WEBPACK_IMPORTED_MODULE_6__["ChildPage"]]
        })
    ], ChildPageModule);
    return ChildPageModule;
}());



/***/ }),

/***/ "./src/app/child/child.page.scss":
/*!***************************************!*\
  !*** ./src/app/child/child.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*********  header ************/\nion-title {\n  padding-top: 10px;\n}\nion-title .md .title-md .hydrated {\n  text-align: center !important;\n}\nion-content {\n  --overflow: hidden;\n}\nion-item {\n  --padding-start: 0px !important;\n}\nion-input {\n  --placeholder-color: #999;\n}\n/******** ion content *********/\n.form-group {\n  float: left;\n  width: 100%;\n}\n.mt-5,\n.my-5 {\n  margin-top: 3rem !important;\n}\n.form-group {\n  margin-bottom: 1rem;\n}\n.add-child {\n  background: #FAFAFA;\n  border: 2px dashed #8DC53F;\n  display: inline-block;\n  width: 100%;\n  min-height: 88px;\n  padding: 15px;\n  border-radius: 10px;\n  text-align: center;\n  margin-top: 20px;\n}\n.plus-icon {\n  width: 20px;\n  height: 20px;\n  line-height: 22px;\n  background: #8DC53F;\n  color: #ffffff;\n  text-align: center;\n  display: block;\n  border-radius: 100%;\n  margin: 5px auto;\n}\n.add-child label {\n  width: 100%;\n  color: #8DC53F;\n  font-size: 16px;\n  margin-top: 5px;\n  margin-bottom: 0;\n  font-weight: 600;\n  font-family: \"Montserrat\", sans-serif;\n}\n.child-profile {\n  margin-top: 20px;\n  border-radius: 5px;\n  background: #fff;\n  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);\n  display: -webkit-box;\n  display: flex;\n}\n.child-profile img {\n  top: 0;\n  left: 15px;\n  bottom: 0;\n  margin: auto;\n  vertical-align: middle;\n  border-style: none;\n}\n.child-profile h3 {\n  font-size: 15px;\n  color: #8DC53F;\n  margin: 0;\n  display: -webkit-box;\n  display: flex;\n}\n.child_name {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hpbGQvRDpcXFdvcmtcXE1vYmlsZVxcaW9uaWNcXGFiYWNfcGFyZW50cy9zcmNcXGFwcFxcY2hpbGRcXGNoaWxkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY2hpbGQvY2hpbGQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtCQUFBO0FBQ0E7RUFDRSxpQkFBQTtBQ0NGO0FEQ0U7RUFDRSw2QkFBQTtBQ0NKO0FER0E7RUFDRSxrQkFBQTtBQ0FGO0FER0E7RUFDRSwrQkFBQTtBQ0FGO0FER0E7RUFDRSx5QkFBQTtBQ0FGO0FER0EsK0JBQUE7QUFDQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FDQUY7QURHQTs7RUFFRSwyQkFBQTtBQ0FGO0FER0E7RUFDRSxtQkFBQTtBQ0FGO0FER0E7RUFDRSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQUY7QURHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDQUY7QURHQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUNBQUE7QUNBRjtBREdBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkNBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7QUNBRjtBRElBO0VBRUUsTUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNGRjtBREtBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0FDRkY7QURPQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNKRiIsImZpbGUiOiJzcmMvYXBwL2NoaWxkL2NoaWxkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKiogIGhlYWRlciAqKioqKioqKioqKiovXHJcbmlvbi10aXRsZSB7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcblxyXG4gIC5tZCAudGl0bGUtbWQgLmh5ZHJhdGVkIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIC0tb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gIC0tcGFkZGluZy1zdGFydDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1pbnB1dCB7XHJcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzk5OTtcclxufVxyXG5cclxuLyoqKioqKioqIGlvbiBjb250ZW50ICoqKioqKioqKi9cclxuLmZvcm0tZ3JvdXAge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubXQtNSxcclxuLm15LTUge1xyXG4gIG1hcmdpbi10b3A6IDNyZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAge1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5hZGQtY2hpbGQge1xyXG4gIGJhY2tncm91bmQ6ICNGQUZBRkE7XHJcbiAgYm9yZGVyOiAycHggZGFzaGVkICM4REM1M0Y7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDg4cHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4ucGx1cy1pY29uIHtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgYmFja2dyb3VuZDogIzhEQzUzRjtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICBtYXJnaW46IDVweCBhdXRvO1xyXG59XHJcblxyXG4uYWRkLWNoaWxkIGxhYmVsIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBjb2xvcjogIzhEQzUzRjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uY2hpbGQtcHJvZmlsZSB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3gtc2hhZG93OiAwcHggMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG59XHJcblxyXG4uY2hpbGQtcHJvZmlsZSBpbWcge1xyXG5cclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMTVweDtcclxuICBib3R0b206IDA7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4uY2hpbGQtcHJvZmlsZSBoMyB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGNvbG9yOiAjOERDNTNGO1xyXG4gIG1hcmdpbjogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuXHJcbn1cclxuXHJcbi5jaGlsZF9uYW1lIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn0iLCIvKioqKioqKioqICBoZWFkZXIgKioqKioqKioqKioqL1xuaW9uLXRpdGxlIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5pb24tdGl0bGUgLm1kIC50aXRsZS1tZCAuaHlkcmF0ZWQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLW92ZXJmbG93OiBoaWRkZW47XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHggIWltcG9ydGFudDtcbn1cblxuaW9uLWlucHV0IHtcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzk5OTtcbn1cblxuLyoqKioqKioqIGlvbiBjb250ZW50ICoqKioqKioqKi9cbi5mb3JtLWdyb3VwIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubXQtNSxcbi5teS01IHtcbiAgbWFyZ2luLXRvcDogM3JlbSAhaW1wb3J0YW50O1xufVxuXG4uZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5hZGQtY2hpbGQge1xuICBiYWNrZ3JvdW5kOiAjRkFGQUZBO1xuICBib3JkZXI6IDJweCBkYXNoZWQgIzhEQzUzRjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogODhweDtcbiAgcGFkZGluZzogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4ucGx1cy1pY29uIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGJhY2tncm91bmQ6ICM4REM1M0Y7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBtYXJnaW46IDVweCBhdXRvO1xufVxuXG4uYWRkLWNoaWxkIGxhYmVsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjOERDNTNGO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xufVxuXG4uY2hpbGQtcHJvZmlsZSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmNoaWxkLXByb2ZpbGUgaW1nIHtcbiAgdG9wOiAwO1xuICBsZWZ0OiAxNXB4O1xuICBib3R0b206IDA7XG4gIG1hcmdpbjogYXV0bztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xufVxuXG4uY2hpbGQtcHJvZmlsZSBoMyB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICM4REM1M0Y7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmNoaWxkX25hbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/child/child.page.ts":
/*!*************************************!*\
  !*** ./src/app/child/child.page.ts ***!
  \*************************************/
/*! exports provided: ChildPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildPage", function() { return ChildPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_6__);







var ChildPage = /** @class */ (function () {
    function ChildPage(db, auth, router, storage) {
        this.db = db;
        this.auth = auth;
        this.router = router;
        this.storage = storage;
        this.hasChilds = false;
    }
    ChildPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_6__["database"]().ref('/childrens/').once('value', function (snapshot) {
            _this.childs = [];
            snapshot.forEach(function (snap) {
                if (snap.val().parentId == _this.auth.getUid()) {
                    _this.hasChilds = true;
                    _this.childs.push(snap.val());
                }
            });
        });
        console.log('view will enter child Page');
    };
    ChildPage.prototype.goToChildAdd = function () {
        this.router.navigate(['/child-add/child']);
    };
    ChildPage.prototype.detailsPage = function () {
        //remove new user from storage
        this.storage.remove('newUser');
        this.router.navigate(['/details']);
    };
    ChildPage.prototype.ngOnInit = function () {
    };
    ChildPage.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] },
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] }
    ]; };
    ChildPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-child',
            template: __webpack_require__(/*! raw-loader!./child.page.html */ "./node_modules/raw-loader/index.js!./src/app/child/child.page.html"),
            styles: [__webpack_require__(/*! ./child.page.scss */ "./src/app/child/child.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]])
    ], ChildPage);
    return ChildPage;
}());



/***/ })

}]);
//# sourceMappingURL=child-child-module-es5.js.map