import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {QuestionHistoryComponent} from './question-history.component';

const routes: Routes = [
    {path: '', component: QuestionHistoryComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class QuestionHistoryRoutingModule {
}
