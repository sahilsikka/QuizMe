import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  firstname= '';
  lastname= '';
  username= '';
  password= '';
  constructor(private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
  }

  registerUser(){
    console.log('Inside Register User Function');
    console.log(this.username + ' ' + this.password + ' ' + this.firstname + ' ' + this.lastname);

    // Add data to database via service

    // On successful login redirect to login page
    this.router.navigateByUrl('/login');
  }
}
