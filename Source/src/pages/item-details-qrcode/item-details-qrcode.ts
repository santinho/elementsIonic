import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IService } from '../../services/IService';
import { BarcodeScanner } from 'ionic-native';

@IonicPage()
@Component({
    templateUrl: 'item-details-qrcode.html'
})
export class ItemDetailsPageQRCode {

    page: any;
    service: IService;
    params: any = {};

    constructor(public navCtrl: NavController, navParams: NavParams) {
        // If we navigated to this page, we will have an item available as a nav param
        this.page = navParams.get('page');
        this.service = navParams.get('service');
        if (this.service) {
            this.params = this.service.prepareParams(this.page, navCtrl);
            this.service.load(this.page).subscribe(snapshot => {
                this.params.data = snapshot;
            });
            this.scanner();
        } else {
            navCtrl.setRoot("HomePage");
        }		
    }

    scanner() {
        BarcodeScanner.scan()
            .then((result) => {
                this.params.data = result;
            })
            .catch((error) => {
                alert(error);
            })
    }
}
