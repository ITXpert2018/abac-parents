(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["child-add-child-add-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/child-add/child-add.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/child-add/child-add.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>child-add</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content> -->\r\n<ion-header>\r\n  <ion-toolbar mode=\"ios\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button mode=\"md\" defaultHref=\"/\" icon=\"assets/icon/icon-back.svg\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Add Child\r\n      <!-- <img src=\"assets/imgs/logo.png\" id=\"header_logo\" height=\"40\" alt=\"\"> -->\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <div class=\"upload-plus\" [style.backgroundImage]=\"'url('+child.photoUrl+')'\">\r\n          <i class=\"camera-icon\" (click)=\"uploadPhoto()\"></i>\r\n\r\n\r\n        </div>\r\n        <p class=\"upload-label\">Upload Photo</p>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n\r\n\r\n\r\n    <ion-row>\r\n      <ion-col col-12>\r\n        <ion-item lines=\"none\" class=\"form-control-label\">\r\n          <ion-label>Your <span>Child's Name</span>?</ion-label>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"input_box\">\r\n          <ion-label>\r\n            <ion-icon src=\"/assets/icon/footer-User.svg\"></ion-icon>\r\n          </ion-label>\r\n          <ion-input type=\"text\" [(ngModel)]=\"child.fullName\"></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-item lines=\"none\" class=\"form-control-label tiny-margin-top\">\r\n          <ion-label>Your <span>Child's Gender</span>?</ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-list style='margin-bottom: 0px;'>\r\n          <ion-item lines=\"none\" class=\"input_box\">\r\n            <ion-select [(ngModel)]=\"child.gender\" name=\"selectGender\" multiple=\"false\" placeholder=\"Select gender...\"\r\n              [selectedText]=\"child.gender\">\r\n              <ion-select-option value=\"Female\">Female\r\n              </ion-select-option>\r\n              <ion-select-option value=\"Male\">Male\r\n              </ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-item lines=\"none\" class=\"form-control-label tiny-margin-label\">\r\n          <ion-label>Food <span>Intolerence</span>?</ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col size=\"4\">\r\n        <ion-item text-center button=\"true\" detail=\"false\" lines=\"none\" (click)=\"lactoseSwitch()\" class=\"input_btn\"\r\n          [color]=\"child.lactoseIntolerant == true ? 'button_color' : '#fff'\">\r\n          <!-- <ion-button expand=\"full\" fill=\"clear\" (click)=\"lactoseSwitch()\" [color]=\"\"> Lactose </ion-button> -->\r\n          <ion-label>Lactose</ion-label>\r\n          <!-- <ion-input placeholder=\"Lactose\" type=\"text\" value=\"\"></ion-input> -->\r\n        </ion-item>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"4\">\r\n        <ion-item text-center button=\"true\" detail=\"false\" lines=\"none\" (click)=\"glutenSwitch()\" class=\"input_btn\"\r\n          [color]=\"child.glutenIntolerant == true ? 'button_color' : '#fff'\">\r\n          <!-- <ion-button expand=\"full\" fill=\"clear\" (click)=\"glutenSwitch()\"> Gluten </ion-button> -->\r\n\r\n          <!-- <ion-input placeholder=\"Gluten\"  type=\"text\" value=\"\"></ion-input> -->\r\n          <ion-label>Gluten</ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"4\">\r\n        <ion-item text-center button=\"true\" detail=\"false\" lines=\"none\" (click)=\"aminesSwitch()\" class=\"input_btn\"\r\n          [color]=\"child.aminesIntolerant == true ? 'button_color' : '#fff'\">\r\n          <!-- <ion-button expand=\"full\" fill=\"clear\" (click)=\"aminesSwitch()\" [color]=\"\"> Amines </ion-button> -->\r\n          <ion-label>Amines</ion-label>\r\n          <!-- <ion-input placeholder=\"Amines\"  type=\"text\" value=\"\"></ion-input> -->\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-item lines=\"none\" class=\"input_box\">\r\n          <ion-input type=\"text\" [(ngModel)]=\"child.otherFoodIntolerance\" placeholder=\"Other Please Specify\">\r\n          </ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-item lines=\"none\" class=\"form-control-label tiny-margin-top\">\r\n          <ion-label>School <span>Year</span>?</ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-item lines=\"none\" class=\"input_box\">\r\n          <ion-input type=\"text\" [(ngModel)]=\"child.schoolYear\" placeholder=\"Ex. Second grade\">\r\n          </ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-item lines=\"none\" class=\"form-control-label tiny-margin-top\">\r\n          <ion-label>Name of the <span>school</span>?</ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-item lines=\"none\" class=\"input_box\">\r\n          <ion-select [(ngModel)]=\"child.schoolId\" name=\"selectSchool\" multiple=\"false\" placeholder=\"Select a school...\"\r\n            [selectedText]=\"child.schoolName\" (ionChange)=\"schoolSelected($event)\">\r\n            <ion-select-option *ngFor=\"let school of schools\" [value]=\"school.id\">{{school.name}}\r\n            </ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-item lines=\"none\" class=\"form-control-label tiny-margin-top\">\r\n          <ion-label>Other <span>contact person</span>?</ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-item lines=\"none\" class=\"input_box\">\r\n          <ion-label>\r\n            <ion-icon src=\"assets/icon/icon-name.svg\"></ion-icon>\r\n          </ion-label>\r\n          <ion-input type=\"text\" [(ngModel)]=\"child.otherFamilyContact.fullName\" placeholder=\"Full Name\">\r\n          </ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-item lines=\"none\" class=\"input_box\">\r\n          <ion-label>\r\n            <ion-icon src=\"assets/icon/icon-phone.svg\"></ion-icon>\r\n          </ion-label>\r\n          <ion-input type=\"text\" [(ngModel)]=\"child.otherFamilyContact.phone\" placeholder=\"+000 0000 000\">\r\n          </ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-item lines=\"none\" class=\"input_box\">\r\n          <ion-label>\r\n            <ion-icon src=\"assets/icon/icon-email.svg\"></ion-icon>\r\n          </ion-label>\r\n          <ion-input type=\"text\" [(ngModel)]=\"child.otherFamilyContact.email\" placeholder=\"johnsmith@xyz.com\">\r\n          </ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"check_box\">\r\n      <ion-col size-xs=\"2\">\r\n        <ion-checkbox mode=\"md\" [(ngModel)]=\"acceptedAgreement\">\r\n        </ion-checkbox>\r\n      </ion-col>\r\n      <ion-col size-xs=\"10\">\r\n        <ion-label>I have read & accept All <span>Terms and Conditions</span> for\r\n          the\r\n          <span style=\"color: rgb(235, 129, 40)!important;\">ABAC</span></ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"check_box\">\r\n      <ion-col size-xs=\"2\">\r\n        <ion-checkbox mode=\"md\" [(ngModel)]=\"child.allowedToMakePhotos\">\r\n        </ion-checkbox>\r\n      </ion-col>\r\n      <ion-col size-xs=\"10\">\r\n        <ion-label>I accept possibility to make <span>photos to my kid.</span></ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"check_box\">\r\n      <ion-col size-xs=\"2\">\r\n        <ion-checkbox mode=\"md\" [(ngModel)]=\"child.allowedToSendNotification\">\r\n        </ion-checkbox>\r\n      </ion-col>\r\n      <ion-col size-xs=\"10\">\r\n        <ion-label>I accept possibility to <span>send me notifications</span></ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"check_box\">\r\n      <ion-col size-xs=\"2\">\r\n        <ion-checkbox mode=\"md\" [(ngModel)]=\"child.allowedKidGoHomeAlone\">\r\n        </ion-checkbox>\r\n      </ion-col>\r\n      <ion-col size-xs=\"10\">\r\n        <ion-label>I accept <span>my kid go alone home</span> after the activities</ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n\r\n<ion-footer no-border>\r\n  <ion-button expand=\"full\" class=\"button-green\" color=\"button_color\" (click)=\"childAdd()\">\r\n    ADD\r\n  </ion-button>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/child-add/child-add.module.ts":
/*!***********************************************!*\
  !*** ./src/app/child-add/child-add.module.ts ***!
  \***********************************************/
/*! exports provided: ChildAddPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildAddPageModule", function() { return ChildAddPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _child_add_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./child-add.page */ "./src/app/child-add/child-add.page.ts");







var routes = [
    {
        path: '',
        component: _child_add_page__WEBPACK_IMPORTED_MODULE_6__["ChildAddPage"]
    }
];
var ChildAddPageModule = /** @class */ (function () {
    function ChildAddPageModule() {
    }
    ChildAddPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_child_add_page__WEBPACK_IMPORTED_MODULE_6__["ChildAddPage"]]
        })
    ], ChildAddPageModule);
    return ChildAddPageModule;
}());



/***/ }),

/***/ "./src/app/child-add/child-add.page.scss":
/*!***********************************************!*\
  !*** ./src/app/child-add/child-add.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*********  header ************/\nion-title {\n  --color: rgb(235, 129, 40);\n}\nion-title .md .title-md .hydrated {\n  text-align: center !important;\n}\nion-back-button {\n  --icon-margin-top: 0px !important;\n}\nion-item {\n  --padding-start: 0px !important;\n}\nion-input {\n  --placeholder-color: #999;\n}\n.upload-plus {\n  width: 155px;\n  height: 155px;\n  background: #fafafa;\n  border: 0.5px solid #e7e7e7;\n  display: block;\n  margin: 0 auto;\n  border-radius: 50%;\n  position: relative;\n}\n.camera-icon {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  background: url(\"/assets/icon/icon-camera.svg\") center center/40px no-repeat;\n}\n.upload-label {\n  font-size: 14px;\n  font-weight: 600;\n  color: #4A4A4A;\n  text-align: center;\n  margin-top: 30px;\n}\nion-radio {\n  --color-checked: #8DC53F !important;\n}\nion-select {\n  max-width: 95% !important;\n  min-width: 95% !important;\n}\n/*############ input style  ##########*/\n.item-md.item-block .item-inner {\n  border: 0;\n}\nion-input {\n  --padding-start: 20px !important;\n}\n.input_btn {\n  border-radius: 5px;\n  background: #fafafa !important;\n  border: 0.5px solid #e7e7e7;\n  --padding-start: 8px !important;\n}\n.form-control-label {\n  padding-left: 0;\n  margin-top: 20px;\n}\n.check_box {\n  margin-top: 40px;\n  text-align: center;\n}\n.check_box ion-checkbox {\n  margin-left: 20px !important;\n  --background-checked: #8DC53F !important;\n  --border-color-checked: #8DC53F !important;\n}\n.check_box ion-label {\n  font-size: 14px;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 500;\n}\n.check_box span {\n  color: #8DC53F;\n  font-size: 16px;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hpbGQtYWRkL0Q6XFxXb3JrXFxNb2JpbGVcXGlvbmljXFxhYmFjX3BhcmVudHMvc3JjXFxhcHBcXGNoaWxkLWFkZFxcY2hpbGQtYWRkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY2hpbGQtYWRkL2NoaWxkLWFkZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0JBQUE7QUFDQTtFQU9FLDBCQUFBO0FDTEY7QURDRTtFQUNFLDZCQUFBO0FDQ0o7QURLQTtFQUNFLGlDQUFBO0FDRkY7QURVQTtFQUNFLCtCQUFBO0FDUEY7QURVQTtFQUNFLHlCQUFBO0FDUEY7QURjQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ1hGO0FEY0E7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLDRFQUFBO0FDWkY7QURlQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDWkY7QURlQTtFQUNFLG1DQUFBO0FDWkY7QURlQTtFQUVFLHlCQUFBO0VBQ0EseUJBQUE7QUNiRjtBRHVCQSx1Q0FBQTtBQUNBO0VBQ0UsU0FBQTtBQ3BCRjtBRHVCQTtFQUNFLGdDQUFBO0FDcEJGO0FEd0JBO0VBSUUsa0JBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0EsK0JBQUE7QUN4QkY7QURpREE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUM5Q0Y7QURnRUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FDN0RGO0FEZ0VBO0VBQ0UsNEJBQUE7RUFDQSx3Q0FBQTtFQUNBLDBDQUFBO0FDN0RGO0FEZ0VBO0VBQ0UsZUFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7QUM3REY7QURpRUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7QUM5REYiLCJmaWxlIjoic3JjL2FwcC9jaGlsZC1hZGQvY2hpbGQtYWRkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKiogIGhlYWRlciAqKioqKioqKioqKiovXHJcbmlvbi10aXRsZSB7XHJcbiAgLy9wYWRkaW5nLXRvcDogMTBweDtcclxuXHJcbiAgLm1kIC50aXRsZS1tZCAuaHlkcmF0ZWQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAtLWNvbG9yOiByZ2IoMjM1LCAxMjksIDQwKTtcclxufVxyXG5cclxuaW9uLWJhY2stYnV0dG9uIHtcclxuICAtLWljb24tbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgLy8gLS1pY29uLWZvbnQtc2l6ZTogbGFyZ2UgIWltcG9ydGFudDtcclxufVxyXG5cclxuLy8gaW9uLWNvbnRlbnQge1xyXG4vLyAgIC8vLS1vdmVyZmxvdzogaGlkZGVuO1xyXG4vLyB9XHJcblxyXG5pb24taXRlbSB7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWlucHV0IHtcclxuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjOTk5O1xyXG59XHJcblxyXG5cclxuXHJcbi8vKioqKioqKioqKiBib2R5ICoqKioqKioqKioqLy9cclxuXHJcbi51cGxvYWQtcGx1cyB7XHJcbiAgd2lkdGg6IDE1NXB4O1xyXG4gIGhlaWdodDogMTU1cHg7XHJcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcclxuICBib3JkZXI6IDAuNXB4IHNvbGlkICNlN2U3ZTc7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmNhbWVyYS1pY29uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICAvL2JhY2tncm91bmQ6IHVybCguLi9hc3NldHMvaW1ncy9pY29uLWNhbWVyYS5qcGcpIGNlbnRlciBjZW50ZXIgLyA0MHB4IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ljb24vaWNvbi1jYW1lcmEuc3ZnXCIpIGNlbnRlciBjZW50ZXIgLyA0MHB4IG5vLXJlcGVhdDtcclxufVxyXG5cclxuLnVwbG9hZC1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICM0QTRBNEE7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbmlvbi1yYWRpbyB7XHJcbiAgLS1jb2xvci1jaGVja2VkOiAjOERDNTNGICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1zZWxlY3Qge1xyXG4gIC8vIC0tcGFkZGluZy1lbmQ6IDAgIWltcG9ydGFudDtcclxuICBtYXgtd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xyXG4gIG1pbi13aWR0aDogOTUlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vKiMjIyMjIyMjIyMjIyBpbnB1dCBzdHlsZSAgIyMjIyMjIyMjIyovXHJcbi5pdGVtLW1kLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xyXG4gIGJvcmRlcjogMDtcclxufVxyXG5cclxuaW9uLWlucHV0IHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5pbnB1dF9idG4ge1xyXG4gIC8vIG1hcmdpbjogYXV0bztcclxuICAvL3BhZGRpbmctbGVmdDogMThweDtcclxuICAvLyBoZWlnaHQ6IDUwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQ6ICNmYWZhZmEgIWltcG9ydGFudDtcclxuICBib3JkZXI6IDAuNXB4IHNvbGlkICNlN2U3ZTc7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiA4cHggIWltcG9ydGFudDtcclxuXHJcbn1cclxuXHJcbi8vIC5pbnB1dF9idG4gLmJ1dHRvbi1pbm5lciB7XHJcbi8vICAgY29sb3I6IHJnYig3NywgNzcsIDc3KTtcclxuXHJcbi8vIH1cclxuXHJcbi8vIC5pbnB1dF9ib3ggLml0ZW0taW5uZXIge1xyXG4vLyAgIHBhZGRpbmc6IDA7XHJcbi8vICAgYm9yZGVyOiAwcHg7XHJcbi8vIH1cclxuXHJcbi8vIGlvbi1mb290ZXIgLmJ1dHRvbiBzcGFuLmJ1dHRvbi1pbm5lciB7XHJcbi8vICAgZm9udC1zaXplOiAxNnB4O1xyXG4vLyAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbi8vICAgY29sb3I6ICNmZmY7XHJcbi8vIH1cclxuXHJcblxyXG4vLyAuZm9ybS1jb250cm9sLWxhYmVsIHNwYW4ge1xyXG4vLyAgIGNvbG9yOiAjOERDNTNGO1xyXG4vLyB9XHJcblxyXG4uZm9ybS1jb250cm9sLWxhYmVsIHtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLy8gLmZvcm0tY29udHJvbC1sYWJlbCBpb24tbGFiZWwge1xyXG4vLyAgIHBhZGRpbmctbGVmdDogMDtcclxuLy8gICBmb250LXNpemU6IDE1cHg7XHJcbi8vICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuLy8gICBmb250LXdlaWdodDogNTAwO1xyXG4vLyAgIGNvbG9yOiAjNGE0YTRhO1xyXG4vLyB9XHJcblxyXG4vLyAuaXRlbS1tZC5pdGVtLWlucHV0LmlucHV0LWhhcy1mb2N1cyAuaXRlbS1pbm5lciB7XHJcbi8vICAgYm94LXNoYWRvdzogbm9uZTtcclxuLy8gfVxyXG5cclxuLy8gLmlucHV0X2JveC5tYXJnaW4ge1xyXG4vLyAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbi8vIH1cclxuLmNoZWNrX2JveCB7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jaGVja19ib3ggaW9uLWNoZWNrYm94IHtcclxuICBtYXJnaW4tbGVmdDogMjBweCAhaW1wb3J0YW50O1xyXG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjOERDNTNGICFpbXBvcnRhbnQ7XHJcbiAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogIzhEQzUzRiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2hlY2tfYm94IGlvbi1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuXHJcbi5jaGVja19ib3ggc3BhbiB7XHJcbiAgY29sb3I6ICM4REM1M0Y7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLy8gaW9uLXJvdy5jaGVja19ib3gucm93IHtcclxuLy8gICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyB9IiwiLyoqKioqKioqKiAgaGVhZGVyICoqKioqKioqKioqKi9cbmlvbi10aXRsZSB7XG4gIC0tY29sb3I6IHJnYigyMzUsIDEyOSwgNDApO1xufVxuaW9uLXRpdGxlIC5tZCAudGl0bGUtbWQgLmh5ZHJhdGVkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1iYWNrLWJ1dHRvbiB7XG4gIC0taWNvbi1tYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG5pb24taW5wdXQge1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjOTk5O1xufVxuXG4udXBsb2FkLXBsdXMge1xuICB3aWR0aDogMTU1cHg7XG4gIGhlaWdodDogMTU1cHg7XG4gIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gIGJvcmRlcjogMC41cHggc29saWQgI2U3ZTdlNztcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNhbWVyYS1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaWNvbi9pY29uLWNhbWVyYS5zdmdcIikgY2VudGVyIGNlbnRlci80MHB4IG5vLXJlcGVhdDtcbn1cblxuLnVwbG9hZC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICM0QTRBNEE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuaW9uLXJhZGlvIHtcbiAgLS1jb2xvci1jaGVja2VkOiAjOERDNTNGICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1zZWxlY3Qge1xuICBtYXgtd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDk1JSAhaW1wb3J0YW50O1xufVxuXG4vKiMjIyMjIyMjIyMjIyBpbnB1dCBzdHlsZSAgIyMjIyMjIyMjIyovXG4uaXRlbS1tZC5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIHtcbiAgYm9yZGVyOiAwO1xufVxuXG5pb24taW5wdXQge1xuICAtLXBhZGRpbmctc3RhcnQ6IDIwcHggIWltcG9ydGFudDtcbn1cblxuLmlucHV0X2J0biB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZDogI2ZhZmFmYSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDAuNXB4IHNvbGlkICNlN2U3ZTc7XG4gIC0tcGFkZGluZy1zdGFydDogOHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5mb3JtLWNvbnRyb2wtbGFiZWwge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5jaGVja19ib3gge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jaGVja19ib3ggaW9uLWNoZWNrYm94IHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHggIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICM4REM1M0YgIWltcG9ydGFudDtcbiAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogIzhEQzUzRiAhaW1wb3J0YW50O1xufVxuXG4uY2hlY2tfYm94IGlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uY2hlY2tfYm94IHNwYW4ge1xuICBjb2xvcjogIzhEQzUzRjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/child-add/child-add.page.ts":
/*!*********************************************!*\
  !*** ./src/app/child-add/child-add.page.ts ***!
  \*********************************************/
/*! exports provided: ChildAddPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildAddPage", function() { return ChildAddPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_alert_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/alert-message.service */ "./src/app/services/alert-message.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/loading.service */ "./src/app/services/loading.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");









//FIREBASE


var ChildAddPage = /** @class */ (function () {
    function ChildAddPage(alert, db, auth, afDatabase, router, camera, file, loadingService, route) {
        this.alert = alert;
        this.db = db;
        this.auth = auth;
        this.afDatabase = afDatabase;
        this.router = router;
        this.camera = camera;
        this.file = file;
        this.loadingService = loadingService;
        this.route = route;
        this.child = {};
        // public glutenButtonColor: string;
        this.acceptedAgreement = false;
        this.child.otherFamilyContact = {};
        this.child.allowedKidGoHomeAlone = false;
        this.child.allowedToMakePhotos = false;
        this.child.allowedToSendNotification = false;
    }
    ChildAddPage.prototype.ngOnInit = function () {
    };
    ChildAddPage.prototype.schoolSelected = function (event) {
        console.log(event.detail.value);
        this.child.schoolName = this.schools.find(function (x) { return x.id == event.detail.value; }).name;
    };
    ChildAddPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        //default values for child
        this.child.glutenIntolerant = false;
        this.child.aminesIntolerant = false;
        this.child.lactoseIntolerant = false;
        var otherFamilyContactObject = { fullName: '', email: '', phone: '' };
        this.child.otherFamilyContact = otherFamilyContactObject;
        this.returnUrl = this.route.snapshot.params['returnUrl'];
        var school = {
            id: "",
            name: ""
        };
        firebase__WEBPACK_IMPORTED_MODULE_9__["database"]().ref('/schools/').once('value', function (snapshot) {
            _this.schools = [];
            snapshot.forEach(function (snap) {
                console.log("snapshot", snap.val());
                school.id = snap.key;
                school.name = snap.val().name;
                console.log("schoool", school);
                _this.schools.push(school);
            });
        });
    };
    ChildAddPage.prototype.glutenSwitch = function () {
        if (this.child.glutenIntolerant == false) {
            this.child.glutenIntolerant = true;
            //glutenButtonColor =
        }
        else {
            this.child.glutenIntolerant = false;
        }
        //console.log('gluten intolerant ? ', this.child.glutenIntolerant);
    };
    ChildAddPage.prototype.aminesSwitch = function () {
        if (this.child.aminesIntolerant == false) {
            this.child.aminesIntolerant = true;
            //glutenButtonColor =
        }
        else {
            this.child.aminesIntolerant = false;
        }
        //console.log('gluten intolerant ? ', this.child.glutenIntolerant);
    };
    ChildAddPage.prototype.lactoseSwitch = function () {
        if (this.child.lactoseIntolerant == false) {
            this.child.lactoseIntolerant = true;
            //glutenButtonColor =
        }
        else {
            this.child.lactoseIntolerant = false;
        }
        //console.log('gluten intolerant ? ', this.child.glutenIntolerant);
    };
    ChildAddPage.prototype.uploadPhoto = function () {
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
                        alert(downloadUrl);
                        this.child.photoUrl = downloadUrl;
                        //this.onBlurParentData();
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
    ChildAddPage.prototype.makeFileIntoBlob = function (_imagePath) {
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
    ChildAddPage.prototype.uploadToFirebase = function (_imageBlobInfo) {
        var _this = this;
        console.log("uploadToFirebase");
        return new Promise(function (resolve, reject) {
            var fileRef = firebase__WEBPACK_IMPORTED_MODULE_9__["storage"]().ref("parentsApp/" + _this.auth.getUid() + "/" + _imageBlobInfo.fileName);
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
    ChildAddPage.prototype.childAdd = function () {
        if (this.acceptedAgreement) {
            if (this.child.fullName != '' || this.child.fullName != undefined) {
                //this.db.collection('parents').doc(this.auth.getUid()).collection('childrens').add(this.child);
                this.child.parentId = this.auth.getUid();
                var key = this.afDatabase.list("childrens").push(this.child).key;
                this.child.id = key;
                firebase__WEBPACK_IMPORTED_MODULE_9__["database"]().ref('/childrens/').child(key).update(this.child);
                this.router.navigate([this.returnUrl]);
            }
            else {
                this.alert.customMessage('Please insert your child\'s name!');
            }
        }
        else {
            this.alert.customMessage('Please accept agreement!');
        }
    };
    ChildAddPage.ctorParameters = function () { return [
        { type: _services_alert_message_service__WEBPACK_IMPORTED_MODULE_2__["AlertMessageService"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_10__["AngularFireDatabase"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"] },
        { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"] },
        { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    ChildAddPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-child-add',
            template: __webpack_require__(/*! raw-loader!./child-add.page.html */ "./node_modules/raw-loader/index.js!./src/app/child-add/child-add.page.html"),
            styles: [__webpack_require__(/*! ./child-add.page.scss */ "./src/app/child-add/child-add.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_alert_message_service__WEBPACK_IMPORTED_MODULE_2__["AlertMessageService"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_10__["AngularFireDatabase"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"],
            _services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], ChildAddPage);
    return ChildAddPage;
}());



/***/ })

}]);
//# sourceMappingURL=child-add-child-add-module-es5.js.map