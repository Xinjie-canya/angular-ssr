import { Component } from '@angular/core';
import { FirebaseUISignInSuccessWithAuthResult } from 'firebaseui-angular';
import { AngularFireAuth } from '@angular/fire/auth';

declare let require: any;
declare let window: any;

const Web3 = require('web3');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angular-ssr';

  constructor(
    private afa: AngularFireAuth,
  ) {
    this.afa.authState.subscribe(auth => console.log(auth));

    if (window.web3) {
      const web3 = new Web3(window.web3.currentProvider);

      web3.eth.net.getId().then(netId => {
        console.log(netId);
      });
    }
  }

  onFirebaseLogin(signInSuccessData: FirebaseUISignInSuccessWithAuthResult) {
    console.log(signInSuccessData);
  }
}
