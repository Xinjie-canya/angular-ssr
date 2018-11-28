// import * as firebaseui from 'firebaseui';
import * as firebase from 'firebase/app';
import { firebaseui } from 'firebaseui-angular';

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
  apiKey: 'AIzaSyCN8yqwRhPKwIZ1v__RYIyJRbKTWFstKns',
  authDomain: 'canseek-local.firebaseapp.com',
  databaseURL: 'https://canseek-local.firebaseio.com',
  projectId: 'canseek-local',
  storageBucket: 'canseek-local.appspot.com',
  messagingSenderId: '287939724872'
};
