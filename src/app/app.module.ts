import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PreferencesComponent } from './Dashboard/preferences/preferences.component';
import { QuizHistoryComponent } from './Dashboard/quiz-history/quiz-history.component';
import { QuizListComponent } from './Dashboard/quiz-history/quiz-list/quiz-list.component';
import { QuestionListComponent } from './Dashboard/quiz-history/quiz-list/question-list/question-list.component';
import { LogoutComponent } from './logout/logout.component';
import {routing} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {BackendService} from './backend.service';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { StartQuizComponent } from './dashboard/start-quiz/start-quiz.component';
import { QuestionsComponent } from './dashboard/start-quiz/questions/questions.component';
import { ResultComponent } from './dashboard/start-quiz/result/result.component';
import {HeaderComponent} from "./shared/components/header/header.component";
import {SidebarComponent} from "./shared/components/sidebar/sidebar.component";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    DashboardComponent,
    PreferencesComponent,
    QuizHistoryComponent,
    QuizListComponent,
    QuestionListComponent,
    LogoutComponent,
    ProfileComponent,
    StartQuizComponent,
    QuestionsComponent,
    ResultComponent,
    HeaderComponent,
    SidebarComponent
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
