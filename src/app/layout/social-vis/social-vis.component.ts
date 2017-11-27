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
    userId = this.userId;
    onClickResult: OnClickEvent;
    onHoverRatingChangeResult: OnHoverRatingChangeEvent;
    onRatingChangeResult: OnRatingChangeEven;
    // myLabelText = 'My text here!';

    constructor( public router: Router, private backend: BackendService) {    }

    ngOnInit() {
this.proficiency();
    }

    proficiency() {
        const payLoad = [
            {
            'skill_topic' : 'Java',
            'proficiency': 5
            }
            ];
        // this.backend.getUserProficiency(payLoad).subscribe(
        //     response => {
        //         console.log(response);
        //         // if (response.status === 'Success') {
        //         //     this.router.navigateByUrl('/login');
        //         // } else if (response.status === 'Email id exists') {
        //         //     alert('Email Id exists');
        //         //     this.router.navigateByUrl('/login');
        //         //
        //         // }
        //     });
    }

    onClick = ($event: OnClickEvent) => {
        console.log('onClick $event: ', $event);
        this.onClickResult = $event;
    };

    onRatingChange = ($event: OnRatingChangeEven) => {
        console.log('onRatingUpdated $event: ', $event);
        this.onRatingChangeResult = $event;
    };

    onHoverRatingChange = ($event: OnHoverRatingChangeEvent) => {
        console.log('onHoverRatingChange $event: ', $event);
        this.onHoverRatingChangeResult = $event;
    };

}
