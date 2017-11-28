webpackJsonp(["quiz-history.module"],{

/***/ "../../../../../src/app/layout/quiz-history/quiz-history-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizHistoryRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quiz_history_component__ = __webpack_require__("../../../../../src/app/layout/quiz-history/quiz-history.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__quiz_history_component__["a" /* QuizHistoryComponent */] }
];
var QuizHistoryRoutingModule = /** @class */ (function () {
    function QuizHistoryRoutingModule() {
    }
    QuizHistoryRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], QuizHistoryRoutingModule);
    return QuizHistoryRoutingModule;
}());

//# sourceMappingURL=quiz-history-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/quiz-history/quiz-history.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <app-page-header [heading]=\"'Quiz History'\" [icon]=\"'fa-desktop'\"></app-page-header>\n    <div class=\"row\">\n        <div class=\"col-sm-8\">\n            <div *ngFor=\"let item of result; let i = index;\" class=\"card mb-3\">\n                <div class=\"card-block\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-8\">\n                            <span class=\"icon-small\"><i class=\"fa fa-check-circle fa-fw\"\n                                                        style=\"float: left; font-size: 20px; color:#2ec866;\"></i>\n                            <h4 style=\"color: #2ec866; font-size: 1.3125em; opacity: .6;\"><b>Quiz Number: {{i + 1}}</b></h4>\n                            </span>\n                        </div>\n                        <div class=\"col-sm-4\" style=\"float: right\">\n                            <ngb-progressbar type=\"success\" [value]=\"item.score\" [max]=\"10\">\n                                <i>{{item.score*100/10}}%</i>\n                            </ngb-progressbar>\n                        </div>\n                    </div>\n                    <hr>\n                    <div class=\"small bold mdT pull-left\">\n                        <p class=\"col-sm-8\">\n                        </p>\n                        <span style=\"color: #979faf; font-weight: 900\">Your Score: </span>\n                        <span style=\"font-weight: 900\">{{item.score}}</span> &ensp;\n                        <span style=\"color: #979faf; font-weight: 900\">Max Score: </span>\n                        <span style=\"font-weight: 900\"> 10</span> &ensp;\n                        <span style=\"color: #979faf; font-weight: 900\">Difficulty: </span>\n                        <span style=\"font-weight: 900\"> Easy </span> &ensp;\n                    </div>\n                    <div style=\"float: right\">\n                        <button (click)=\"toggle($event)\" class=\"btn tn-sm btn-success\" id=\"{{i}}\"\n                                [routerLink]=\"['/question-history']\">Attempt\n                        </button>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col col-sm-4\">\n            <div class=\"card mb-3\">\n                <div class=\"card-header\">\n                    Performance over {{this.totalQuiz}} Quizzes.\n\n                </div>\n                <div class=\"card-block\">\n                    <canvas baseChart height=\"180px\"\n                            [colors]=\"colorsOverride\"\n                            [data]=\"[this.yourTotalScore,this.totalScore]\"\n                            [labels]=\"['Points Scored', 'Points Lost']\"\n                            [legend]=\"true\"\n                            [chartType]=\"'doughnut'\"\n                            [options]=\"options\"\n                            (chartHover)=\"chartHovered($event)\"\n                            (chartClick)=\"chartClicked($event)\">\n                    </canvas>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/layout/quiz-history/quiz-history.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".icon-small i {\n  float: left;\n  margin-right: 10px;\n  border-radius: 10%;\n  padding-top: 3px; }\n\n.icon-small + p {\n  clear: left;\n  margin-top: 15px; }\n\n.icon-small h4 {\n  text-align: left; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/quiz-history/quiz-history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizHistoryComponent; });
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




var QuizHistoryComponent = /** @class */ (function () {
    function QuizHistoryComponent(router, backend) {
        this.router = router;
        this.backend = backend;
        this.user = JSON.parse(localStorage.getItem('currentUser'));
        this.userId = this.user.id;
        this.options = {
            cutoutPercentage: 70,
            responsive: true,
            elements: {
                center: {
                    text: '90%',
                    color: '#FF6384',
                    fontStyle: 'Arial',
                    sidePadding: 20,
                }
            }
        };
        this.colorsOverride = [{
                backgroundColor: ['#2ec866', 'lightgrey'],
                hoverBackgroundColor: ['#2ec866', 'lightgrey']
            }];
    }
    QuizHistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        var i;
        this.backend.getQuizHistory(this.userId)
            .subscribe(function (status) {
            console.log(status);
            _this.yourTotalScore = 0;
            _this.result = status;
            for (i = 0; i < _this.result.length; i++) {
                _this.yourTotalScore = _this.yourTotalScore + _this.result[i].score;
            }
            ;
            _this.totalScore = _this.result.length * 10 - _this.yourTotalScore;
            _this.totalQuiz = _this.result.length;
        });
    };
    QuizHistoryComponent.prototype.toggle = function (event) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.quizid = this.result[event.target.id].quizId;
        console.log(this.quizid);
        localStorage.setItem('quizId', this.quizid);
    };
    QuizHistoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-quiz-history',
            template: __webpack_require__("../../../../../src/app/layout/quiz-history/quiz-history.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/quiz-history/quiz-history.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__backend_service__["a" /* BackendService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__backend_service__["a" /* BackendService */]) === "function" && _b || Object])
    ], QuizHistoryComponent);
    return QuizHistoryComponent;
    var _a, _b;
}());

//# sourceMappingURL=quiz-history.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/quiz-history/quiz-history.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizHistoryModule", function() { return QuizHistoryModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quiz_history_routing_module__ = __webpack_require__("../../../../../src/app/layout/quiz-history/quiz-history-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_modules_page_header_page_header_module__ = __webpack_require__("../../../../../src/app/shared/modules/page-header/page-header.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__quiz_history_component__ = __webpack_require__("../../../../../src/app/layout/quiz-history/quiz-history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_charts__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var QuizHistoryModule = /** @class */ (function () {
    function QuizHistoryModule() {
    }
    QuizHistoryModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__quiz_history_routing_module__["a" /* QuizHistoryRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_4__shared_modules_page_header_page_header_module__["a" /* PageHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["f" /* NgbModule */].forRoot(),
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__quiz_history_component__["a" /* QuizHistoryComponent */]]
        })
    ], QuizHistoryModule);
    return QuizHistoryModule;
}());

//# sourceMappingURL=quiz-history.module.js.map

/***/ })

});
//# sourceMappingURL=quiz-history.module.chunk.js.map