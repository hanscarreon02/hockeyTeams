import { DataApiService } from './../../data-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.scss'],
})
export class ScoresComponent implements OnInit {
matchResult = [];
headLine;
  constructor(
    private apiData: DataApiService
  ) { }

  ngOnInit() {
    this.readScore();
  }

  readScore(){
    this.apiData.getScores().subscribe((data)=> {
      console.log(data.events[0].name);
      // console.log(data.events[0].competitions[0].notes[0].headline);
      this.headLine = data.events[0].competitions[0].notes[0].headline
      this.matchResult = data.events[0];
      console.log("score");
    })
  }

}
