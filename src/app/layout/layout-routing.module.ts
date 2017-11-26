import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'quiz', loadChildren: './quiz/quiz.module#QuizModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'proficiency', loadChildren: './proficiency/proficiency.module#ProficiencyModule' },
            { path: 'quiz-history', loadChildren: './quiz-history/quiz-history.module#QuizHistoryModule' },
            { path: 'question-history', loadChildren: './question-history/question-history.module#QuestionHistoryModule' },
            { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
