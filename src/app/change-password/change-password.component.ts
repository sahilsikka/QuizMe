import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  currentPassword = '';
  newPassword = '';


  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  changePassword(){
    console.log(this.currentPassword + ' ' + this.newPassword);
    // Call service and edit password in database
  }

}
