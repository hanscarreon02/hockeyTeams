import { LoadingController } from '@ionic/angular';
import { DataApiService } from './../../data-api.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.scss'],
})
export class ScoresComponent implements OnInit {
matchResult = [];
headLine;
isLoading = false;
  constructor(
    private apiData: DataApiService,
    private location: Location,
    public loadingController: LoadingController


  ) { }

  ngOnInit() {
    
    this.showLoader()
    this.readScore();
  }

  readScore(){
    this.apiData.getScores().subscribe((data)=> {
      console.log(data.events);
      // console.log(data.events[0].competitions[0].notes[0].headline);
      this.headLine = data.events[0].competitions[0].notes[0].headline
      this.matchResult = data.events;
      // this.io
      if(data){
        setTimeout(() => {
            this.hideLoader();
            this.isLoading = true

        }, 1000);
      }
      console.log("score");
    })
  }
  backClicked() {
    this.location.back()
  }// history back 
  showLoader() {

    this.loadingController.create({
      message: 'Please wait...'
    }).then((res) => {
      res.present();
    });

  }
  // Show the loader for infinite time

  hideLoader() {

    this.loadingController.dismiss().then((res) => {
      console.log('Loading dismissed!', res);
    }).catch((error) => {
      console.log('error', error);
    });
  }
  // Hide the loader if already created otherwise return error

}
