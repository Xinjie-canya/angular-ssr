import { Component, OnInit } from '@angular/core';

declare let require: any;
declare let window: any;

const Web3 = require('web3');

@Component({
  selector: 'app-web3',
  templateUrl: './web3.component.html',
  styleUrls: ['./web3.component.sass']
})
export class Web3Component implements OnInit {
  netId: number;
  constructor() {
    if (window.web3) {
      const web3 = new Web3(window.web3.currentProvider);

      web3.eth.net.getId().then(netId => {
        this.netId = netId;
      });
    }
  }

  ngOnInit() {
  }

}
