import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {BackendService} from '../../backend.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Option, Question, Quiz, QuizConfig} from '../../shared';
import {Observable} from "rxjs/Observable";


@Component({
    selector: 'app-quiz',
    templateUrl: './quiz.component.html',
    styleUrls: ['./quiz.component.scss'],
    providers: [BackendService],
    animations: [routerTransition()]
})
export class QuizComponent implements OnInit {
    quiz: Quiz = new Quiz(null);
    user: any = JSON.parse(localStorage.getItem('currentUser'));
    mode = 'quiz';
    config: QuizConfig = {
        'allowBack': true,
        'allowReview': true,
        'autoMove': false,  // if true, it will move to next question automatically when answered.
        'duration': 0,  // indicates the time in which quiz needs to be completed. 0 means unlimited.
        'pageSize': 1,
        'requiredAll': false,  // indicates if you must answer all the questions before submitting.
        'richText': false,
        'shuffleQuestions': false,
        'shuffleOptions': false,
        'showClock': true,
        'showPager': true,
        'theme': 'none'
    };

    pager = {
        index: 0,
        size: 1,
        count: 1
    };
    timer: any ;
    tick: any ;
    sub: any;
    constructor(private router: Router, private route: ActivatedRoute, private backendService: BackendService) {
    }
    ngOnInit() {
        console.log(this.user);
        localStorage.setItem('userId', this.user.id);
        this.loadQuiz();
        this.timer = Observable.timer(1,1000);
        this.sub = this.timer.subscribe(t => {this.tick = t;});
    }

    loadQuiz() {
        const userId = this.user.id;
        console.log(userId);
        this.backendService.getQuizQuestions(userId).subscribe(res => {
            this.quiz = new Quiz(res);
            localStorage.setItem('quizId', res.quiz_id);
            this.pager.count = this.quiz.questions.length;
        });
        this.mode = 'quiz';
    }


    get filteredQuestions() {
        return (this.quiz.questions) ?
            this.quiz.questions.slice(this.pager.index, this.pager.index + this.pager.size) : [];
    }

    onSelect(question: Question, option: Option) {

        question.options.forEach((x) => { if (x.id !== option.id) x.selected = false; });

        if (this.config.autoMove) {
            this.goTo(this.pager.index + 1);
        }
    }

    goTo(index: number) {
        if (index >= 0 && index < this.pager.count) {
            this.pager.index = index;
            this.mode = 'quiz';
        }
    }

    isAnswered(question: Question) {
        return question.options.find(x => x.selected) ? 'Answered' : 'Not Answered';
    };

    isCorrect(question: Question) {
        return question.options.every(x => x.selected === x.isAnswer) ? 'correct' : 'wrong';
    };

    setAnswers(){
        this.quiz.questions.forEach(x => x.setAnswer());
    }


    onSubmit() {
        console.log('on submit function')
        this.sub.unsubscribe();
        this.setAnswers();
        const user_id =  localStorage.getItem('userId');
        const quiz_id = localStorage.getItem('quizId');
        const answers = [];
        this.quiz.questions.forEach(x => answers.push({ 'user_choice': x.answered, 'question_id': x.id, 'time_taken': 15 }));
        console.log(answers);
        const request = {
            'user_id': user_id,
            'time_taken': this.tick,
            'quiz_id': quiz_id,
            'answers': answers
        }
        this.backendService.submitAnswers(request).subscribe(response => {
            console.log(response);
            if (response.status === 'Success'){
                this.mode = 'result';
            }
        });
    }

    startAnotherQuiz(){
        this.router.navigateByUrl('/quiz');
    }

    openDashboard() {
        this.router.navigateByUrl('/dashboard');
    }
}
