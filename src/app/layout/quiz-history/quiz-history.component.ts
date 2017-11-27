import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../router.animations';
import {BackendService} from '../../backend.service';
import {Router} from '@angular/router';
import {Color} from 'ng2-charts';

@Component({
    selector: 'app-quiz-history',
    templateUrl: './quiz-history.component.html',
    styleUrls: ['./quiz-history.component.scss'],
        animations: [routerTransition()]
})

export class QuizHistoryComponent implements OnInit {
    quizid: any;
    currentUser: any;
    yourTotalScore: number;
    user = JSON.parse(localStorage.getItem('currentUser'));
    userId = this.user.id;
    result: any;
    totalQuiz: number;
    totalScore: number;
    options = {
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
    }];
    constructor(public router: Router, private backend: BackendService) {
    }

    ngOnInit() {
        let i: number;
        this.backend.getQuizHistory(this.userId)
            .subscribe(status => {
                console.log(status);
                this.yourTotalScore = 0;
                this.result = status;
                for (i = 0; i < this.result.length; i++) {
                    this.yourTotalScore = this.yourTotalScore + this.result[i].score;
                };
                this.totalScore = this.result.length * 10 - this.yourTotalScore;
                this.totalQuiz = this.result.length;
            });
    }

    toggle(event) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.quizid = this.result[event.target.id].quizId;
        localStorage.setItem('quizId', this.quizid );
    }
}
