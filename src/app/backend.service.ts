import 'rxjs/Rx';

import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';

@Injectable()
export class BackendService {
  constructor(private http: Http, private router: Router) {
  }
}
