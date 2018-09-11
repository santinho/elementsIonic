import { Component, Input } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HomeService } from '../../services/home-service';
import { AngularFireDatabase } from 'angularfire2/database';


@IonicPage()
@Component({
  selector: 'elements-page-classes',
  templateUrl: 'elementsClasses.html',
  providers: [HomeService]

})
export class ElementsClassesPage {
  title: string = 'Classes';

  constructor(public navCtrl: NavController, public service: HomeService, public af: AngularFireDatabase) {
    console.log('classes');
    service.load().subscribe(snapshot => {
      this.data = snapshot;
    });
    this.af.list('classes').valueChanges().map((classes)=>{
      console.log(classes);
    }).subscribe();
  }

  @Input() data: any;
  @Input() events: any;

  searchTerm:any="";
  allItems:any;

  getItems(event: any):void {
    if (!this.allItems) {
      this.allItems = this.data.items;
    }
    this.data.items = this.allItems.filter((item) => {
        return item.title.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
    });
  }

  onEvent(event:string, item:any) {//ITEM [EVENT OR SELECTED ITEM]
    if (this.events[event]) {
      if ('onTextChange' === event) {
        this.getItems(item);
        this.events[event](this.searchTerm);
      } else {
        this.events[event](item);
      }
    }
    console.log(event);
  }
}
