import { ViewnComponent } from './viewn/viewn.component';
import { ScoresComponent } from './scores/scores.component';
import { NewsComponent } from './news/news.component';
import { TeamsComponent } from './teams/teams.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';


const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'teams',
        component: TeamsComponent
      },
      {
        path: 'news',
        component: NewsComponent
      },
      {
        path: '',
        component: NewsComponent
      },
      {
        path: 'score',
        component: ScoresComponent
      },
      {
        path: 'news/viewn/:id',
        component: ViewnComponent,
      }
      ,
      {
        path: 'news/viewt',
        component: ViewnComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
