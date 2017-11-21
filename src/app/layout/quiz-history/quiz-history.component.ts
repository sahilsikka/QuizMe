import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../router.animations';
import {BackendService} from '../../backend.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-quiz-history',
    templateUrl: './quiz-history.component.html',
    styleUrls: ['./quiz-history.component.scss'],
    animations: [routerTransition()]
})

export class QuizHistoryComponent implements OnInit {
    user = JSON.parse(localStorage.getItem('currentUser'));
    userId = this.user.id;
    result: any;

    constructor(public router: Router, private backend: BackendService) {
    }

    ngOnInit() {
        this.backend.getQuizHistory(this.userId)
            .subscribe(status => {
                this.result = status;
                console.log(this.result);
            });
    }

    quizHistory() {
        // this.result =  this.backend.getQuizHistory(this.userId);
        // .subscribe(result => this.result = result.json());
        // console.log(this.result);


    }
}
