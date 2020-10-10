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
  }// get json api data of news
  getTeams(){
    return this.http.get<any>('http://site.api.espn.com/apis/site/v2/sports/hockey/nhl/teams')
  }// get json api data of teams
  getScores(){
    return this.http.get<any>('http://site.api.espn.com/apis/site/v2/sports/hockey/nhl/scoreboard')
  }// get json api data of scores

  passTeamsData(){
    return this.http.get<any>('http://site.api.espn.com/apis/site/v2/sports/hockey/nhl/teams')
    .subscribe((data)=>  {  this.teamsData = data});
  }// get json api data of pass teams data 

  readName(){
    return "edward"
  }
}
