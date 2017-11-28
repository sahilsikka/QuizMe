import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {QuizHistoryComponent} from './quiz-history.component';

const routes: Routes = [
    {path: '', component: QuizHistoryComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class QuizHistoryRoutingModule {
}
