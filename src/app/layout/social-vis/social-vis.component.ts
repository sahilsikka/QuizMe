import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../router.animations';
import {BackendService} from '../../backend.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-social-vis',
    templateUrl: './social-vis.component.html',
    styleUrls: ['./social-vis.component.scss'],
    animations: [routerTransition()]
})

export class SocialVisComponent implements OnInit {
    user = JSON.parse(localStorage.getItem('currentUser')) || {};
    userId = this.user.id;
    // Opponent
    opponentId: string | any;
    radarChartData: any = [];
    // lineChart
    lineChartData = [];
    dataFlag = false;
    opponentName;
    // Radar
    public radarChartLabels: string[] = ['Arrays', 'Methods', 'Operators', 'Strings', 'Variables'];
    public radarChartType = 'radar';
    public lineChartLabels: Array<any> = ['Quiz 1', 'Quiz 2', 'Quiz 3', 'Quiz 4', 'Quiz 5', 'Quiz 6', 'Quiz 7'];
    public lineChartOptions: any = {
        responsive: true
    };
    public lineChartColors: Array<any> = [
        { // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        { // dark grey
            backgroundColor: 'rgba(77,83,96,0.2)',
            borderColor: 'rgba(77,83,96,1)',
            pointBackgroundColor: 'rgba(77,83,96,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
        { // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }
    ];
    public lineChartLegend = true;
    public lineChartType = 'line';

    constructor(public router: Router, private backend: BackendService) {
        this.getOpponent();
        this.plotRadarForUser();
        this.plotQuizLineGraphForUser();
    }

    ngOnInit() {
    }

    dataFlag1 = false;
    // events
    public chartClicked(e: any): void {
        // console.log(e);
    }

    getOpponent() {
        let opponentName = '';
        this.radarChartData = new Array();
        this.opponentId = localStorage.getItem('opponent');
        this.backend.getUser(this.opponentId).subscribe(
            opp => {
                localStorage.setItem('opponentName', opp.fname);
                this.opponentName = opp.fname;
                opponentName = this.opponentName;
                /*       this.lineChartData = [
                          {data: [65, 59, 80, 81], label: 'You'},
                          {data: [28, 48, 40, 19, 86, 27, 90], label: localStorage.getItem('opponentName')},
                      ];
                     this.radarChartData = [
                          {data: [75, 55, 80, 70, 86], label: 'You'},
                          {data: [60, 66, 77, 80, 76], label: localStorage.getItem('opponentName')}
                      ];*/
               // this.dataFlag = true;
            });
    }
    elem1: any;
    plotRadarForUser() {
        this.backend.getKnowledgeValues(this.userId).subscribe(
            (response) => {
                let numberOfQuizzes = 0;
                const radarChartMyData = new Array();
                console.log(response);
                let map = new Map();
                for (let i = 0; i < response.length; i++) {
                    if (!map.has(response[i].quizId)) {
                        map.set(response[i].quizId, 1);
                        numberOfQuizzes++;
                    }
                }
                map = new Map();
                for (let i = 0; i < response.length; i++) {
                    if (!map.has(response[i].skillTopic)) {
                        map.set(response[i].skillTopic, response[i].proficiency);
                    }
                    else {
                        map.set(response[i].skillTopic, map.get(response[i].skillTopic) + response[i].proficiency);
                    }
                }
                for (const entry of Array.from(map)) {
                    if (entry[0] == 'Arrays')
                        radarChartMyData[0] = (entry[1] / numberOfQuizzes);
                    if (entry[0] == 'Methods')
                        radarChartMyData[1] = (entry[1] / numberOfQuizzes);
                    if (entry[0] == 'Operators')
                        radarChartMyData[2] = (entry[1] / numberOfQuizzes);
                    if (entry[0] == 'Strings')
                        radarChartMyData[3] = (entry[1] / numberOfQuizzes);
                    if (entry[0] == 'Variables')
                        radarChartMyData[4] = (entry[1] / numberOfQuizzes);
                }
                 this.elem1 = {
                    'data': radarChartMyData,
                    'label': 'You'
                };
               // this.radarChartData.push(elem);this.dataFlag1=true;
                //console.log(this.radarChartData);
                this.plotRadarForOpponent();
            }
        );
    }

    plotRadarForOpponent(){
        this.backend.getKnowledgeValues(localStorage.getItem('opponent')).subscribe(

            (response) => {
                const radarChartMyData1 = new Array();
                let numberOfQuizzes = 0;
                console.log(response);
                let map = new Map();
                for (let i = 0; i < response.length; i++) {
                    if (!map.has(response[i].quizId)) {
                        map.set(response[i].quizId, 1);
                        numberOfQuizzes++;
                    }
                }
                console.log(map);
                map = new Map();
                for (let i = 0; i < response.length; i++) {
                    if (!map.has(response[i].skillTopic)) {
                        map.set(response[i].skillTopic, response[i].proficiency);
                    }
                    else {
                        map.set(response[i].skillTopic, map.get(response[i].skillTopic) + response[i].proficiency);
                    }
                }
                console.log(map);
                for (const entry of Array.from(map)) {
                    if (entry[0] == 'Arrays')
                        radarChartMyData1[0] = (entry[1] / numberOfQuizzes);
                    if (entry[0] == 'Methods')
                        radarChartMyData1[1] = (entry[1] / numberOfQuizzes);
                    if (entry[0] == 'Operators')
                        radarChartMyData1[2] = (entry[1] / numberOfQuizzes);
                    if (entry[0] == 'Strings')
                        radarChartMyData1[3] = (entry[1] / numberOfQuizzes);
                    if (entry[0] == 'Variables')
                        radarChartMyData1[4] = (entry[1] / numberOfQuizzes);
                }
                const elem = {
                    'data': radarChartMyData1,
                    'label': localStorage.getItem('opponentName')
                };
                // this.radarChartData.push(elem1);
                // this.radarChartData.push(elem);

                this.radarChartData = [this.elem1, elem];
                this.dataFlag1 = true;
                console.log(this.radarChartData);

            }
        );
    }


    plotQuizLineGraphForUser() {
        this.backend.getAllUsers().subscribe(status => {
            let user;
            let quizScores=new Array();
            let map = new Map();
            for (let i = 0; i < status.length; i++) {
                if (status[i].id == this.userId){
                    user = status[i];
                    break;
                }
            }
            console.log(user.id);
            for (let i = 0; i < user.quizHistories.length; i++){
                const elem = {
                    "quiz": "quiz" + (i+1),
                    "score":  user.quizHistories[i].score
                }
                quizScores.push(elem);

            }

            console.log(quizScores);
            let i = 1;
            const dataUserLineChart = new Array();
            this.lineChartLabelsForUser = new Array();

            for (let i=0;i<quizScores.length;i++) {
                this.lineChartLabelsForUser.push(quizScores[i].quiz);
                dataUserLineChart.push(quizScores[i].score);
            }
            this.elemforLineChart = {'data': dataUserLineChart, 'label': 'you'};
            this.plotQuizLineGraphForOpponent();
            });
    }

    elemforLineChart: any;
    lineChartLabelsForUser= [];
    lineChartLabelsForOpponent= [];

    plotQuizLineGraphForOpponent(){
        this.backend.getAllUsers().subscribe(status => {
            let user;
            let quizScores= new Array();
            let map = new Map();
            for (let i = 0; i < status.length; i++) {
                if (status[i].id == localStorage.getItem('opponent')){
                    user = status[i];
                    break;
                }
            }
            for (let i = 0; i < user.quizHistories.length; i++){
                const elem = {
                    "quiz": "quiz" + (i+1),
                    "score":  user.quizHistories[i].score
                }
                quizScores.push(elem);

            }

            console.log(quizScores);
            let i = 1;
            const dataUserLineChart = new Array();
            this.lineChartLabelsForOpponent = new Array();
            for (let i=0;i<quizScores.length;i++) {
                this.lineChartLabelsForOpponent.push(quizScores[i].quiz);
                dataUserLineChart.push(quizScores[i].score);
            }
            const elemforLineChart = {'data': dataUserLineChart, 'label': localStorage.getItem('opponentName')};
            this.lineChartLabels = this.lineChartLabelsForUser.length > this.lineChartLabelsForOpponent.length
                                                ? this.lineChartLabelsForUser : this.lineChartLabelsForOpponent;
            this.lineChartData = [elemforLineChart, this.elemforLineChart];
            this.dataFlag = true;
        });
    }
   public chartHovered(e: any): void {
        // console.log(e);
    }
}
