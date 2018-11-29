import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

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
    this.afa.authState.subscribe(auth => console.log('angularfire auth', auth));
  }
}
