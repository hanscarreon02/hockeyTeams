import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(
    private http: HttpClient
  ) { }

  getNews(){
    return this.http.get<any>('http://site.api.espn.com/apis/site/v2/sports/hockey/nhl/news')
  }
  getTeams(){
    return this.http.get<any>('http://site.api.espn.com/apis/site/v2/sports/hockey/nhl/teams')
  }
  getScores(){
    return this.http.get<any>('http://site.api.espn.com/apis/site/v2/sports/hockey/nhl/scoreboard')
  }
}
