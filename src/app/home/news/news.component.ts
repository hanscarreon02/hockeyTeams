import { DataApiService } from './../../data-api.service';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
newsDatas = [];
  constructor(
    private apiData: DataApiService,
    public loadingController: LoadingController
  ) { }

  ngOnInit() {

    this.showLoader()
    this.readNewsData();
  }

  readNewsData(){
    console.log("test")
   this.apiData.getNews().subscribe((data)=> {
     this.newsDatas = data;
     if(data){
      setTimeout(()=> { this.hideLoader()},1000)
     }
     console.log(data.articles);
   })
  }

   // This will show then autohide the loader
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

  }

  // Show the loader for infinite time
  showLoader() {

    this.loadingController.create({
      message: 'Please wait...'
    }).then((res) => {
      res.present();
    });

  }

  // Hide the loader if already created otherwise return error
  hideLoader() {

    this.loadingController.dismiss().then((res) => {
      console.log('Loading dismissed!', res);
    }).catch((error) => {
      console.log('error', error);
    });
  }
}
