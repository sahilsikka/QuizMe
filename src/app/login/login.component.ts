import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {routerTransition} from '../router.animations';
import {BackendService} from '../backend.service';
import {AuthGuard} from '../shared/guard/auth.guard';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    model: any = {};
    email: String;
    password: String;

    constructor(public router: Router, private backend: BackendService, private authguard: AuthGuard) {
    }

    ngOnInit() {
        if (this.router.url === '/login' &&  this.authguard.canActivate()) {
            this.router.navigate(['/dashboard']);
        }
    }

    login() {
        this.backend.authUser(this.model.email, this.model.password).subscribe(
            status => {
                console.log(status);
                if (status.status === 'Success') {
                    this.backend.getUser(status.id).subscribe(
                        user => {
                            localStorage.setItem('currentUser', JSON.stringify(user));
                            this.router.navigateByUrl('/dashboard');

                        });
                } else {
                    alert('Please try again');
                }
            });
    }
}
