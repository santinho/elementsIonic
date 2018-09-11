import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ElementsHomePage } from './elementsHome';

@NgModule({
    declarations: [
        ElementsHomePage,
    ],
    imports: [
        IonicPageModule.forChild(ElementsHomePage),
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ElementsHomePageModule { }
