import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { FirebaseUIModule } from 'firebaseui-angular';
import { firebaseUiAuthConfig } from './config';

import { firebaseConfig } from './config';

import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { Web3Component } from './web3/web3.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    UsersComponent,
    Web3Component
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
