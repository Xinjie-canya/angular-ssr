import { Component } from '@angular/core';

declare let require: any;

const Web3 = require('web3');
console.log(Web3);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angular-ssr';
}
