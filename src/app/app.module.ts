import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

export const firebaseConfig = {
  apiKey: "AIzaSyDdtK90WiT0wy6YyQ5y_l36K3OZM5aJ7cg",
    authDomain: "todo-list-app-7c7ca.firebaseapp.com",
    projectId: "todo-list-app-7c7ca",
    storageBucket: "todo-list-app-7c7ca.appspot.com",
    messagingSenderId: "404551908177",
    appId: "1:404551908177:web:c796c4b7c041b6d01b7170",
    measurementId: "G-GY2RL08DHQ"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
  
  ], 
  
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
