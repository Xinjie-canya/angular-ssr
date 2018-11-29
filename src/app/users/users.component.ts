import { Component, OnInit } from '@angular/core';
import { SeoService } from '../seo.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {
  users: any;
  constructor(
    private seo: SeoService
  ) { }

  ngOnInit() {
    this.seo.getUsers().subscribe(users => this.users = users);
  }

}
