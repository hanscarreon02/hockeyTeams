import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { DataApiService } from '../data-api.service';
import { NavController, LoadingController } from '@ionic/angular';
import { Location } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
isRoot = true;
  constructor(
    private datas: DataApiService,
    private router: Router,
    private  nav : NavController,
    private location: Location,
    private loadingController: LoadingController

  ) {
    console.log( this.router.url);
    if( this.router.url == "home/teams" || this.router.url == "home/news" )
    {
      this.isRoot == false;

    }else{
      this.isRoot == true;

    }
  }

  naviPage(destination){
    this.nav.navigateForward([destination]);
  }
  updateData(){
    this.presentLoading()
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Fetching Data',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
    window.location.reload();

  }

  showLoader() {

    this.loadingController.create({
      message: 'Please wait...'
    }).then((res) => {
      res.present();
    });

  }

  

}
