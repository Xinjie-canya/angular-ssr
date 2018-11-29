import { Component } from '@angular/core';
import { FirebaseUISignInSuccessWithAuthResult } from 'firebaseui-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

declare let require: any;
declare let window: any;

const Web3 = require('web3');

const FETCH_URL = 'https://api.github.com/repos/dvajs/dva';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angular-ssr';
  httpResult: Observable<any>;

  constructor(
    private afa: AngularFireAuth,
    private http: HttpClient,
  ) {
    this.httpResult = this.http.get(FETCH_URL);

    this.afa.authState.subscribe(auth => console.log('angularfire auth', auth));

    if (window.web3) {
      const web3 = new Web3(window.web3.currentProvider);

      web3.eth.net.getId().then(netId => {
        console.log('web3', netId);
      });
    }
  }

  onFirebaseLogin(signInSuccessData: FirebaseUISignInSuccessWithAuthResult) {
    console.log(signInSuccessData);
  }
}
