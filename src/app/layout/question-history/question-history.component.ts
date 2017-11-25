import {Component, OnInit} from '@angular/core';
import {BackendService} from '../../backend.service';
import {Router} from '@angular/router';
import {routerTransition} from '../../router.animations';

@Component({
    selector: 'app-question-history',
    templateUrl: './question-history.component.html',
    styleUrls: ['./question-history.component.scss'],
    animations: [routerTransition()]

})
export class QuestionHistoryComponent implements OnInit {

    yourTotalScore: number;
    // user = JSON.parse(localStorage.getItem('currentUser'));
    userId = localStorage.getItem('userId');
    quizId = localStorage.getItem('quizId');
    result: any;
    totalQuiz: number;
    totalScore: number;

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

    constructor(public router: Router, private backend: BackendService) {
    }

    ngOnInit() {
        let i: number;
        this.backend.getQuestionHistory(this.quizId, this.userId)
            .subscribe(status => {
                console.log(status);
                this.result = status;
                // for (i = 0; i < this.result.length; i++) {
                //     this.yourTotalScore = this.yourTotalScore + this.result[i].score;
                // }
                // this.totalScore = this.result.length * 10 - this.yourTotalScore;
                // this.totalQuiz = this.result.length;
            });
    }

}
