import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BackendService} from '../backend.service';

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
  constructor(private router: Router, private route: ActivatedRoute, private backend: BackendService) {

  }

  ngOnInit() {
  }

  registerUser(){
    console.log('Inside Register User Function');
    console.log(this.username + ' ' + this.password + ' ' + this.firstname + ' ' + this.lastname);

    // Add data to database via service

    this.backend.registerUser(this.username, this.password, this.firstname, this.lastname).subscribe(response => {
      console.log(response);
    });
    // On successful login redirect to login page
    this.router.navigateByUrl('/login');


  }
}
