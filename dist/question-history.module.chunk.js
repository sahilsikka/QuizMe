webpackJsonp(["question-history.module"],{

/***/ "../../../../../src/app/layout/question-history/question-history-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionHistoryRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question_history_component__ = __webpack_require__("../../../../../src/app/layout/question-history/question-history.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__question_history_component__["a" /* QuestionHistoryComponent */] }
];
var QuestionHistoryRoutingModule = /** @class */ (function () {
    function QuestionHistoryRoutingModule() {
    }
    QuestionHistoryRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], QuestionHistoryRoutingModule);
    return QuestionHistoryRoutingModule;
}());

//# sourceMappingURL=question-history-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/question-history/question-history.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <app-page-header [heading]=\"'Question History'\" [icon]=\"'fa-desktop'\"></app-page-header>\n    <div class=\"row\">\n        <div class=\"col-sm-8\">\n            <div *ngFor=\"let item of result; let i = index;\" class=\"card mb-3\">\n                <div class=\"card-block\">\n                    <div class=\"row\">\n                        <div>\n                            <span class=\"icon-small\" *ngIf=\"item.answer === item.userChoice\">\n                                <i class=\"fa fa-check-circle fa-fw\"\n                                   style=\"float: left; color:#2ec866; font-size: 20px;\"></i>\n                                <h4 style=\"font-size: 1.3125em; color:#2ec866; opacity: .6;\"><b>{{i + 1}}. {{item.question}}</b></h4>\n                            </span>\n                            <span class=\"icon-small\" *ngIf=\"item.answer !== item.userChoice\">\n                                <i class=\"fa fa-times fa-fw\" style=\"float: left; color:#ee3922; font-size: 20px;\"></i>\n                                <h4 style=\"font-size: 1.3125em; color: #ee3922; opacity: .6;\"><b>{{i + 1}}. {{item.question}}</b></h4>\n                            </span>\n                        </div>\n                        <!--<div class=\"col-sm-4\" style=\"float: right\">\n                            <ngb-progressbar type=\"success\" [value]=\"item.score\" [max]=\"10\">\n                                <i>{{item.score*100/10}}%</i>\n                            </ngb-progressbar>\n                        </div>-->\n                    </div>\n                    <hr>\n                    <div class=\"small bold mdT pull-left\">\n                        <span style=\"color: #979faf; font-weight: 900\" *ngIf=\"item.options.choiceA != undefined\">Choice A: &emsp;<span\n                            style=\"color:#000000 ;font-weight: 900\">{{item.options.choiceA}}</span></span><br>\n                        <span style=\"color: #979faf; font-weight: 900\" *ngIf=\"item.options.choiceB != undefined\">Choice B: &emsp;<span\n                            style=\"color:#000000 ;font-weight: 900\">{{item.options.choiceB}}</span></span><br>\n                        <span style=\"color: #979faf; font-weight: 900\" *ngIf=\"item.options.choiceC != undefined\">Choice C: &emsp;<span\n                            style=\"color:#000000 ;font-weight: 900\">{{item.options.choiceC}}</span></span><br>\n                        <span style=\"color: #979faf; font-weight: 900\" *ngIf=\"item.options.choiceD != undefined\">Choice D: &emsp;<span\n                            style=\"color:#000000 ;font-weight: 900\">{{item.options.choiceD}}</span></span><br>\n                        <span style=\"color: #979faf; font-weight: 900\" *ngIf=\"item.options.choiceE != undefined\">Choice E: &emsp;<span\n                            style=\"color:#000000 ;font-weight: 900\">{{item.options.choiceE}}</span><br></span>&ensp;\n                        <hr>\n                        <span style=\"color: #979faf; font-weight: 900\">Your Choice: </span>\n                        <span style=\"font-weight: 900\">{{item.userChoice}}</span> &ensp;\n                        <span style=\"color: #979faf; font-weight: 900\">Correct Choice: </span>\n                        <span style=\"font-weight: 900\">{{item.answer}}</span> &ensp;\n                        <span style=\"color: #979faf; font-weight: 900\">Difficulty: </span>\n                        <span style=\"font-weight: 900\"> Easy </span> &ensp;\n                    </div>\n                    <div>\n                        <div class=\"card-body\">\n                            <p>\n                                <button type=\"button\" class=\"btn tn-sm btn-success\"\n                                        (click)=\"getQuestionDiscussion(item.questionId,i)\"\n                                        [attr.aria-expanded]=\"!bool[i]\" [attr.aria-controls]=\"'collapseExample'+i\">\n                                    Discussion\n                                </button>\n                                <button type=\"button\" class=\"btn tn-sm btn-warning\"\n                                        *ngIf=\"item.answer !== item.userChoice\"\n                                (click)=\"getRecommendedBooks(content, item.question)\">\n                                    Suggested Books\n                                </button>\n                            </p>\n                            <div [id]=\"'collapseExample'+i\" *ngIf=\"bool[i]\">\n                                <ul [id]=\"'ul'+i\" style=\"list-style: none\">\n                                    <form>\n                                        <textarea type=\"textarea\"\n                                                  style=\"height: 50px;width: 90%;background-color: #eceeef; position: relative; font-size: 14px; \"\n                                                  #newPost placeholder=\"Add a comment\" rows=\"4\" cols=\"50\" name=\"comment\"\n                                                  [(ngModel)]=\"comment\"></textarea>\n\n                                        <button class=\"btn btn-primary\" (click)=\"postComment(item.questionId)\">Post\n                                        </button>\n                                    </form>\n                                    <br><br>\n                                    <li *ngFor=\"let info of information\">\n                                        <div style=\"float: left\">{{info.username}}</div>\n                                        <span style=\"float: right;margin-right: 20px\">{{info.timestamp | date:'MM/dd/yyyy h:mm:ss a'}}</span><br><br>\n                                        <div>{{ info.content}}</div>\n                                        <span id=\"upvote\" class=\"glyphicon glyphicon-thumbs-up\"\n                                              (click)=\"incrementupVote(info.postId, info.upVote,i)\"><b\n                                            style=\"cursor: pointer;text-decoration:underline \"> upvote</b> {{info.upVote}}</span>\n                                        <span class=\"glyphicon glyphicon-thumbs-down\"\n                                              (click)=\"incrementDownVote(info.postId, info.upVote,i)\"><b\n                                            style=\"cursor: pointer;text-decoration:underline \"> downvote</b>  {{info.downVote}}</span>\n\n                                        <hr>\n                                    </li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col col-sm-4\">\n            <!-- <div class=\"card mb-3\">\n                 <div class=\"card-header\">\n                     Performance over {{this.totalQuiz}} Quizzes.\n                 </div>\n                 <div class=\"card-block\">\n                     <canvas baseChart height=\"180px\"\n                             [colors] = \"colorsOverride\"\n                             [data]=\"[this.yourTotalScore,this.totalScore]\"\n                             [labels]=\"['Points Scored', 'Points Lost']\"\n                             [legend] = \"true\"\n                             [chartType]=\"'doughnut'\"\n                             [options] = \"options\"\n                             (chartHover)=\"chartHovered($event)\"\n                             (chartClick)=\"chartClicked($event)\">\n                     </canvas>\n                 </div>\n             </div>-->\n        </div>\n    </div>\n\n</div>\n\n\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Top 10 Suggested JavaBooks</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <span *ngFor=\"let i of adaptiveData; let i=index;\">\n            <p>{{i.topic}}</p>\n            <p><a href=\"{{i.link}}\" target=\"_blank\">{{i.link}}</a></p>\n            <hr>\n        </span>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Close click')\">Close</button>\n    </div>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/layout/question-history/question-history.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".icon-small i {\n  float: left;\n  margin-right: 10px;\n  border-radius: 10%;\n  padding-top: 3px; }\n\n.icon-small + p {\n  clear: left;\n  margin-top: 15px; }\n\n.icon-small h4 {\n  text-align: left; }\n\n.modal-dialog {\n  max-width: 700px;\n  margin: 30px auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/question-history/question-history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionHistoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__backend_service__ = __webpack_require__("../../../../../src/app/backend.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var QuestionHistoryComponent = /** @class */ (function () {
    function QuestionHistoryComponent(router, backend, modalService) {
        this.router = router;
        this.backend = backend;
        this.modalService = modalService;
        this.information = [];
        this.bool = [];
        this.userId = JSON.parse(localStorage.getItem('currentUser')).id;
        this.username = JSON.parse(localStorage.getItem('currentUser')).email;
        this.quizId = localStorage.getItem('quizId');
        this.adaptiveData = [];
        this.adaptiveDataFlag = false;
        // Dashboard
        /*options = {
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
        colorsOverride: Array<Color> = [{
            backgroundColor: ['#2ec866', 'lightgrey'],
            hoverBackgroundColor: ['#2ec866', 'lightgrey']
        }];*/
        this.valueFrom = false;
    }
    QuestionHistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        localStorage.setItem('userId', this.userId);
        localStorage.setItem('userName', this.username);
        var i;
        this.backend.getQuestionHistory(this.quizId, this.userId)
            .subscribe(function (status) {
            console.log(status);
            _this.result = status;
            _this.noOfChoices = Object.keys(_this.result[0].options).length;
            _this.bool = [];
            for (var i_1 = 0; i_1 < _this.result.length; i_1++)
                _this.bool[i_1] = false;
            // for (i = 0; i < this.result.length; i++) {
            //     this.yourTotalScore = this.yourTotalScore + this.result[i].score;
            // }
            // this.totalScore = this.result.length * 10 - this.yourTotalScore;
            // this.totalQuiz = this.result.length;
        });
    };
    QuestionHistoryComponent.prototype.getQuestionDiscussion = function (questionId, selected) {
        var _this = this;
        console.log('question id ' + questionId);
        this.information = [];
        this.backend.getQuestionDiscussion(questionId).subscribe(function (response) {
            // console.log(response);
            for (var i = 0; i < response.length; i++) {
                var newDate = new Date(response[i].timestamp);
                var elem = {
                    'username': response[i].email,
                    'timestamp': newDate,
                    'content': response[i].post,
                    'upVote': response[i].upvote,
                    'downVote': response[i].downvote,
                    'postId': response[i].id,
                };
                console.log(_this.information);
                _this.information.push(elem);
            }
            _this.information.sort(function (a, b) {
                return b.timestamp - a.timestamp;
            });
            console.log(_this.information);
        });
        for (var i = 0; i < this.result.length; i++) {
            if (i == selected) {
            }
            else
                this.bool[i] = false;
        }
        if (this.valueFrom != true) {
            this.bool[selected] = !this.bool[selected];
        }
        else {
            this.valueFrom = false;
        }
    };
    QuestionHistoryComponent.prototype.postComment = function (questionId) {
        var _this = this;
        console.log(questionId);
        this.username = localStorage.getItem('userName');
        var payLoad = {
            'user_id': parseInt(localStorage.getItem('userId')),
            'question_id': questionId,
            'post': this.comment,
            'up_vote': 0,
            'down_vote': 0
        };
        this.backend.postDiscussion(payLoad).subscribe(function (response) {
            var elem = {
                'username': localStorage.getItem('userName'),
                'timestamp': response.timestamp,
                'content': _this.comment,
                'upvote': 0,
                'downvote': 0,
            };
            _this.information.push(elem);
            console.log((response));
            _this.comment = "";
        });
        console.log(this.information.length);
    };
    QuestionHistoryComponent.prototype.incrementupVote = function (postId, questionId, i) {
        var _this = this;
        console.log(postId);
        this.backend.incrementUpvote(postId).subscribe(function (response) {
            console.log(response['vote']);
            //     this.elementRef.nativeElement.querySelector('').textContent = upVote;
            _this.valueFrom = true;
            _this.getQuestionDiscussion(questionId, i);
        });
    };
    QuestionHistoryComponent.prototype.incrementDownVote = function (postId, questionId, i) {
        var _this = this;
        this.backend.incrementDownVote(postId).subscribe(function (response) {
            console.log(postId);
            console.log(response['vote']);
            //      this.elementRef.nativeElement.querySelector('').textContent = upVote;
            _this.getQuestionDiscussion(questionId, i);
        });
    };
    QuestionHistoryComponent.prototype.getRecommendedBooks = function (content, question) {
        var _this = this;
        this.adaptiveData = [];
        var dat = question.substring(0, 200);
        dat = dat.replace(/\(|\)/g, "");
        dat = dat.replace(/,/g, " ");
        dat = dat.replace(/;/g, "");
        dat = dat.replace(/:/g, "");
        dat = dat.replace(/\+/g, "");
        dat = dat.replace(/=/g, "");
        dat = dat.replace(/</g, "");
        dat = dat.replace(/>/g, "");
        dat = dat.replace(/\?/g, "");
        dat = dat.replace(/\[/g, "");
        dat = dat.replace(/]/g, "");
        dat = dat.replace(/{/g, "");
        dat = dat.replace(/}/g, "");
        dat = dat.replace(/%/g, "");
        dat = dat.substring(0, dat.length - 1);
        console.log(dat);
        this.backend.getRecommendation(dat).subscribe(function (response) {
            for (var _i = 0, _a = response.hits.hits; _i < _a.length; _i++) {
                var i = _a[_i];
                var topic = i._source.topic;
                topic = topic.replace("<h1>", "");
                topic = topic.replace("</h1>", "");
                var obj = { "link": i._source.link, "topic": topic };
                _this.adaptiveData.push(obj);
            }
            console.log(_this.adaptiveData);
        });
        this.open(content);
    };
    QuestionHistoryComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    QuestionHistoryComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    QuestionHistoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-question-history',
            template: __webpack_require__("../../../../../src/app/layout/question-history/question-history.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/question-history/question-history.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            animations: [Object(__WEBPACK_IMPORTED_MODULE_3__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__backend_service__["a" /* BackendService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__backend_service__["a" /* BackendService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */]) === "function" && _c || Object])
    ], QuestionHistoryComponent);
    return QuestionHistoryComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=question-history.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/question-history/question-history.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionHistoryModule", function() { return QuestionHistoryModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question_history_component__ = __webpack_require__("../../../../../src/app/layout/question-history/question-history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_modules_page_header_page_header_module__ = __webpack_require__("../../../../../src/app/shared/modules/page-header/page-header.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__question_history_routing_module__ = __webpack_require__("../../../../../src/app/layout/question-history/question-history-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var QuestionHistoryModule = /** @class */ (function () {
    function QuestionHistoryModule() {
    }
    QuestionHistoryModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_7__question_history_routing_module__["a" /* QuestionHistoryRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_4__shared_modules_page_header_page_header_module__["a" /* PageHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["f" /* NgbModule */].forRoot(),
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__question_history_component__["a" /* QuestionHistoryComponent */]]
        })
    ], QuestionHistoryModule);
    return QuestionHistoryModule;
}());

//# sourceMappingURL=question-history.module.js.map

/***/ })

});
//# sourceMappingURL=question-history.module.chunk.js.map