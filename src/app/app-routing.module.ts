import {RouterModule, Routes} from '@angular/router';
import {SignUpComponent} from './sign-up/sign-up.component';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {PreferencesComponent} from './dashboard/preferences/preferences.component';
import {ProfileComponent} from './dashboard/profile/profile.component';
import {QuizHistoryComponent} from './dashboard/quiz-history/quiz-history.component';
import {StartQuizComponent} from './dashboard/start-quiz/start-quiz.component';
import {LogoutComponent} from './logout/logout.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, children: [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'preferences', component: PreferencesComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'quiz-history', component: QuizHistoryComponent },
    { path: 'start-quiz', component: StartQuizComponent }
  ]},
  { path: 'logout', component: LogoutComponent },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(appRoutes);
