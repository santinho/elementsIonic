import { Component } from '@angular/core';
import { Toast } from 'ionic-native';
import { TabsService } from '../../services/tabs-service';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'tab-page-2.html',
  providers: [TabsService]
})
export class TabPage2 {
    params:any = {};

    constructor(private tabsService: TabsService) {
      this.tabsService.load("tab2").subscribe(snapshot => {
        this.params = snapshot;
      });
    }

    ngOnChanges(changes: { [propKey: string]: any }) {
      this.params = changes['data'].currentValue;
    }

    onItemClick(item:any) {
      if (window.location.hostname === "localhost") {
          console.log("Folow");
      } else {
          Toast.show("Folow", '1000', 'bottom').subscribe(toast => { });
      }
    }
}