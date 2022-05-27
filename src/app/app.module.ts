import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { MyTaskComponent } from './component/my-task/my-task.component';
import { MyTaskDetailsComponent } from './component/my-task-details/my-task-details.component';
import { NewsComponent } from './component/news/news.component';
import { NewsDetailsComponent } from './component/news-details/news-details.component';
import { ScoreCardComponent } from './component/score-card/score-card.component';
import { MyTaskViewAllComponent } from './component/my-task-view-all/my-task-view-all.component';
import { ContestComponent } from './component/contest/contest.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MyTaskComponent,
    MyTaskDetailsComponent,
    NewsComponent,
    NewsDetailsComponent,
    ScoreCardComponent,
    MyTaskViewAllComponent,
    ContestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
