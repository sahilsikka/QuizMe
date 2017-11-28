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
    userId = this.userId;
    // Opponent
    opponentId: string | any;
    radarChartData: any = [];
    // lineChart
    lineChartData = [];
    dataFlag = false;
    opponentName;
    // Radar
    public radarChartLabels: string[] = ['Arrays', 'Methods', 'Operators', 'Strings', 'Variables'];
    public radarChartType: string = 'radar';
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
    public lineChartLegend: boolean = true;
    public lineChartType: string = 'line';


    constructor(public router: Router, private backend: BackendService) {
    }

    ngOnInit() {
        this.getOpponent();
    }

    proficiency() {
    }

    // events
    public chartClicked(e: any): void {
        // console.log(e);
    }

    getOpponent() {
        let opponentName="";
        this.opponentId = localStorage.getItem('opponent');
        this.backend.getUser(this.opponentId).subscribe(
            opp => {
                localStorage.setItem('opponentName', opp.fname);
                console.log(opp);
                this.opponentName = opp.fname;
                opponentName = this.opponentName;
                this.lineChartData = [
                    {data: [65, 59, 80, 81], label: 'You'},
                    {data: [28, 48, 40, 19, 86, 27, 90], label: localStorage.getItem('opponentName')},
                ];
                this.radarChartData = [
                    {data: [75, 55, 80, 70, 86], label: 'You'},
                    {data: [60, 66, 77, 80, 76], label: localStorage.getItem('opponentName')}
                ];
                this.dataFlag = true;
                console.log(opponentName);
            });

    }

    public chartHovered(e: any): void {
        // console.log(e);
    }


}
