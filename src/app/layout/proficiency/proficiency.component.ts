import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../router.animations';
import {OnClickEvent} from 'angular-star-rating';
import {BackendService} from '../../backend.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-proficiency',
    templateUrl: './proficiency.component.html',
    styleUrls: ['./proficiency.component.scss'],
    animations: [routerTransition()]
})

export class ProficiencyComponent implements OnInit {
    user = JSON.parse(localStorage.getItem('currentUser')) || {};
    userId = this.userId;
    onClickResult: OnClickEvent;
    onClick = ($event: OnClickEvent) => {
        console.log('onClick $event: ', $event);
        this.onClickResult = $event;
    };

    constructor(public router: Router, private backend: BackendService) {
    }

    ngOnInit() {
    }
}
