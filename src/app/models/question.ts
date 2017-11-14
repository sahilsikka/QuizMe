import { Option } from './option';


export class Question {
    id: number;
    name: string;
    coursetopic: string;
    level: string;
    timeTaken: number;
    answered: string;
    options: Option[];


    constructor(data: any) {
      console.log('in question' + data);
        data = data || {};
        this.id = data.id;
        this.name = data.question;
        this.coursetopic = data.coursetopic;
        this.options = [];
        if (data.choiceA != null) {
          if (data.answer === 'ChoiceA')
            this.options.push(new Option(1, data.id, data.choiceA, "ChoiceA", true));
          else
            this.options.push(new Option(1, data.id, data.choiceA,  "ChoiceA", false));
        }
        if (data.choiceB != null) {
          if (data.answer === 'ChoiceB')
            this.options.push(new Option(2, data.id, data.choiceB, "ChoiceB", true));
          else
            this.options.push(new Option(2, data.id, data.choiceB, "ChoiceB", false));
        }
        if (data.choiceC != null) {
          if (data.answer === 'ChoiceC')
            this.options.push(new Option(3, data.id, data.choiceC,"ChoiceC",  true));
          else
            this.options.push(new Option(3, data.id, data.choiceC, "ChoiceC", false));
        }
        if (data.choiceD != null) {
          if (data.answer === 'ChoiceD')
            this.options.push(new Option(4, data.id, data.choiceD,"ChoiceD", true));
          else
            this.options.push(new Option(4, data.id, data.choiceD, "ChoiceD", false));
        }
        if (data.choiceE != null) {
          if (data.answer === 'ChoiceE')
            this.options.push(new Option(5, data.id, data.choiceE, "ChoiceE", true));
          else
            this.options.push(new Option(5, data.id, data.choiceE,"ChoiceE",  false));
         }
        this.level = data.level;
        this.answered = null;
    }

    setAnswer(){
      const that = this;
      this.options.forEach(function (option) {
          if (option.getSelected()){
            that.answered = option.getChoice();
          }
      });
    }
}
