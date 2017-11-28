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
    information = [];
    comment: any;
    bool = [];
    noOfChoices: number;
    yourTotalScore: number;
    userId = JSON.parse(localStorage.getItem('currentUser')).id;
    username = JSON.parse(localStorage.getItem('currentUser')).email;
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
    valueFrom = false;

    constructor(public router: Router, private backend: BackendService) {
    }

    ngOnInit() {
        localStorage.setItem('userId', this.userId);
        localStorage.setItem('userName', this.username);
        let i: number;
        this.backend.getQuestionHistory(this.quizId, this.userId)
            .subscribe(status => {
                console.log(status);
                this.result = status;
                this.noOfChoices = Object.keys(this.result[0].options).length;
                this.bool = [];
                for (let i = 0; i < this.result.length; i++)
                    this.bool[i] = false;
                // for (i = 0; i < this.result.length; i++) {
                //     this.yourTotalScore = this.yourTotalScore + this.result[i].score;
                // }
                // this.totalScore = this.result.length * 10 - this.yourTotalScore;
                // this.totalQuiz = this.result.length;
            });
    }

    getQuestionDiscussion(questionId, selected) {
        console.log('question id ' + questionId);
        this.information = [];
        this.backend.getQuestionDiscussion(questionId).subscribe(
            (response) => {
                // console.log(response);
                for (let i = 0; i < response.length; i++) {
                    const newDate = new Date(response[i].timestamp);
                    const elem = {
                        'username': response[i].email,
                        'timestamp': newDate,
                        'content': response[i].post,
                        'upVote': response[i].upvote,
                        'downVote': response[i].downvote,
                        'postId': response[i].id,
                    };
                    console.log(this.information);
                    this.information.push(elem);
                }
                this.information.sort(function (a, b) {
                    return b.timestamp - a.timestamp;
                });
                console.log(this.information);
            }
        );
        for (let i = 0; i < this.result.length; i++) {
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

    }

    postComment(questionId) {
        console.log(questionId);
        this.username = localStorage.getItem('userName');
        const payLoad = {
            'user_id': parseInt(localStorage.getItem('userId')),
            'question_id': questionId,
            'post': this.comment,
            'up_vote': 0,
            'down_vote': 0
        };
        this.backend.postDiscussion(payLoad).subscribe(
            (response: any) => {
                const elem = {
                    'username': localStorage.getItem('userName'),
                    'timestamp': response.timestamp,
                    'content': this.comment,
                    'upvote': 0,
                    'downvote': 0,
                };
                this.information.push(elem);
                console.log((response));
                this.comment = "";
            }
        );
        console.log(this.information.length);
    }

    incrementupVote(postId: any, questionId: any, i) {
        console.log(postId);
        this.backend.incrementUpvote(postId).subscribe(
            (response: Response) => {
                console.log(response['vote']);
                //     this.elementRef.nativeElement.querySelector('').textContent = upVote;
                this.valueFrom = true;
                this.getQuestionDiscussion(questionId, i);
            });
    }

    incrementDownVote(postId: any, questionId: any, i) {
        this.backend.incrementDownVote(postId).subscribe(
            (response: Response) => {
                console.log(postId);
                console.log(response['vote']);
                //      this.elementRef.nativeElement.querySelector('').textContent = upVote;
                this.getQuestionDiscussion(questionId, i);
            });
    }

}
