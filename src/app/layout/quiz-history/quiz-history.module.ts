import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QuizHistoryRoutingModule} from './quiz-history-routing.module';
import {FormsModule} from '@angular/forms';
import {PageHeaderModule} from '../../shared/modules/page-header/page-header.module';
import {QuizHistoryComponent} from './quiz-history.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ChartsModule} from 'ng2-charts';

@NgModule({
    imports: [
        CommonModule,
        QuizHistoryRoutingModule,
        FormsModule,
        ChartsModule,
        PageHeaderModule,
        NgbModule.forRoot(),
    ],
    declarations: [QuizHistoryComponent]
})
export class QuizHistoryModule {

}
