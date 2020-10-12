import { DataApiService } from './../../data-api.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IonSlides, LoadingController } from '@ionic/angular';
import { Location } from '@angular/common';
@Component({
  selector: 'app-viewt',
  templateUrl: './viewt.component.html',
  styleUrls: ['./viewt.component.scss'],
})
export class ViewtComponent implements OnInit {
sliderTwo: any;
dataTeam;
teamId;
isLoading = false;

  slideOptsTwo = {
    initialSlide: 1,
    slidesPerView: 2,
    loop: true,
    centeredSlides: true,
    spaceBetween: 20
  };

  constructor(
    public activatedRoute: ActivatedRoute,
    private apiData: DataApiService,
    public loadingController: LoadingController,
    private location: Location
  ) {


    //Item object for Food
    this.sliderTwo =
    {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems: [
        {
          id: 324
        },
        {
          id: 321
        },
        {
          id: 435
        },
        {
          id: 524
        },
        {
          id: 235
        }
      ]
    };
    this.readData();
    

   }

  ngOnInit() {
   this.presentLoading();

  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    // console.log(this.dataTeam[0].team);
    this.isLoading = true;
    this.readData();


  }
  backClicked() {
    this.location.back()
  }

  readData(){
    this.activatedRoute.params.subscribe((params) => {
      this.teamId = params.id;
      // console.log(params.id);
    })
    this.apiData.getTeams().subscribe((data)=>{
      this.dataTeam = data.sports[0].leagues[0].teams.filter((arr)=>{

          return arr.team.id == this.teamId.toString();
      });
    });
  }

  
  //Move to Next slide
  slideNext(object, slideView) {
    slideView.slideNext(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });

  }

  //Move to previous slide
  slidePrev(object, slideView) {
    slideView.slidePrev(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });;
  }

  //Method called when slide is changed by drag or navigation
  SlideDidChange(object, slideView) {
    this.checkIfNavDisabled(object, slideView);
  }

  //Call methods to check if slide is first or last to enable disbale navigation  
  checkIfNavDisabled(object, slideView) {
    this.checkisBeginning(object, slideView);
    this.checkisEnd(object, slideView);
  }

  checkisBeginning(object, slideView) {
    slideView.isBeginning().then((istrue) => {
      object.isBeginningSlide = istrue;
    });
  }
  checkisEnd(object, slideView) {
    slideView.isEnd().then((istrue) => {
      object.isEndSlide = istrue;
    });
  }

}
