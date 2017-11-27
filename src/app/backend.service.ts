import 'rxjs/Rx';
import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import {Router} from '@angular/router';

@Injectable()
export class BackendService {

    baseUrl= 'http://quizme-services.us-east-1.elasticbeanstalk.com';
    header = new Headers();

    constructor(private http: Http, private router: Router) {
        this.http = http;
    }
    authUser(email: string, password: any) {
        this.header = new Headers();
        this.header.append('email', email);
        this.header.append('password', password);
        return this.http.get(this.baseUrl + '/user/login', {headers: this.header})
            .map((response: Response) => response.json());
    }

    createUser(payLoad: any) {
        console.log(JSON.stringify(payLoad));
        return this.http.post(this.baseUrl + '/user/registration', JSON.stringify(payLoad))
            .map((response: Response) => {
                return response.json();
            });
    }

    getUser(userId: any) {
        return this.http.get(this.baseUrl + '/user/' + userId)
            .map((response: Response) => {
                return response.json();
            });
    }

    getQuizQuestions(userId) {
        return this.http.get(this.baseUrl + '/quiz/' + userId)
            .map(
                (response: Response) => {
                    return response.json();
                });
    }

    submitAnswers(answer) {
        return this.http.post(this.baseUrl + '/quiz', answer)
            .map((response: Response) => {
                return response.json();
            });
    }

    getQuizHistory(userId) {
        return this.http.get(this.baseUrl + '/quizHistory/user/' + userId)
            .map((response: Response) => {
                return response.json();
            });
    }

    getQuestionHistory(quizId, userId) {
        this.header = new Headers();
        this.header.append('X-quiz-id', quizId);
        this.header.append('X-user-id', userId);
        return this.http.get(this.baseUrl + '/quiz/history', {headers: this.header})
            .map((response: Response) => response.json());
    }

    getUserProficiency(userId: any) {
        return this.http.get(this.baseUrl + '/userProficiency/' + userId)
            .map((response: Response) => {
                return response.json();
            });
    }

    putUserProficiency(userId: any, payload: any) {
        return this.http.put(this.baseUrl + '/userProficiency/' + userId, JSON.stringify(payload))
            .map((response: Response) => {
                return response.json();
            });
    }

    getCategoryAnalystics(userId: any){
        this.header = new Headers();
        this.header.append('X-user-id', userId);
        return this.http.get(this.baseUrl + '/analytics/category/', {headers: this.header}).map(
            (response: Response) => {
                return response.json();
            }
        )
    }

    getKnowledgeValues(userId: any){

        return this.http.get(this.baseUrl + '/userProficiency/knowledge/' + userId).map(
            (response: Response) => {
                console.log(response);
                return response.json();
            }
        );
    }
}
