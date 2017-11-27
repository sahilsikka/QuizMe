import { Component, OnInit } from '@angular/core';
import {routerTransition} from '../../router.animations';
import {OnClickEvent, OnHoverRatingChangeEvent, OnRatingChangeEven} from 'angular-star-rating';
import {BackendService} from '../../backend.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-social-vis',
    templateUrl: './social-vis.component.html',
    styleUrls: ['./social-vis.component.scss'],
    animations: [routerTransition()]})

export class SocialVisComponent implements OnInit {
    user = JSON.parse(localStorage.getItem('currentUser')) || {};
    username = this.user.fname + ' ' + this.user.lname;
    userId = this.userId;

    // Opponent
    opponentId: string | any;
    opponentName: string;
    opponent: any;

    // Radar
    public radarChartLabels: string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
    public radarChartData: any = [
        { data: [65, 59, 90, 81, 56, 55, 40], label: 'You' },
        { data: [28, 48, 40, 19, 96, 27, 100], label: this.opponentName }
    ];
    public radarChartType: string = 'radar';

    // lineChart
    public lineChartData: Array<any> = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'You' },
        { data: [28, 48, 40, 19, 86, 27, 90], label: this.opponentName },
    ];
    public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
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


    constructor( public router: Router, private backend: BackendService) {    }

    ngOnInit() {
        this.getOpponent();
    }

    proficiency() {    }

    // events
    public chartClicked(e: any): void {
        // console.log(e);
    }

    getOpponent(){
        this.opponentId = localStorage.getItem('opponent');

        this.backend.getUser(this.opponentId).subscribe(
            opp => {
                console.log(opp);
                this.opponent = opp;
                console.log(this.opponent);
                this.opponentName = this.opponent.fname + " " + this.opponent.lname;
                console.log(this.opponentName);
            });

    }

    public chartHovered(e: any): void {
        // console.log(e);
    }


}
