import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './Dashboard/profile/profile.component';
import { PreferencesComponent } from './Dashboard/preferences/preferences.component';
import { StartQuizComponent } from './Dashboard/start-quiz/start-quiz.component';
import { QuizHistoryComponent } from './Dashboard/quiz-history/quiz-history.component';
import { QuizListComponent } from './Dashboard/quiz-history/quiz-list/quiz-list.component';
import { QuestionListComponent } from './Dashboard/quiz-history/quiz-list/question-list/question-list.component';
import { QuestionsComponent } from './Dashboard/start-quiz/questions/questions.component';
import { ResultComponent } from './Dashboard/start-quiz/result/result.component';
import { LogoutComponent } from './logout/logout.component';
import {routing} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {BackendService} from './backend.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    DashboardComponent,
    ProfileComponent,
    PreferencesComponent,
    StartQuizComponent,
    QuizHistoryComponent,
    QuizListComponent,
    QuestionListComponent,
    QuestionsComponent,
    ResultComponent,
    LogoutComponent
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
