import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../router.animations';
import {BackendService} from '../../backend.service';
import {Response} from '@angular/http';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];
    currentUser: any;
    quizHistories: any;
    discussions: any;
    userId: any;
    view: any[] = [700, 400];

    // options
    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = true;
    showXAxisLabel = true;
    xAxisLabel = 'Country';
    showYAxisLabel = true;
    yAxisLabel = 'Population';
    dataFlag=false;
    colorScheme = {
        domain: ['#5AA454', '#C0C0C0', '#C7B42C', '#AAAAAA']
    };

    // line, area
    autoScale = true;
    multi = [];


    constructor(private backendService: BackendService) {
        this.sliders.push({
            imagePath: 'assets/images/slider1.jpg',
            label: 'First slide label',
            text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
        }, {
            imagePath: 'assets/images/slider2.jpg',
            label: 'Second slide label',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }, {
            imagePath: 'assets/images/slider3.jpg',
            label: 'Third slide label',
            text: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
        });

        this.alerts.push({
            id: 1,
            type: 'success',
            message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
        }, {
            id: 2,
            type: 'warning',
            message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
        });
    }

    ngOnInit() {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.userId = this.currentUser.id;
        this.quizHistories = this.currentUser.quizHistories.length;
        this.discussions = this.currentUser.discussions.length
        this.knowledgeGraph();
        this.QuestionCorrectBarChart();
    }

    barchartResults = [];
    performanceResults = [];

    knowledgeGraph() {

       this.backendService.getKnowledgeValues(this.userId).subscribe(
           (response) => {

                console.log(response);
                const map = new Map();
                /*const response = [
                    {
                        'id': 1,
                        'skillTopic': 'Variables',
                        'proficiency': 0,
                        'quizId': 287992064,
                        'timestamp': 1511742610000
                    },
                    {
                        'id': 2,
                        'skillTopic': 'Operators',
                        'proficiency': 0,
                        'quizId': 287992064,
                        'timestamp': 1511742610000
                    },
                    {
                        'id': 3,
                        'skillTopic': 'Arrays',
                        'proficiency': 0.1,
                        'quizId': 287992064,
                        'timestamp': 1511742610000
                    },
                    {
                        'id': 4,
                        'skillTopic': 'Strings',
                        'proficiency': 0,
                        'quizId': 287992064,
                        'timestamp': 1511742611000
                    },
                    {
                        'id': 5,
                        'skillTopic': 'Methods',
                        'proficiency': 0,
                        'quizId': 287992064,
                        'timestamp': 1511742611000
                    },
                    {
                        'id': 21,
                        'skillTopic': 'Variables',
                        'proficiency': 100,
                        'quizId': 727305120,
                        'timestamp': 1511746795000
                    },
                    {
                        'id': 22,
                        'skillTopic': 'Operators',
                        'proficiency': 0,
                        'quizId': 727305120,
                        'timestamp': 1511746795000
                    },
                    {
                        'id': 23,
                        'skillTopic': 'Arrays',
                        'proficiency': 0,
                        'quizId': 727305120,
                        'timestamp': 1511746796000
                    },
                    {
                        'id': 24,
                        'skillTopic': 'Strings',
                        'proficiency': 100,
                        'quizId': 727305120,
                        'timestamp': 1511746796000
                    },
                    {
                        'id': 25,
                        'skillTopic': 'Methods',
                        'proficiency': 0,
                        'quizId': 727305120,
                        'timestamp': 1511746796000
                    }
                ];*/

                for (let i = 0; i < response.length; i++) {
                    if (!map.has(response[i].skillTopic)) {
                        const arr = new Array();
                        map.set(response[i].skillTopic, arr);
                    }
                    const elem = {
                        'name': 'Quiz ' + (map.get(response[i].skillTopic).length + 1),
                        'value': response[i].proficiency
                    };
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
        this.backendService.getCategoryAnalystics(this.userId).subscribe(
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
}
