import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username= '';
  password= '';

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  authenticateUser(){
    console.log('Inside login function');
    console.log(this.username + ' ' + this.password);

    // Authenticate login function through service


    // Redirection to dashboard on successful login
     this.router.navigateByUrl('/dashboard');
  }
}
