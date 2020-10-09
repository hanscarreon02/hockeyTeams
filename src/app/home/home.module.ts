import { ViewnComponent } from './viewn/viewn.component';
import { ViewtComponent } from './viewt/viewt.component';
import { ScoresComponent } from './scores/scores.component';
import { TeamsComponent } from './teams/teams.component';
import { NewsComponent } from './news/news.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    
  ],
  declarations: [
    HomePage,
    HeaderComponent,
    NewsComponent,
    TeamsComponent,
    ScoresComponent,
    ViewtComponent,
    ViewnComponent
  ]
})
export class HomePageModule {}
