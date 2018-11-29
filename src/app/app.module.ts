import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { FirebaseUIModule } from 'firebaseui-angular';
import { firebaseConfig, firebaseUiAuthConfig } from './config';
import { UserComponent } from './user/user.component';

console.log('firebaseui', firebaseUiAuthConfig);

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'canseek-local'}),
    BrowserTransferStateModule,

    CommonModule,
    HttpClientModule,
    NgtUniversalModule,

    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(firebaseConfig),

    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
    AppRoutingModule
  ],
  providers: [],
})
export class AppModule { }
