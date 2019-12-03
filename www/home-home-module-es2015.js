(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Ionic Blank\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"ion-padding\">\r\n    The world is your oyster.\r\n    <p>If you get lost, the <a target=\"_blank\" rel=\"noopener\" href=\"https://ionicframework.com/docs/\">docs</a> will be your guide.</p>\r\n  </div>\r\n</ion-content> -->\r\n<ion-header no-border>\r\n  <ion-toolbar mode=\"ios\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button mode=\"md\" defaultHref=\"/\" icon=\"assets/icon/icon-back.svg\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <img src=\"assets/imgs/logo.png\" id=\"header_logo\" height=\"40\" alt=\"\">\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"ion-padding\">\r\n  <ion-item lines=\"none\" class=\"form-control-label\">\r\n    <ion-label>What is your <span>Email</span>?</ion-label>\r\n  </ion-item>\r\n  <ion-item lines=\"none\" class=\"input_box\">\r\n    <ion-label>\r\n      <ion-icon src=\"assets/icon/icon-email.svg\"></ion-icon>\r\n    </ion-label>\r\n    <ion-input type=\"text\" value=\"\" (keyup.enter)=\"checkEmail()\" [(ngModel)]=\"email\"></ion-input>\r\n  </ion-item>\r\n</ion-content>\r\n\r\n<ion-footer no-border>\r\n  <ion-button expand=\"full\" class=\"button-green\" color=\"button_color\"\r\n   (click)=\"checkEmail()\">NEXT</ion-button>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*********  header ************/\nion-title {\n  padding-top: 10px;\n}\nion-title .md .title-md .hydrated {\n  text-align: center !important;\n}\n.button-md,\n.button-ios {\n  font-size: 16px;\n  font-weight: 600;\n  padding: 12px 15px;\n  border-radius: 0;\n  height: 5.2rem;\n  margin: 0;\n}\nion-content {\n  --overflow: hidden;\n}\nion-item {\n  --padding-start: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcV29ya1xcTW9iaWxlXFxpb25pY1xcYWJhY19wYXJlbnRzL3NyY1xcYXBwXFxob21lXFxob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrQkFBQTtBQUNBO0VBQ0UsaUJBQUE7QUNDRjtBRENFO0VBQ0UsNkJBQUE7QUNDSjtBREdBOztFQUVFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQ0FGO0FESUE7RUFDRSxrQkFBQTtBQ0RGO0FESUE7RUFDRSwrQkFBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKiogIGhlYWRlciAqKioqKioqKioqKiovXHJcbmlvbi10aXRsZSB7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcblxyXG4gIC5tZCAudGl0bGUtbWQgLmh5ZHJhdGVkIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLmJ1dHRvbi1tZCxcclxuLmJ1dHRvbi1pb3Mge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHBhZGRpbmc6IDEycHggMTVweDtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGhlaWdodDogNS4ycmVtO1xyXG4gIG1hcmdpbjogMDtcclxuXHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAtLW92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLy8gLyoqKioqKioqKiAgZm9vdGVyICoqKioqKioqKioqKi9cclxuLy8gaW9uLWZvb3RlciAudG9vbGJhci1tZCxcclxuLy8gaW9uLWZvb3RlciAudG9vbGJhci1pb3Mge1xyXG4vLyAgIHBhZGRpbmc6IDA7XHJcbi8vICAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gLml0ZW0tbWQuaXRlbS1ibG9jayAuaXRlbS1pbm5lcixcclxuLy8gLml0ZW0taW9zLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xyXG4vLyAgIGJvcmRlcjogMDtcclxuLy8gfSIsIi8qKioqKioqKiogIGhlYWRlciAqKioqKioqKioqKiovXG5pb24tdGl0bGUge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbmlvbi10aXRsZSAubWQgLnRpdGxlLW1kIC5oeWRyYXRlZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4uYnV0dG9uLW1kLFxuLmJ1dHRvbi1pb3Mge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDEycHggMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgaGVpZ2h0OiA1LjJyZW07XG4gIG1hcmdpbjogMDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLW92ZXJmbG93OiBoaWRkZW47XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHggIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_alert_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/alert-message.service */ "./src/app/services/alert-message.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/loading.service */ "./src/app/services/loading.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");







let HomePage = class HomePage {
    constructor(alert, authService, loadingService, router, storage) {
        this.alert = alert;
        this.authService = authService;
        this.loadingService = loadingService;
        this.router = router;
        this.storage = storage;
        this.check_data = false;
    }
    ionViewWillEnter() {
        this.loadingService.present();
        this.authService.user$.subscribe(result => {
            //console.log(result);
            // if (this.loadingService.isLoading)
            //   this.loadingService.dismiss();
            if (result) {
                this.storage.get('newUser').then((newUser) => {
                    console.log("home page newUser storage get ", newUser);
                    if (this.loadingService.isLoading) {
                        this.loadingService.dismiss();
                    }
                    if (newUser != undefined) {
                        //do nothing. new user registeration auto login triggered this observable;
                    }
                    else {
                        //existing user logged in
                        this.router.navigate(['/tabs']);
                        //              this.router.navigate(['/my-child']);
                    }
                });
            }
            else {
                if (this.loadingService.isLoading)
                    this.loadingService.dismiss();
            }
        }, error => {
            console.log("EE:", error);
        });
    }
    checkEmail() {
        if (this.email == "" || this.email == undefined) {
            this.alert.customMessage("Please enter email");
        }
        else {
            this.loadingService.present().then(() => {
                console.log(this.email);
                this.authService.signIn(this.email, " ").then(res => {
                    //if (this.loadingService.isLoading) {
                    this.loadingService.dismiss().then(() => {
                        console.log('success ', res);
                    });
                    //}
                }, err => {
                    //if (this.loadingService.isLoading) {
                    this.loadingService.dismiss().then(() => {
                        console.log('error: ', err);
                        console.log(err.code);
                        console.log(err.message);
                        if (err.code == 'auth/user-not-found') {
                            //email not found new user to register
                            let newUser = {};
                            newUser.email = this.email;
                            this.storage.set('newUser', newUser).then(() => {
                                //go to new password
                                this.router.navigate(['/password']);
                            });
                        }
                        else if (err.code == 'auth/wrong-password') {
                            //email found user to login
                            //this.navCtrl.push(PasswordModalPage)
                            let existingUser = {};
                            existingUser.email = this.email;
                            this.storage.set('existingUser', existingUser).then(() => {
                                this.router.navigate(['/password-modal']);
                            });
                        }
                        else if (err.code == 'auth/invalid-email') {
                            this.alert.customMessage("Please enter a valid email address!");
                        }
                        else {
                            this.alert.customMessage(err.message);
                        }
                    }, err => { console.log("error", err); });
                    //}
                });
            });
        }
    }
};
HomePage.ctorParameters = () => [
    { type: _services_alert_message_service__WEBPACK_IMPORTED_MODULE_2__["AlertMessageService"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_alert_message_service__WEBPACK_IMPORTED_MODULE_2__["AlertMessageService"],
        _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
        _services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map