import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QuizHistoryRoutingModule} from './quiz-history-routing.module';
import {FormsModule} from '@angular/forms';
import {PageHeaderModule} from '../../shared/modules/page-header/page-header.module';
import {QuizHistoryComponent} from './quiz-history.component';

@NgModule({
    imports: [
        CommonModule,
        QuizHistoryRoutingModule,
        FormsModule,
        PageHeaderModule
    ],
    declarations: [QuizHistoryComponent]
})
export class QuizHistoryModule {


}
