import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-problems',
  templateUrl: './problems.component.html',
  styleUrls: ['./problems.component.css']
})
export class ProblemsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.displayQuiz();
    this.displayTopic();
    this.displayLevel();
  }

  displayQuiz(){
    // button to start quiz
  }

  displayTopic(){
  //  display list of topics
  }

  displayLevel(){
    // level of quiz
  }
}
