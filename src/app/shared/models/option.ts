export class Option {
    id: number;
    questionId: number;
    name: string;
    choice:string;
    isAnswer: boolean;
    selected: boolean;

    constructor(id, questionId, name, choice, answer) {
        this.id = id;
        this.questionId = questionId;
        this.name = name;
        this.choice = choice;
        this.isAnswer = answer;
    }

    getChoice(){
      return this.choice;
    }

    getSelected(){
      return this.selected;
    }
}
