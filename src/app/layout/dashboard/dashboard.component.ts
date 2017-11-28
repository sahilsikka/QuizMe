import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {routerTransition} from '../../router.animations';
import {BackendService} from '../../backend.service';
import {Response} from '@angular/http';

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
    // dataFlag = false;

    // Rank Table
    public page = 1;
    public itemsPerPage = 10;
    public maxSize = 5;
    public numPages = 1;
    public length = 0;
    data: Array<any> = [];

    // Advanced Pie Chart
    view: any[] = [700, 400];
    datapie: Array<any>
    colorScheme = {
        domain: ['#C7B42C', '#377eb8', '#2ec866', '#ee3922', '#AAAAAA']
    };
    tooltipDisabled = false;

    // User Level Charts
    userId: any;

    // options
    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = true;
    showXAxisLabel = true;
    showYAxisLabel = true;
    dataFlag = false;

    // line, area
    autoScale = true;
    barchartResults = [];
    performanceResults = [];

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
        this.backend.getUser(JSON.parse(localStorage.getItem('currentUser')).id).subscribe(
            user => {
                localStorage.setItem('currentUser', JSON.stringify(user));
            });
        this.rankTable();
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.userId = this.currentUser.id;
        this.quizHistories = this.currentUser.quizHistories.length;
        this.discussions = this.currentUser.discussions.length;
        this.yourTotalScore = 0;
        for (let i = 0; i < this.quizHistories; i++) {
            this.yourTotalScore = this.yourTotalScore + this.currentUser.quizHistories[i].score;
        }
        ;
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
        this.knowledgeGraph();
        this.QuestionCorrectBarChart();
    }

    knowledgeGraph() {
        let scoreuntilnow = 0.0;
        this.backend.getKnowledgeValues(this.userId).subscribe(
            (response) => {

                console.log(response);
                const map = new Map();
                for (let i = 0; i < response.length; i++) {
                    if (!map.has(response[i].skillTopic)) {
                        const arr = new Array();
                        map.set(response[i].skillTopic, arr);
                    }
                    scoreuntilnow = response[i].proficiency;

                    for (let j = 0; j < i; j++) {

                        scoreuntilnow = scoreuntilnow + response[j].proficiency;
                    }
                    let elem = {}
                    if (i == 0) {
                        elem = {
                            'name': 'Quiz ' + (map.get(response[i].skillTopic).length + 1),
                            'value': scoreuntilnow
                        };
                    } else {
                        scoreuntilnow = scoreuntilnow * 1.0 / i;
                        console.log(scoreuntilnow);
                        elem = {
                            'name': 'Quiz ' + (map.get(response[i].skillTopic).length + 1),
                            'value': scoreuntilnow
                        };
                    }

                    const arr = map.get(response[i].skillTopic);
                    arr.push(elem);
                    map.set(response[i].skillTopic, arr);
                }

                for (const entry of Array.from(map)) {
                    const elem = {
                        'name': entry[0],
                        'series': entry[1]
                    };
                    this.performanceResults.push(elem);
                    this.dataFlag = true;
                    console.log(this.dataFlag);
                }

            }
        );
    }

    QuestionCorrectBarChart() {
        this.backend.getCategoryAnalystics(this.userId).subscribe(
            (response) => {

                this.barchartResults = new Array();
                for (let i = 0; i < response.length; i++) {
                    const name = response[i].category;
                    const series = new Array();

                    const value1 = {'name': 'attempted', 'value': response[i].attempted};
                    const value2 = {'name': 'correct', 'value': response[i].correct};

                    series.push(value2);
                    series.push(value1);
                    const value = {'name': name, 'series': series};
                    this.barchartResults.push(value);
                }


            }
        );
    }

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
            // this.dataFlag = true;
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
