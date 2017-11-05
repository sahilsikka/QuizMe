import {RouterModule, Routes} from '@angular/router';
import {SignUpComponent} from './sign-up/sign-up.component';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProfileComponent} from './dashboard/profile/profile.component';
import {LogoutComponent} from './logout/logout.component';
import {ProblemsComponent} from './problems/problems.component';
import {QuizHistoryComponent} from './quiz-history/quiz-history.component';
import {ProgressComponent} from './progress/progress.component' ;
import {ChangePasswordComponent} from './change-password/change-password.component';
import {HelpComponent} from './help/help.component';
import {PreferencesComponent} from "./dashboard/preferences/preferences.component";

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, children: [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'profile', component: ProfileComponent },
   { path: 'preferences', component: PreferencesComponent }
  ]},

  { path: 'problems', component: ProblemsComponent },
  { path: 'quiz-history', component: QuizHistoryComponent },
  { path: 'progress', component: ProgressComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  { path: 'help', component: HelpComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(appRoutes);
