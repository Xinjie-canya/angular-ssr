// import * as firebaseui from 'firebaseui';
// import * as firebase from 'firebase/app';
import { firebase, firebaseui } from 'firebaseui-angular';

export const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    {
      scopes: [
        'public_profile',
        'email'
      ],
      customParameters: {
        'auth_type': 'reauthenticate'
      },
      provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID
    },
    firebase.auth.TwitterAuthProvider.PROVIDER_ID
  ],
  tosUrl: 'https://canya.io/assets/docs/Terms-CanYa.pdf',
  privacyPolicyUrl: '',
  credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO
};

export const firebaseConfig = {
  apiKey: 'AIzaSyCBkE8UV7x60XzZp-KrX-KYIz7lOdNd9Po',
  authDomain: 'staging-can-work.firebaseapp.com',
  databaseURL: 'https://staging-can-work.firebaseio.com',
  projectId: 'staging-can-work',
  storageBucket: 'staging-can-work.appspot.com',
  messagingSenderId: '320531765618'
};
