import { async } from '@angular/core/testing';
import { DataApiService } from './../../data-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { HomePage } from '../home.page';

@Component({
  selector: 'app-viewn',
  templateUrl: './viewn.component.html',
  styleUrls: ['./viewn.component.scss'],
})
export class ViewnComponent implements OnInit {

  sliderOne: any;
  sliderTwo: any;
  sliderThree: any;

  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true,
    speed: 2000
  };

id;
detailsData;
loadData = false;
apiLinks;
newsFromLinks;
  constructor(
    public activatedRoute: ActivatedRoute,
    private apiData: DataApiService,
    private http: HttpClient
    ) { }

  ngOnInit() {
    

     this.trnasferData();
     this.viewDetails();
     this.sliderInit();

    setTimeout(()=> {
      if(this.id && this.detailsData){
        this.loadData = true
        this.getApiNews();
       }
    },3000)
  }
  async trnasferData(){
   this.activatedRoute.params.subscribe((data) => {
      this.id = data.id;
    })
  }
   viewDetails(){
  
    this.apiData.getNews().subscribe(data=>{
      const idnum = parseInt(this.id)
      // console.log(data.articles[idnum])
      // console.log(data.articles[idnum].images)
      // console.log(data.articles[idnum].links)
      this.apiLinks = data.articles[idnum].links
      this.detailsData = data.articles[idnum];
      
    });
  }

  getApiNews(){
      const dataNews = this.apiLinks.api.news.href

     this.http.get<any>(dataNews).subscribe((data)=>{
        // console.log(data.headlines[0].story);
        // console.log("head")
        this.newsFromLinks = data.headlines
      })

    }
  getNumber(){
    return "test"
  }
  removeAtag(data){
    console.log( data.replace(/<\/?a[^>]*>/g, ""));
     
   }

  sliderInit(){
    this.sliderOne =
    {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems: [
        {
          id: 995,
          img: ""
        },
        {
          id: 925,
          img: ""
        },
        {
          id: 940,
          img: ""
        },
        {
          id: 943,
          img: ""
        },
        {
          id: 944,
          img: ""
        }
      ]
    };
  
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
