import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BackendService} from '../backend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username= '';
  password= '';

  constructor(private router: Router, private route: ActivatedRoute, private backend: BackendService) {
  }

  ngOnInit() {
  }
  logged: any;
  authenticateUser() {
    console.log('Inside login function');

    // Authenticate login function through service
/*response = {
  'id': 1,
  'email': 'abc@gmail.com',
  'fname': null,
  'lname': null
};*/
    this.backend.getLoginRequest(this.username, this.password).subscribe(
      response => {
        console.log(response);
        if (response.status != 'Login Failed') {
          localStorage.setItem('userName', response.email);
          localStorage.setItem('userId', response.id);
          this.router.navigateByUrl('/dashboard');
        }
        else
        {
          alert('Please try again');
        }


      });
  }

    // Redirection to dashboard on successful login
}
