import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//third party
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";

import { MaterialModule } from './core/material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';


const firebaseConfig = {
  apiKey: "AIzaSyB0q8rjoSgsd_bsBW9hPgVd7aWcWA-nMbI",
  authDomain: "angular-ecommerce-c11a1.firebaseapp.com",
  databaseURL: "https://angular-ecommerce-c11a1.firebaseio.com",
  projectId: "angular-ecommerce-c11a1",
  storageBucket: "angular-ecommerce-c11a1.appspot.com",
  messagingSenderId: "1088763863196",
  appId: "1:1088763863196:web:fa8ccaec94ad8ebd528d59",
  measurementId: "G-WHWJERGB01"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    NoopAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
