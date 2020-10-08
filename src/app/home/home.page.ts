import { Component } from '@angular/core';
import { DataApiService } from '../data-api.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private datas: DataApiService
  ) {
  }

  

}
