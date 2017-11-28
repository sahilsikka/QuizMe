import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QuizRoutingModule} from './quiz-routing.module';
import {QuizComponent} from './quiz.component';
import {PageHeaderModule} from './../../shared';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        QuizRoutingModule,
        PageHeaderModule,
        FormsModule
    ],
    declarations: [QuizComponent]
})
export class QuizModule {
}
