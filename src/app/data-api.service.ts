import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataApiService {
public teamsData ;
  constructor(
    private http: HttpClient
  ) { 
    this.passTeamsData();
  }

  getNews(){
    return this.http.get<any>('http://site.api.espn.com/apis/site/v2/sports/hockey/nhl/news')
  }
  getTeams(){
    return this.http.get<any>('http://site.api.espn.com/apis/site/v2/sports/hockey/nhl/teams')
  }
  getScores(){
    return this.http.get<any>('http://site.api.espn.com/apis/site/v2/sports/hockey/nhl/scoreboard')
  }

  passTeamsData(){
    return this.http.get<any>('http://site.api.espn.com/apis/site/v2/sports/hockey/nhl/teams')
    .subscribe((data)=>  {  this.teamsData = data});
  }
}
