import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './layout.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            {path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
            {path: 'quiz', loadChildren: './quiz/quiz.module#QuizModule'},
            {path: 'proficiency', loadChildren: './proficiency/proficiency.module#ProficiencyModule'},
            {path: 'quiz-history', loadChildren: './quiz-history/quiz-history.module#QuizHistoryModule'},
            {path: 'social-vis', loadChildren: './social-vis/social-vis.module#SocialVisModule'},
            {
                path: 'question-history',
                loadChildren: './question-history/question-history.module#QuestionHistoryModule'
            },
            {path: 'profile', loadChildren: './profile/profile.module#ProfileModule'},
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {
}
