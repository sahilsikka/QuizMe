import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SocialVisComponent } from './quiz-history.component';

const routes: Routes = [
    { path: '', component: QuizHistoryComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class QuizHistoryRoutingModule { }
