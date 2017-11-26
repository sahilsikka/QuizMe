import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionHistoryComponent } from './question-history.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {PageHeaderModule} from '../../shared/modules/page-header/page-header.module';
import {FormsModule} from '@angular/forms';
import {ChartsModule} from 'ng2-charts';
import {QuestionHistoryRoutingModule} from './question-history-routing.module';

@NgModule({
  imports: [
      CommonModule,
      QuestionHistoryRoutingModule,
      FormsModule,
      ChartsModule,
      PageHeaderModule,
      NgbModule.forRoot(),
  ],
  declarations: [QuestionHistoryComponent]
})
export class QuestionHistoryModule { }
