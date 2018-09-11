import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';

import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppSettings } from '../services/app-settings'
import { ToastService } from '../services/toast-service'
import { LoadingService } from '../services/loading-service'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { ElementsClassesPageModule } from '../pages/elementsClasses/elementsClasses.module';

const firebaseAppConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyCqrGGPf5TJK0kwVqn8Z5-HnKJcx6wS9Tg",
  authDomain: "elements-arton.firebaseapp.com",
  databaseURL: "https://elements-arton.firebaseio.com",
  projectId: "elements-arton",
  storageBucket: "elements-arton.appspot.com",
  messagingSenderId: "715361864172"
}
@NgModule({
  declarations: [MyApp],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAppConfig),
    AngularFireDatabaseModule, AngularFireAuthModule, AngularFirestoreModule, ElementsClassesPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    BarcodeScanner, StatusBar, SplashScreen,
    ToastService, LoadingService, GoogleAnalytics,
    { provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule {
}
