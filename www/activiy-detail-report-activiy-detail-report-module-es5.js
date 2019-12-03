(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["activiy-detail-report-activiy-detail-report-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/activiy-detail-report/activiy-detail-report.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/activiy-detail-report/activiy-detail-report.page.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar mode=\"ios\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button mode=\"md\" defaultHref=\"/\" icon=\"assets/icon/icon-back.svg\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>Report</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n    <ion-card>\n        <div style=\"position:relative !important; \">\n          <img [src]=\"image\">\n          \n        </div>\n        <ion-card-content>\n          <p>{{report}}</p>\n        </ion-card-content>\n      </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/activiy-detail-report/activiy-detail-report.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/activiy-detail-report/activiy-detail-report.module.ts ***!
  \***********************************************************************/
/*! exports provided: ActiviyDetailReportPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiviyDetailReportPageModule", function() { return ActiviyDetailReportPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _activiy_detail_report_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./activiy-detail-report.page */ "./src/app/activiy-detail-report/activiy-detail-report.page.ts");







var routes = [
    {
        path: '',
        component: _activiy_detail_report_page__WEBPACK_IMPORTED_MODULE_6__["ActiviyDetailReportPage"]
    }
];
var ActiviyDetailReportPageModule = /** @class */ (function () {
    function ActiviyDetailReportPageModule() {
    }
    ActiviyDetailReportPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_activiy_detail_report_page__WEBPACK_IMPORTED_MODULE_6__["ActiviyDetailReportPage"]]
        })
    ], ActiviyDetailReportPageModule);
    return ActiviyDetailReportPageModule;
}());



/***/ }),

/***/ "./src/app/activiy-detail-report/activiy-detail-report.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/activiy-detail-report/activiy-detail-report.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjdGl2aXktZGV0YWlsLXJlcG9ydC9hY3Rpdml5LWRldGFpbC1yZXBvcnQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/activiy-detail-report/activiy-detail-report.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/activiy-detail-report/activiy-detail-report.page.ts ***!
  \*********************************************************************/
/*! exports provided: ActiviyDetailReportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiviyDetailReportPage", function() { return ActiviyDetailReportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");




var ActiviyDetailReportPage = /** @class */ (function () {
    function ActiviyDetailReportPage(route, afDatabase) {
        this.route = route;
        this.afDatabase = afDatabase;
    }
    ActiviyDetailReportPage.prototype.ngOnInit = function () {
    };
    ActiviyDetailReportPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.activityId = this.route.snapshot.params['activityId'];
        // console.log(this.afDatabase.list(`activities/${this.activityId}`).valueChanges());
        this.afDatabase.list("activities/" + this.activityId + "/detail").valueChanges().subscribe(function (datas) {
            _this.report = datas[2];
        }, function (err) {
            console.log("probleme : ", err);
        });
        this.afDatabase.list("activities/" + this.activityId).valueChanges().subscribe(function (datas) {
            console.log(datas);
            _this.image = datas[6];
        }, function (err) {
            console.log("probleme : ", err);
        });
    };
    ActiviyDetailReportPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"] }
    ]; };
    ActiviyDetailReportPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-activiy-detail-report',
            template: __webpack_require__(/*! raw-loader!./activiy-detail-report.page.html */ "./node_modules/raw-loader/index.js!./src/app/activiy-detail-report/activiy-detail-report.page.html"),
            styles: [__webpack_require__(/*! ./activiy-detail-report.page.scss */ "./src/app/activiy-detail-report/activiy-detail-report.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]])
    ], ActiviyDetailReportPage);
    return ActiviyDetailReportPage;
}());



/***/ })

}]);
//# sourceMappingURL=activiy-detail-report-activiy-detail-report-module-es5.js.map