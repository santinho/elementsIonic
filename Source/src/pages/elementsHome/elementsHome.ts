import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HomeService } from '../../services/home-service';

@IonicPage()
@Component({
  selector: 'elements-page-home',
  templateUrl: 'elementsHome.html',
  providers: [HomeService]

})
export class ElementsHomePage {
  titleElements: string = 'Elements';
  data: any = {};

  constructor(public navCtrl: NavController, public service: HomeService) {
    service.load().subscribe(snapshot => {
      this.data = snapshot;
    });
  }
}
