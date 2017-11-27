import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {routerTransition} from '../../router.animations';
import {BackendService} from '../../backend.service';
import {toInteger} from "@ng-bootstrap/ng-bootstrap/util/util";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    wrong: number;
    yourTotalScore: number;
    username: any[];
    totalScore: any[];
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];
    currentUser: any;
    quizHistories: any;
    discussions: any;
    users: any;
    dataFlag = false;

    // Rank Table
    public page = 1;
    public itemsPerPage = 10;
    public maxSize = 5;
    public numPages = 1;
    public length = 0;
    data: Array<any> = [];

    //Advanced Pie Chart
    view: any[] = [700, 400];
    datapie: Array<any>
    colorScheme = {
        domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    };

    constructor(private backend: BackendService) {
        this.length = this.data.length;
    }

    static sortInDescending(obj) {
        let arr = [];
        for (let key in obj) {
            arr.push({
                name: key,
                score: obj[key]
            });
        }

        return arr.sort(function (a, b) {
            return b.score - a.score;
        });
    }

    onSelect(event) {
        console.log(event);
    }

    ngOnInit() {
        this.rankTable();
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.quizHistories = this.currentUser.quizHistories.length;
        this.discussions = this.currentUser.discussions.length;
        this.yourTotalScore = 0;
        for (let i = 0; i < this.quizHistories; i++) {
            this.yourTotalScore = this.yourTotalScore + this.currentUser.quizHistories[i].score;
        };
        this.wrong = this.quizHistories * 10 - this.yourTotalScore;

        this.datapie =
            [
                {
                    "name": "Discussions",
                    "value": this.discussions
                },
                {
                    "name": "Quizzes",
                    "value": this.quizHistories
                },
                {
                    "name": "Correct Answered",
                    "value": this.yourTotalScore
                },
                {
                    "name": "Wrong Answered",
                    "value": this.wrong
                }
            ];
    }

    // public changeFilter(data: any, config: any): any {
    //     let filteredData: Array<any> = data;
    //     this.columns.forEach((column: any) => {
    //         if (column.filtering) {
    //             filteredData = filteredData.filter((item: any) => {
    //                 return item[column.name].match(column.filtering.filterString);
    //             });
    //         }
    //     });
    //
    //     if (!config.filtering) {
    //         return filteredData;
    //     }
    //
    //     if (config.filtering.columnName) {
    //         return filteredData.filter((item: any) =>
    //             item[config.filtering.columnName].match(this.config.filtering.filterString));
    //     }
    //
    //     const tempArray: Array<any> = [];
    //     filteredData.forEach((item: any) => {
    //         let flag = false;
    //         this.columns.forEach((column: any) => {
    //             if (item[column.name].toString().match(this.config.filtering.filterString)) {
    //                 flag = true;
    //             }
    //         });
    //         if (flag) {
    //             tempArray.push(item);
    //         }
    //     });
    //     filteredData = tempArray;
    //
    //     return filteredData;
    // }

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }

    rankTable() {
        this.totalScore = [];
        this.username = [];
        this.backend.getAllUsers().subscribe(status => {
            // console.log(status);
            this.users = status;
            const obj = {};
            for (let i = 0; i < status.length; i++) {
                const user = status[i];
                this.username.push(user.email);
                this.totalScore[i] = 0;
                for (let j = 0; j < user.quizHistories.length; j++) {
                    // console.log(user.quizHistories[j].score);
                    this.totalScore[i] = this.totalScore[i] + user.quizHistories[j].score;
                }
                if (this.totalScore[i] === 0) {
                    this.totalScore[i] = 0;
                } else {
                    this.totalScore[i] = (this.totalScore[i] / user.quizHistories.length).toFixed(2);
                }
                obj[this.username[i]] = parseFloat(this.totalScore[i]);
            }
            // console.log(this.totalScore);
            this.data = DashboardComponent.sortInDescending(obj);
            this.dataFlag = true;
        });
    }

    toggle(event) {
        console.log(this.users);
        // console.log(event.target.id);

        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].email === event.target.id) {
                localStorage.setItem('opponent', this.users[i].id);
            }
        }
    }
}
