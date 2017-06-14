import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {HogariaPg2Page} from '../pages/hogaria-pg2/hogaria-pg2';
import {PerfilPage} from '../pages/perfil/perfil';

import * as firebase from 'firebase';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule, AngularFireDatabase,FirebaseListObservable} from 'angularfire2/database'

export const config={
  apiKey: "AIzaSyAHay5KuVATFgdRmcXI6f1RgHmf0o1noPg",
    authDomain: "hogaria-14d25.firebaseapp.com",
    databaseURL: "https://hogaria-14d25.firebaseio.com",
    projectId: "hogaria-14d25",
    storageBucket: "hogaria-14d25.appspot.com",
    messagingSenderId: "186236058815"
}

firebase.initializeApp(config)

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HogariaPg2Page,
    PerfilPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HogariaPg2Page,
    PerfilPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
