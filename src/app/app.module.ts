import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { FirebaseUIModule } from 'firebaseui-angular';
import { firebaseConfig, firebaseUiAuthConfig } from './config';

console.log(firebaseUiAuthConfig);

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    NgtUniversalModule,

    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),

    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
    AppRoutingModule
  ],
  providers: [],
})
export class AppModule { }
