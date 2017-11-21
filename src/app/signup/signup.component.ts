import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../router.animations';
import {BackendService} from '../backend.service';
import {Router} from '@angular/router';
import {AuthGuard} from '../shared/guard/auth.guard';


@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    model: any = {};
    firstName = String;
    lastName = String;
    email = String;
    password = String;

    constructor(public router: Router, private backend: BackendService, private authguard: AuthGuard) {
    }

    ngOnInit() {
        if (this.router.url === '/signup' &&  this.authguard.canActivate()) {
            this.router.navigate(['/dashboard']);
        } else {
            this.router.navigate(['/signup']);
        }

    }

    register() {
        const payLoad = {
            'fname': this.model.firstName,
            'lname': this.model.lastName,
            'email': this.model.email,
            'password': this.model.password
        };
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
}
