import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContestComponent } from './component/contest/contest.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { MyTaskDetailsComponent } from './component/my-task-details/my-task-details.component';
import { MyTaskViewAllComponent } from './component/my-task-view-all/my-task-view-all.component';
import { MyTaskComponent } from './component/my-task/my-task.component';
import { NewsDetailsComponent } from './component/news-details/news-details.component';
import { NewsComponent } from './component/news/news.component';
import { ScoreCardComponent } from './component/score-card/score-card.component';

const routes: Routes = [
  // {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'myTask', component:MyTaskComponent},
  {path:'mytaskdetail',component:MyTaskDetailsComponent},
  {path:'mytaskViewAll',component:MyTaskViewAllComponent},
  {path:'news',component:NewsComponent},
  {path:'newsDetails',component:NewsDetailsComponent},
  {path:'scoreCard',component:ScoreCardComponent},
  {path:'contest',component:ContestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
