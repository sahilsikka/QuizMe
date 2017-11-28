import {QuizConfig} from './quiz-config';
import {Question} from './question';

export class Quiz {
    id: number;
    config: QuizConfig;
    questions: Question[];

    constructor(data: any) {
        if (data) {
            console.log(data)
            this.id = data.id;
            this.questions = [];
            data.questions.forEach(q => {
                this.questions.push(new Question(q));
            });
        }
    }
}
