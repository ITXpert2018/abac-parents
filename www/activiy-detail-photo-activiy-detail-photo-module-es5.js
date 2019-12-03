(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["activiy-detail-photo-activiy-detail-photo-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/activiy-detail-photo/activiy-detail-photo.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/activiy-detail-photo/activiy-detail-photo.page.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar mode=\"ios\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button mode=\"md\" defaultHref=\"/\" icon=\"assets/icon/icon-back.svg\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>Photo</ion-title>\n    </ion-toolbar>\n  </ion-header>\n<ion-content>\n    <ion-card>\n        <div style=\"position:relative !important; \">\n          <img [src]=\"image\">\n          \n        </div>\n        <ion-card-content>\n          <!-- <p>{{report}}</p> -->\n        </ion-card-content>\n      </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/activiy-detail-photo/activiy-detail-photo.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/activiy-detail-photo/activiy-detail-photo.module.ts ***!
  \*********************************************************************/
/*! exports provided: ActiviyDetailPhotoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiviyDetailPhotoPageModule", function() { return ActiviyDetailPhotoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _activiy_detail_photo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./activiy-detail-photo.page */ "./src/app/activiy-detail-photo/activiy-detail-photo.page.ts");







var routes = [
    {
        path: '',
        component: _activiy_detail_photo_page__WEBPACK_IMPORTED_MODULE_6__["ActiviyDetailPhotoPage"]
    }
];
var ActiviyDetailPhotoPageModule = /** @class */ (function () {
    function ActiviyDetailPhotoPageModule() {
    }
    ActiviyDetailPhotoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_activiy_detail_photo_page__WEBPACK_IMPORTED_MODULE_6__["ActiviyDetailPhotoPage"]]
        })
    ], ActiviyDetailPhotoPageModule);
    return ActiviyDetailPhotoPageModule;
}());



/***/ }),

/***/ "./src/app/activiy-detail-photo/activiy-detail-photo.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/activiy-detail-photo/activiy-detail-photo.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjdGl2aXktZGV0YWlsLXBob3RvL2FjdGl2aXktZGV0YWlsLXBob3RvLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/activiy-detail-photo/activiy-detail-photo.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/activiy-detail-photo/activiy-detail-photo.page.ts ***!
  \*******************************************************************/
/*! exports provided: ActiviyDetailPhotoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiviyDetailPhotoPage", function() { return ActiviyDetailPhotoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");




var ActiviyDetailPhotoPage = /** @class */ (function () {
    function ActiviyDetailPhotoPage(afDatabase, route) {
        this.afDatabase = afDatabase;
        this.route = route;
    }
    ActiviyDetailPhotoPage.prototype.ngOnInit = function () {
    };
    ActiviyDetailPhotoPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.activityId = this.route.snapshot.params['activityId'];
        // console.log(this.afDatabase.list(`activities/${this.activityId}`).valueChanges());
        this.afDatabase.list("activities/" + this.activityId).valueChanges().subscribe(function (datas) {
            console.log(datas);
            _this.image = datas[6];
            _this.strPhotofile = datas[1];
            // for(let i=0; i<this.splitArray.length; i++){
            //   this.photolist.push(this.splitArray[i]);
            // }
            console.log("photolist", _this.strPhotofile.length);
        }, function (err) {
            console.log("probleme : ", err);
        });
        // this.afDatabase.list(`activities/${this.activityId}`).valueChanges().subscribe((datas) => { 
        //   console.log(datas);
        //   this.image = datas[6];
        // },(err)=>{
        //    console.log("probleme : ", err)
        // });
    };
    ActiviyDetailPhotoPage.ctorParameters = function () { return [
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    ActiviyDetailPhotoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-activiy-detail-photo',
            template: __webpack_require__(/*! raw-loader!./activiy-detail-photo.page.html */ "./node_modules/raw-loader/index.js!./src/app/activiy-detail-photo/activiy-detail-photo.page.html"),
            styles: [__webpack_require__(/*! ./activiy-detail-photo.page.scss */ "./src/app/activiy-detail-photo/activiy-detail-photo.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ActiviyDetailPhotoPage);
    return ActiviyDetailPhotoPage;
}());



/***/ })

}]);
//# sourceMappingURL=activiy-detail-photo-activiy-detail-photo-module-es5.js.map