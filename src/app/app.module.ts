import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogoutComponent } from './logout/logout.component';
import {routing} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {BackendService} from './backend.service';
import { ProfileComponent } from './dashboard/profile/profile.component';
import {HeaderComponent} from './shared/components/header/header.component';
import {SidebarComponent} from './shared/components/sidebar/sidebar.component';
import { ProblemsComponent } from './problems/problems.component';
import {QuizHistoryComponent} from './quiz-history/quiz-history.component';
import { ProgressComponent } from './progress/progress.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { HelpComponent } from './help/help.component';
import { PreferencesComponent } from './dashboard/preferences/preferences.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    DashboardComponent,
    LogoutComponent,
    ProfileComponent,
    HeaderComponent,
    SidebarComponent,
    QuizHistoryComponent,
    ProblemsComponent,
    ProgressComponent,
    ChangePasswordComponent,
    HelpComponent,
    PreferencesComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
