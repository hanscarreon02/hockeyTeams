import { DataApiService } from './../../data-api.service';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
})
export class TeamsComponent implements OnInit {
teams = [];
isLoading = false;
 loadings =  this.loadingController.create({
  cssClass: 'my-custom-class',
  message: 'Please wait...',
});
  constructor(
    private apiData: DataApiService,
    public loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.showLoader()
    this.getTeams();
  }

  getTeams(){
    this.apiData.getTeams().subscribe((data)=>{
      this.teams =  data.sports[0].leagues[0].teams 
      console.log(this.teams);
      console.log(data); // check data in console
      if(data){
        setTimeout(()=> { this.hideLoader()},1000) // delayed loader hider
      }// if data exist hide the loader

    })
  }// read data of api
  
  showHideAutoLoader() {

    this.loadingController.create({
      message: 'This Loader Will Auto Hide in 2 Seconds',
      duration: 2000
    }).then((res) => {
      res.present();

      res.onDidDismiss().then((dis) => {
        console.log('Loading dismissed! after 2 Seconds', dis);
      });
    });

  } // show loader

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
