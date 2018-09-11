import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ElementsClassesPage } from './elementsClasses';

@NgModule({
    declarations: [
        ElementsClassesPage,
    ],
    imports: [
        IonicPageModule.forChild(ElementsClassesPage),
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ElementsClassesPageModule { }
