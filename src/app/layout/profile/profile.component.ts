import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../router.animations';
import {BackendService} from '../../backend.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
    animations: [routerTransition()]
})
export class ProfileComponent implements OnInit {
    user = JSON.parse(localStorage.getItem('currentUser')) || {};
    email = this.user.email;
    firstName = this.user.fname;
    lastName = this.user.lname;
    age = this.user.age;
    gender = this.user.gender;
    country = this.user.country;
    organization = this.user.orgaznization;

    constructor(public router: Router, private backend: BackendService) {
    }

    ngOnInit() {
    }

    register() {
        const payLoad = {};
        this.backend.createUser(payLoad).subscribe(
            response => {
                console.log(response);
                if (response.status === 'Success') {
                    this.router.navigateByUrl('/login');
                } else if (response.status === 'Email id exists') {
                    alert('Email Id exists');
                    this.router.navigateByUrl('/login');

                }
            });
    }

    updateProfile() {
        const userId = this.user.id;
        console.log(this.lastName);
        const payLoad = {
            "fname":this.firstName,
            "lname": this.lastName,
            "gender": this.gender,
            "organization": this.organization,
            "country": this.country
        };
console.log(payLoad);
        this.backend.update(payLoad,userId).subscribe(
            response =>{
                this.router.navigate(['/dashboard']);
                //console.log(response);
            }
        )

    }

}
