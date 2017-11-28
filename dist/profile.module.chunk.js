webpackJsonp(["profile.module"],{

/***/ "../../../../../src/app/layout/profile/profile-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_component__ = __webpack_require__("../../../../../src/app/layout/profile/profile.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__profile_component__["a" /* ProfileComponent */] }
];
var ProfileRoutingModule = /** @class */ (function () {
    function ProfileRoutingModule() {
    }
    ProfileRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], ProfileRoutingModule);
    return ProfileRoutingModule;
}());

//# sourceMappingURL=profile-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <app-page-header [heading]=\"'Profile'\" [icon]=\"'fa-edit'\"></app-page-header>\n\n    <div class=\"main-content\">\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n                <div class=\"card\">\n                    <div class=\"card-header\" data-background-color=\"red\">\n                        <h4 class=\"title\">Edit Profile</h4>\n                        <p class=\"category\">Complete your profile</p>\n                    </div>\n                    <div class=\"card-content\">\n                        <form>\n                            <div class=\"row\">\n                                <div class=\"col-sm-4\">\n                                    <div class=\"form-group form-black label-floating is-empty\">\n                                        <label class=\"control-label\">Email Address</label>\n                                        <input type=\"text\" class=\"form-control\" value=\"{{email}}\" disabled>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-4\">\n                                    <div class=\"form-group form-black label-floating is-empty\">\n                                        <label class=\"control-label\">First Name</label>\n                                        <input type=\"text\" class=\"form-control\" value=\"{{firstName}}\">\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-4\">\n                                    <div class=\"form-group form-black label-floating is-empty\">\n                                        <label class=\"control-label\">Last Name</label>\n                                        <input type=\"text\" class=\"form-control\" value=\"{{lastName}}\">\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-sm-4\">\n                                    <div class=\"form-group form-black label-floating is-empty\">\n                                        <label class=\"control-label\">Gender</label>\n                                        <input type=\"text\" class=\"form-control\" value=\"{{gender}}\">\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-4\">\n                                    <div class=\"form-group form-black label-floating is-empty\">\n                                        <label class=\"control-label\">Age</label>\n                                        <input type=\"text\" class=\"form-control\" value=\"{{age}}\">\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-sm-4\">\n                                    <div class=\"form-group form-black label-floating is-empty\">\n                                        <label class=\"control-label\">Country</label>\n                                        <input type=\"text\" class=\"form-control\" value=\"{{country}}\">\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-4\">\n                                    <div class=\"form-group form-black label-floating is-empty\">\n                                        <label class=\"control-label\">Organization</label>\n                                        <input type=\"text\" value=\"{{organization}}\" class=\"form-control\">\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-sm-4\">\n                                    <button type=\"submit\" class=\"btn btn-danger\">Update Profile</button>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"card card-profile\">\n                    <div class=\"card-avatar\">\n                        <a href=\"#pablo\">\n                            <img class=\"img\" src=\"../../../assets/img/faces/marc.jpg\"/>\n                        </a>\n                    </div>\n                    <div class=\"content\">\n                        <h4 class=\"card-title\">{{firstName}} {{lastName}}</h4>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/layout/profile/profile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__backend_service__ = __webpack_require__("../../../../../src/app/backend.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(router, backend) {
        this.router = router;
        this.backend = backend;
        this.user = JSON.parse(localStorage.getItem('currentUser')) || {};
        this.email = this.user.email;
        this.firstName = this.user.fname;
        this.lastName = this.user.lname;
        this.age = this.user.age;
        this.gender = this.user.gender;
        this.country = this.user.country;
        this.organization = this.user.orgaznization;
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent.prototype.register = function () {
        var _this = this;
        var payLoad = {};
        this.backend.createUser(payLoad).subscribe(function (response) {
            console.log(response);
            if (response.status === 'Success') {
                _this.router.navigateByUrl('/login');
            }
            else if (response.status === 'Email id exists') {
                alert('Email Id exists');
                _this.router.navigateByUrl('/login');
            }
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/layout/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/profile/profile.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__backend_service__["a" /* BackendService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__backend_service__["a" /* BackendService */]) === "function" && _b || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b;
}());

//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/profile/profile.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_routing_module__ = __webpack_require__("../../../../../src/app/layout/profile/profile-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_component__ = __webpack_require__("../../../../../src/app/layout/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__profile_routing_module__["a" /* ProfileRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__shared__["c" /* PageHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__profile_component__["a" /* ProfileComponent */]]
        })
    ], ProfileModule);
    return ProfileModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ })

});
//# sourceMappingURL=profile.module.chunk.js.map