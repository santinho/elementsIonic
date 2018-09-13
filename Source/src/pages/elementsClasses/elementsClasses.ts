import { Component, Input } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HomeService } from '../../services/home-service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';


@IonicPage()
@Component({
  selector: 'elements-page-classes',
  templateUrl: 'elementsClasses.html',
  providers: [HomeService]

})
export class ElementsClassesPage {
  title: string = 'Classes';
  list: Observable<any[]>;
  listFiltered: Observable<any[]>;
  lvls: number[] = [0,1,2,3,4,5,6,7,8,9,10]

  constructor(public navCtrl: NavController, public service: HomeService, public af: AngularFireDatabase) {
    console.log('classes');
    service.load().subscribe(snapshot => {
      this.data = snapshot;
    });
    this.list = this.af.list('classes').valueChanges()
    this.listFiltered = this.af.list('classes').valueChanges()
  }

  @Input() data: any;
  @Input() events: any;

  searchTerm:any="";
  allItems:any;

  getItems(event: any):void {
    if (!this.list) {
      this.list = this.listFiltered;
    }
    this.list.subscribe((listaBD:any[])=>{
      let listaBDFiltrada = listaBD.filter((item) => {
        return item['Nome'].toLowerCase().indexOf(event.target.value.toLowerCase()) > -1;
      });
      this.listFiltered = Observable.of(listaBDFiltrada);

    });
     
  }

  toggleGroup(group: any) {
    group.show = !group.show;
  }

  isGroupShown(group: any) {
    return group.show;
  }

}
