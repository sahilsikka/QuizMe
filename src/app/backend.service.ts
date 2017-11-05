import 'rxjs/Rx';

import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import {Router} from '@angular/router';

@Injectable()
export class BackendService {

  baseUrl= 'https://quizme-services.herokuapp.com/';
  header = new Headers();

  constructor(private http: Http, private router: Router) {
    this.http = http;
  }

  getLoginRequest(email: string, password: any) {
    this.header = new Headers();
    this.header.append('email', email);
    this.header.append('password', password);

    return this.http.get(this.baseUrl + '/user/login', {headers: this.header})
      .map(
        (response: Response) => {

          return response.json();
        });
  }

  registerUser(email: any, password: any, fname: any, lname: any){

      const payLoad = {
        'email': email,
        'password': password
      };
    this.header = new Headers();

    console.log(JSON.stringify(payLoad));
    return this.http.post(this.baseUrl + '/user/registration', JSON.stringify(payLoad))
      .map((response: Response) => {
        return response.json();
      });
  }

}
