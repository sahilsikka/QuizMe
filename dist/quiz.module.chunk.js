webpackJsonp(["quiz.module"],{

/***/ "../../../../../src/app/layout/quiz/quiz-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quiz_component__ = __webpack_require__("../../../../../src/app/layout/quiz/quiz.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__quiz_component__["a" /* QuizComponent */] }
];
var QuizRoutingModule = /** @class */ (function () {
    function QuizRoutingModule() {
    }
    QuizRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], QuizRoutingModule);
    return QuizRoutingModule;
}());

//# sourceMappingURL=quiz-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/quiz/quiz.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <app-page-header [heading]=\"'Quiz'\" [icon]=\"'fa-wrench'\"></app-page-header>\n\n    <div id=\"quiz\">\n        <div class=\"card mb-3\">\n            <div class=\"card-block\">\n                <div *ngIf=\"mode=='quiz' && quiz\">\n                    <div *ngFor=\"let question of filteredQuestions;\">\n                        <div>\n                            <span class=\"badge badge-info\">Question {{pager.index + 1}} of {{pager.count}}.</span>\n                            <span class=\"badge badge-success\" [innerHTML]=\"question.coursetopic\"></span>\n                            <span class=\"badge badge-primary\" [innerHTML]=\"question.level\"></span>\n                            <h5 style=\"float:right\">{{tick}} seconds</h5>\n                        </div>\n                        <hr>\n                        <h4>{{pager.index + 1}}. &nbsp;<span [innerHTML]=\"question.name\"></span>\n                        </h4>\n                        <hr/>\n                        <div class=\"row text-left options\">\n                            <div class=\"col-md-6\" *ngFor=\"let option of question.options\">\n                                <div class=\"option\">\n                                    <label class=\"\" [attr.for]=\"option.id\">\n                                        <input id=\"{{option.id}}\" type=\"checkbox\" [(ngModel)]=\"option.selected\"\n                                               (change)=\"onSelect(question, option);\"/>\n                                        {{option.name}}\n                                    </label>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <hr/>\n                    <div class=\"text-sm-center\">\n                        <button class=\"btn btn-default\" *ngIf=\"config.allowBack\" (click)=\"goTo(0);\">First</button>\n                        <button class=\"btn btn-default\" *ngIf=\"config.allowBack\" (click)=\"goTo(pager.index - 1);\">Prev\n                        </button>\n                        <button class=\"btn btn-primary\" (click)=\"goTo(pager.index + 1);\">Next</button>\n                        <button class=\"btn btn-default\" *ngIf=\"config.allowBack\" (click)=\"goTo(pager.count - 1);\">Last\n                        </button>\n                        <!--<pagination *ngIf=\"config.showPager\" direction-links=\"false\" total-items=\"totalItems\" items-per-page=\"itemsPerPage\" ng-models=\"currentPage\" ng-change=\"pageChanged()\"></pagination>-->\n                    </div>\n                </div>\n                <div class=\"row review\" *ngIf=\"mode=='review'\">\n                    <div class=\"col-sm-4\" *ngFor=\"let question of quiz.questions; let index = index;\">\n                        <div (click)=\"goTo(index)\"\n                             class=\"{{ isAnswered(question) == 'Answered'? 'answered': 'not-answered' }}\">{{index + 1}}.\n                            {{ isAnswered(question) }}\n                        </div>\n                    </div>\n                </div>\n                <div class=\"result\" *ngIf=\"mode=='result'\">\n                    <h3>Quiz Result</h3>\n                    <div *ngFor=\"let question of quiz.questions; let index = index\">\n                        <div class=\"result-question\">\n                            <h4>{{index + 1}}. {{question.name}}</h4>\n                            <div class=\"row\">\n                                <div class=\"col-md-6\" *ngFor=\"let Option of question.options\">\n                                    <input id=\"{{Option.id}}\" type=\"checkbox\" disabled=\"disabled\"\n                                           [(ngModel)]=\"Option.selected\"/> {{Option.name}}\n                                </div>\n                            </div>\n                            <div class=\"alert {{ isCorrect(question) == 'correct'? 'alert-success': 'alert-danger'}}\">\n                                Your answer is {{isCorrect(question)}}.\n                            </div>\n                        </div>\n                    </div>\n                    <button class=\"btn btn-default\" [routerLink]=\"['/quiz']\">Star Quiz</button>\n                    <button class=\"btn btn-default\" [routerLink]=\"['/dashboard']\">Go to Dashboard</button>\n                </div>\n                <hr/>\n                <div style=\"float: right\" *ngIf=\"mode!='result'\">\n                    <button class=\"btn btn-default\" (click)=\"mode = 'quiz'\">Quiz</button>\n                    <button class=\"btn btn-default\" (click)=\"mode = 'review'\">Review</button>\n                    <button class=\"btn btn-default\" (click)=\"onSubmit();\">Submit Quiz</button>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/layout/quiz/quiz.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host .card {\n  margin-bottom: 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/quiz/quiz.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__backend_service__ = __webpack_require__("../../../../../src/app/backend.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var QuizComponent = /** @class */ (function () {
    function QuizComponent(router, route, backendService) {
        this.router = router;
        this.route = route;
        this.backendService = backendService;
        this.quiz = new __WEBPACK_IMPORTED_MODULE_4__shared__["d" /* Quiz */](null);
        this.user = JSON.parse(localStorage.getItem('currentUser'));
        this.mode = 'quiz';
        this.config = {
            'allowBack': true,
            'allowReview': true,
            'autoMove': false,
            'duration': 0,
            'pageSize': 1,
            'requiredAll': false,
            'richText': false,
            'shuffleQuestions': false,
            'shuffleOptions': false,
            'showClock': true,
            'showPager': true,
            'theme': 'none'
        };
        this.pager = {
            index: 0,
            size: 1,
            count: 1
        };
    }
    Object.defineProperty(QuizComponent.prototype, "filteredQuestions", {
        get: function () {
            return (this.quiz.questions) ?
                this.quiz.questions.slice(this.pager.index, this.pager.index + this.pager.size) : [];
        },
        enumerable: true,
        configurable: true
    });
    QuizComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.user);
        localStorage.setItem('userId', this.user.id);
        this.loadQuiz();
        this.timer = __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].timer(1, 1000);
        this.sub = this.timer.subscribe(function (t) {
            _this.tick = t;
        });
    };
    QuizComponent.prototype.loadQuiz = function () {
        var _this = this;
        var userId = this.user.id;
        console.log(userId);
        this.backendService.getQuizQuestions(userId).subscribe(function (res) {
            _this.quiz = new __WEBPACK_IMPORTED_MODULE_4__shared__["d" /* Quiz */](res);
            localStorage.setItem('quizId', res.quiz_id);
            _this.pager.count = _this.quiz.questions.length;
        });
        this.mode = 'quiz';
    };
    QuizComponent.prototype.onSelect = function (question, option) {
        question.options.forEach(function (x) {
            if (x.id !== option.id)
                x.selected = false;
        });
        if (this.config.autoMove) {
            this.goTo(this.pager.index + 1);
        }
    };
    QuizComponent.prototype.goTo = function (index) {
        if (index >= 0 && index < this.pager.count) {
            this.pager.index = index;
            this.mode = 'quiz';
        }
    };
    QuizComponent.prototype.isAnswered = function (question) {
        return question.options.find(function (x) { return x.selected; }) ? 'Answered' : 'Not Answered';
    };
    ;
    QuizComponent.prototype.isCorrect = function (question) {
        return question.options.every(function (x) { return x.selected === x.isAnswer; }) ? 'correct' : 'wrong';
    };
    ;
    QuizComponent.prototype.setAnswers = function () {
        this.quiz.questions.forEach(function (x) { return x.setAnswer(); });
    };
    QuizComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log('on submit function');
        this.sub.unsubscribe();
        this.setAnswers();
        var user_id = localStorage.getItem('userId');
        var quiz_id = localStorage.getItem('quizId');
        var answers = [];
        this.quiz.questions.forEach(function (x) { return answers.push({
            'user_choice': x.answered,
            'question_id': x.id,
            'time_taken': 15
        }); });
        console.log(answers);
        var request = {
            'user_id': user_id,
            'time_taken': this.tick,
            'quiz_id': quiz_id,
            'answers': answers
        };
        this.backendService.submitAnswers(request).subscribe(function (response) {
            console.log(response);
            if (response.status === 'Success') {
                _this.mode = 'result';
            }
        });
    };
    QuizComponent.prototype.startAnotherQuiz = function () {
        this.router.navigateByUrl('/quiz');
    };
    QuizComponent.prototype.openDashboard = function () {
        this.router.navigateByUrl('/dashboard');
    };
    QuizComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-quiz',
            template: __webpack_require__("../../../../../src/app/layout/quiz/quiz.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/quiz/quiz.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__backend_service__["a" /* BackendService */]],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__backend_service__["a" /* BackendService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__backend_service__["a" /* BackendService */]) === "function" && _c || Object])
    ], QuizComponent);
    return QuizComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=quiz.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/quiz/quiz.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizModule", function() { return QuizModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quiz_routing_module__ = __webpack_require__("../../../../../src/app/layout/quiz/quiz-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quiz_component__ = __webpack_require__("../../../../../src/app/layout/quiz/quiz.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var QuizModule = /** @class */ (function () {
    function QuizModule() {
    }
    QuizModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__quiz_routing_module__["a" /* QuizRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared__["c" /* PageHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__quiz_component__["a" /* QuizComponent */]]
        })
    ], QuizModule);
    return QuizModule;
}());

//# sourceMappingURL=quiz.module.js.map

/***/ })

});
//# sourceMappingURL=quiz.module.chunk.js.map