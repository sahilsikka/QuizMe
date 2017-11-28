webpackJsonp(["social-vis.module"],{

/***/ "../../../../../src/app/layout/social-vis/social-vis-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialVisRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__social_vis_component__ = __webpack_require__("../../../../../src/app/layout/social-vis/social-vis.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__social_vis_component__["a" /* SocialVisComponent */] }
];
var SocialVisRoutingModule = /** @class */ (function () {
    function SocialVisRoutingModule() {
    }
    SocialVisRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], SocialVisRoutingModule);
    return SocialVisRoutingModule;
}());

//# sourceMappingURL=social-vis-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/social-vis/social-vis.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <app-page-header [heading]=\"'Social Visulization'\" [icon]=\"'fa-bar-chart-o'\"></app-page-header>\n    <div class=\"row\">\n        <div class=\"page-header\">\n            <h1>Your Comparison with <u>{{opponentName}}</u></h1>\n            <hr>\n        </div>\n        <div class=\"col col-sm-6\">\n            <div class=\"card mb-3\">\n                <div class=\"card-header\">\n                    Topic Expertise\n                </div>\n                <div class=\"card-block\">\n                    <canvas baseChart height=\"150px\" [datasets]=\"radarChartData\" [labels]=\"radarChartLabels\"\n                            [chartType]=\"radarChartType\" (chartHover)=\"chartHovered($event)\"\n                            (chartClick)=\"chartClicked($event)\">\n                    </canvas>\n                </div>\n            </div>\n        </div>\n        <div class=\"col col-sm-6\">\n            <div class=\"card mb-3\">\n                <div class=\"card-header\">\n                    Performance\n                </div>\n                <div class=\"card-block\">\n                    <canvas baseChart height=\"130\" [datasets]=\"lineChartData\" [labels]=\"lineChartLabels\"\n                            [options]=\"lineChartOptions\" [colors]=\"lineChartColors\" [legend]=\"lineChartLegend\"\n                            [chartType]=\"lineChartType\" (chartHover)=\"chartHovered($event)\"\n                            (chartClick)=\"chartClicked($event)\">\n                    </canvas>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/layout/social-vis/social-vis.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/social-vis/social-vis.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialVisComponent; });
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




var SocialVisComponent = /** @class */ (function () {
    function SocialVisComponent(router, backend) {
        this.router = router;
        this.backend = backend;
        this.user = JSON.parse(localStorage.getItem('currentUser')) || {};
        this.userId = this.userId;
        this.radarChartData = [
            { data: [75, 55, 80, 70, 86], label: 'You' },
            { data: [60, 66, 77, 80, 76], label: this.opponentName }
        ];
        // lineChart
        this.lineChartData = [
            { data: [65, 59, 80, 81], label: 'You' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: this.opponentName },
        ];
        // Radar
        this.radarChartLabels = ['Arrays', 'Methods', 'Operators', 'Strings', 'Variables'];
        this.radarChartType = 'radar';
        this.lineChartLabels = ['Quiz 1', 'Quiz 2', 'Quiz 3', 'Quiz 4', 'Quiz 5', 'Quiz 6', 'Quiz 7'];
        this.lineChartOptions = {
            responsive: true
        };
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                backgroundColor: 'rgba(77,83,96,0.2)',
                borderColor: 'rgba(77,83,96,1)',
                pointBackgroundColor: 'rgba(77,83,96,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            },
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
    }
    SocialVisComponent.prototype.ngOnInit = function () {
        this.getOpponent();
    };
    SocialVisComponent.prototype.proficiency = function () {
    };
    // events
    SocialVisComponent.prototype.chartClicked = function (e) {
        // console.log(e);
    };
    SocialVisComponent.prototype.getOpponent = function () {
        var _this = this;
        this.opponentId = localStorage.getItem('opponent');
        this.backend.getUser(this.opponentId).subscribe(function (opp) {
            console.log(opp);
            _this.opponent = opp;
            console.log(_this.opponent);
            _this.opponentName = _this.opponent.fname + " " + _this.opponent.lname;
            console.log(_this.opponentName);
        });
    };
    SocialVisComponent.prototype.chartHovered = function (e) {
        // console.log(e);
    };
    SocialVisComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-social-vis',
            template: __webpack_require__("../../../../../src/app/layout/social-vis/social-vis.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/social-vis/social-vis.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__backend_service__["a" /* BackendService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__backend_service__["a" /* BackendService */]) === "function" && _b || Object])
    ], SocialVisComponent);
    return SocialVisComponent;
    var _a, _b;
}());

//# sourceMappingURL=social-vis.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/social-vis/social-vis.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialVisModule", function() { return SocialVisModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__social_vis_routing_module__ = __webpack_require__("../../../../../src/app/layout/social-vis/social-vis-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_modules_page_header_page_header_module__ = __webpack_require__("../../../../../src/app/shared/modules/page-header/page-header.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__social_vis_component__ = __webpack_require__("../../../../../src/app/layout/social-vis/social-vis.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SocialVisModule = /** @class */ (function () {
    function SocialVisModule() {
    }
    SocialVisModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__social_vis_routing_module__["a" /* SocialVisRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_4__shared_modules_page_header_page_header_module__["a" /* PageHeaderModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__social_vis_component__["a" /* SocialVisComponent */]]
        })
    ], SocialVisModule);
    return SocialVisModule;
}());

//# sourceMappingURL=social-vis.module.js.map

/***/ })

});
//# sourceMappingURL=social-vis.module.chunk.js.map