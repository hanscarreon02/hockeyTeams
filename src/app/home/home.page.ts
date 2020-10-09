import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { DataApiService } from '../data-api.service';
import { NavController } from '@ionic/angular';
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
    private  nav : NavController
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

  

}
