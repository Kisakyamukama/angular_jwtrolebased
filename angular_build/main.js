(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Content from Server</h4>\n<div *ngIf=\"userInfo\">\n    <p>Name: <strong>{{userInfo.name}}</strong></p>\n    <p>Email: <strong>{{userInfo.email}}</strong></p>\n      \n\n</div>\n{{board}}\n{{errorMessage}}"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminComponent = /** @class */ (function () {
    function AdminComponent(userService) {
        this.userService = userService;
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getAdminBoard().subscribe(function (data) {
            console.log(data);
            _this.userInfo = {
                name: data.user.name,
                email: data.user.email
            };
            _this.board = data.description;
        }, function (error) {
            _this.errorMessage = error.status + ": " + error.error;
        });
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _pm_pm_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pm/pm.component */ "./src/app/pm/pm.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _observationslipform_observationslipform_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./observationslipform/observationslipform.component */ "./src/app/observationslipform/observationslipform.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    },
    {
        path: 'user',
        component: _user_user_component__WEBPACK_IMPORTED_MODULE_5__["UserComponent"]
    },
    {
        path: 'pm',
        component: _pm_pm_component__WEBPACK_IMPORTED_MODULE_6__["PmComponent"]
    },
    {
        path: 'admin',
        component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_7__["AdminComponent"]
    },
    {
        path: 'auth/login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'signup',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"]
    },
    {
        path: 'add-observationslip',
        component: _observationslipform_observationslipform_component__WEBPACK_IMPORTED_MODULE_8__["ObservationslipformComponent"]
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"#\">WDR Desktop App</a>\n    </div>\n\n    <ul class=\"nav navbar-nav\" routerLinkActive=\"acctive\">\n      <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"home\">Home</a></li>\n      <li *ngIf=\"authority === 'user'\" class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"user\">User Board</a>\n        <a class=\"nav-link\" routerLink=\"add-observationslip\">Add Observationslip</a>\n        <a class=\"nav-link\" routerLink=\"observationslips\">View Observationslip</a>\n      </li>\n      <li *ngIf=\"authority === 'admin'\" class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"admin\">OC Board</a>\n      </li>\n\n      <li *ngIf=\"authority === 'pm'\" class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"pm\">PM Board</a>\n      </li>\n      <li *ngIf=\"!authority\" class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"auth/login\">Login</a>\n      </li>\n    </ul>\n\n  </div>\n</nav>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/token-storage.service */ "./src/app/auth/token-storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(tokenStorage) {
        this.tokenStorage = tokenStorage;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.tokenStorage.getToken()) {
            this.roles = this.tokenStorage.getAuthorities();
            console.log(this.roles);
            this.roles.every(function (role) {
                console.log(role);
                if (role === 'ROLE_OC') {
                    _this.authority = 'admin';
                    return false;
                }
                else if (role === 'ROLE_PM') {
                    _this.authority = 'pm';
                    return false;
                }
                _this.authority = 'user';
                return true;
            });
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_1__["TokenStorageService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _pm_pm_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pm/pm.component */ "./src/app/pm/pm.component.ts");
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/auth-interceptor */ "./src/app/auth/auth-interceptor.ts");
/* harmony import */ var _observationslipform_observationslipform_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./observationslipform/observationslipform.component */ "./src/app/observationslipform/observationslipform.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_7__["UserComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_10__["AdminComponent"],
                _pm_pm_component__WEBPACK_IMPORTED_MODULE_11__["PmComponent"],
                _observationslipform_observationslipform_component__WEBPACK_IMPORTED_MODULE_13__["ObservationslipformComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [_auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_12__["httpInterceptorProviders"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth-interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/auth/auth-interceptor.ts ***!
  \******************************************/
/*! exports provided: AuthInterceptor, httpInterceptorProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpInterceptorProviders", function() { return httpInterceptorProviders; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token-storage.service */ "./src/app/auth/token-storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TOKEN_HEADER_KEY = 'x-access-token';
var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(token) {
        this.token = token;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var authReq = req;
        var token = this.token.getToken();
        if (token != null) {
            authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, token) });
        }
        return next.handle(authReq);
    };
    AuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());

var httpInterceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: AuthInterceptor, multi: true }
];


/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.loginUrl = 'http://localhost:8080/api/auth/signin';
        this.signupUrl = 'http://localhost:8080/api/auth/signup';
        this.observationslipUrl = 'http://localhost:8080/api/auth/storeObservationslip';
    }
    AuthService.prototype.attemptAuth = function (credentials) {
        return this.http.post(this.loginUrl, credentials, httpOptions);
    };
    AuthService.prototype.signUp = function (info) {
        return this.http.post(this.signupUrl, info, httpOptions);
    };
    AuthService.prototype.storeObservationslip = function (info) {
        return this.http.post(this.observationslipUrl, info, httpOptions);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/login-info.ts":
/*!************************************!*\
  !*** ./src/app/auth/login-info.ts ***!
  \************************************/
/*! exports provided: AuthLoginInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLoginInfo", function() { return AuthLoginInfo; });
var AuthLoginInfo = /** @class */ (function () {
    function AuthLoginInfo(username, password) {
        this.username = username;
        this.password = password;
    }
    return AuthLoginInfo;
}());



/***/ }),

/***/ "./src/app/auth/observationslip-info.ts":
/*!**********************************************!*\
  !*** ./src/app/auth/observationslip-info.ts ***!
  \**********************************************/
/*! exports provided: ObservationslipInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservationslipInfo", function() { return ObservationslipInfo; });
var ObservationslipInfo = /** @class */ (function () {
    function ObservationslipInfo(Time, Date, Station, stationName, TotalAmountOfAllClouds, TotalAmountOfLowClouds, TypeOfLowClouds1, OktasOfLowClouds1, HeightOfLowClouds1, CLCODEOfLowClouds1, TypeOfLowClouds2, OktasOfLowClouds2, HeightOfLowClouds2, CLCODEOfLowClouds2, TypeOfLowClouds3, OktasOfLowClouds3, HeightOfLowClouds3, CLCODEOfLowClouds3, TypeOfMediumClouds1, OktasOfMediumClouds1, HeightOfMediumClouds1, CLCODEOfMediumClouds1, TypeOfMediumClouds2, OktasOfMediumClouds2, HeightOfMediumClouds2, CLCODEOfMediumClouds2, TypeOfMediumClouds3, OktasOfMediumClouds3, HeightOfMediumClouds3, CLCODEOfMediumClouds3, TypeOfHighClouds1, OktasOfHighClouds1, HeightOfHighClouds1, CLCODEOfHighClouds1, TypeOfHighClouds2, OktasOfHighClouds2, HeightOfHighClouds2, CLCODEOfHighClouds2, TypeOfHighClouds3, OktasOfHighClouds3, HeightOfHighClouds3, CLCODEOfHighClouds3, CloudSearchLightReading, Rainfall, Dry_Bulb, Wet_Bulb, Max_Read, Max_Reset, Min_Read, Min_Reset, Piche_Read, Piche_Reset, TimeMarksThermo, TimeMarksHygro, TimeMarksRainRec, Present_Weather, Present_WeatherCode, Past_Weather, Visibility, Wind_Direction, Wind_Speed, Gusting, AttdThermo, PrAsRead, Correction, CLP, MSLPr, TimeMarksBarograph, TimeMarksAnemograph, OtherTMarks, SoilMoisture, SoilTemperature, sunduration, trend, windrun, speciOrMetar, UnitOfWindSpeed, IndOrOmissionOfPrecipitation, TypeOfStation_Present_Past_Weather, HeightOfLowestCloud, StandardIsobaricSurface, GPM, DurationOfPeriodOfPrecipitation, GrassMinTemp, CI_OfPrecipitation, BE_OfPrecipitation, IndicatorOfTypeOfIntrumentation, SignOfPressureChange, Supp_Info, VapourPressure, T_H_Graph, DeviceType, SubmittedBy, Remarks, Approved) {
        this.Time = Time;
        this.Date = Date;
        this.Station = Station;
        this.stationName = stationName;
        this.TotalAmountOfAllClouds = TotalAmountOfAllClouds;
        this.TotalAmountOfLowClouds = TotalAmountOfLowClouds;
        this.TypeOfLowClouds1 = TypeOfLowClouds1;
        this.OktasOfLowClouds1 = OktasOfLowClouds1;
        this.HeightOfLowClouds1 = HeightOfLowClouds1;
        this.CLCODEOfLowClouds1 = CLCODEOfLowClouds1;
        this.TypeOfLowClouds2 = TypeOfLowClouds2;
        this.OktasOfLowClouds2 = OktasOfHighClouds2;
        this.HeightOfLowClouds2 = HeightOfLowClouds2;
        this.CLCODEOfLowClouds2 = CLCODEOfLowClouds2;
        this.TypeOfLowClouds3 = TypeOfLowClouds3;
        this.OktasOfLowClouds3 = OktasOfLowClouds3;
        this.HeightOfLowClouds3 = HeightOfLowClouds3;
        this.CLCODEOfLowClouds3 = CLCODEOfLowClouds3;
        this.TypeOfMediumClouds1 = TypeOfMediumClouds1;
        this.OktasOfMediumClouds1 = OktasOfMediumClouds1;
        this.HeightOfMediumClouds1 = HeightOfMediumClouds1;
        this.CLCODEOfMediumClouds1 = CLCODEOfMediumClouds1;
        this.TypeOfMediumClouds2 = TypeOfMediumClouds2;
        this.OktasOfMediumClouds2 = OktasOfMediumClouds2;
        this.HeightOfMediumClouds2 = HeightOfMediumClouds2;
        this.CLCODEOfMediumClouds2 = CLCODEOfMediumClouds2;
        this.TypeOfMediumClouds3 = TypeOfMediumClouds3;
        this.OktasOfMediumClouds3 = OktasOfMediumClouds3;
        this.HeightOfMediumClouds3 = HeightOfMediumClouds3;
        this.CLCODEOfMediumClouds3 = CLCODEOfMediumClouds3;
        this.TypeOfHighClouds1 = TypeOfHighClouds1;
        this.OktasOfHighClouds1 = OktasOfHighClouds1;
        this.HeightOfHighClouds1 = HeightOfHighClouds1;
        this.CLCODEOfHighClouds1 = CLCODEOfHighClouds1;
        this.TypeOfHighClouds2 = TypeOfHighClouds2;
        this.OktasOfHighClouds2 = OktasOfHighClouds2;
        this.HeightOfHighClouds2 = HeightOfHighClouds2;
        this.CLCODEOfHighClouds2 = CLCODEOfHighClouds2;
        this.TypeOfHighClouds3 = TypeOfHighClouds3;
        this.OktasOfHighClouds3 = OktasOfHighClouds3;
        this.HeightOfHighClouds3 = HeightOfHighClouds3;
        this.CLCODEOfHighClouds3 = CLCODEOfHighClouds3;
        this.CloudSearchLightReading = CloudSearchLightReading;
        this.Rainfall = Rainfall;
        this.Dry_Bulb = Dry_Bulb;
        this.Wet_Bulb = Wet_Bulb;
        this.Max_Read = Max_Read;
        this.Max_Reset = Max_Reset;
        this.Min_Read = Min_Read;
        this.Min_Reset = Min_Reset;
        this.Piche_Read = Piche_Read;
        this.Piche_Reset = Piche_Reset;
        this.TimeMarksThermo = TimeMarksThermo;
        this.TimeMarksHygro = TimeMarksHygro;
        this.TimeMarksRainRec = TimeMarksRainRec;
        this.Present_Weather = Present_Weather;
        this.Present_WeatherCode = Present_WeatherCode;
        this.Past_Weather = Past_Weather;
        this.Visibility = Visibility;
        this.Wind_Direction = Wind_Direction;
        this.Wind_Speed = Wind_Speed;
        this.Gusting = Gusting;
        this.AttdThermo = AttdThermo;
        this.PrAsRead = PrAsRead;
        this.Correction = Correction;
        this.CLP = CLP;
        this.MSLPr = MSLPr;
        this.TimeMarksBarograph = TimeMarksBarograph;
        this.TimeMarksAnemograph = TimeMarksAnemograph;
        this.OtherTMarks = OtherTMarks;
        this.SoilMoisture = SoilMoisture;
        this.SoilTemperature = SoilTemperature;
        this.sunduration = sunduration;
        this.trend = trend;
        this.windrun = windrun;
        this.speciOrMetar = speciOrMetar;
        this.UnitOfWindSpeed = UnitOfWindSpeed;
        this.IndOrOmissionOfPrecipitation = IndOrOmissionOfPrecipitation;
        this.TypeOfStation_Present_Past_Weather = TypeOfStation_Present_Past_Weather;
        this.HeightOfLowestCloud = HeightOfLowestCloud;
        this.StandardIsobaricSurface = StandardIsobaricSurface;
        this.GPM = GPM;
        this.DurationOfPeriodOfPrecipitation = DurationOfPeriodOfPrecipitation;
        this.GrassMinTemp = GrassMinTemp;
        this.CI_OfPrecipitation = CI_OfPrecipitation;
        this.BE_OfPrecipitation = BE_OfPrecipitation;
        this.IndicatorOfTypeOfIntrumentation = IndicatorOfTypeOfIntrumentation;
        this.SignOfPressureChange = SignOfPressureChange;
        this.Supp_Info = Supp_Info;
        this.VapourPressure = VapourPressure;
        this.T_H_Graph = T_H_Graph;
        this.DeviceType = 'desktop';
        this.SubmittedBy = SubmittedBy;
        this.Remarks = Remarks;
        this.Approved = Approved;
    }
    return ObservationslipInfo;
}());



/***/ }),

/***/ "./src/app/auth/signup-info.ts":
/*!*************************************!*\
  !*** ./src/app/auth/signup-info.ts ***!
  \*************************************/
/*! exports provided: SignUpInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpInfo", function() { return SignUpInfo; });
var SignUpInfo = /** @class */ (function () {
    function SignUpInfo(name, username, email, password, roles) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.roles = [roles];
    }
    return SignUpInfo;
}());



/***/ }),

/***/ "./src/app/auth/token-storage.service.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/token-storage.service.ts ***!
  \***********************************************/
/*! exports provided: TokenStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenStorageService", function() { return TokenStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TOKEN_KEY = 'AuthToken';
var USERNAME_KEY = 'AuthUsername';
var AUTHORITIES_KEY = 'AuthAuthorities';
var TokenStorageService = /** @class */ (function () {
    function TokenStorageService() {
        this.roles = [];
    }
    TokenStorageService.prototype.signOut = function () {
        window.sessionStorage.clear();
    };
    TokenStorageService.prototype.saveToken = function (token) {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    };
    TokenStorageService.prototype.getToken = function () {
        return sessionStorage.getItem(TOKEN_KEY);
    };
    TokenStorageService.prototype.saveUsername = function (username) {
        window.sessionStorage.removeItem(USERNAME_KEY);
        window.sessionStorage.setItem(USERNAME_KEY, username);
    };
    TokenStorageService.prototype.getUsername = function () {
        return sessionStorage.getItem(USERNAME_KEY);
    };
    TokenStorageService.prototype.saveAuthorities = function (authorities) {
        window.sessionStorage.removeItem(AUTHORITIES_KEY);
        window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
    };
    TokenStorageService.prototype.getAuthorities = function () {
        var _this = this;
        this.roles = [];
        if (sessionStorage.getItem(TOKEN_KEY)) {
            JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)).forEach(function (authority) {
                _this.roles.push(authority);
            });
        }
        return this.roles;
    };
    TokenStorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], TokenStorageService);
    return TokenStorageService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"info.token; else loggedOut\">\n  <h5 class=\"text-primary\">Your Information</h5>\n  <p>\n    <strong>Username:</strong> {{info.username}}<br/>\n    <strong>Roles:</strong> {{info.authorities}}<br />\n    <strong>Token:</strong> {{info.token}}.\n  </p>\n  <button class=\"btn btn-secondary\" (click)=\"logout()\">Logout</button>\n</div>\n\n<ng-template #loggedOut>\n  Please login.\n</ng-template>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/token-storage.service */ "./src/app/auth/token-storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(token) {
        this.token = token;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.info = {
            token: this.token.getToken(),
            username: this.token.getUsername(),
            authorities: this.token.getAuthorities()
        };
    };
    HomeComponent.prototype.logout = function () {
        this.token.signOut();
        window.location.reload();
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_1__["TokenStorageService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isLoggedIn; else loggedOut\">\n  Logged in as {{roles}}.\n</div>\n\n<ng-template #loggedOut>\n  <div class=\"row col-sm-6\" style=\"max-width:350px;\">\n    <form name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\n      <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"form.username\" #username=\"ngModel\"\n          required />\n        <div *ngIf=\"f.submitted && username.invalid\">\n          <div *ngIf=\"username.errors.required\">Username is required</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"form.password\" #password=\"ngModel\"\n          required minlength=\"6\" />\n        <div *ngIf=\"f.submitted && password.invalid\">\n          <div *ngIf=\"password.errors.required\">Password is required</div>\n          <div *ngIf=\"password.errors.minlength\">Password must be at least 6 characters</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <button class=\"btn btn-primary\">Login</button>\n        <div *ngIf=\"f.submitted && isLoginFailed\" class=\"alert alert-danger\">\n          Login failed: {{errorMessage}}\n        </div>\n      </div>\n    </form>\n    <hr />\n    <p>Don't have an account?</p>\n    <a href=\"signup\" class=\"btn btn-success\">Sign Up</a>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/token-storage.service */ "./src/app/auth/token-storage.service.ts");
/* harmony import */ var _auth_login_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/login-info */ "./src/app/auth/login-info.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, tokenStorage) {
        this.authService = authService;
        this.tokenStorage = tokenStorage;
        this.form = {};
        this.isLoggedIn = false;
        this.isLoginFailed = false;
        this.errorMessage = '';
        this.roles = [];
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.tokenStorage.getToken()) {
            this.isLoggedIn = true;
            this.roles = this.tokenStorage.getAuthorities();
        }
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.form);
        this.loginInfo = new _auth_login_info__WEBPACK_IMPORTED_MODULE_3__["AuthLoginInfo"](this.form.username, this.form.password);
        this.authService.attemptAuth(this.loginInfo).subscribe(function (data) {
            _this.tokenStorage.saveToken(data.accessToken);
            _this.tokenStorage.saveUsername(data.username);
            _this.tokenStorage.saveAuthorities(data.authorities);
            _this.isLoginFailed = false;
            _this.isLoggedIn = true;
            _this.roles = _this.tokenStorage.getAuthorities();
            _this.reloadPage();
        }, function (error) {
            console.log(error);
            _this.errorMessage = error.error.reason;
            _this.isLoginFailed = true;
        });
    };
    LoginComponent.prototype.reloadPage = function () {
        window.location.reload();
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/observationslipform/observationslipform.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/observationslipform/observationslipform.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29ic2VydmF0aW9uc2xpcGZvcm0vb2JzZXJ2YXRpb25zbGlwZm9ybS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/observationslipform/observationslipform.component.html":
/*!************************************************************************!*\
  !*** ./src/app/observationslipform/observationslipform.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"submitted; else observationslipForm\">\n  Observationslip form data added is successfully!\n</div>\n<ng-template #observationslipForm>\n        <aside class=\"right-side\" xmlns=\"\" xmlns=\"\">\n          <section class=\"content-header\">\n              <h1>\n                  Observation/Raw Data\n              </h1>            \n          </section>\n\n           <!-- Main content -->\n        <section>\n\n        <div class=\"row\">\n             <form name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" n>\n                      <table>\n                        <tr>\n                      <td colspan = \"4\">\n                          <div class=\"input-group\">\n                              <span class=\"input-group-addon\">Station Name</span>\n                              <input type=\"text\" name=\"stationName\" [(ngModel)]=\"form.stationName\"   class=\"form-control\" #stationName=\"ngModel\"  readonly class=\"form-control\" >\n\n                            </div>\n                      </td>\n\n                      <td colspan = \"4\">\n                          <div class=\"input-group\">\n                              <span class=\"input-group-addon\"> Station Number</span>\n                              <input type=\"number\" name=\"Station\" [(ngModel)]=\"form.Station\"   class=\"form-control\"  readonly class=\"form-control\" value=\"\" readonly=\"readonly\" >\n                            </div>\n                           </td>\n                           <td colspan = \"4\">\n\n                              <div class=\"input-group\">\n                                <span class=\"input-group-addon\">Select Date</span>\n                                <input type=\"text\" name=\"date\"  [(ngModel)]=\"form.Date\"  class=\"form-control compulsory\" placeholder=\"Enter select date\" value=\"\" autocomplete='off'>\n                              </div>\n                          </td>\n                    </tr>\n\n                    <tr>\n                        <td colspan=\"6\">\n                            <div class=\"input-group\"  >\n                                <span class=\"input-group-addon\">Time category</span>\n                                <select name=\"metar_speci\"  [(ngModel)]=\"form.speciOrMetar\"   class=\"form-control compulsory\">\n                                  <option value=\"metar\">normal</option>\n                                  <option value=\"speci\">speci</option>\n\n                                </select>\n                              </div>\n\n                          </td>\n                          <td colspan=\"6\">\n\n                              <div class=\"input-group\" id=\"metartimeId\"  >\n                                  <span class=\"input-group-addon\">NORMAL TIME</span>\n                                  <select name=\"Time\" [(ngModel)]=\"form.Time\"   class=\"form-control compulsory\">\n                                    <option value=\"00:00Z\">00:00Z</option>\n                                    <option value=\"00:30Z\">00:30Z</option>\n                                    <option value=\"01:00Z\">01:00Z</option>\n                                    <option value=\"01:30Z\">01:30Z</option>\n                                    <option value=\"02:00Z\">02:00Z</option>\n                                    <option value=\"02:30Z\">02:30Z</option>\n                                    <option value=\"03:00Z\">03:00Z</option>\n                                    <option value=\"03:30Z\">03:30Z</option>\n                                    <option value=\"04:00Z\">04:00Z</option>\n                                    <option value=\"04:30Z\">04:30Z</option>\n                                    <option value=\"05:00Z\">05:00Z</option>\n                                    <option value=\"05:30Z\">05:30Z</option>\n                                    <option value=\"06:00Z\">06:00Z</option>\n                                    <option value=\"06:30Z\">06:30Z</option>\n                                    <option value=\"07:00Z\">07:00Z</option>\n                                    <option value=\"07:30Z\">07:30Z</option>\n                                    <option value=\"08:00Z\">08:00Z</option>\n                                    <option value=\"08:30Z\">08:30Z</option>\n                                    <option value=\"09:00Z\">09:00Z</option>\n                                    <option value=\"09:30Z\">09:30Z</option>\n                                    <option value=\"10:00Z\">10:00Z</option>\n                                    <option value=\"10:30Z\">10:30Z</option>\n                                    <option value=\"11:00Z\">11:00Z</option>\n                                    <option value=\"11:30Z\">11:30Z</option>\n                                    <option value=\"12:00Z\">12:00Z</option>\n                                    <option value=\"12:30Z\">12:30Z</option>\n                                    <option value=\"13:00Z\">13:00Z</option>\n                                    <option value=\"13:30Z\">13:30Z</option>\n                                    <option value=\"14:00Z\">14:00Z</option>\n                                    <option value=\"14:30Z\">14:30Z</option>\n                                    <option value=\"15:00Z\">15:00Z</option>\n                                    <option value=\"15:30Z\">15:30Z</option>\n                                    <option value=\"16:00Z\">16:00Z</option>\n                                    <option value=\"16:30Z\">16:30Z</option>\n                                    <option value=\"17:00Z\">17:00Z</option>\n                                    <option value=\"17:30Z\">17:30Z</option>\n                                    <option value=\"18:00Z\">18:00Z</option>\n                                    <option value=\"18:30Z\">18:30Z</option>\n                                    <option value=\"19:00Z\">19:00Z</option>\n                                    <option value=\"19:30Z\">19:30Z</option>\n                                    <option value=\"20:00Z\">20:00Z</option>\n                                    <option value=\"20:30Z\">20:30Z</option>\n                                    <option value=\"21:00Z\">21:00Z</option>\n                                    <option value=\"21:30Z\">21:30Z</option>\n                                    <option value=\"22:00Z\">22:00Z</option>\n                                    <option value=\"22:30Z\">22:30Z</option>\n                                    <option value=\"23:00Z\">23:00Z</option>\n                                    <option value=\"23:30Z\">23:30Z</option>\n                                  </select>\n                                  <input type=\"hidden\" name=\"diff\" id=\"diff\" value=\"\"/>\n                                </div>\n\n\n                                  <div class=\"input-group\" id=\"specitimeId\"  style=\"display:none;\">\n                                  <span class=\"input-group-addon\">SPECI TIME</span>\n\n                                    <div class=\"input-group bootstrap-timepicker timepicker\">\n                                      <input id=\"timepicker1\" type=\"text\" name=\"speci_time_observationslipform\"  id=\"time_observationslipform\"  class=\"form-control compulsory\">\n                                      <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-time\"></i></span>\n                                    </div>\n                                    <span ng-hide=\"Time\" class=\"validator\">Time  please</span>\n\n                                  <script type=\"text/javascript\">\n                                              $('#timepicker1').timepicker();\n                                          </script>\n                                </div>\n\n\n\n                            </td>\n                    </tr>\n                    <tr>\n                        <td colspan=\"6\">\n\n                            <div class=\"input-group\">\n                              <span class=\"input-group-addon\">Total amount of all clouds</span>\n                              <select name=\"TotalAmountOfAllClouds\" [(ngModel)]=\"form.TotalAmountOfAllClouds\"    onkeyup=\"allowIntegerInputOnly(this)\"  class=\"form-control\"  placeholder=\" Enter total amount of All clouds\" >\n                                <option value=\"\">--Select Total Amount Of All Clouds </option>\n                                <option value=\"0\">0</option>\n                                <option value=\"1\">1</option>\n                                <option value=\"2\">2</option>\n                                <option value=\"3\">3</option>\n                                <option value=\"4\">4</option>\n                                <option value=\"5\">5</option>\n                                <option value=\"6\">6</option>\n                                <option value=\"7\">7</option>\n                                <option value=\"8\">8</option>\n                              </select>\n                            </div>\n                        </td>\n                        <td colspan=\"6\">\n\n\n                            <div class=\"input-group\">\n                              <span class=\"input-group-addon\">Total amount of low clouds</span>\n                              <select  name=\"TotalAmountOfLowClouds\" [(ngModel)]=\"form.TotalAmountOfLowClouds\" onkeyup=\"allowIntegerInputOnly(this)\"   class=\"form-control\"  placeholder=\"Enter total amount of Low clouds\" >\n                                <option value=\"\">--Select Total Amount of Low Clouds </option>\n                                <option value=\"0\">0</option>\n                                <option value=\"1\">1</option>\n                                <option value=\"2\">2</option>\n                                <option value=\"3\">3</option>\n                                <option value=\"4\">4</option>\n                                <option value=\"5\">5</option>\n                                <option value=\"6\">6</option>\n                                <option value=\"7\">7</option>\n                                <option value=\"8\">8</option>\n\n\n                              </select>\n                            </div>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td colspan = \"4\">\n                          <b>Low</b>\n                        </td>\n                        <td colspan = \"4\">\n                          <b>Medium</b>\n                        </td>\n                        <td colspan = \"4\">\n                          <b>High</b>\n                        </td>\n                      </tr>\n                      <tr>\n                          <td><b>type</b></td> <td><b>oktas</b></td> <td><b>height</b></td> <td><b>clcode</b></td> <td><b>type</b></td> <td><b>oktas</b></td>\n                          <td><b>height</b></td> <td><b>clcode</b></td> <td><b>type</b></td> <td><b>oktas</b></td> <td><b>height</b></td> <td><b>clcode</b></td>\n\n                        </tr>\n\n                        <!-- Type 1 clouds -->\n\n                        <tr>\n                            <td>\n                            <select  name=\"TypeOfLowClouds1\"  [(ngModel)]=\"form.TypeOfLowClouds1\"  onkeyup=\"allowIntegerInputOnly(this)\"  class=\"form-control\"  placeholder=\"Enter Type of LOW Cloud\" >\n                            <option value=\"\"></option>\n                            <option value=\"0\">0</option>\n                            <option value=\"1\">1</option>\n                            <option value=\"2\">2</option>\n                            <option value=\"3\">3</option>\n                            <option value=\"4\">4</option>\n                            <option value=\"5\">5</option>\n                            <option value=\"6\">6</option>\n                            <option value=\"7\">7</option>\n                            <option value=\"8\">8</option>\n                            <option value=\"9\">9</option>\n\n                            </select>\n                            </td>\n\n                            <td>\n                              <select name=\"OktasOfLowClouds1\"  [(ngModel)]=\"form.OktasOfLowClouds1\"  onkeyup=\"allowIntegerInputOnly(this)\" class=\"form-control\" placeholder=\"Enter OKTAS  for LOW CLOUD\" >\n                              <option value=\"\"></option>\n                              <option value=\"0\">0</option>\n                              <option value=\"1\">1</option>\n                              <option value=\"2\">2</option>\n                              <option value=\"3\">3</option>\n                              <option value=\"4\">4</option>\n                              <option value=\"5\">5</option>\n                              <option value=\"6\">6</option>\n                              <option value=\"7\">7</option>\n                              <option value=\"8\">8</option>\n\n\n                            </select>\n                            </td>\n\n                            <td>\n                              <input type=\"text\" name=\"HeightOfLowClouds1\"   [(ngModel)]=\"form.HeightOfLowClouds1\"  onkeyup=\"allowIntegerInputOnly(this)\"  class=\"form-control\" placeholder=\"0\" style = 'width:70px;'>\n                            </td>\n\n                            <td>\n                              <select  name=\"CLCODEOfLowClouds1\"   [(ngModel)]=\"form.CLCODEOfLowClouds1\"  onkeyup=\"allowCharactersInputOnly(this)\"  class=\"form-control\" placeholder=\" Enter CLCODE of  LOW CLOUD \" >\n                              <option value=\"\"></option>\n                              <option value=\"Sc\">Sc</option>\n                              <option value=\"St\">St</option>\n                              <option value=\"Cu\">Cu</option>\n                              <option value=\"Cb\">Cb</option>\n\n                            </select>\n                            </td>\n\n                            <td>\n                              <select name=\"TypeOfLowClouds2\"   [(ngModel)]=\"form.TypeOfLowClouds2\"  onkeyup=\"allowIntegerInputOnly(this)\"  class=\"form-control\"  placeholder=\"Enter TYPE OF MEDIUM CLOUD\" >\n                              <option value=\"\"></option>\n                              <option value=\"0\">0</option>\n                              <option value=\"1\">1</option>\n                              <option value=\"2\">2</option>\n                              <option value=\"3\">3</option>\n                              <option value=\"4\">4</option>\n                              <option value=\"5\">5</option>\n                              <option value=\"6\">6</option>\n                              <option value=\"7\">7</option>\n                              <option value=\"8\">8</option>\n                              <option value=\"9\">9</option>\n                              </select>\n                            </td>\n\n                            <td>\n                              <select name=\"OktasOfLowClouds2\"  [(ngModel)]=\"form.OktasOfLowClouds2\"  onkeyup=\"allowIntegerInputOnly(this)\"  class=\"form-control\" placeholder=\"Enter OKTAS  OF MEDIUM CLOUD\" >\n                              <option value=\"\"> </option>\n                              <option value=\"0\">0</option>\n                              <option value=\"1\">1</option>\n                              <option value=\"2\">2</option>\n                              <option value=\"3\">3</option>\n                              <option value=\"4\">4</option>\n                              <option value=\"5\">5</option>\n                              <option value=\"6\">6</option>\n                              <option value=\"7\">7</option>\n                              <option value=\"8\">8</option>\n                              </select>\n                            </td>\n\n                            <td>\n                              <input type=\"text\" name=\"HeightOfLowClouds2\"   [(ngModel)]=\"form.HeightOfLowClouds2\"  onkeyup=\"allowIntegerInputOnly(this)\"  class=\"form-control\" placeholder=\" 0 \" style = \"width:70px;\">\n                            </td>\n\n                            <td>\n                              <select name=\"CLCODEOfLowClouds2\"   [(ngModel)]=\"form.CLCODEOfLowClouds2\"  onkeyup=\"allowCharactersInputOnly(this)\"  class=\"form-control\" placeholder=\" Enter CL CODE MEDIUM CLOUD \" >\n                              <option value=\"\"> </option>\n                              <option value=\"Ac\">Ac</option>\n                              <option value=\"As\">As</option>\n                              <option value=\"Ns\">Ns</option>\n                              </select>\n                            </td>\n                            <td>\n                              <select name=\"TypeOfLowClouds3\"   [(ngModel)]=\"form.TypeOfLowClouds3\"  onkeyup=\"allowIntegerInputOnly(this)\"  class=\"form-control\"  placeholder=\"Enter TYPE OF HIGH CLOUD\" >\n                                <option value=\"\"> </option>\n                                <option value=\"0\">0</option>\n                                <option value=\"1\">1</option>\n                                <option value=\"2\">2</option>\n                                <option value=\"3\">3</option>\n                                <option value=\"4\">4</option>\n                                <option value=\"5\">5</option>\n                                <option value=\"6\">6</option>\n                                <option value=\"7\">7</option>\n                                <option value=\"8\">8</option>\n                                <option value=\"9\">9</option>\n                              </select>\n                            </td>\n                            <td>\n                               <select name=\"\tOktasOfLowClouds3\"  [(ngModel)]=\"form.OktasOfLowClouds3\"  onkeyup=\"allowIntegerInputOnly(this)\"  class=\"form-control\" placeholder=\"Enter OKTAS OF HIGH CLOUD\" >\n                                <option value=\"\"> </option>\n                                <option value=\"0\">0</option>\n                                <option value=\"1\">1</option>\n                                <option value=\"2\">2</option>\n                                <option value=\"3\">3</option>\n                                <option value=\"4\">4</option>\n                                <option value=\"5\">5</option>\n                                <option value=\"6\">6</option>\n                                <option value=\"7\">7</option>\n                                <option value=\"8\">8</option>\n                              </select>\n                            </td>\n                            <td>\n                               <input type=\"text\" name=\"HeightOfLowClouds3\"   [(ngModel)]=\"form.HeightOfLowClouds3\"  onkeyup=\"allowIntegerInputOnly(this)\"  class=\"form-control\" placeholder=\" 0 \" style = \"width:70px;\">\n                            </td>\n                            <td>\n                              <select name=\"CLCODEOfLowClouds3\"   [(ngModel)]=\"form.CLCODEOfLowClouds3\"  onkeyup=\"allowCharactersInputOnly(this)\"  class=\"form-control\" placeholder=\" Enter CLCODE OF MEDIUM CLOUD \" >\n                                <option value=\"\"></option>\n                                <option value=\"Cl\">Cl</option>\n                                <option value=\"Cc\">Cc</option>\n                                <option value=\"Cs\">Cs</option>\n\n                              </select>\n                            </td>\n                          </tr>\n\n                          <!--  Type 2 clouds -->\n\n                          <tr>\n                              <td>\n                                <select  name=\"TypeOfMediumClouds1\"   [(ngModel)]=\"form.TypeOfMediumClouds1\"  onkeyup=\"allowIntegerInputOnly(this)\"  class=\"form-control\"  placeholder=\"Enter Type of LOW CLOUD\" >\n                                <option value=\"\"></option>\n                                <option value=\"0\">0</option>\n                                <option value=\"1\">1</option>\n                                <option value=\"2\">2</option>\n                                <option value=\"3\">3</option>\n                                <option value=\"4\">4</option>\n                                <option value=\"5\">5</option>\n                                <option value=\"6\">6</option>\n                                <option value=\"7\">7</option>\n                                <option value=\"8\">8</option>\n                                <option value=\"9\">9</option>\n\n                                </select>\n                              </td>\n\n                              <td>\n                                <select name=\"OktasOfMediumClouds1\"  [(ngModel)]=\"form.OktasOfMediumClouds1\"  onkeyup=\"allowIntegerInputOnly(this)\" class=\"form-control\" placeholder=\"Enter OKTAS OF LOW CLOUD\" >\n                                <option value=\"\"> </option>\n                                <option value=\"0\">0</option>\n                                <option value=\"1\">1</option>\n                                <option value=\"2\">2</option>\n                                <option value=\"3\">3</option>\n                                <option value=\"4\">4</option>\n                                <option value=\"5\">5</option>\n                                <option value=\"6\">6</option>\n                                <option value=\"7\">7</option>\n                                <option value=\"8\">8</option>\n                              </select>\n                              </td>\n\n                              <td>\n                                <input type=\"text\" name=\"HeightOfMediumClouds1\"  [(ngModel)]=\"form.HeightOfMediumClouds1\" onkeyup=\"allowIntegerInputOnly(this)\"  class=\"form-control\" placeholder=\"0\" style = \"width:70px;\">\n\n                              </td>\n                              <td>\n                                <select  name=\"CLCODEOfMediumClouds1\"  [(ngModel)]=\"form.CLCODEOfMediumClouds1\" onkeyup=\"allowCharactersInputOnly(this)\"  class=\"form-control\" placeholder=\" Enter CLCODE of LOW CLOUD \" >\n                                <option value=\"\"> </option>\n                                <option value=\"Sc\">Sc</option>\n                                <option value=\"St\">St</option>\n                                <option value=\"Cu\">Cu</option>\n                                <option value=\"Cb\">Cb</option>\n                              </select>\n                              </td>\n                              <td>\n                                <select name=\"TypeOfMediumClouds2\"   [(ngModel)]=\"form.TypeOfMediumClouds2\"  onkeyup=\"allowIntegerInputOnly(this)\"  class=\"form-control\"  placeholder=\"Enter TYPE OF MEDIUM CLOUD\" >\n                                <option value=\"\"></option>\n                                <option value=\"0\">0</option>\n                                <option value=\"1\">1</option>\n                                <option value=\"2\">2</option>\n                                <option value=\"3\">3</option>\n                                <option value=\"4\">4</option>\n                                <option value=\"5\">5</option>\n                                <option value=\"6\">6</option>\n                                <option value=\"7\">7</option>\n                                <option value=\"8\">8</option>\n                                <option value=\"9\">9</option>\n                                </select>\n                              </td>\n                              <td>\n                                <select name=\"OktasOfMediumClouds2\"  [(ngModel)]=\"form.OktasOfMediumClouds2\"  onkeyup=\"allowIntegerInputOnly(this)\"  class=\"form-control\" placeholder=\"Enter OKTAS OF MEDIUM CLOUD\" >\n                                <option value=\"\"> </option>\n                                <option value=\"0\">0</option>\n                                <option value=\"1\">1</option>\n                                <option value=\"2\">2</option>\n                                <option value=\"3\">3</option>\n                                <option value=\"4\">4</option>\n                                <option value=\"5\">5</option>\n                                <option value=\"6\">6</option>\n                                <option value=\"7\">7</option>\n                                <option value=\"8\">8</option>\n                                </select>\n                              </td>\n                              <td>\n                                 <input type=\"text\" name=\"HeightOfMediumClouds2\"  [(ngModel)]=\"form.HeightOfMediumClouds2\"  onkeyup=\"allowIntegerInputOnly(this)\"  class=\"form-control\" placeholder=\" 0 \"  style = \"width: 70px\">\n                              </td>\n                              <td>\n                                 <select name=\"CLCODEOfMediumClouds2\"  [(ngModel)]=\"form.CLCODEOfMediumClouds2\"  onkeyup=\"allowCharactersInputOnly(this)\"  class=\"form-control\" placeholder=\" Enter CL CODE OF MEDIUM CLOUD \" >\n                                <option value=\"\"> </option>\n                                <option value=\"Ac\">Ac</option>\n                                <option value=\"As\">As</option>\n                                <option value=\"Ns\">Ns</option>\n\n\n                                </select>\n                              </td>\n                              <td>\n                                 <select name=\"TypeOfMediumClouds3\"  [(ngModel)]=\"form.TypeOfMediumClouds3\"  onkeyup=\"allowIntegerInputOnly(this)\"  class=\"form-control\"  placeholder=\"Enter TYPE OF HIGH CLOUD\" >\n                                  <option value=\"\"> </option>\n                                  <option value=\"0\">0</option>\n                                  <option value=\"1\">1</option>\n                                  <option value=\"2\">2</option>\n                                  <option value=\"3\">3</option>\n                                  <option value=\"4\">4</option>\n                                  <option value=\"5\">5</option>\n                                  <option value=\"6\">6</option>\n                                  <option value=\"7\">7</option>\n                                  <option value=\"8\">8</option>\n                                  <option value=\"9\">9</option>\n                                </select>\n                              </td>\n                              <td>\n                                 <select name=\"OktasOfMediumClouds3\"  [(ngModel)]=\"form.OktasOfMediumClouds3\"  onkeyup=\"allowIntegerInputOnly(this)\"  class=\"form-control\" placeholder=\"Enter OKTAS OF HIGH CLOUD\" >\n                                  <option value=\"\"> </option>\n                                  <option value=\"0\">0</option>\n                                  <option value=\"1\">1</option>\n                                  <option value=\"2\">2</option>\n                                  <option value=\"3\">3</option>\n                                  <option value=\"4\">4</option>\n                                  <option value=\"5\">5</option>\n                                  <option value=\"6\">6</option>\n                                  <option value=\"7\">7</option>\n                                  <option value=\"8\">8</option>\n                                </select>\n                              </td>\n                              <td>\n                                <input type=\"text\" name=\"HeightOfMediumClouds3\"  [(ngModel)]=\"form.HeightOfMediumClouds3\" onkeyup=\"allowIntegerInputOnly(this)\"  class=\"form-control\" placeholder=\" 0 \" style = \"width:70px;\">\n                              </td>\n                              <td>\n                                 <select name=\"CLCODEOfMediumClouds3\"   [(ngModel)]=\"form.CLCODEOfMediumClouds3\"  onkeyup=\"allowCharactersInputOnly(this)\"  class=\"form-control\" placeholder=\" Enter CL CODE MEDIUM CLOUD \" >\n                                  <option value=\"\"></option>\n                                  <option value=\"Cl\">Cl</option>\n                                  <option value=\"Cc\">Cc</option>\n                                  <option value=\"Cs\">Cs</option>\n                                </select>\n                              </td>\n                            </tr>\n\n                             <!-- Type 3 clouds -->\n                             <tr>\n                                <td>\n                                  <select  name=\"TypeOfHighClouds1\"   [(ngModel)]=\"form.TypeOfHighClouds1\"  onkeyup=\"allowIntegerInputOnly(this)\"  class=\"form-control\"  placeholder=\"Enter Type of low Cloud\" >\n                                  <option value=\"\"></option>\n                                  <option value=\"0\">0</option>\n                                  <option value=\"1\">1</option>\n                                  <option value=\"2\">2</option>\n                                  <option value=\"3\">3</option>\n                                  <option value=\"4\">4</option>\n                                  <option value=\"5\">5</option>\n                                  <option value=\"6\">6</option>\n                                  <option value=\"7\">7</option>\n                                  <option value=\"8\">8</option>\n                                  <option value=\"9\">9</option>\n\n                                </select>\n                                </td>\n\n                                <td>\n                                  <select name=\"OktasOfHighClouds1\"  [(ngModel)]=\"form.OktasOfHighClouds1\"  onkeyup=\"allowIntegerInputOnly(this)\" class=\"form-control\" placeholder=\"Enter OKTAS of LOW CLOUD\" >\n                                  <option value=\"\"> </option>\n                                  <option value=\"0\">0</option>\n                                  <option value=\"1\">1</option>\n                                  <option value=\"2\">2</option>\n                                  <option value=\"3\">3</option>\n                                  <option value=\"4\">4</option>\n                                  <option value=\"5\">5</option>\n                                  <option value=\"6\">6</option>\n                                  <option value=\"7\">7</option>\n                                  <option value=\"8\">8</option>\n                                </select>\n                                </td>\n\n                                <td>\n                                  <input type=\"text\" name=\"HeightOfHighClouds1\"   [(ngModel)]=\"form.HeightOfHighClouds1\"  onkeyup=\"allowIntegerInputOnly(this)\"  class=\"form-control\" placeholder=\" 0 \"  style = \"width: 70px;\">\n                                </td>\n\n                                <td>\n                                  <select  name=\"CLCODEOfHighClouds1\"   [(ngModel)]=\"form.CLCODEOfHighClouds1\"  onkeyup=\"allowCharactersInputOnly(this)\"  class=\"form-control\" placeholder=\" Enter CLCODE of LOW CLOUD \" >\n                                  <option value=\"\"> </option>\n                                  <option value=\"Sc\">Sc</option>\n                                  <option value=\"St\">St</option>\n                                  <option value=\"Cu\">Cu</option>\n                                  <option value=\"Cb\">Cb</option>\n\n                                </select>\n                                </td>\n                                <td>\n                                  <select name=\"TypeOfHighClouds2\"   [(ngModel)]=\"form.TypeOfHighClouds2\"  onkeyup=\"allowIntegerInputOnly(this)\"  class=\"form-control\"  placeholder=\"Enter TYPE OF MEDIUM CLOUD\" >\n                                  <option value=\"\"></option>\n                                  <option value=\"0\">0</option>\n                                  <option value=\"1\">1</option>\n                                  <option value=\"2\">2</option>\n                                  <option value=\"3\">3</option>\n                                  <option value=\"4\">4</option>\n                                  <option value=\"5\">5</option>\n                                  <option value=\"6\">6</option>\n                                  <option value=\"7\">7</option>\n                                  <option value=\"8\">8</option>\n                                  <option value=\"9\">9</option>\n                                  </select>\n                                </td>\n                                <td>\n                                  <select name=\"OktasOfHighClouds2\"  [(ngModel)]=\"form.OktasOfHighClouds2\"  onkeyup=\"allowIntegerInputOnly(this)\"  class=\"form-control\" placeholder=\"Enter OKTAS OF MEDIUM CLOUD\" >\n                                  <option value=\"\"> </option>\n                                  <option value=\"0\">0</option>\n                                  <option value=\"1\">1</option>\n                                  <option value=\"2\">2</option>\n                                  <option value=\"3\">3</option>\n                                  <option value=\"4\">4</option>\n                                  <option value=\"5\">5</option>\n                                  <option value=\"6\">6</option>\n                                  <option value=\"7\">7</option>\n                                  <option value=\"8\">8</option>\n                                  </select>\n                                </td>\n                                <td>\n                                   <input type=\"text\" name=\"HeightOfHighClouds2\"   [(ngModel)]=\"form.HeightOfHighClouds2\"  onkeyup=\"allowIntegerInputOnly(this)\"  class=\"form-control\" placeholder=\" 0 \" style = \"width:70px;\">\n                                </td>\n                                <td>\n                                   <select name=\"CLCODEOfHighClouds2\"  [(ngModel)]=\"form.CLCODEOfHighClouds2\"  onkeyup=\"allowCharactersInputOnly(this)\"  class=\"form-control\" placeholder=\" Enter CL CODE OF MEDIUM CLOUD \" >\n                                     <option value=\"\"> </option>\n                                    <option value=\"Ac\">Ac</option>\n                                    <option value=\"As\">As</option>\n                                    <option value=\"Ns\">Ns</option>\n                                  </select>\n                                </td>\n                                <td>\n                                   <select name=\"TypeOfHighClouds3\"   [(ngModel)]=\"form.TypeOfHighClouds3\"  onkeyup=\"allowIntegerInputOnly(this)\"  class=\"form-control\"  placeholder=\"Enter TYPE HIGH CLOUD\" >\n                                    <option value=\"\"></option>\n                                    <option value=\"0\">0</option>\n                                    <option value=\"1\">1</option>\n                                    <option value=\"2\">2</option>\n                                    <option value=\"3\">3</option>\n                                    <option value=\"4\">4</option>\n                                    <option value=\"5\">5</option>\n                                    <option value=\"6\">6</option>\n                                    <option value=\"7\">7</option>\n                                    <option value=\"8\">8</option>\n                                    <option value=\"9\">9</option>\n                                  </select>\n                                </td>\n                                <td>\n                                  <select name=\"OktasOfHighClouds3\"  [(ngModel)]=\"form.OktasOfHighClouds3\" onkeyup=\"allowIntegerInputOnly(this)\"  class=\"form-control\" placeholder=\"Enter OKTAS HIGH CLOUD\" >\n                                  <option value=\"\"> </option>\n                                  <option value=\"0\">0</option>\n                                  <option value=\"1\">1</option>\n                                  <option value=\"2\">2</option>\n                                  <option value=\"3\">3</option>\n                                  <option value=\"4\">4</option>\n                                  <option value=\"5\">5</option>\n                                  <option value=\"6\">6</option>\n                                  <option value=\"7\">7</option>\n                                  <option value=\"8\">8</option>\n                                </select>\n                                </td>\n                                <td>\n                                  <input type=\"text\" name=\"HeightOfHighClouds3\"   [(ngModel)]=\"form.HeightOfHighClouds3\"  onkeyup=\"allowIntegerInputOnly(this)\"  class=\"form-control\" placeholder=\" 0 \" style = \"width:70px;\">\n                                </td>\n                                <td>\n                                   <select name=\"CLCODEOfHighClouds3\"   [(ngModel)]=\"form.CLCODEOfHighClouds3\"  onkeyup=\"allowCharactersInputOnly(this)\"  class=\"form-control\" placeholder=\" Enter CL CODE MEDIUM CLOUD \" >\n                                    <option value=\"\"></option>\n                                    <option value=\"Cl\">Cl</option>\n                                    <option value=\"Cc\">Cc</option>\n                                    <option value=\"Cs\">Cs</option>\n                                  </select>\n                                </td>\n                              </tr>\n                              <tr>\n                                  <td colspan=\"6\">\n                                    <div class=\"input-group\">\n                                      <span class=\"input-group-addon\">Cloud Searchlight Alidade Reading</span>\n                                      <input type=\"text\" name=\"CLCODEOfHighClouds3\"  [(ngModel)]=\"form.CLCODEOfHighClouds3\"  onkeyup=\"allowIntegerInputOnly(this)\"  class=\"form-control\" placeholder=\"Enter Cloud Searchlight Alidade Reading\" >\n                                    </div>\n                                  </td>\n                                  <td colspan=\"6\">\n                                    <div class=\"input-group\">\n                                    <span class=\"input-group-addon\">Rainfall(mm)</span>\n                                    <input type=\"text\" name=\"Rainfall\"  [(ngModel)]=\"form.Rainfall\"    class=\"form-control\" placeholder=\"Enter Rainfall(mm)\" >\n                                  </div>\n                                  </td>\n                                </tr>\n                      </table>\n\n                          <!-- Section 2 -->\n                          <div>\n                              <table id=\"example1\" class=\"table table-bordered table-striped\">\n                                <tr>\n                                  <td>\n                                    <div class=\"input-group\">\n                                      <span class=\"input-group-addon\">Unit of Wind Speed</span>\n                                      <select  name=\"UnitOfWindSpeed\"  [(ngModel)]=\"form.UnitOfWindSpeed\"  onkeyup=\"allowIntegerInputOnly(this)\"  class=\"form-control\"  placeholder=\"Enter the Unit of Wind Speed\" >\n                                        <option value=\"\"></option>\n                                        <option value=\"1\">1</option>\n                                        <option value=\"2\">2</option>\n                                        <option value=\"3\">3</option>\n                                        <option value=\"4\">4</option>\n                                        <option value=\"5\">5</option>\n                                        <option value=\"6\">6</option>\n\n\n\n                                      </select>\n                                    </div>\n                                  </td>\n                                  <td>\n                                     <div class=\"input-group\">\n                                      <span class=\"input-group-addon\">Ind. or omission of precipitation</span>\n                                      <select name=\"IndOrOmissionOfPrecipitation\" [(ngModel)]=\"form.IndOrOmissionOfPrecipitation\"  onkeyup=\"allowIntegerInputOnly(this)\"  class=\"form-control\"  placeholder=\"Enter the Ind. or omission of precipitation \" >\n                                        <option value=\"\"></option>\n                                        <option value=\"1\">1</option>\n                                        <option value=\"2\">2</option>\n                                        <option value=\"3\">3</option>\n\n                                      </select>\n                                    </div>\n                                  </td>\n                                </tr>\n\n                                <tr>\n                                  <td>\n                                    <div class=\"input-group\">\n                                      <span class=\"input-group-addon\">Type of station/present & past weather</span>\n                                      <select name=\"TypeOfStation_Present_Past_Weather\"  [(ngModel)]=\"form.TypeOfStation_Present_Past_Weather\"  onkeyup=\"allowIntegerInputOnly(this)\"  class=\"form-control\"  placeholder=\"Enter the Type of station/present & past weather\" >\n                                        <option value=\"\"></option>\n                                        <option value=\"1\">1</option>\n                                        <option value=\"2\">2</option>\n                                        <option value=\"3\">3</option>\n\n                                      </select>\n                                    </div>\n                                  </td>\n                                  <td>\n                                     <div class=\"input-group\">\n                                      <span class=\"input-group-addon\">Height Of Lowest Cloud</span>\n                                      <select  name=\"HeightOfLowestCloud\"  [(ngModel)]=\"form.HeightOfLowestCloud\"  onkeyup=\"allowIntegerInputOnly(this)\"  class=\"form-control\"  placeholder=\"Enter the Height Of The Lowest Cloud\" >\n                                        <option value=\"\"></option>\n\n                                        <option value=\"1\">1</option>\n                                        <option value=\"2\">2</option>\n                                        <option value=\"3\">3</option>\n                                        <option value=\"4\">4</option>\n                                        <option value=\"5\">5</option>\n                                        <option value=\"6\">6</option>\n                                        <option value=\"7\">7</option>\n                                        <option value=\"8\">8</option>\n                                        <option value=\"9\">9</option>\n                                        <option value=\"10\">10</option>\n\n                                      </select>\n                                    </div>\n                                  </td>\n                                </tr>\n                                <tr>\n                                  <td>\n                                     <div class=\"input-group\">\n                                      <span class=\"input-group-addon\">Standard isobaric surface</span>\n                                      <input type=\"text\" name=\"StandardIsobaricSurface\"  value=\"\"  [(ngModel)]=\"form.StandardIsobaricSurface\" onkeyup=\"allowIntegerInputOnly(this)\"  class=\"form-control\"  placeholder=\"Enter the Standard isobaric surface\" >\n                                    </div>\n                                  </td>\n                                  <td>\n\n                                    <div class=\"input-group\">\n                                      <span class=\"input-group-addon\">Geopotential Of Standard Isobaric Surface</span>\n                                      <input type=\"text\"  name=\"GPM\"  [(ngModel)]=\"form.GPM\"   value=\"\" class=\"form-control\"  placeholder=\"Enter the Geopotential Of Standard Isobaric Surface\" >\n                                    </div>\n                                  </td>\n                                </tr>\n                                <tr>\n                                  <td>\n                                    <div class=\"input-group\">\n                                      <span class=\"input-group-addon\">Duration Of Period Of Precipitation</span>\n                                      <input type=\"text\"  name=\"CI_OfPrecipitation\"  [(ngModel)]=\"form.CI_OfPrecipitation\"    value=\"\" class=\"form-control\" placeholder=\"Enter the Duration Of Period Of Precipitation\" >\n                                    </div>\n                                  </td>\n                                  <td>\n\n                                  </td>\n                                </tr>\n                              </table>\n                            </div>\n\n                            <!-- Section 3 -->\n\n                            <div >\n                              <table id=\"example1\" class=\"table table-bordered table-striped\">\n                              <tr>\n                                <td>\n                                  <div class =\"input-group\">\n\n                                      <span class=\"input-group-addon\">PRESENT WEATHER CODE</span>\n                          <input type=\"text\" name=\"Present_WeatherCode\"  [(ngModel)]=\"form.Present_WeatherCode\"  onkeyup=\"allowIntegerInputOnly(this)\"  class=\"form-control\"  placeholder=\"Enter PRESENT WEATHER CODE\" >\n\n                                  </div>\n                                </td>\n                                <td>\n                                    <div class=\"input-group\">\n                                    <span class=\"input-group-addon\">PRESENT WEATHER</span>\n                                    <select name=\"Present_Weather\"  [(ngModel)]=\"form.Present_Weather\"    class=\"form-control\" placeholder=\"Enter PRESENT WEATHER\" >\n                                      <option value=\"\">--Select PRESENT WEATHER </option>\n                                      <option value=\"FG\">FG</option>  <!--FOG -->\n                                      <option value=\"HZ\">HZ</option>  <!--HAZE -->\n                                      <option value=\"TS\">TS</option>  <!--THUNDERSTORM -->\n                                      <option value=\"LL\">LL</option>  <!--LIGHTENING -->\n                                      <option value=\"BR\">BR</option>  <!--MIST -->\n                                      <option value=\"GR\">GR</option>  <!--HAIL -->\n                                      <option value=\"DZ\">DZ</option>  <!--DRIZZLE -->\n                                      <option value=\"RA\">RA</option>  <!--RAINFALL -->\n                                    </select>\n                                    </div>\n                                  </td>\n                              </tr>\n\n                              <tr>\n                                  <td>\n                                    <div class=\"input-group\">\n                                     <span class=\"input-group-addon\">Past Weather</span>\n                                     <input type=\"text\" name=\"Present_Weather\"  [(ngModel)]=\"form.Present_Weather\"    class=\"form-control\" placeholder=\" Enter Past Weather \" >\n                                   </div>\n                                  </td>\n                                  <td>\n\n                                  </td>\n                                </tr>\n\n                                <tr>\n                                    <td>\n                                      <div class=\"input-group\">\n                                      <span class=\"input-group-addon\">VISIBILITY</span>\n                                      <input type=\"text\" name=\"Visibility\"  [(ngModel)]=\"form.Visibility\"  onkeyup=\"allowIntegerInputOnly(this)\"  class=\"form-control\"  placeholder=\"Enter VISIBILITY\" >\n                                    </div>\n                                    </td>\n                                    <td>\n                                     <div class=\"input-group\">\n                                      <span class=\"input-group-addon\">GUSTING(KTS)</span>\n                                      <input type=\"text\" name=\"Gusting\"  [(ngModel)]=\"form.Gusting\"  onkeyup=\"allowIntegerInputOnly(this)\"  class=\"form-control\" placeholder=\"Enter GUSTING (KTS)\" >\n                                    </div>\n                                    </td>\n                                  </tr>\n\n                                  <tr>\n                                      <td colspan=\"2\" align = \"center\"><b>wind</b></td>\n                                    </tr>\n                                    <tr>\n                                      <td>\n                                         <div class=\"input-group\">\n                                          <span class=\"input-group-addon\">WIND DIRECTION</span>\n                                          <input type=\"text\" name=\"Wind_Direction\"  [(ngModel)]=\"form.Wind_Direction\"  onkeyup=\"allowIntegerInputOnly(this)\"   class=\"form-control\"  placeholder=\"Enter WIND DIRECTION\" >\n                                        </div>\n                                      </td>\n                                      <td>\n                                         <div class=\"input-group\">\n                                          <span class=\"input-group-addon\">WIND SPEED(KTS)</span>\n                                          <input type=\"text\" name=\"Wind_Speed\"  [(ngModel)]=\"form.Wind_Speed\"    class=\"form-control\"  placeholder=\"Enter WIND SPEED(KTS)\" >\n                                        </div>\n                                      </td>\n                                    </tr>\n                                     <tr id=\"hideformetar1\" >\n                                          <td>\n                                            <div class=\"input-group\">\n                                              <span class=\"input-group-addon\">SUN DURATION</span>\n                                              <input type=\"text\" name=\"sunduration\"  [(ngModel)]=\"form.sunduration\"    class=\"form-control\"    placeholder=\"Enter the Duration of Sunshine\" >\n                                            </div>\n                                          </td>\n                                          <td>\n                                            <div class=\"input-group\">\n                                              <span class=\"input-group-addon\">WIND RUN</span>\n                                              <input type=\"text\" name=\"windrun\"   [(ngModel)]=\"form.windrun\"   class=\"form-control\"  placeholder=\" Enter the  WIND RUN\" >\n                                            </div>\n\n                                          </td>\n                                        </tr>\n                                        <tr><td  colspan=\"2\" align = \"center\" ><b>Rainfall & Temperature:</b></td></tr>\n                                        <tr>\n                                          <td >\n                                            <div class=\"input-group\">\n                                            <span class=\"input-group-addon\">Dry Bulb</span>\n                                            <input type=\"text\" name=\"Dry_Bulb\"  [(ngModel)]=\"form.Dry_Bulb\"  onkeyup=\"allowIntegerInputOnly(this)\"   class=\"form-control\"  placeholder=\"Enter Dry Bulb\" >\n                                          </div>\n                                          </td>\n                                          <td>\n                                              <div class=\"input-group\">\n                                              <span class=\"input-group-addon\">Wet Bulb</span>\n                                              <input type=\"text\" name=\"Wet_Bulb\"  [(ngModel)]=\"form.Wet_Bulb\"  onkeyup=\"allowIntegerInputOnly(this)\"  class=\"form-control\"  placeholder=\"Enter Wet Bulb\" >\n                                            </div>\n                                            </td>\n                                        </tr>\n\n                              </table>\n                            </div>\n\n                          <!-- Section 4 -->\n\n                          <div >\n                              <table id=\"example1\" class=\"table table-bordered table-striped\">\n                                <tr>\n                                  <td>\n                                      <div class=\"input-group\">\n                                          <span class=\"input-group-addon\">Attd.Thermo.(C)</span>\n                                          <input type=\"text\" name=\"AttdThermo\"  [(ngModel)]=\"form.AttdThermo\" onkeyup=\"allowIntegerInputOnly(this)\"  class=\"form-control\" placeholder=\"Enter ATTD.THERMO.\" >\n                                        </div> <br>\n\n                                        <div class=\"input-group\">\n                                          <span class=\"input-group-addon\">Pr.As Read(C)</span>\n                                          <input type=\"text\" name=\"PrAsRead\"  [(ngModel)]=\"form.PrAsRead\"  onkeyup=\"allowIntegerInputOnly(this)\"  class=\"form-control\" placeholder=\"Enter Pr.As Read\" >\n                                        </div>\n                                  </td>\n                                  <td>\n                                      <div class=\"input-group\">\n                                        <span class=\"input-group-addon\">Correction</span>\n                                        <input type=\"text\" name=\"Correction\"  [(ngModel)]=\"form.Correction\"  onkeyup=\"allowIntegerInputOnly(this)\"  class=\"form-control\" placeholder=\"Enter Correction\" >\n                                      </div> <br>\n\n                                      <div class=\"input-group\">\n                                        <span class=\"input-group-addon\">C.L.P(mb)</span>\n                                        <input type=\"text\" name=\"CLP\" [(ngModel)]=\"form.CLP\"  onkeyup=\"allowIntegerInputOnly(this)\"  class=\"form-control\" placeholder=\"Enter C.L.P(mb)\" >\n                                      </div>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>\n                                    <div class=\"input-group\">\n                                    <span class=\"input-group-addon\">MIN TEMPERATURE(degrees celsius)</span>\n\n                                        <input id=\"inputCelsius\" name=\"Min_Read\" [(ngModel)]=\"form.Min_Read\" type=\"number\" value=\"\" onkeyup=\"allowIntegerInputOnly(this)\"    class=\"form-control\"  placeholder=\"Enter min temperature\" oninput=\"temperatureConverter(this.value)\" onchange=\"temperatureConverter(this.value)\">\n                                     </div>\n                                    </td>\n                                    <td>\n                                    <div class=\"input-group\">\n                                    <span class=\"input-group-addon\">MIN TEMPERATURE(degrees Fahrenheit)</span>\n                                      <input id=\"Piche_Read\" name=\"Piche_Read\" [(ngModel)]=\"form.Min_Read\"  disabled onkeyup=\"allowIntegerInputOnly(this)\" class=\"form-control\"  value=\"\"  placeholder=\"Enter min temperature\" >\n\n                                     </div>\n                                    </td>\n\n                                    </tr>\n                                    <tr>\n                                    <td>\n                                      <br>\n                                    <div class=\"input-group\">\n                                        <span class=\"input-group-addon\">MAX TEMPERATURE(degrees celicious)</span>\n                                          <input type=\"text\" name=\"Max_Read\" [(ngModel)]=\"form.Max_Read\"   onkeyup=\"allowIntegerInputOnly(this)\"   [(ngModel)]=\"form.TotalAmountOfLowClouds\"  class=\"form-control\" placeholder=\"Enter max temperature\" >\n                                    </div>\n\n                                            </td>\n                                            <td>\n                                              <br>\n\n                                              <div class=\"input-group\">\n                                                <span class=\"input-group-addon\">M.S.L.Pr(mb) or 850mb. Ht.(gpm)</span>\n                                                <input type=\"text\" name=\"MSLPr\" [(ngModel)]=\"form.MSLPr\"  onkeyup=\"allowIntegerInputOnly(this)\"  class=\"form-control\" placeholder=\"Enter M.S.L.Pr(mb) or 850mb. Ht.(gpm)\" >\n                                              </div>\n                                            </td>\n                                          </tr>\n                                          <tr>\n                                              <td colspan=\"2\" align = \"center\">Time marks</td>\n                                            </tr>\n\n                                            <tr>\n                                              <td>\n                                                 <div class=\"input-group\">\n                                                  <span class=\"input-group-addon\">TIME MARKS BAROGRAPH</span>\n                                                  <input type=\"text\" name=\"TimeMarksBarograph\"  [(ngModel)]=\"form.TimeMarksBarograph\"  onkeyup=\"allowIntegerInputOnly(this)\"  class=\"form-control\" placeholder=\"Enter TIME MARKS BAROGRAPH\" >\n                                                </div>\n                                              </td>\n                                              <td>\n                                                 <div class=\"input-group\">\n                                                  <span class=\"input-group-addon\">TIME MARKS ANEMOGRAPH</span>\n                                                  <input type=\"text\" name=\"TimeMarksAnemograph\"  [(ngModel)]=\"form.TotalAmountOfLowClouds\"  onkeyup=\"allowIntegerInputOnly(this)\"  class=\"form-control\" placeholder=\"Enter TIME MARKS ANEMOGRAPH\" >\n                                                </div>\n                                              </td>\n                                            </tr>\n                                            <tr>\n                                                <td>\n                                                  <div class=\"input-group\">\n                                                    <span class=\"input-group-addon\">Other T/MARKS </span>\n                                                    <input type=\"text\" name=\"OtherTMarks\"  [(ngModel)]=\"form.OtherTMarks\"  onkeyup=\"allowCharactersInputOnly(this)\"  class=\"form-control\" placeholder=\"Enter Other T/MARKS\" >\n                                                  </div>\n                                                </td>\n                                                <td>\n                                                   <div class=\"input-group\">\n                                                    <span class=\"input-group-addon\">Remarks or any other Observations </span>\n                                                    <input type=\"text\" name=\"Remarks\"  [(ngModel)]=\"form.Remarks\"  onkeyup=\"allowCharactersInputOnly(this)\"  class=\"form-control\" placeholder=\"Enter Remarks or any other Observations\" >\n                                                  </div>\n                                                </td>\n                                              </tr>\n\n                              </table>\n                          </div>\n\n                          <!-- Section 5 -->\n                          <div>\n                              <table id=\"example1\" class=\"table table-bordered table-striped\">\n                                <tr>\n                                  <td>\n                                    <div class=\"input-group\">\n                                        <span class=\"input-group-addon\">Unit of Wind Speed</span>\n                                        <select name=\"UnitOfWindSpeed\"  [(ngModel)]=\"form.UnitOfWindSpeed\" onkeyup=\"allowIntegerInputOnly(this)\"  class=\"form-control\"  placeholder=\"Enter the Unit of Wind Speed\" >\n                                          <option value=\"\">--Select Unit Of Wind Speed </option>\n\n                                          <option value=\"1\">1</option>\n                                          <option value=\"2\">2</option>\n                                          <option value=\"3\">3</option>\n                                          <option value=\"4\">4</option>\n                                          <option value=\"5\">5</option>\n                                          <option value=\"6\">6</option>\n\n\n\n                                        </select>\n                                    </div>\n                                  </td>\n                                  <td>\n                                      <div class=\"input-group\">\n                                       <span class=\"input-group-addon\">Ind. or omission of precipitation</span>\n                                       <select name=\"IndOrOmissionOfPrecipitation\"  [(ngModel)]=\"form.IndOrOmissionOfPrecipitation\"  onkeyup=\"allowIntegerInputOnly(this)\"  class=\"form-control\"  placeholder=\"Enter the Ind. or omission of precipitation \" >\n                                         <option value=\"\">--Select Ind. or omission of precipitation </option>\n\n                                         <option value=\"1\">1</option>\n                                         <option value=\"2\">2</option>\n                                         <option value=\"3\">3</option>\n\n                                       </select>\n                                     </div>\n                                   </td>\n                                </tr>\n                                <tr>\n                               <td>\n                                   <div class=\"input-group\">\n                                    <span class=\"input-group-addon\">Height Of Lowest Cloud</span>\n                                    <select name=\"HeightOfLowestCloud\"  [(ngModel)]=\"form.HeightOfLowestCloud\"  onkeyup=\"allowIntegerInputOnly(this)\"  class=\"form-control\"  placeholder=\"Enter the Height Of The Lowest Cloud\" >\n                                      <option value=\"\">--Select Height Of Lowest Cloud </option>\n\n                                      <option value=\"1\">1</option>\n                                      <option value=\"2\">2</option>\n                                      <option value=\"3\">3</option>\n                                      <option value=\"4\">4</option>\n                                      <option value=\"5\">5</option>\n                                      <option value=\"6\">6</option>\n                                      <option value=\"7\">7</option>\n                                      <option value=\"8\">8</option>\n                                      <option value=\"9\">9</option>\n                                      <option value=\"10\">10</option>\n\n                                    </select>\n                                  </div>\n                                </td>\n                                </tr>\n                                 <tr>\n                                    <td>\n                                       <div class=\"input-group\">\n                                        <span class=\"input-group-addon\">Standard isobaric surface</span>\n                                        <input type=\"text\" name=\"StandardIsobaricSurface\"  [(ngModel)]=\"form.StandardIsobaricSurface\"  onkeyup=\"allowIntegerInputOnly(this)\"  class=\"form-control\"  placeholder=\"Enter the Standard isobaric surface\" >\n                                      </div>\n                                    </td>\n                                    <td>\n\n                                      <div class=\"input-group\">\n                                        <span class=\"input-group-addon\">Geopotential Of Standard Isobaric Surface</span>\n                                        <input type=\"text\" name=\"GPM\"  [(ngModel)]=\"form.GPM\"   class=\"form-control\"  placeholder=\"Enter the Geopotential Of Standard Isobaric Surface\" >\n                                      </div>\n                                    </td>\n                                  </tr>\n                                  <tr>\n                                      <td>\n                                        <div class=\"input-group\">\n                                          <span class=\"input-group-addon\">Duration Of Period Of Precipitation</span>\n                                          <input type=\"text\" name=\"DurationOfPeriodOfPrecipitation\"  [(ngModel)]=\"form.DurationOfPeriodOfPrecipitation\"   class=\"form-control\" placeholder=\"Enter the Duration Of Period Of Precipitation\" >\n                                        </div>\n                                      </td>\n                                      <td>\n\n                                      </td>\n                                    </tr>\n\n                              </table>\n                          </div>\n\n                          <!-- Section 6 -->\n                          <div>\n                              <table id=\"example1\" class=\"table table-bordered table-striped\">\n                                  <tr>\n                                      <td>\n                                        <div class=\"input-group\">\n                                        <span class=\"input-group-addon\">Grass Mininum temperature</span>\n                                        <input type=\"text\"  name=\"GrassMinTemp\"  [(ngModel)]=\"form.GrassMinTemp\"  value=\"\"  class=\"form-control\" placeholder=\" Enter Grass Mininum temperature \" >\n                                      </div>\n                                      </td>\n                                      <td>\n                                        <div class=\"input-group\">\n                                          <span class=\"input-group-addon\">Character and Intensity of Precipitation</span>\n                                          <input type=\"text\"  name=\"CI_OfPrecipitation\"  [(ngModel)]=\"form.CI_OfPrecipitation\"   value=\"\"  class=\"form-control\"  placeholder=\" Enter Character and Intensity of Precipitation\" >\n                                        </div>\n                                      </td>\n                                    </tr>\n                                    <tr>\n                                        <td>\n                                          <div class=\"input-group\">\n                                            <span class=\"input-group-addon\">Beginning or End of Precipitation</span>\n                                            <input type=\"text\"  name=\"BE_OfPrecipitation\" value=\"\"  [(ngModel)]=\"form.BE_OfPrecipitation\"     class=\"form-control\"    placeholder=\"Enter Beginning or End of Precipitation\" >\n                                          </div>\n                                        </td>\n                                        <td>\n                                           <div class=\"input-group\">\n                                            <span class=\"input-group-addon\">Indicator of type of intrumentation</span>\n                                            <input type=\"text\"  name=\"IndicatorOfTypeOfIntrumentation\"   [(ngModel)]=\"form.IndicatorOfTypeOfIntrumentation\"    class=\"form-control\"    placeholder=\"Enter the Indicator of type of intrumentation\" >\n                                          </div>\n                                        </td>\n                                      </tr>\n                                      <tr>\n                                          <td>\n                                           <div class=\"input-group\">\n                                            <span class=\"input-group-addon\">Sign of Pressure Change</span>\n                                            <input type=\"text\"  name=\"SignOfPressureChange\"   [(ngModel)]=\"form.SignOfPressureChange\"    class=\"form-control\"    placeholder=\"Enter the Sign of Pressure Change\" >\n                                          </div>\n                                        </td>\n                                        <td>\n                                          <div class=\"input-group\">\n                                            <span class=\"input-group-addon\">Supplementary Information</span>\n                                            <input type=\"text\"  name=\"Supp_Info\"   [(ngModel)]=\"form.Supp_Info\"  onkeyup=\"allowCharactersInputOnly(this)\"  class=\"form-control\"   placeholder=\"Enter Supplementary Information\" >\n                                          </div>\n                                        </td>\n                                      </tr>\n                                      <tr>\n                                          <td>\n                                            <div class=\"input-group\">\n                                              <span class=\"input-group-addon\">Vapour Pressure</span>\n                                              <input type=\"text\" name=\"VapourPressure\" value=\"\"   [(ngModel)]=\"form.VapourPressure\"  onkeyup=\"allowIntegerInputOnly(this)\"  class=\"form-control\"   placeholder=\"Enter the Vapour Pressure\" >\n                                            </div>\n                                          </td>\n                                          <td>\n                                            <div class=\"input-group\">\n                                              <span class=\"input-group-addon\">TH GRAPH</span>\n                                              <input type=\"text\"  name=\"T_H_Graph\" value=\"\"   [(ngModel)]=\"form.T_H_Graph\"    class=\"form-control\"  placeholder=\" Enter TH GRAPH\" >\n                                            </div>\n                                          </td>\n                                        </tr>\n                                        <tr>\n                                          <td colspan = \"1\">\n                                              <span class=\"input-group-addon\">TREND</span>\n                                              <textarea  name=\"trend\" value=\"\"  class=\"form-control\" style=\"height:40px;\"  [(ngModel)]=\"form.trend\"  onkeyup=\"\"></textarea>\n                                          </td>\n                                          <td>\n                                            <div>\n                                                <span class=\"input-group-addon\">Approved</span>\n                                                <select name=\"Approved\"  [(ngModel)]=\"form.Approved\"  disabled  class=\"form-control\" >\n                                                    <option value=\"\"></option>\n                                                    <option value=\"TRUE\">TRUE</option>\n                                                    <option value=\"FALSE\">FALSE</option>\n                                                  </select>\n                                                  <input type=\"hidden\" name=\"Approved\"  [(ngModel)]=\"form.Approved\" >\n                                                  <select>\n                                                      <option value=\"\"></option>\n                                                      <option value=\"TRUE\">TRUE</option>\n                                                      <option value=\"FALSE\">FALSE</option>\n                                                  </select>\n                                            </div>\n                                          </td>\n                                        </tr>\n                              </table>\n                            </div>\n                            <button class=\"btn btn-success\">Submit Observationslip</button>\n                            <div *ngIf=\"f.submitted && failedToSubmit\" class=\"alert alert-warning\">\n                              Storing data failed!<br/>{{errorMessage}}\n                            </div>\n                 </form>\n            </div>\n            </section>\n        </aside>\n      </ng-template>\n\n"

/***/ }),

/***/ "./src/app/observationslipform/observationslipform.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/observationslipform/observationslipform.component.ts ***!
  \**********************************************************************/
/*! exports provided: ObservationslipformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservationslipformComponent", function() { return ObservationslipformComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_observationslip_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/observationslip-info */ "./src/app/auth/observationslip-info.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ObservationslipformComponent = /** @class */ (function () {
    function ObservationslipformComponent(formBuilder, router, authService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.form = {};
        this.submitted = false;
        this.failedToSubmit = false;
        this.errorMessage = '';
    }
    ObservationslipformComponent.prototype.ngOnInit = function () { };
    ObservationslipformComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.form);
        this.observatioslip = new _auth_observationslip_info__WEBPACK_IMPORTED_MODULE_3__["ObservationslipInfo"](this.form.Time, this.form.Date, this.form.Station, this.form.stationName, this.form.TotalAmountOfAllClouds, this.form.TotalAmountOfLowClouds, this.form.TypeOfLowClouds1, this.form.OktasOfLowClouds1, this.form.HeightOfLowClouds1, this.form.CLCODEOfLowClouds1, this.form.TypeOfLowClouds2, this.form.OktasOfLowClouds2, this.form.HeightOfLowClouds2, this.form.CLCODEOfLowClouds2, this.form.TypeOfLowClouds3, this.form.OktasOfLowClouds3, this.form.HeightOfLowClouds3, this.form.CLCODEOfLowClouds3, this.form.TypeOfMediumClouds1, this.form.OktasOfMediumClouds1, this.form.HeightOfMediumClouds1, this.form.CLCODEOfMediumClouds1, this.form.TypeOfMediumClouds2, this.form.OktasOfMediumClouds2, this.form.HeightOfMediumClouds2, this.form.CLCODEOfMediumClouds2, this.form.TypeOfMediumClouds3, this.form.OktasOfMediumClouds3, this.form.HeightOfMediumClouds3, this.form.CLCODEOfMediumClouds3, this.form.TypeOfHighClouds1, this.form.OktasOfHighClouds1, this.form.HeightOfHighClouds1, this.form.CLCODEOfHighClouds1, this.form.TypeOfHighClouds2, this.form.OktasOfHighClouds2, this.form.HeightOfHighClouds2, this.form.CLCODEOfHighClouds2, this.form.TypeOfHighClouds3, this.form.OktasOfHighClouds3, this.form.HeightOfHighClouds3, this.form.CLCODEOfHighClouds3, this.form.CloudSearchLightReading, this.form.Rainfall, this.form.Dry_Bulb, this.form.Wet_Bulb, this.form.Max_Read, this.form.Max_Reset, this.form.Min_Read, this.form.Min_Reset, this.form.Piche_Read, this.form.Piche_Reset, this.form.TimeMarksThermo, this.form.TimeMarksHygro, this.form.TimeMarksRainRec, this.form.Present_Weather, this.form.Present_WeatherCode, this.form.Past_Weather, this.form.Visibility, this.form.Wind_Direction, this.form.Wind_Speed, this.form.Gusting, this.form.AttdThermo, this.form.PrAsRead, this.form.Correction, this.form.CLP, this.form.MSLPr, this.form.TimeMarksBarograph, this.form.TimeMarksAnemograph, this.form.OtherTMarks, this.form.SoilMoisture, this.form.SoilTemperature, this.form.sunduration, this.form.trend, this.form.windrun, this.form.speciOrMetar, this.form.UnitOfWindSpeed, this.form.IndOrOmissionOfPrecipitation, this.form.TypeOfStation_Present_Past_Weather, this.form.HeightOfLowestCloud, this.form.StandardIsobaricSurface, this.form.GPM, this.form.DurationOfPeriodOfPrecipitation, this.form.GrassMinTemp, this.form.CI_OfPrecipitation, this.form.BE_OfPrecipitation, this.form.IndicatorOfTypeOfIntrumentation, this.form.SignOfPressureChange, this.form.Supp_Info, this.form.VapourPressure, this.form.T_H_Graph, this.form.DeviceType, this.form.SubmittedBy, this.form.Remarks, this.form.Approved);
        this.authService.storeObservationslip(this.observatioslip).subscribe(function (data) {
            console.log(data);
            _this.submitted = true;
            _this.failedToSubmit = false;
        }, function (error) {
            console.log(error);
            _this.errorMessage = error.error;
            _this.failedToSubmit = true;
        });
    };
    ObservationslipformComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-observationslipform',
            template: __webpack_require__(/*! ./observationslipform.component.html */ "./src/app/observationslipform/observationslipform.component.html"),
            styles: [__webpack_require__(/*! ./observationslipform.component.css */ "./src/app/observationslipform/observationslipform.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], ObservationslipformComponent);
    return ObservationslipformComponent;
}());



/***/ }),

/***/ "./src/app/pm/pm.component.css":
/*!*************************************!*\
  !*** ./src/app/pm/pm.component.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BtL3BtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pm/pm.component.html":
/*!**************************************!*\
  !*** ./src/app/pm/pm.component.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Content from Server</h4>\n<div *ngIf=\"userInfo\">\n    <p>Name: <strong>{{userInfo.name}}</strong></p>\n    <p>Email: <strong>{{userInfo.email}}</strong></p>\n</div>\n{{board}}\n{{errorMessage}}"

/***/ }),

/***/ "./src/app/pm/pm.component.ts":
/*!************************************!*\
  !*** ./src/app/pm/pm.component.ts ***!
  \************************************/
/*! exports provided: PmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PmComponent", function() { return PmComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PmComponent = /** @class */ (function () {
    function PmComponent(userService) {
        this.userService = userService;
    }
    PmComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getPMBoard().subscribe(function (data) {
            _this.userInfo = {
                name: data.user.name,
                email: data.user.email
            };
            _this.board = data.description;
        }, function (error) {
            _this.errorMessage = error.status + ": " + error.error;
        });
    };
    PmComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pm',
            template: __webpack_require__(/*! ./pm.component.html */ "./src/app/pm/pm.component.html"),
            styles: [__webpack_require__(/*! ./pm.component.css */ "./src/app/pm/pm.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], PmComponent);
    return PmComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isSignedUp; else signupForm\">\n  Your registration is successful. Please login!\n</div>\n\n<ng-template #signupForm>\n  <div class=\"row col-sm-6\" style=\"max-width:350px;\">\n    <form name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\n      <div class=\"form-group\">\n        <label for=\"name\">Your name</label>\n        <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"form.name\" #name=\"ngModel\" required />\n        <div *ngIf=\"f.submitted && name.invalid\">\n          <div *ngIf=\"name.errors.required\">Name is required</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"form.username\" #username=\"ngModel\"\n          required />\n        <div *ngIf=\"f.submitted && username.invalid\">\n          <div *ngIf=\"username.errors.required\">Username is required</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <input type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"form.email\" #email=\"ngModel\" required email />\n        <div *ngIf=\"f.submitted && email.invalid\">\n          <div *ngIf=\"email.errors.required\">Email is required</div>\n          <div *ngIf=\"email.errors.email\">Email must be a valid email address</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"form.password\" #password=\"ngModel\"\n          required minlength=\"6\" />\n        <div *ngIf=\"f.submitted && password.invalid\">\n          <div *ngIf=\"password.errors.required\">Password is required</div>\n          <div *ngIf=\"password.errors.minlength\">Password must be at least 6 characters</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">User Role</label>\n        <input type=\"text\" class=\"form-control\" name=\"roles[]\" [(ngModel)]=\"form.roles\" #roles=\"ngModel\" required />\n        <div *ngIf=\"f.submitted && roles.invalid\">\n          <div *ngIf=\"roles.errors.required\">User role is required</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <button class=\"btn btn-primary\">Register</button>\n        <div *ngIf=\"f.submitted && isSignUpFailed\" class=\"alert alert-warning\">\n          Signup failed!<br/>{{errorMessage}}\n        </div>\n      </div>\n    </form>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _auth_signup_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/signup-info */ "./src/app/auth/signup-info.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService) {
        this.authService = authService;
        this.form = {};
        this.isSignedUp = false;
        this.isSignUpFailed = false;
        this.errorMessage = '';
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.form);
        this.signupInfo = new _auth_signup_info__WEBPACK_IMPORTED_MODULE_2__["SignUpInfo"](this.form.name, this.form.username, this.form.email, this.form.password, this.form.roles);
        this.authService.signUp(this.signupInfo).subscribe(function (data) {
            console.log(data);
            _this.isSignedUp = true;
            _this.isSignUpFailed = false;
        }, function (error) {
            console.log(error);
            _this.errorMessage = error.error;
            _this.isSignUpFailed = true;
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.userUrl = 'http://localhost:8080/api/test/user';
        this.pmUrl = 'http://localhost:8080/api/test/pm';
        this.adminUrl = 'http://localhost:8080/api/test/admin';
    }
    UserService.prototype.getUserBoard = function () {
        return this.http.get(this.userUrl);
    };
    UserService.prototype.getPMBoard = function () {
        return this.http.get(this.pmUrl);
    };
    UserService.prototype.getAdminBoard = function () {
        return this.http.get(this.adminUrl);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Content from Server</h4>\n<div *ngIf=\"userInfo\">\n    <p>Name: <strong>{{userInfo.name}}</strong></p>\n    <p>Email: <strong>{{userInfo.email}}</strong></p>\n</div>\n{{board}}\n{{errorMessage}}"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { resolveSoa } from 'dns';
var UserComponent = /** @class */ (function () {
    function UserComponent(userService) {
        this.userService = userService;
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUserBoard().subscribe(function (data) {
            _this.userInfo = {
                name: data.user.name,
                email: data.user.email
            };
            _this.board = data.description;
        }, function (error) {
            _this.errorMessage = error.status + ": " + error.error;
        });
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/kisakyamuakama/Documents/new wdr/Front/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map